import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import BlogsResearch from '../components/sections/BlogsResearch';
import Videos from '../components/sections/Videos';
import Contact from '../components/sections/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <BlogsResearch />
      <Videos />
      <Contact />
    </div>
  );
};

export default HomePage;