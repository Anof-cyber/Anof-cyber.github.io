import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';

const NAV_ITEMS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Articles',   href: '#blogs'      },
  { label: 'Videos',     href: '#videos'     },
  { label: 'Contact',    href: '#contact'    },
];

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'blogs', 'videos', 'contact'];

const Header: React.FC = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]        = useState(false);
  const [activeSection,  setActiveSection]   = useState('home');
  const [progress,       setProgress]        = useState(0);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // Scroll progress
    const el = document.documentElement;
    const total = el.scrollHeight - el.clientHeight;
    setProgress(total > 0 ? Math.min((el.scrollTop / total) * 100, 100) : 0);

    const sorted = [...SECTIONS].reverse();
    for (const id of sorted) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= 120) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    const section = href.replace('#', '');
    return activeSection === section;
  };

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header__inner container">
          {/* Logo */}
          <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src="/assets/profile.png" alt="Sourav Kalal" className="header__logo-img" />
            <span className="header__logo-name">
              Sourav<span className="header__logo-accent"> Kalal</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`header__nav-link${isActive(item.href) ? ' header__nav-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume CTA */}
          <a
            href="https://blog.souravkalal.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta btn btn-outline"
          >
            Blog
          </a>

          {/* Hamburger */}
          <button
            className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Scroll progress indicator */}
        <div className="header__progress-track" aria-hidden="true">
          <div className="header__progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-menu__link${isActive(item.href) ? ' mobile-menu__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="mobile-menu__index mono">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
