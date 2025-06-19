import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Box, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'
import './ThreeScene.css'

// 回転するキューブ
const RotatingCube: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <Box ref={meshRef} position={position} scale={1.5}>
      <meshStandardMaterial
        color="#667eea"
        metalness={0.3}
        roughness={0.4}
      />
    </Box>
  )
}

// 浮遊する球体
const FloatingSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
      meshRef.current.rotation.z += 0.01
    }
  })

  return (
    <Sphere ref={meshRef} position={position} scale={1.2}>
      <meshStandardMaterial
        color="#764ba2"
        transparent
        opacity={0.8}
        metalness={0.5}
        roughness={0.2}
      />
    </Sphere>
  )
}

// 回転するトーラス
const RotatingTorus: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.y += delta * 0.6
    }
  })

  return (
    <Torus ref={meshRef} position={position} scale={1.5} args={[1, 0.4, 16, 100]}>
      <meshStandardMaterial
        color="#f093fb"
        metalness={0.4}
        roughness={0.3}
      />
    </Torus>
  )
}

// パーティクルシステム
const Particles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null!)
  const particleCount = 100

  useEffect(() => {
    if (pointsRef.current) {
      const positions = new Float32Array(particleCount * 3)
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      }
      
      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.6}
      />
    </points>
  )
}

// メインのThree.jsシーン
const ThreeScene: React.FC = () => {  return (
    <div className="three-scene-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #000428, #004e92)' }}
      >
        {/* 環境光 */}
        <ambientLight intensity={0.4} />
        
        {/* 方向光 */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        
        {/* ポイントライト */}
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#667eea"
        />

        {/* 3Dオブジェクト */}
        <RotatingCube position={[-3, 0, 0]} />
        <FloatingSphere position={[0, 0, 0]} />
        <RotatingTorus position={[3, 0, 0]} />
        
        {/* パーティクル */}
        <Particles />
          {/* 3Dテキスト */}
        <Text
          position={[0, -3, 0]}
          fontSize={1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Welcome to My Portfolio
        </Text>

        {/* カメラコントロール */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default ThreeScene
