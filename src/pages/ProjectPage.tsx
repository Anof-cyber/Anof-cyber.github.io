import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './ProjectPage.css'; // Assuming you will create a CSS file for styling

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((proj) => proj.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectPage;