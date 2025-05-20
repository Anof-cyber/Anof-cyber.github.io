import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

interface ProjectFilterProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="project-filter">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);

    const resetAnimation = () => {
      setAnimated(false);
      setTimeout(() => setAnimated(true), 50);
    };

    resetAnimation();
  }, [activeFilter]);

  const projectCategories = ['All', 'Security Tools', 'Burp Suite Extensions','Mobile Security', 'Training'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Security Tools</h2>
          <p className="section-subtitle">
            A collection of innovative security tools, frameworks, and platforms I've developed to enhance
            application security testing, vulnerability assessment, and security training.
          </p>
        </div>

        <ProjectFilter
          filters={projectCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className={`projects-grid ${animated ? 'animated' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link primary" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    <span>View Project</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;