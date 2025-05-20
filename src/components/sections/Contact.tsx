import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xoqbvkal', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        form.reset();
      } else {
        setSubmitStatus({
          success: false,
          message: 'Oops! There was a problem sending your message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Oops! There was a problem sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss security consulting? Feel free to reach out.
          </p>
        </div>

        <div className={`contact-container ${animate ? 'animate' : ''}`}>
          <div className="contact-info">
            <div className="contact-details">
              <p>Interested in collaborating? Let's connect!</p>
              <p>I am available for security consulting, penetration testing, and secure code review.</p>

              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:kalalsourav20@gmail.com">kalalsourav20@gmail.com</a>
                </div>

                <div className="contact-item">
                  <span className="contact-label">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/sourav-kalal/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sourav-kalal/</a>
                </div>

                <div className="contact-item">
                  <span className="contact-label">GitHub:</span>
                  <a href="https://github.com/Anof-cyber" target="_blank" rel="noopener noreferrer">https://github.com/Anof-cyber</a>
                </div>

                <div className="contact-item">
                  <span className="contact-label">X:</span>
                  <a href="https://x.com/Ano_F_" target="_blank" rel="noopener noreferrer">https://x.com/Ano_F_</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Your Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  disabled={isSubmitting}
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus && (
                <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;