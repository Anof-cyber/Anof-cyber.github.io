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
  { icon: 'fas fa-bug',         text: 'Web, API, Mobile & Thick Client Pentesting' },
  { icon: 'fas fa-code',        text: 'Security Tool Development & Automation'     },
  { icon: 'fas fa-pen-nib',     text: '9+ Published Security Articles'            },
  { icon: 'fas fa-cube',        text: 'Open-source Projects with 1K+ GitHub Stars' },
];

const ABOUT_STATS = [
  { value: '5+',  label: 'Years\nExperience',     icon: 'fas fa-calendar-check' },
  { value: '10+', label: 'Open Source\nTools',    icon: 'fas fa-cube'           },
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
              With over <strong>5 years of hands-on experience</strong>, I work across both
              offensive security and product security engineering from hands-on penetration
              testing to embedding security into the full software development lifecycle. I bridge
              the gap between security research and engineering, making security a first-class
              concern from design to deployment.
            </p>
            <p>
              On the <strong>product security</strong> side, I drive SSDLC adoption, conduct
              threat modeling and security design reviews, enforce CI/CD pipeline hardening,
              manage AWS security posture, and collaborate with engineering teams to build
              secure-by-default systems. I translate security risks into actionable engineering
              requirements.
            </p>
            <p>
              On the <strong>offensive side</strong>, I specialize in end-to-end security
              assessments across web applications, REST &amp; GraphQL APIs, mobile apps
              (iOS/Android), and thick client desktop applications. To support this work, I build
              open-source tooling {' '}<strong>InterceptSuite</strong>, <strong>PyCript</strong>,{' '}
              <strong>ProxyBridge</strong>, and <strong>APTRS</strong> purpose-built to solve
              real gaps in the pentesting workflow and adopted by security professionals worldwide.
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
