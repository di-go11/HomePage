import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import './CustomThreeScene.css'

interface CustomThreeSceneProps {
  width?: number
  height?: number
}

// 新しい3Dシーンを作成する際のテンプレートコンポーネント
const CustomThreeScene: React.FC<CustomThreeSceneProps> = ({ 
  width = 800, 
  height = 400 
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const frameId = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    // シーンの設定
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    sceneRef.current = scene

    // カメラの設定
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    camera.position.z = 5

    // レンダラーの設定
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer

    // マウントポイントにレンダラーを追加
    mountRef.current.appendChild(renderer.domElement)

    // ここに新しい3Dオブジェクトを追加してください
    // 例: カスタムジオメトリ
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x3498db,
      shininess: 100 
    })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.set(0, 0, 0)
    cube.castShadow = true
    cube.receiveShadow = true
    scene.add(cube)

    // ライティング
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    // アニメーションループ
    const animate = () => {
      frameId.current = requestAnimationFrame(animate)

      // ここにアニメーション処理を追加
      if (cube) {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
      }

      renderer.render(scene, camera)
    }

    animate()

    // リサイズハンドラー
    const handleResize = () => {
      const container = mountRef.current
      if (!container) return

      const newWidth = container.clientWidth
      const newHeight = container.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // クリーンアップ
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [width, height])
  return (
    <div 
      ref={mountRef} 
      className="custom-three-scene"
    />
  )
}

export default CustomThreeScene
