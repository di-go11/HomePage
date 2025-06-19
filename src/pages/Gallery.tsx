import React, { useState } from 'react'
import ThreeScene from '../components/three/ThreeScene'
import BlenderModelViewer from '../components/three/BlenderModelViewer'
import './Gallery.css'

interface GalleryItem {
  id: number
  title: string
  description: string
  scene: string
  component?: React.ComponentType<any>
  created: string
  technologies: string[]
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0)

  // 新しい3Dモデルを追加する際は、ここに新しいアイテムを追加してください
  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      title: 'インタラクティブ3Dシーン',
      description: '回転するキューブ、球体、トーラスとパーティクルエフェクトを組み合わせた動的な3Dシーン。マウス操作でカメラを制御できます。',
      scene: 'default',
      component: ThreeScene,
      created: '2024-01-15',
      technologies: ['Three.js', 'WebGL', 'React', 'TypeScript']
    },
    {
      id: 1,
      title: '3Dテキスト表示',
      description: 'Three.jsで作成した立体的なテキスト表示。フォントの3D化とライティング効果を実装。',
      scene: 'text',
      component: ThreeScene,
      created: '2024-01-10',
      technologies: ['Three.js', 'TextGeometry', 'WebGL']
    },
    {
      id: 2,
      title: 'パーティクルエフェクト',
      description: '美しいパーティクルアニメーションのデモンストレーション。数千の粒子が流動的に動きます。',
      scene: 'particles',
      component: ThreeScene,
      created: '2024-01-05',
      technologies: ['Three.js', 'Particles', 'GLSL', 'Animation']    },
    // Blenderモデルの例（モデルファイルを追加する際にコメントアウトを解除）
    // {
    //   id: 3,
    //   title: 'Blenderモデル - キャラクター',
    //   description: 'Blenderで作成した3Dキャラクターモデル。詳細なテクスチャとアニメーション付き。',
    //   scene: 'blender-character',
    //   component: () => <BlenderModelViewer 
    //     modelPath="/models/character.glb" 
    //     title="3Dキャラクター"
    //     autoRotate={true}
    //     scale={1}
    //   />,
    //   created: '2024-02-01',
    //   technologies: ['Blender', 'Three.js', 'GLTF', 'WebGL']
    // },
    // {
    //   id: 4,
    //   title: 'Blenderモデル - 建築',
    //   description: 'Blenderで設計した建築物の3Dモデル。リアルな照明とマテリアル設定。',
    //   scene: 'blender-building',
    //   component: () => <BlenderModelViewer 
    //     modelPath="/models/building.glb" 
    //     title="建築物モデル"
    //     autoRotate={false}
    //     scale={0.5}
    //   />,
    //   created: '2024-01-20',
    //   technologies: ['Blender', 'Three.js', 'GLTF', 'Architecture']
    // }
    // 新しいBlenderモデルを追加する場合は、以下のような形式で追加してください：
    // {
    //   id: 5,
    //   title: '新しいBlenderモデル',
    //   description: 'モデルの説明文',
    //   scene: 'custom-blender-model',
    //   component: () => <BlenderModelViewer 
    //     modelPath="/models/your-model.glb" 
    //     title="モデルタイトル"
    //     autoRotate={true}
    //     scale={1}
    //   />,
    //   created: '2024-02-15',
    //   technologies: ['Blender', 'Three.js', 'GLTF', 'WebGL']
    // }
  ]

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1>3Dギャラリー</h1>
          <p>Three.jsを使用して作成した3Dモデルとアニメーションを展示しています。</p>
        </div>

        <div className="gallery-content">
          <div className="gallery-sidebar">
            <h3>作品一覧</h3>
            <div className="gallery-list">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className={`gallery-item ${selectedItem === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>          <div className="gallery-viewer">
            <div className="three-scene-container">
              {/* 選択されたアイテムに対応するコンポーネントをレンダリング */}
              {galleryItems[selectedItem].component && 
                React.createElement(galleryItems[selectedItem].component!)
              }
            </div>
            <div className="scene-info">
              <div className="scene-header">
                <h3>{galleryItems[selectedItem].title}</h3>
                <div className="scene-meta">
                  <span className="creation-date">作成日: {galleryItems[selectedItem].created}</span>
                </div>
              </div>
              <p className="scene-description">{galleryItems[selectedItem].description}</p>
              
              <div className="scene-technologies">
                <h4>使用技術</h4>
                <div className="tech-tags">
                  {galleryItems[selectedItem].technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="scene-controls">
                <p>🖱️ マウスでドラッグして視点を変更できます</p>
                <div className="control-buttons">
                  <button className="btn btn-secondary" onClick={() => window.location.reload()}>
                    🔄 リセット
                  </button>
                  <button className="btn btn-primary" onClick={() => {
                    const element = document.querySelector('.three-scene-container');
                    if (element?.requestFullscreen) {
                      element.requestFullscreen();
                    }
                  }}>
                    🔍 フルスクリーン
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-info">
          <div className="info-section">
            <h3>技術スタック</h3>
            <div className="tech-stack">
              <span className="tech-tag">Three.js</span>
              <span className="tech-tag">WebGL</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
            </div>
          </div>

          <div className="info-section">
            <h3>3Dモデリングについて</h3>
            <p>
              これらの3Dシーンは、Web上で動作するThree.jsライブラリを使用して作成されています。
              リアルタイムレンダリングにより、インタラクティブな体験を提供しています。
              今後も新しい作品を追加予定です。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
