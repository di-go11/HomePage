import React, { useState } from 'react'
import './Blog.css'

interface BlogPost {
  id: number
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  tags: string[]
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'AI駆動のホームページ実装',
      date: '2024-06-19',
      category: '技術',
      excerpt: 'Claude4 を活用して本ホームページを実装しました。',
      content: 'Claude4により、ホームページの大枠を作成しました。これから、順次更新していきます',
      tags: ['react','Claude4', 'AI', 'ウェブ開発'],
    },
  ]

  const categories = ['all', '技術', 'デザイン', '日記']

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="blog">
      <div className="container">
        <div className="blog-header">
          <h1>ブログ</h1>
          <p>技術的な学習内容やアイデアについてまとめます。</p>
        </div>

        <div className="blog-filters">
          <h3>カテゴリー</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'すべて' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-content">
          <div className="blog-posts">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-post">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="post-date">{formatDate(post.date)}</span>
                    <span className="post-category">{post.category}</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                </div>
                
                <div className="post-content">
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="post-footer">
                  <button className="read-more-btn">続きを読む</button>
                </div>
              </article>
            ))}
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-section">
              <h3>最近の投稿</h3>
              <div className="recent-posts">
                {blogPosts.slice(0, 3).map(post => (
                  <div key={post.id} className="recent-post">
                    <h4>{post.title}</h4>
                    <span className="recent-date">{formatDate(post.date)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>人気のタグ</h3>
              <div className="popular-tags">
                {['React', 'Three.js', 'JavaScript', 'TypeScript', 'ウェブデザイン'].map(tag => (
                  <span key={tag} className="popular-tag">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>アーカイブ</h3>
              <div className="archive-list">
                <div className="archive-item">
                  <span>2024年1月</span>
                  <span className="archive-count">(4)</span>
                </div>
                <div className="archive-item">
                  <span>2023年12月</span>
                  <span className="archive-count">(3)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Blog
