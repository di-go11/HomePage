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

      {/* 最近の活動セクション */}
      <section className="recent-activities section">
        <div className="container">
          <h2 className="section-title">最近の活動</h2>
          <div className="activities-grid">
            <div className="activity-card card fade-in">
              <div className="activity-icon">🆕</div>
              <h3>新しい3Dモデル完成</h3>
              <p>Three.jsを使った新しいインタラクティブな3Dシーンを制作しました。</p>
              <span className="activity-date">2025/01/15</span>
            </div>
            <div className="activity-card card fade-in">
              <div className="activity-icon">📝</div>
              <h3>ブログ記事更新</h3>
              <p>Web開発で学んだテクニックについて新しい記事を投稿しました。</p>
              <span className="activity-date">2025/01/10</span>
            </div>
            <div className="activity-card card fade-in">
              <div className="activity-icon">🎯</div>
              <h3>新しい技術習得</h3>
              <p>React Three Fiberの新機能について学習を進めています。</p>
              <span className="activity-date">2025/01/05</span>
            </div>
          </div>
        </div>
      </section>

      {/* コール・トゥ・アクション */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>一緒に何か創りませんか？</h2>
            <p>私の作品や活動に興味を持っていただき、ありがとうございます。</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-large">
                お気軽にご連絡ください
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
