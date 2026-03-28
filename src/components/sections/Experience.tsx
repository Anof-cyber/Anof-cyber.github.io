import React, { useState } from 'react';
import { experienceData } from '../../data/experienceData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

const Experience: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  useScrollReveal('.experience-section .reveal');

  const exp = experienceData[activeIdx];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Professional journey</h2>
        </div>

        <div className="exp__tabs-layout reveal delay-1">
          {/* ── Company tabs on left ── */}
          <div className="exp__tabs" role="tablist">
            {experienceData.map((e, i) => (
              <button
                key={e.id}
                role="tab"
                aria-selected={i === activeIdx}
                className={`exp__tab${i === activeIdx ? ' exp__tab--active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="exp__tab-indicator" aria-hidden="true" />
                <div className="exp__tab-text">
                  <span className="exp__tab-company">{e.company}</span>
                  <span className="exp__tab-date mono">
                    {e.startDate} {e.endDate ? `→ ${e.endDate}` : '→ Present'}
                  </span>
                </div>
                {i === 0 && <span className="exp__tab-now mono">now</span>}
              </button>
            ))}
          </div>

          {/* ── Content panel on right ── */}
          <div className="exp__panel" key={activeIdx}>
            <div className="exp__panel-header">
              <div>
                <h3 className="exp__panel-company">{exp.company}</h3>
                <div className="exp__panel-dates mono">{exp.startDate} — {exp.endDate || 'Present'}</div>
              </div>
              {activeIdx === 0 && (
                <span className="exp__current-tag">
                  <span className="exp__current-dot" />
                  Current
                </span>
              )}
            </div>

            {exp.promotions ? (
              <div className="exp__promotions">
                {exp.promotions.map((p, pi) => (
                  <div key={pi} className={`exp__promo${pi === 0 ? ' exp__promo--current' : ''}`}>
                    <span className="exp__promo-title">{p.title}</span>
                    <span className="exp__promo-date mono">{p.date}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="exp__role-title">{exp.title}</p>
            )}

            <p className="exp__desc">{exp.description}</p>

            <div className="exp__skills">
              {exp.skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
