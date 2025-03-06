import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  hasParticles?: boolean; // New prop for particle effect
}

export default function Section({ id, title, children, hasParticles = false }: SectionProps) {
  return (
    <section className={`${styles.section} ${hasParticles ? styles.particles : ''}`} id={id}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}