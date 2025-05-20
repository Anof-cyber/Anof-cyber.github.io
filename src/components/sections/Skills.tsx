import React, { useState, useEffect } from 'react';
import { skillsData } from '../../data/skillsData';
import './Skills.css';

const Skills: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll('.skill-item');
      skillElements.forEach((element) => {
        const position = element.getBoundingClientRect();

        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          const id = element.getAttribute('data-id');
          if (id) {
            setAnimatedSkills(prev => ({ ...prev, [id]: true }));
          }
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
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            My professional skills and areas of specialization in cybersecurity, software development, and security testing.
          </p>
        </div>

        <div className="skills-container">
          {skillsData.map((category) => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="skill-item"
                    data-id={`skill-${skill.id}`}
                  >
                    <div className="skill-header">
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        style={{
                          width: animatedSkills[`skill-${skill.id}`]
                            ? `${skill.proficiency}%`
                            : '0%'
                        }}
                      >
                        <span className="skill-percentage">{skill.proficiency}%</span>
                      </div>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;