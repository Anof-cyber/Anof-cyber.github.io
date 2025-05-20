import React, { useState, useEffect } from 'react';
import { experienceData } from '../../data/experienceData';
import './Experience.css';

const Experience: React.FC = () => {
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const cardElements = document.querySelectorAll('.experience-card');
      cardElements.forEach((element, index) => {
        const position = element.getBoundingClientRect();

        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimatedCards(prev => Array.from(new Set([...prev, index])));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>

        </div>

        <div className="experience-container">
          {experienceData.map((experience, index) => (
            <div key={experience.id} className={`experience-card ${index === 0 ? 'featured' : ''} ${animatedCards.includes(index) ? 'animated' : ''}`}>
              <div className="company-header">
                <div className="company-icon">
                  <i className={index === 0 ? 'fas fa-shield-alt' : index === 1 ? 'fas fa-user-shield' : 'fas fa-globe-americas'}></i>
                </div>
                <div className="company-info">
                  <h3 className="company-name">{experience.company}</h3>
                  <p className="company-meta">
                    {experience.location && <span className="company-location"><i className="fas fa-map-marker-alt"></i> {experience.location}</span>}
                  </p>
                </div>
              </div>

              <div className="position-info">
                <h4 className="position-title">{experience.title}</h4>
                <span className="position-date">{`${experience.startDate} - ${experience.endDate}`}</span>
              </div>

              <p className="company-description">{experience.description}</p>

              <div className="skills-tags">
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>

              {experience.promotions && (
                <div className="position-list">
                  {experience.promotions.map((promotion, pIndex) => (
                    <div key={pIndex} className={`position-item ${pIndex === 0 ? 'active' : ''}`}>
                      <div className="position-header">
                        <h4 className="position-title">{promotion.title}</h4>
                        <span className="position-date">{promotion.date}</span>
                      </div>
                      {pIndex === 0 && <span className="current-badge">Current</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;