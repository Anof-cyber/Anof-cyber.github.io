import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

const ALL = 'All';

const Projects: React.FC = () => {
  const categories = [ALL, ...Array.from(new Set(projectsData.map((p) => p.category)))];
  const [active, setActive] = useState(ALL);

  useScrollReveal('.projects-section .reveal');

  const filtered = active === ALL ? projectsData : projectsData.filter((p) => p.category === active);
  const showFeatured = active === ALL;

  /** Reusable card renderer */
  const renderCard = (proj: typeof projectsData[0], featured = false) => (
    <div
      key={proj.id}
      className={`proj__card${featured ? ' proj__card--featured' : ' proj__card--visible'}`}
    >
      <div className="proj__card-top">
        <div className="proj__card-header">
          <div className={`proj__folder-icon${featured ? ' proj__folder-icon--lg' : ''}`}>
            <i className="fas fa-folder-open" aria-hidden="true" />
          </div>
          <div className="proj__card-links">
            <a href={proj.link} target="_blank" rel="noopener noreferrer"
              className="proj__link-btn" aria-label={`View ${proj.title}`}>
              <i className={proj.commercial ? 'fas fa-external-link-alt' : 'fab fa-github'} aria-hidden="true" />
            </a>
            {proj.demo && (
              <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                className="proj__link-btn" aria-label={`Live demo of ${proj.title}`}>
                <i className="fas fa-external-link-alt" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className="proj__title-row">
          <h3 className={`proj__title${featured ? ' proj__title--lg' : ''}`}>{proj.title}</h3>
          <span className={`proj__status${proj.commercial ? ' proj__status--commercial' : ''}`}>
            {proj.commercial ? 'Commercial' : 'Open source'}
          </span>
        </div>
        <p className={`proj__desc${featured ? ' proj__desc--lg' : ''}`}>{proj.description}</p>
      </div>
      <div className="proj__card-bottom">
        <span className="proj__category-badge">{proj.category}</span>
        <div className="proj__tech">
          {proj.technologies.slice(0, featured ? 5 : 4).map((t) => (
            <span key={t} className="skill-pill">{t}</span>
          ))}
          {proj.technologies.length > (featured ? 5 : 4) && (
            <span className="proj__tech-more">+{proj.technologies.length - (featured ? 5 : 4)}</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Tools I've built</h2>
          <p className="section-desc">
            Security tools and frameworks I design, build, and maintain, both commercial
            products and open-source projects used across the security community.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="proj__filters reveal delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`proj__filter-btn${active === cat ? ' proj__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All view: featured 2 + rest grid */}
        {showFeatured && (
          <>
            {filtered.length > 0 && (
              <div className="proj__featured-row">
                {filtered.slice(0, 2).map((proj) => renderCard(proj, true))}
              </div>
            )}
            {filtered.length > 2 && (
              <div className="proj__grid">
                {filtered.slice(2).map((proj) => renderCard(proj, false))}
              </div>
            )}
          </>
        )}

        {/* Filtered view: single flat grid */}
        {!showFeatured && (
          <div className="proj__grid">
            {filtered.map((proj) => renderCard(proj, false))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
