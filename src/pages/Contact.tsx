import React from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <section className="contact-hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Contact Me</h1>
            <p className="lead">
              お問い合わせにつきましては、以下の方法でご連絡ください。
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info">
              <h2>お問い合わせ方法</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>d_net@outlook.jp</p>
                    <small>24時間以内に返信いたします</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
