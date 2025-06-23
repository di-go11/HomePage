import React from 'react'
import ThreeScene from '../components/three/ThreeScene'
import './Home.css'
import Greet from './GreetTime'

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <Greet />
                <span className="gradient-text">本サイトの管理者DAGOです。</span>
              </h1>
              <p className="hero-description">
                AIとVRを愛する<br />
                クリエイターの個人サイトです
              </p>
              <div className="hero-buttons">
                <a href="/profile" className="btn">
                  プロフィールを見る
                </a>
                <a href="/gallery" className="btn btn-outline">
                  3D作品を見る
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <ThreeScene />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
