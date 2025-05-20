import React, { useState, useEffect } from 'react';
import { blogsData, BlogPost } from '../../data/blogsData';
import './BlogsResearch.css';

interface CategoryFilter {
  id: string;
  name: string;
  count: number;
}

const BlogsResearch: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animatedPosts, setAnimatedPosts] = useState<number[]>([]);

  const categories: CategoryFilter[] = [
    { id: 'all', name: 'All Posts', count: blogsData.length },
    { id: 'desktop-security', name: 'Desktop Security', count: blogsData.filter(post => post.category === 'Desktop Security').length },
    { id: 'web-security', name: 'Web Security', count: blogsData.filter(post => post.category === 'Web Security').length },
    { id: 'mobile-security', name: 'Mobile Security', count: blogsData.filter(post => post.category === 'Mobile Security').length }

  ];

  useEffect(() => {
    const handleScroll = () => {
      const postElements = document.querySelectorAll('.blog-card');

      postElements.forEach((element, index) => {
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimatedPosts(prev => Array.from(new Set([...prev, index])));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredPosts = blogsData
    .filter(post => activeFilter === 'all' || post.category.toLowerCase().replace(' ', '-') === activeFilter);

  return (
    <section id="blogs" className="blogs-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" data-text="Blogs & Research">Blogs & Research</h2>
          <p className="section-subtitle">
            Deep dives into security vulnerabilities, tool development, and research findings
          </p>
        </div>

        <div className="blogs-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="blogs-grid">
          {filteredPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`blog-card ${animatedPosts.includes(index) ? 'animated' : ''}`}
              data-category={post.category.toLowerCase().replace(' ', '-')}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="far fa-calendar-alt"></i>
                    {post.date}
                  </span>
                  <span className="blog-publisher">
                    <i className="far fa-newspaper"></i>
                    {post.publishedOn}
                  </span>
                  {post.readTime && (
                    <span className="blog-read-time">
                      <i className="far fa-clock"></i>
                      {post.readTime}
                    </span>
                  )}
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>

                <div className="blog-footer">
                  <span className="blog-category">
                    <i className="fas fa-tag"></i>
                    {post.category}
                  </span>
                  <span className="blog-read-more">
                    Read Article
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsResearch;
