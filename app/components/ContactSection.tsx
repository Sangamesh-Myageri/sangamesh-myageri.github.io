'use client';

import Section from './Section';
import { useState } from 'react';
import styles from './ContactSection.module.css';

const socialLinks = [
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/your-profile' },
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/your-profile' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/your-profile' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, log the form data (you can add backend integration later)
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" title="Contact Me" hasParticles={true}>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
                placeholder="Your Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
                placeholder="Your Email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.formTextarea}
                placeholder="Your Message"
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
        <div className={styles.socialLinks}>
          <h3 className={styles.socialTitle}>Connect with Me</h3>
          <div className={styles.socialIcons}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                title={link.name}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}