import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Header background effect
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'skills', 'experience','projects', 'blogs', 'videos', 'contact'];

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <div className="logo-glitch" data-text="SK">SK</div>
            <span className="logo-text">
              <span className="text-gradient">Sourav</span> Kalal
            </span>
          </Link>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <div className="nav-backdrop" onClick={closeMenu}></div>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                style={{
                  '--index': index,
                  '--total': navItems.length
                } as React.CSSProperties}
              >
                <a
                  href={item.href}
                  className={activeSection === item.href.replace('#', '') ? 'active' : ''}
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  {item.name}
                  <span className="nav-indicator"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-footer">
            <a href="#contact" className="button nav-cta" onClick={closeMenu}>
              <span>Let's Connect</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;