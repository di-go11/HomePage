import React from 'react'
import ThreeScene from '../components/three/ThreeScene'
import './Portfolio.css'

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: '3D Product Showcase',
      description: 'Three.jsを使用したインタラクティブな製品展示サイト',
      technologies: ['React', 'Three.js', 'TypeScript', 'GSAP'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'WebGL Particle System',
      description: 'カスタムシェーダーを使用したパーティクルアニメーション',
      technologies: ['Three.js', 'WebGL', 'GLSL', 'JavaScript'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Virtual Gallery',
      description: '3D空間での美術館体験を提供するWebアプリケーション',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'Blender'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Interactive Dashboard',
      description: 'データ可視化のためのインタラクティブなダッシュボード',
      technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <div className="portfolio">
      <section className="portfolio-hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">My Portfolio</h1>
            <p className="lead">
              Three.jsとReactを使用して作成した、インタラクティブなWebアプリケーションをご紹介します。
            </p>
          </div>
          <div className="hero-demo">
            <ThreeScene />
          </div>
        </div>
      </section>

      <section className="projects section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card card fade-in">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="btn btn-small">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                        Live Demo
                      </a>
                      <a href={project.githubUrl} className="btn btn-small btn-outline">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>プロジェクトのご相談はこちら</h2>
            <p>あなたのアイデアを実現させるお手伝いをさせてください。</p>
            <a href="/contact" className="btn btn-large">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
