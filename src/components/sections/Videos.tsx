import React, { useState, useEffect } from 'react';
import { videosData } from '../../data/videosData';
import './Videos.css';

const Videos: React.FC = () => {
  const [animatedElements, setAnimatedElements] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimatedElements(prev => Array.from(new Set([...prev, index])));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openVideo = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="videos" className="videos-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" data-text="Video Content">Video Content</h2>
          <p className="section-subtitle">
            Security tool demonstrations, tutorials, and technical deep-dives
          </p>
        </div>

        <div className="video-showcase">
          {videosData.map((video, index) => (
            <div key={video.id} className="video-showcase-row">
              <div
                className={`video-card animate-on-scroll ${
                  animatedElements.includes(2 * index) ? 'animated' : ''
                }`}
                onClick={() => openVideo(video.videoUrl)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <span className="duration">{video.duration}</span>
                </div>
                <div className="video-content">
                  <div className="video-meta">
                    <span>
                      <i className="far fa-calendar-alt"></i>
                      {video.date}
                    </span>
                    <span>
                      <i className="fas fa-tag"></i>
                      {video.category}
                    </span>
                  </div>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
              </div>

              {video.toolCard && (
                <div
                  className={`tool-feature-card animate-on-scroll ${
                    animatedElements.includes(2 * index + 1) ? 'animated' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
                >
                  <div className="tool-header">
                    <h3>
                      <i className="fas fa-tools"></i>
                      {video.toolCard.name}
                    </h3>
                    <a
                      href={video.toolCard.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                      View on GitHub
                    </a>
                  </div>
                  <div className="tool-content">
                    <p className="tool-description">{video.toolCard.description}</p>
                    <div className="tool-features">
                      <h4>Key Features</h4>
                      <ul>
                        {video.toolCard.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="tool-technologies">
                      <h4>Technologies</h4>
                      <div className="tech-tags">
                        {video.toolCard.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
