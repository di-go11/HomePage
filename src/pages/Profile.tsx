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
                Web開発と3Dモデリングに情熱を注ぐクリエイターです。<br />
                新しい技術を学び、創造的な作品づくりに挑戦し続けています。
              </p>
            </div>
            <div className="profile-image">
              <div className="profile-card card">
                <div className="profile-avatar">
                  <div className="avatar-placeholder">👨‍💻</div>
                </div>
                <h3>Web Developer & 3D Creator</h3>
                <p>React & Three.js Enthusiast</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">年の経験</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">50+</span>
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
          <h2 className="section-title">私について</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                こんにちは！私はWeb開発と3Dモデリングを愛するクリエイターです。
                大学時代にプログラミングに出会い、その魅力にハマってから今日まで、
                新しい技術を学び続けています。
              </p>
              <p>
                特にReactとThree.jsを組み合わせたインタラクティブな体験の制作が得意で、
                ユーザーが楽しめるWebアプリケーションの開発に力を入れています。
              </p>
              <p>
                日々の学習で得た知識や経験をブログで共有し、
                同じ分野に興味を持つ方々との交流も大切にしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section">
        <div className="container">
          <h2 className="section-title">スキル・技術</h2>
          <div className="skills-grid">
            <div className="skill-category card">
              <h3>Frontend Development</h3>
              <div className="skill-list">                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="skill-bar">
                    <div className="skill-progress react"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">TypeScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress typescript"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML/CSS</span>
                  <div className="skill-bar">
                    <div className="skill-progress html-css"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress javascript"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category card">
              <h3>3D & Graphics</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">Three.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">WebGL</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Blender</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">GSAP</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category card">
              <h3>Tools & Others</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Vite</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Figma</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Photoshop</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      <section className="interests section">
        <div className="container">
          <h2 className="section-title">趣味・興味</h2>
          <div className="interests-grid">
            <div className="interest-item card fade-in">
              <div className="interest-icon">🖥️</div>
              <h3>自作PC制作</h3>
              <p>パーツ選びから組み立てまで、自分でPCを作ることが大好きです。最新のグラフィックカードやCPUの性能を活かした構成を考えるのが楽しいです。</p>
            </div>
            <div className="interest-item card fade-in">
              <div className="interest-icon">🤖</div>
              <h3>AI・機械学習</h3>
              <p>AIの発展に強い関心があり、機械学習やディープラーニングについて日々勉強しています。ChatGPTなどの生成AIの活用方法も模索中です。</p>
            </div>
            <div className="interest-item card fade-in">
              <div className="interest-icon">🎨</div>
              <h3>3Dモデリング</h3>
              <p>最近特に興味を持っているのが3Dモデリングです。BlenderやThree.jsを使って、リアルな3Dオブジェクトやアニメーションを作成しています。</p>
            </div>
            <div className="interest-item card fade-in">
              <div className="interest-icon">💻</div>
              <h3>プログラミング</h3>
              <p>新しいプログラミング言語やフレームワークを学ぶことが好きで、常に技術的な挑戦を続けています。</p>
            </div>
            <div className="interest-item card fade-in">
              <div className="interest-icon">🎮</div>
              <h3>ゲーム開発</h3>
              <p>3D技術とプログラミングを組み合わせて、インタラクティブなゲームやアプリケーションの開発にも挑戦しています。</p>
            </div>
            <div className="interest-item card fade-in">
              <div className="interest-icon">📚</div>
              <h3>技術書・論文読書</h3>
              <p>最新の技術動向や研究成果について学ぶため、技術書や学術論文を読むことを習慣にしています。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
