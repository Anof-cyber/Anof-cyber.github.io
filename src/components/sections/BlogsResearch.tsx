import React, { useState } from 'react';
import { blogsData } from '../../data/blogsData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './BlogsResearch.css';

const SHOW_DEFAULT = 6;

const BlogsResearch: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  useScrollReveal('.blogs-section .reveal');

  const visible = showAll ? blogsData : blogsData.slice(0, SHOW_DEFAULT);
  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <section id="blogs" className="blogs-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Research &amp; Writing</span>
          <h2 className="section-title">Articles &amp; write-ups</h2>
          <p className="section-desc">
            Published on InfoSec Write-ups covering Desktop Security, Mobile Security, and Web Security.
          </p>
        </div>

        {/* ── Featured article ── */}
        {featured && (
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog__featured reveal delay-1"
          >
            <div className="blog__featured-label mono">
              <span className="blog__featured-dot" />
              Featured article
            </div>
            <div className="blog__featured-body">
              <div className="blog__featured-content">
                <div className="blog__meta">
                  <span className="blog__category">{featured.category}</span>
                  {featured.readTime && (
                    <span className="blog__readtime mono">
                      <i className="far fa-clock" aria-hidden="true" />
                      {featured.readTime}
                    </span>
                  )}
                </div>
                <h3 className="blog__featured-title">{featured.title}</h3>
                <p className="blog__featured-desc">{featured.description}</p>
              </div>
              <div className="blog__featured-side">
                <span className="blog__date mono">{featured.date}</span>
                <div className="blog__featured-arrow">
                  <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                </div>
              </div>
            </div>
          </a>
        )}

        {/* ── Grid ── */}
        {rest.length > 0 && (
          <div className="blogs__grid reveal delay-2">
            {rest.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog__card"
              >
                <div className="blog__meta">
                  <span className="blog__category">{post.category}</span>
                  {post.readTime && (
                    <span className="blog__readtime mono">
                      <i className="far fa-clock" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  )}
                </div>
                <h3 className="blog__card-title">{post.title}</h3>
                <p className="blog__card-desc">{post.description}</p>
                <div className="blog__card-footer">
                  <span className="blog__date mono">{post.date}</span>
                  <i className="fas fa-arrow-right blog__card-arrow" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        )}

        {blogsData.length > SHOW_DEFAULT && (
          <div className="blogs__cta reveal">
            <button
              className="btn btn-outline"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'Show Less' : `Show All ${blogsData.length} Articles`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsResearch;
