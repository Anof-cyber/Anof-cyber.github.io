import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const SOCIAL = [
  { href: 'https://github.com/Anof-cyber',           icon: 'fab fa-github',      label: 'GitHub',   handle: '@Anof-cyber'    },
  { href: 'https://www.linkedin.com/in/sourav-kalal/', icon: 'fab fa-linkedin-in', label: 'LinkedIn', handle: '/in/sourav-kalal' },
  { href: 'https://x.com/Ano_f_',                      icon: 'fab fa-x-twitter',   label: 'Twitter',  handle: '@Ano_f_'        },
  { href: 'https://blog.souravkalal.tech',            icon: 'fas fa-pen-nib',     label: 'Blog',     handle: 'blog.souravkalal.tech' },
];

const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  useScrollReveal('.contact-section .reveal');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('https://formspree.io/f/xoqbvkal', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus({ ok: true, msg: "Message sent! I'll get back to you soon." });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ ok: false, msg: 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-desc">
            Available for security consulting, penetration testing engagements, and tool development collaborations.
          </p>
        </div>

        <div className="contact__grid">
          {/* ── Left: Info ── */}
          <div className="contact__info reveal delay-1">
            <div className="contact__info-card">
              <h3 className="contact__info-heading">Get in touch</h3>
              <p className="contact__info-text">
                Whether you have a security assessment, need a tool built, or just want
                to discuss a topic reach out and I'll respond promptly.
              </p>

              <div className="contact__email">
                <i className="fas fa-envelope" aria-hidden="true" />
                <a href="mailto:kalalsourav20@gmail.com">kalalsourav20@gmail.com</a>
              </div>
            </div>

            <div className="contact__socials-block">
              <h4 className="contact__socials-label mono">Find me on</h4>
              <div className="contact__socials">
                {SOCIAL.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-item"
                  >
                    <div className="contact__social-icon">
                      <i className={s.icon} aria-hidden="true" />
                    </div>
                    <div className="contact__social-text">
                      <span className="contact__social-label">{s.label}</span>
                      <span className="contact__social-handle mono">{s.handle}</span>
                    </div>
                    <i className="fas fa-arrow-right contact__social-arrow" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact__form-wrap reveal delay-2">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="cf-name" className="form__label">Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="form__input"
                    autoComplete="name"
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="cf-email" className="form__label">Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="form__input"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="cf-subject" className="form__label">Subject</label>
                <input
                  id="cf-subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  className="form__input"
                />
              </div>

              <div className="form__group">
                <label htmlFor="cf-message" className="form__label">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or question..."
                  required
                  className="form__input form__textarea"
                />
              </div>

              {status && (
                <div className={`form__status${status.ok ? ' form__status--ok' : ' form__status--err'}`}>
                  <i className={`fas ${status.ok ? 'fa-check-circle' : 'fa-exclamation-circle'}`} />
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary form__submit${submitting ? ' form__submit--loading' : ''}`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <i className="fas fa-spinner form__spinner" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
