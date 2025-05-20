import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Security Engineer | Penetration Tester | Developer";
  const typingSpeed = 70; // ms per character
  const cycleTexts = ["Security Engineer", "Penetration Tester", "Web Developer", "Automation Expert"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(cycleTexts[0]);
  const [isTyping, setIsTyping] = useState(true);

  const particlesRef = useRef<HTMLDivElement>(null);

  // Typing effect for main title
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Typing effect for cycling texts
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const typeNextText = (text: string, index = 0) => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        timeout = setTimeout(() => typeNextText(text, index + 1), typingSpeed);
      } else {
        // Once typing is done, wait before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
          eraseText(text);
        }, 2000);
      }
    };

    const eraseText = (text: string, index = text.length) => {
      if (index >= 0) {
        setDisplayText(text.substring(0, index));
        timeout = setTimeout(() => eraseText(text, index - 1), typingSpeed / 2);
      } else {
        // Once erased, move to next text
        setIsTyping(true);
        setCurrentTextIndex(prev => (prev + 1) % cycleTexts.length);
        typeNextText(cycleTexts[(currentTextIndex + 1) % cycleTexts.length]);
      }
    };

    if (isTyping) {
      typeNextText(cycleTexts[currentTextIndex]);
    }

    return () => clearTimeout(timeout);
  }, [currentTextIndex, isTyping]);

  // Create floating particles
  useEffect(() => {
    setIsLoaded(true);

    if (particlesRef.current) {
      const container = particlesRef.current;
      container.innerHTML = '';

      const particleCount = window.innerWidth < 768 ? 30 : 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cyber-particle');

        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.5 + 0.1;
        const isGlowing = Math.random() > 0.7;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = `${opacity}`;

        if (isGlowing) {
          particle.classList.add('glow');
          particle.style.boxShadow = Math.random() > 0.5 ?
            '0 0 5px var(--primary-color), 0 0 10px var(--primary-color)' :
            '0 0 5px var(--accent-color), 0 0 10px var(--accent-color)';
        }

        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="cyber-grid"></div>
      <div className="cyber-particles" ref={particlesRef}></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <div className="greeting-line"></div>
              <span>Hello, I'm</span>
            </div>

            <h1 className="hero-title">
              <span className="name">Sourav Kalal</span>
              <div className="title-bg"></div>
            </h1>

            <h2 className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor"></span>
            </h2>

            <p className="hero-description">
              A passionate cybersecurity professional specializing in penetration testing,
              vulnerability assessment, and secure application development.
            </p>              <div className="hero-cta">
                <a href="#projects" className="button primary-button">
                  <span>View Projects</span>
                  <i className="fas fa-chevron-right"></i>
                </a>

                <a href="#contact" className="button secondary-button">
                  <span>Contact Me</span>
                  <i className="fas fa-paper-plane"></i>
                </a>
              </div>
            </div>

            <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-frame">
                <img src="/assets/profile.png" alt="Sourav Kalal" />
                <div className="scan-line"></div>
              </div>

              <div className="image-decoration top-left"></div>
              <div className="image-decoration top-right"></div>
              <div className="image-decoration bottom-left"></div>
              <div className="image-decoration bottom-right"></div>

              <div className="image-border"></div>
            </div>

            <div className="tech-badge left">
              <i className="fas fa-shield-alt"></i>
              <span>Security</span>
            </div>

            <div className="tech-badge right">
              <i className="fas fa-code"></i>
              <span>Developer</span>
            </div>

            <div className="tech-badge bottom">
              <i className="fas fa-terminal"></i>
              <span>Hacker</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
