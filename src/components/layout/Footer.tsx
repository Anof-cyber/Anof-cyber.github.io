import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Sourav Kalal</span>
            <p className="footer-tagline">Security Engineer and Developer</p>
          </div>

          <nav className="footer-nav">
            <div className="nav-column">
              <h4>Navigate</h4>
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/#about" className="footer-nav-link">About</Link>
              <Link to="/#skills" className="footer-nav-link">Skills</Link>
            </div>
            <div className="nav-column">
              <h4>Discover</h4>
              <Link to="/#experience" className="footer-nav-link">Experience</Link>
              <Link to="/#projects" className="footer-nav-link">Projects</Link>

              <Link to="/#contact" className="footer-nav-link">Contact</Link>
            </div>
          </nav>

          <div className="footer-social">
            <h4>Connect</h4>
            <ul className="social-links">
              <li>
                <a href="https://github.com/Anof-cyber" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/souravkalal" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AnofCyber" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <i className="fab fa-x" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Sourav Kalal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
