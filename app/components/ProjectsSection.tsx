'use client';

import Section from './Section';
import Slider from 'react-slick';
import styles from './ProjectsSection.module.css';

const projects = [
  { 
    title: 'Developer Portal', 
    description: 'A Drupal-based API portal for American Express GBT with user authentication and API testing tools.',
    tech: [
      { name: 'Drupal', icon: 'fab fa-drupal' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'REST API', icon: 'fas fa-code' },
    ],
    link: '#',
  },
  { 
    title: 'Health Websites', 
    description: 'Dynamic health websites for Indegene, optimized for SEO with React and Node.js.',
    tech: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'Drupal', icon: 'fab fa-drupal' },
    ],
    link: '#',
  },
  { 
    title: 'Enterprise App', 
    description: 'A scalable web app for Trinity Mobility with integrated APIs and performance optimizations.',
    tech: [
      { name: 'Drupal', icon: 'fab fa-drupal' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'APIs', icon: 'fas fa-code' },
    ],
    link: '#',
  },
  { 
    title: 'Creative Portfolio', 
    description: 'A responsive portfolio site for Creatisoul using modern web technologies.',
    tech: [
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Drupal', icon: 'fab fa-drupal' },
    ],
    link: '#',
  },
];

export default function ProjectsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // 3 seconds interval
    fade: false, // Use slide animation instead of fade for smoother effect
    cssEase: 'ease-in-out', // Smooth transition
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section id="projects" title="Projects" hasParticles={true}>
      <div className={styles.projectsContainer}>
        <Slider {...settings} className={styles.projectsSlider}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techTag}>
                        <i className={`${tech.icon} ${styles.techIcon}`}></i>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className={styles.viewProject}>
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
}