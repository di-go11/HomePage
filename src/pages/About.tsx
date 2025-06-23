import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="page-title">About Me</h1>
              <p className="lead">
                フロントエンド開発者として、美しく機能的なWebアプリケーションを創造することに情熱を注いでいます。
              </p>
            </div>
            <div className="about-image">
              <div className="profile-card card">
                <div className="profile-avatar">
                  <div className="avatar-placeholder">👨‍💻</div>
                </div>
                <h3>Web Developer</h3>
                <p>React & Three.js Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category card">
              <h3>Frontend</h3>
              <div className="skill-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Sass</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category card">
              <h3>3D & Animation</h3>
              <div className="skill-list">
                <span className="skill-tag">Three.js</span>
                <span className="skill-tag">WebGL</span>
                <span className="skill-tag">GSAP</span>
                <span className="skill-tag">Blender</span>
                <span className="skill-tag">3D Modeling</span>
              </div>
            </div>
            <div className="skill-category card">
              <h3>Tools & Others</h3>
              <div className="skill-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item card">
              <div className="timeline-date">2023 - 現在</div>
              <div className="timeline-content">
                <h3>Senior Frontend Developer</h3>
                <p className="company">Tech Company Inc.</p>
                <p>React と Three.js を使用したWebアプリケーションの開発をリード。</p>
              </div>
            </div>
            <div className="timeline-item card">
              <div className="timeline-date">2021 - 2023</div>
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <p className="company">Digital Agency</p>
                <p>クライアント向けのWebサイトとWebアプリケーションの開発。</p>
              </div>
            </div>
            <div className="timeline-item card">
              <div className="timeline-date">2020 - 2021</div>
              <div className="timeline-content">
                <h3>Junior Developer</h3>
                <p className="company">Startup Company</p>
                <p>HTML、CSS、JavaScriptを使用したフロントエンド開発の基礎を学習。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
