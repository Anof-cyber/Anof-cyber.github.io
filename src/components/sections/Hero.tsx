import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const ROLES = [
   'Product Security Engineer',
  'Security Engineer',
  'Penetration Tester',
  'Software Developer',
  'Security Researcher',
];

const STATS = [
  { target: 5,  suffix: '+', label: 'Years Experience' },
  { target: 10, suffix: '+', label: 'Open Source Tools' },
  { target: 9,  suffix: '+', label: 'Articles Published' },
  { target: 2,  suffix: '',  label: 'Certifications'    },
];

const SOCIAL = [
  { href: 'https://github.com/Anof-cyber',           icon: 'fab fa-github',      label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/sourav-kalal/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://x.com/Ano_f_',                      icon: 'fab fa-x-twitter',   label: 'Twitter'  },
  { href: 'https://blog.souravkalal.tech',            icon: 'fas fa-pen-nib',     label: 'Blog'     },
];

function useCounter(target: number, started: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(interval); }
      else setVal(start);
    }, 40);
    return () => clearInterval(interval);
  }, [target, started]);
  return val;
}

const StatItem: React.FC<{ target: number; suffix: string; label: string; started: boolean }> = ({
  target, suffix, label, started
}) => {
  const val = useCounter(target, started);
  return (
    <div className="hero__stat">
      <span className="hero__stat-value accent">{val}{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
};

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [display,   setDisplay]     = useState('');
  const [phase,     setPhase]       = useState<'typing' | 'pause' | 'erasing'>('typing');
  const [loaded,    setLoaded]      = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setStatsStarted(true), 800);
    }, 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const SPEED   = 65;
    const ERASE   = 35;
    const PAUSE   = 1800;

    if (phase === 'typing') {
      if (display.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pause'), PAUSE);
      }
    } else if (phase === 'pause') {
      timeoutRef.current = setTimeout(() => setPhase('erasing'), 300);
    } else {
      if (display.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), ERASE);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [display, phase, roleIndex]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__container">
        {/* ── LEFT ── */}
        <div className={`hero__left${loaded ? ' hero__left--loaded' : ''}`}>
          <h1 className="hero__name reveal delay-1" data-text="Sourav Kalal">
            Sourav<br />Kalal
          </h1>

          <div className="hero__role reveal delay-2">
            <span className="hero__role-prefix mono">&gt; </span>
            <span className="hero__role-text">{display}</span>
            <span className="hero__cursor" aria-hidden="true" />
          </div>

          <p className="hero__desc reveal delay-3">
            Security Engineer with 5+ years of hands-on experience in penetration testing,
            product security, security consultancy, tool development, and security research.
            I build open-source tools that make security testing more efficient.
          </p>

          <div className="hero__stats reveal delay-4">
            {STATS.map((s) => (
              <StatItem key={s.label} target={s.target} suffix={s.suffix}
                        label={s.label} started={statsStarted} />
            ))}
          </div>

          <div className="hero__actions reveal delay-5">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleNav(e, '#projects')}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => handleNav(e, '#contact')}>
              Get In Touch
            </a>
          </div>

          <div className="hero__socials reveal delay-6">
            {SOCIAL.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                 className="hero__social" aria-label={s.label}>
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Profile Photo ── */}
        <div className={`hero__right${loaded ? ' hero__right--loaded' : ''}`}>
          <div className="hero__photo-frame">
            <div className="hero__photo-ring hero__photo-ring--1" aria-hidden="true" />
            <div className="hero__photo-ring hero__photo-ring--2" aria-hidden="true" />
            <div className="hero__photo-ring hero__photo-ring--3" aria-hidden="true" />
            <div className="hero__photo-glow"                     aria-hidden="true" />
            <div className="hero__photo-hex">
              <img src="/assets/profile.png" alt="Sourav Kalal" className="hero__photo-img" />
              <div className="hero__photo-scanline" aria-hidden="true" />
            </div>

            <div className="hero__photo-badge hero__photo-badge--br mono">
              <i className="fas fa-shield-halved" aria-hidden="true" />
              <span>BSCP · eWPTX</span>
            </div>
            <div className="hero__photo-badge hero__photo-badge--bl mono">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              <span>India</span>
            </div>
            <div className="hero__photo-corner hero__photo-corner--tl" aria-hidden="true" />
            <div className="hero__photo-corner hero__photo-corner--tr" aria-hidden="true" />
            <div className="hero__photo-corner hero__photo-corner--bl" aria-hidden="true" />
            <div className="hero__photo-corner hero__photo-corner--br" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className={`hero__scroll${loaded ? ' hero__scroll--visible' : ''}`} aria-hidden="true">
        <span className="mono">scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
