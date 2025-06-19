import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import './BlenderModelViewer.css'

interface BlenderModelViewerProps {
  modelPath: string
  title?: string
  autoRotate?: boolean
  scale?: number
  enableZoom?: boolean
}

const BlenderModelViewer: React.FC<BlenderModelViewerProps> = ({
  modelPath,
  title,
  autoRotate = true,
  scale = 1,
  enableZoom = true
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const controlsRef = useRef<OrbitControls>()
  const frameId = useRef<number>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [modelInfo, setModelInfo] = useState<{
    vertices: number
    faces: number
    materials: number
  } | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // シーンのセットアップ
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x2c3e50) // ダークブルーの背景
    sceneRef.current = scene

    // カメラのセットアップ
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(5, 5, 5)

    // レンダラーのセットアップ
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    rendererRef.current = renderer

    // コントロールのセットアップ
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = enableZoom
    controls.autoRotate = autoRotate
    controls.autoRotateSpeed = 0.5
    controlsRef.current = controls

    // ライティングのセットアップ
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 50
    scene.add(directionalLight)

    // 追加の照明
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6)
    scene.add(hemisphereLight)

    // 床の追加（影を受けるため）
    const planeGeometry = new THREE.PlaneGeometry(20, 20)
    const planeMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x555555, 
      transparent: true, 
      opacity: 0.3 
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -Math.PI / 2
    plane.position.y = -2
    plane.receiveShadow = true
    scene.add(plane)

    mountRef.current.appendChild(renderer.domElement)    // GLTFモデルのロード
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf: any) => {
        const model = gltf.scene
        
        // モデルのスケール調整
        model.scale.setScalar(scale)
        
        // 影の設定
        model.traverse((child: any) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })

        // モデルの情報を取得
        let vertices = 0
        let faces = 0
        const materials = new Set()
        
        model.traverse((child: any) => {
          if (child instanceof THREE.Mesh) {
            if (child.geometry) {
              vertices += child.geometry.attributes.position.count
              if (child.geometry.index) {
                faces += child.geometry.index.count / 3
              }
            }
            if (child.material) {
              materials.add(child.material.uuid)
            }
          }
        })

        setModelInfo({
          vertices,
          faces: Math.floor(faces),
          materials: materials.size
        })

        // モデルをシーンに追加
        scene.add(model)
        
        // カメラ位置の自動調整
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = camera.fov * (Math.PI / 180)
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5
        
        camera.position.set(cameraZ, cameraZ, cameraZ)
        camera.lookAt(center)
        controls.target.copy(center)
        controls.update()

        setLoading(false)
      },
      (progress: any) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%')
      },
      (error: any) => {
        console.error('Error loading model:', error)
        setError('モデルの読み込みに失敗しました')
        setLoading(false)
      }
    )

    // アニメーションループ
    const animate = () => {
      frameId.current = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // リサイズ処理
    const handleResize = () => {
      if (!mountRef.current) return
      
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // クリーンアップ
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current)
      }
      if (controls) {
        controls.dispose()
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [modelPath, scale, autoRotate, enableZoom])

  return (
    <div className="blender-model-viewer">
      {title && <h3 className="model-title">{title}</h3>}
      
      <div className="model-container" ref={mountRef}>
        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>モデルを読み込み中...</p>
          </div>
        )}
        
        {error && (
          <div className="error-overlay">
            <p>{error}</p>
          </div>
        )}
      </div>

      {modelInfo && !loading && (
        <div className="model-info">
          <div className="info-item">
            <span className="info-label">頂点数:</span>
            <span className="info-value">{modelInfo.vertices.toLocaleString()}</span>
          </div>
          <div className="info-item">
            <span className="info-label">面数:</span>
            <span className="info-value">{modelInfo.faces.toLocaleString()}</span>
          </div>
          <div className="info-item">
            <span className="info-label">マテリアル数:</span>
            <span className="info-value">{modelInfo.materials}</span>
          </div>
        </div>
      )}

      <div className="model-controls">
        <button 
          className="control-btn"
          onClick={() => {
            if (controlsRef.current) {
              controlsRef.current.autoRotate = !controlsRef.current.autoRotate
            }
          }}
        >
          🔄 自動回転
        </button>
        <button 
          className="control-btn"
          onClick={() => {
            if (controlsRef.current) {
              controlsRef.current.reset()
            }
          }}
        >
          🏠 リセット
        </button>
      </div>
    </div>
  )
}

export default BlenderModelViewer
