import React from 'react';
import { videosData } from '../../data/videosData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Videos.css';

const Videos: React.FC = () => {
  useScrollReveal('.videos-section .reveal');

  return (
    <section id="videos" className="videos-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Videos</span>
          <h2 className="section-title">Tool demos &amp; tutorials</h2>
          <p className="section-desc">
            Walkthroughs and demonstrations of security tools and techniques.
          </p>
        </div>

        <div className="videos__grid">
          {videosData.map((video, i) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`video__card reveal delay-${Math.min(i + 1, 6)}`}
              aria-label={`Watch: ${video.title}`}
            >
              {/* Thumbnail */}
              <div className="video__thumb">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="video__play">
                  <i className="fas fa-play" aria-hidden="true" />
                </div>
                <span className="video__duration mono">{video.duration}</span>
              </div>

              {/* Info */}
              <div className="video__info">
                <div className="video__meta">
                  <span className="video__category">{video.category}</span>
                  <span className="video__date mono">{video.date}</span>
                </div>
                <h3 className="video__title">{video.title}</h3>
                <p className="video__desc">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
