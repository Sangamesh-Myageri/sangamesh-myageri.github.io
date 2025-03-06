'use client';

import Section from './Section';
import styles from './SkillsSection.module.css';

const skills = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node' },
  { name: 'Drupal', icon: 'fab fa-drupal' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'APIs', icon: 'fas fa-code' },
  { name: 'SEO', icon: 'fas fa-search' },
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills" hasParticles={true}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <i className={skill.icon}></i>
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}