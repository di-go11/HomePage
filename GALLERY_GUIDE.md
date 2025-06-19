# 3Dギャラリーに新しいモデルを追加する方法

このガイドでは、3Dギャラリーページに新しいThree.jsシーンを追加する方法を説明します。

## 手順1: 新しい3Dコンポーネントを作成

1. `src/components/three/` フォルダに新しいコンポーネントファイルを作成します
   例: `MyCustomScene.tsx`

2. `CustomThreeScene.tsx` をテンプレートとして使用してください

```tsx
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import './MyCustomScene.css'

const MyCustomScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  // ... ここに3Dシーンのコードを記述
  
  return <div ref={mountRef} className="my-custom-scene" />
}

export default MyCustomScene
```

## 手順2: CSSファイルを作成

対応するCSSファイルを作成します: `MyCustomScene.css`

```css
.my-custom-scene {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
}
```

## 手順3: ギャラリーに追加

`src/pages/Gallery.tsx` の `galleryItems` 配列に新しいアイテムを追加します:

```tsx
// インポートを追加
import MyCustomScene from '../components/three/MyCustomScene'

// galleryItems配列に追加
{
  id: 3, // 新しいID
  title: '私のカスタム3Dシーン',
  description: 'シーンの説明文をここに記述',
  scene: 'my-custom-scene',
  component: MyCustomScene,
  created: '2024-02-01',
  technologies: ['Three.js', 'WebGL', 'React', 'TypeScript']
}
```

## 手順4: 3Dオブジェクトの作成例

### 基本的なジオメトリ
```tsx
// キューブ
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshPhongMaterial({ color: 0x3498db })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 球体
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xe74c3c })
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)
```

### アニメーション
```tsx
const animate = () => {
  requestAnimationFrame(animate)
  
  // 回転アニメーション
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  renderer.render(scene, camera)
}
```

### ライティング
```tsx
// 環境光
const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
scene.add(ambientLight)

// 指向性ライト
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(10, 10, 5)
scene.add(directionalLight)
```

## 利用可能なThree.jsリソース

- [Three.js公式ドキュメント](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

## トラブルシューティング

1. **シーンが表示されない場合**
   - カメラの位置を確認してください
   - オブジェクトがシーンに追加されているか確認してください

2. **パフォーマンスが悪い場合**
   - ジオメトリの複雑さを下げてください
   - テクスチャのサイズを最適化してください

3. **エラーが発生する場合**
   - Three.jsのバージョンを確認してください
   - TypeScriptの型定義を確認してください
