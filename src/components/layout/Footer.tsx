import React from 'react';
import './Footer.css';

const SOCIAL_LINKS = [
  { href: 'https://github.com/Anof-cyber',           icon: 'fab fa-github',      label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/sourav-kalal/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://x.com/Ano_f_',                      icon: 'fab fa-x-twitter',   label: 'Twitter'  },
  { href: 'https://blog.souravkalal.tech',            icon: 'fas fa-pen-nib',     label: 'Blog'     },
];

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-mark">SK</span>
            <span>Sourav Kalal</span>
          </span>
          <p className="footer__tagline">Security Engineer · Penetration Tester · Developer</p>
        </div>

        <div className="footer__socials">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={s.label}
            >
              <i className={s.icon} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Sourav Kalal. All rights reserved.
        </p>
        <p className="footer__note mono">
          Built with React + TypeScript
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
