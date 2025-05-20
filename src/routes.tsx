import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </RouterRoutes>
  );
};

export default Routes;