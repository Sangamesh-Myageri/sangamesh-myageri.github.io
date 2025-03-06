import Section from './Section';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" hasParticles={true}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <p>
            I’m Sangamesh Myageri, a web developer fueled by a passion for
            crafting cutting-edge digital experiences. With a blend of React,
            Node.js, and Drupal, I turn visions into vibrant web realities. My
            journey is one of innovation—let’s code the future together!
          </p>
          <button className={styles.aboutCta}>Start a Project</button>
        </div>
        <div className={styles.skillOrbit}>
          <div className={styles.orbitCore}></div>
          <div className={styles.orbitItem}>React</div>
          <div className={styles.orbitItem}>Node.js</div>
          <div className={styles.orbitItem}>Drupal</div>
        </div>
      </div>
    </Section>
  );
}