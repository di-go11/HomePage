import React, { useState } from 'react'
import './Gallery.css'

interface VideoGalleryItem {
  id: number
  title: string
  description: string
  videoPath: string
  thumbnail?: string
  created: string
  duration: string
  category: string
  details: string
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0)

  // 動画ファイルを追加する際は、ここに新しいアイテムを追加してください
  const videoItems: VideoGalleryItem[] = [
    {
      id: 0,
      title: 'サンプル動画1',
      description: 'デモンストレーション用のサンプル動画です。',
      videoPath: '/videos/sample1.mp4',
      thumbnail: '/img/video-thumb1.jpg',
      created: '2024-10-01',
      duration: '2:30',
      category: 'デモ',
      details: 'この動画は技術デモンストレーションとして作成されました。WebベースのビデオプレーヤーでHTML5のvideo要素を使用して再生しています。'
    },
    {
      id: 1,
      title: 'サンプル動画2',
      description: 'プロジェクト紹介動画のサンプルです。',
      videoPath: '/videos/sample2.mp4',
      thumbnail: '/img/video-thumb2.jpg',
      created: '2024-10-15',
      duration: '3:45',
      category: 'プロジェクト',
      details: 'プロジェクトの概要と開発過程を紹介する動画です。Reactコンポーネントとして実装されており、レスポンシブデザインに対応しています。'
    }
    // 新しい動画を追加する場合は、以下のような形式で追加してください：
    // {
    //   id: 2,
    //   title: '新しい動画タイトル',
    //   description: '動画の簡単な説明',
    //   videoPath: '/videos/your-video.mp4',
    //   thumbnail: '/img/your-thumbnail.jpg',
    //   created: '2024-10-30',
    //   duration: '5:20',
    //   category: 'カテゴリ名',
    //   details: '動画の詳細な説明文をここに記述してください。'
    // }
  ]

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1>動画ギャラリー</h1>
          <p>様々な動画コンテンツをWebブラウザで直接再生・視聴できます。</p>
        </div>

        <div className="gallery-content">
          <div className="gallery-sidebar">
            <h3>動画一覧</h3>
            <div className="gallery-list">
              {videoItems.map((item) => (
                <div
                  key={item.id}
                  className={`gallery-item ${selectedItem === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="video-item-header">
                    <h4>{item.title}</h4>
                    <span className="category-tag">{item.category}</span>
                  </div>
                  <p className="video-description">{item.description}</p>
                  <div className="video-meta">
                    <span className="duration">⏱️ {item.duration}</span>
                    <span className="created">📅 {item.created}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="gallery-viewer">
            <div className="video-player-container">
              <video
                className="video-player"
                controls
                preload="metadata"
                poster={videoItems[selectedItem].thumbnail}
                key={videoItems[selectedItem].id} // 動画切り替え時にプレーヤーをリセット
              >
                <source src={videoItems[selectedItem].videoPath} type="video/mp4" />
                <p>お使いのブラウザは動画の再生をサポートしていません。</p>
              </video>
            </div>
            
            <div className="video-info">
              <div className="video-header">
                <h3>{videoItems[selectedItem].title}</h3>
                <div className="video-meta-detail">
                  <span className="creation-date">作成日: {videoItems[selectedItem].created}</span>
                  <span className="video-duration">再生時間: {videoItems[selectedItem].duration}</span>
                  <span className="video-category">カテゴリ: {videoItems[selectedItem].category}</span>
                </div>
              </div>
              
              <div className="video-description">
                <h4>概要</h4>
                <p>{videoItems[selectedItem].description}</p>
              </div>
              
              <div className="video-details">
                <h4>詳細情報</h4>
                <p>{videoItems[selectedItem].details}</p>
              </div>
              
              <div className="video-controls">
                <div className="control-buttons">
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => {
                      const video = document.querySelector('.video-player') as HTMLVideoElement;
                      if (video) {
                        video.currentTime = 0;
                        video.pause();
                      }
                    }}
                  >
                    � 最初から再生
                  </button>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => {
                      const video = document.querySelector('.video-player') as HTMLVideoElement;
                      if (video?.requestFullscreen) {
                        video.requestFullscreen();
                      }
                    }}
                  >
                    � フルスクリーン
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => {
                      const video = document.querySelector('.video-player') as HTMLVideoElement;
                      if (video) {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                          ctx.drawImage(video, 0, 0);
                          const link = document.createElement('a');
                          link.download = `${videoItems[selectedItem].title}_screenshot.png`;
                          link.href = canvas.toDataURL();
                          link.click();
                        }
                      }
                    }}
                  >
                    � スクリーンショット
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-info">
          <div className="info-section">
            <h3>対応形式</h3>
            <div className="tech-stack">
              <span className="tech-tag">MP4</span>
              <span className="tech-tag">WebM</span>
              <span className="tech-tag">H.264</span>
              <span className="tech-tag">HTML5 Video</span>
            </div>
          </div>

          <div className="info-section">
            <h3>動画ギャラリーについて</h3>
            <p>
              HTML5のvideo要素を使用してWebブラウザ上で動画を再生します。
              各動画にはサムネイル、詳細情報、再生時間などの情報が含まれています。
              フルスクリーン表示やスクリーンショット機能もご利用いただけます。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
