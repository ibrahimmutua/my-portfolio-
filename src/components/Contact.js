import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with a backend service here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="label">Email</p>
                  <a href="mailto:ibrahimmutua315@gmail.com">ibrahimmutua315@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <div>
                  <p className="label">GitHub</p>
                  <a href="https://github.com/ibrahimmutua" target="_blank" rel="noopener noreferrer">github.com/ibrahimmutua</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="label">Location</p>
                  <p>Kenya</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/ibrahimmutua" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">LinkedIn</a>
              <a href="mailto:ibrahimmutua315@gmail.com" className="social-btn" title="Email">Email</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your-email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
