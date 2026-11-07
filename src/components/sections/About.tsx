import React, { useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const CERTS = [
  {
    acronym: 'BSCP',
    name:     'BurpSuite Certified Professional',
    issuer:   'PortSwigger',
    valid:    'Issued Feb 2025 · Valid until Feb 2031',
    verify:   'https://portswigger.net/web-security/e/c/f2385e62ea31367f',
    icon:     'fas fa-shield-alt',
  },
  {
    acronym: 'eWPTX',
    name:     'eLearnSecurity Web Pentester eXtreme',
    issuer:   'eLearnSecurity',
    valid:    'Issued March 2025 · Valid until March 2028',
    verify:   'https://certs.ine.com/abad022a-5f49-4f4c-a426-73aa1b31b3b3#acc.EO1So4ym',
    icon:     'fas fa-globe',
  },
];

const HIGHLIGHTS = [
  { icon: 'fas fa-bug',           text: 'Web, API, Mobile & Thick Client Pentesting' },
  { icon: 'fas fa-shield-halved', text: 'Product Security, Threat Modeling & SSDLC'   },
  { icon: 'fas fa-cloud',         text: 'AWS, Terraform/IaC, CI/CD & DevSecOps'       },
  { icon: 'fas fa-code',          text: 'Security Tool Development (Commercial & OSS)' },
];

const ABOUT_STATS = [
  { value: '6+',  label: 'Years\nExperience',     icon: 'fas fa-calendar-check' },
  { value: '10+', label: 'Security\nTools Built',  icon: 'fas fa-cube'           },
  { value: '9+',  label: 'Published\nArticles',   icon: 'fas fa-pen-nib'        },
  { value: '2',   label: 'Certifications\nEarned', icon: 'fas fa-medal'         },
];

const About: React.FC = () => {
  useScrollReveal('.about-section .reveal');

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Senior Security Engineer</h2>
        </div>

        <div className="about__bento">
          {/* ── Row 1: Stat cells ── */}
          {ABOUT_STATS.map((s, i) => (
            <div key={s.label} className={`about__bento-stat reveal delay-${i + 1}`}>
              <div className="about__bento-stat-icon">
                <i className={s.icon} aria-hidden="true" />
              </div>
              <div className="about__bento-stat-value">{s.value}</div>
              <div className="about__bento-stat-label">{s.label}</div>
            </div>
          ))}

          {/* ── Row 2 left: Bio ── */}
          <div className="about__bento-bio reveal delay-1">
            <p className="about__lead">
              I'm a <strong>security engineer</strong> with over{' '}
              <strong>6 years of experience</strong> across offensive security and product
              security from hands-on penetration testing to embedding security into the SDLC. I
              can also <strong>build and run</strong> the things I secure: software, cloud, and
              infrastructure.
            </p>
            <p>
              In security I run end-to-end assessments across web apps, REST &amp; GraphQL APIs,
              mobile (iOS/Android), and thick client apps, and drive threat modeling, secure
              SDLC, and AWS security posture. That same range lets me build security tooling used
              worldwide my commercial product <strong>InterceptSuite</strong>, plus open-source
              projects like <strong>PyCript</strong>, <strong>ProxyBridge</strong>, and{' '}
              <strong>APTRS</strong>.
            </p>
          </div>

          {/* ── Row 2 right: Current role ── */}
          <div className="about__bento-role reveal delay-2">
            <div className="about__role-card">
              <div className="about__role-card-label mono">Currently</div>
              <div className="about__role-name">Senior Product Security Engineer</div>
              <div className="about__role-company">
                <i className="fas fa-building" aria-hidden="true" />
                Cybrilla
              </div>
              <div className="about__role-tenure mono">March 2026 — Present</div>
            </div>
            <ul className="about__highlights">
              {HIGHLIGHTS.map((h) => (
                <li key={h.text} className="about__highlight-item">
                  <i className={h.icon} aria-hidden="true" />
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Row 3: Cert cards ── */}
          {CERTS.map((c, i) => (
            <div key={c.acronym} className={`about__bento-cert reveal delay-${i + 1}`}>
              <div className="about__cert-icon">
                <i className={c.icon} aria-hidden="true" />
              </div>
              <div className="about__cert-info">
                <div className="about__cert-row">
                  <span className="about__cert-acronym">{c.acronym}</span>
                  {c.verify && (
                    <a href={c.verify} target="_blank" rel="noopener noreferrer"
                       className="about__cert-verify mono">
                      <i className="fas fa-external-link-alt" aria-hidden="true" /> Verify
                    </a>
                  )}
                </div>
                <span className="about__cert-name">{c.name}</span>
                <span className="about__cert-meta mono">{c.issuer} · {c.valid}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
