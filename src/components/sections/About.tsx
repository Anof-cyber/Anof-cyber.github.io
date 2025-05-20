import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  // Set up intersection observer to trigger animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    // Get all elements with 'hidden' class for animation
    const hiddenElements = document.querySelectorAll('.about-section .hidden');
    hiddenElements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
        elementsRef.current.push(el as HTMLElement);
      }
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach(el => {
          if (el && observerRef.current) {
            observerRef.current.unobserve(el);
          }
        });
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="cyber-grid-alt"></div>

      <div className="container">
        <div className="section-header hidden">
          <h2 data-text="About Me">About Me</h2>
          <p className="section-subtitle">{"< Cybersecurity Expert & Developer />"}</p>
        </div>

        <div className="about-content">
          <div className="about-text hidden">
            <div className="cyber-badge">
              <i className="fas fa-shield-alt"></i>
              <span>Security Engineer</span>
              <i className="fas fa-terminal"></i>
            </div>

            <p className="about-lead">
              {">"} With over 5 years of hands-on experience, I combine <span className="text-gradient">security testing</span> with <span className="text-gradient">tool development</span> to deliver comprehensive security assessments. From writing Burp Suite extensions to developing automated testing frameworks, I bridge the gap between security and development.
            </p>

            <div className="cyber-text">
              <p>
                I specialize in end-to-end security assessments across web applications, APIs, mobile apps (iOS/Android), and thick clients (Windows/macOS/Linux). My background in development helps me understand applications at a deeper level, leading to more thorough security testing and practical remediation advice.
              </p>
              <p>
                My contributions to the security community include open-source tools for penetration testing, custom Burp extensions, and security automation frameworks. I actively work on making security testing more efficient through my tools and research, while helping teams improve their security posture through clear communication and actionable findings.
              </p>
            </div>


            <div className="certifications-section hidden">
              <h3 className="text-gradient">Professional Certifications</h3>
              <div className="cert-grid">
                <div className="cert-card">
                  <div className="cert-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <h4>BSCP</h4>
                  <p>BurpSuite Certified Professional</p>
                  <div className="cert-meta">
                    <span className="cert-date">
                      <i className="fas fa-calendar"></i>
                      Valid until: Feb 2031
                    </span>
                    <a href="https://portswigger.net/web-security/e/c/f2385e62ea31367f"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="cert-verify">
                      <i className="fas fa-external-link-alt"></i>
                      Verify Certificate
                    </a>
                  </div>

                </div>
                <div className="cert-card">
                  <div className="cert-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4>eWPTX</h4>
                  <p>eLearnSecurity Web Pentester eXtreme</p>
                  <div className="cert-meta">
                    <span className="cert-date">
                      <i className="fas fa-calendar"></i>
                      Valid until: March 2028
                    </span>
                    <a href="https://certs.ine.com/abad022a-5f49-4f4c-a426-73aa1b31b3b3#acc.EO1So4ym"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="cert-verify">
                      <i className="fas fa-external-link-alt"></i>
                      Verify Certificate
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;