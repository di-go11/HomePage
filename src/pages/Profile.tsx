import React from 'react'
import './Profile.css'

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <section className="profile-hero section">
        <div className="container">
          <div className="profile-content">
            <div className="profile-text">
              <h1 className="page-title">プロフィール</h1>
              <p className="lead">
                Dagoと申します。
                メタバースとAIにVRとAIを活用したアプリケーションの開発を目指して熱意の赴くまま、新しい技術を学び、作品づくりに挑戦し続けています。
              </p>
            </div>
            <div className="profile-image">
              <div className="profile-card card">
                <div className="profile-avatar">
                  <img src="/img/MyIcon.png" alt="DAGO's Profile" className="avatar-image" />
                </div>
                <h3>Dago</h3>
                <p>Blender,UE,AI enginner</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">1+</span>
                    <span className="stat-label">年の経験</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">作品数</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me section">
        <div className="container">
          <div className="about-content">
            {/* 詳細な自己紹介セクション */}
            <div className="detailed-intro">
              <h2 className="section-title">得意分野・興味のある技術</h2>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🥽</div>
                  <h4>VR</h4>
                  <p>UEを使用した仮想空間の開発</p>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎨</div>
                  <h4>3Dモデリング</h4>
                  <p>blenderを使ったアニメ調の3Dモデルの制作</p>
                </div>
                <div className="highlight-item">
                <div className="highlight-icon">📱</div>
                  <h4>AIを活用したアプリケーションの開発</h4>
                  <p>機械学習や自然言語処理を用いたアプリケーションの制作</p>
              </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💻</div>
                  <h4>自作PC制作</h4>
                  <p>CPUはRyzen派、GPUにはRTX5070tiを最近導入して簡易LLMのファインチューニングに使用しています。</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className="sns section">
            <div className="SNS">
                <h3>SNS</h3>
                <div className="sns-links">
                  <div className="twitter-link">
                    <a href="https://twitter.com/telrunn" target="_blank" rel="noopener noreferrer">
                    <img src='./img/Xlogo_black.png' alt='X Logo' className='x' />
                    </a>
                  </div>
                  <div className="github-link">
                    <a href="https://github.com/di-go11" target="_blank" rel="noopener noreferrer">
                    <img src='./img/github_icon.svg' alt='GitHub Logo' className='github' />
                    </a>
                  </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Profile
