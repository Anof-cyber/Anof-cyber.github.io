import React from 'react';
import { skillsData, toolsList } from '../../data/skillsData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const CATEGORY_ICONS: Record<string, string> = {
  'Application Security':       'fas fa-shield-halved',
  'Infrastructure Security':    'fas fa-network-wired',
  'Languages & Development':    'fas fa-code',
};

const Skills: React.FC = () => {
  useScrollReveal('.skills-section .reveal');

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">Technical expertise</h2>
          <p className="section-desc">
            Covering the full spectrum from application security to system-level assessments and tool development.
          </p>
        </div>

        {/* Skill categories */}
        <div className="skills__grid">
          {skillsData.map((cat, i) => (
            <div
              key={cat.id}
              className={`skills__card reveal delay-${Math.min(i + 1, 6)}`}
            >
              <div className="skills__card-header">
                <div className="skills__card-icon">
                  <i
                    className={CATEGORY_ICONS[cat.title] ?? 'fas fa-star'}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>

              <div className="skills__pills">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className={`skill-pill${skill.level === 'expert' ? ' skill-pill--accent' : ''}`}
                    title={skill.description}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools marquee ticker */}
        <div className="skills__tools reveal">
          <h3 className="skills__tools-label mono">Tools I use</h3>
          <div className="skills__ticker">
            <div className="skills__ticker-track">
              {[...toolsList, ...toolsList].map((tool, i) => (
                <span key={`${tool.name}-${i}`} className="tools-pill">
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
