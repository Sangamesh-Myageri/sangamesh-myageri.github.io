'use client';

import Section from './Section';
import styles from './ExperienceSection.module.css';
import { useState } from 'react';


const experiences = [
  { 
    year: 'OCT 2024 - Present', 
    title: 'Web Developer', 
    company: 'American Express GBT', 
    description: 'Built a Drupal-based Developer Portal with API discovery, user authentication, and testing tools for enhanced usability.',
    fullDescription: 'Developed and maintained a Developer Portal (API Portal) using Drupal to enhance API discovery and user experience. Implemented customized features, including user authentication, API documentation, and subscription management for API consumers. Designed and developed interactive user interfaces to simplify API onboarding and enhance usability. Integrated API testing tools, enabling users to explore and test APIs directly through the portal. Collaborated with cross-functional teams to gather requirements and align portal features with business goals. Ensured portal security by implementing robust access control, data encryption, and secure API gateways. Monitored performance and implemented optimizations to ensure scalability and reliability. Created comprehensive technical documentation for portal functionality and maintenance processes.',
    icon: 'fab fa-drupal',
  },
  { 
    year: 'Aug 2023 - Aug 2024', 
    title: 'Web Developer', 
    company: 'Indegene', 
    description: 'Optimized Drupal SEO with Metatag and created dynamic pages using React, Node.js, and custom blocks for health websites.',
    fullDescription: 'Worked on SEO for Drupal application using Metatag, Simple XML Sitemap, Redirect, and Pathauto modules. Improved content strategy and digital marketing using Adobe Analytics. Created dynamic pages with custom block types in node layout. Developed health domain Drupal websites for various countries.',
    icon: 'fab fa-react',
  },
  { 
    year: 'July 2021 - Aug 2023', 
    title: 'Software Engineer', 
    company: 'Trinity Mobility', 
    description: 'Developed and maintained Drupal apps, integrated APIs, and optimized performance with caching and code reviews.',
    fullDescription: 'Developed and maintained high-quality web applications using Drupal. Designed and implemented custom modules to meet project requirements. Integrated third-party APIs for enhanced functionality and data exchange. Optimized website performance through caching, database tuning, and code optimization. Collaborated with front-end developers and designers for seamless integration. Conducted code reviews and provided technical guidance to junior developers. Troubleshooted and resolved issues related to functionality, performance, and security.',
    icon: 'fab fa-drupal',
  },
  { 
    year: 'Oct 2020 - July 2021', 
    title: 'Jr. Web Developer', 
    company: 'Creatisoul', 
    description: 'Crafted responsive websites with HTML, CSS, JavaScript, jQuery, and Drupal, ensuring cross-device compatibility.',
    fullDescription: 'Developed user interaction websites using HTML, CSS, JavaScript, jQuery, and Drupal. Ensured cross-device compatibility and responsive design principles. Collaborated with the team to deliver projects within deadlines. Assisted in troubleshooting and resolving website issues.',
    icon: 'fab fa-js',
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Section id="experience" title="Experience" hasParticles={true}>
      <div className={styles.experienceContainer}>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.experienceCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardTitle}>
                      <i className={`${exp.icon} ${styles.cardIcon}`}></i>
                      {exp.title}
                    </h3>
                    <p className={styles.cardCompany}>{exp.company}</p>
                    <p className={styles.cardDescription}>{expanded === index ? exp.fullDescription : exp.description}</p>
                    <button
                      className={styles.readMore}
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded === index ? 'Read Less' : 'Read More'}
                    </button>
                    <span className={styles.cardYear}>{exp.year}</span>
                  </div>
                  <div className={styles.cardBack}>
                    <p className={styles.cardFullDescription}>{exp.fullDescription}</p>
                    <button
                      className={styles.readMore}
                      onClick={() => toggleExpand(index)}
                    >
                      Read Less
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.timelineLine}></div>
        </div>
      </div>
    </Section>
  );
}