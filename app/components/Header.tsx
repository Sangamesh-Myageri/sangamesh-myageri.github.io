'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Add this import
import styles from '../page.module.css';
import profileImage from '../../assets/profile-picture.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrollY > 50 ? styles.headerScrolled : ''}`}>
      <nav className={`${styles.nav} ${scrollY > 50 ? styles.navScrolled : ''}`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>SM</Link> {/* Replaced <a> with <Link> */}
        </div>
        <div
          className={`${styles.navToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li> {/* Keep <a> for in-page anchors */}
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.headerContainer}>
        <div className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <div className={`${styles.imageContainer} ${styles.pulseBorder}`}>
              <Image
                src={profileImage}
                alt="Sangamesh Myageri"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: '50%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          <div className={styles.heroText}>
            <h1 className={`${styles.title} ${styles.fadeIn}`}>Sangamesh Myageri</h1>
            <p className={`${styles.subtitle} ${styles.fadeInDelay}`}>
              Building Innovative Web Solutions with Passion
            </p>
            <button className={`${styles.cta} ${styles.hoverScale}`}>Explore My Work</button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>
          <div className={`${styles.modal} ${styles.open}`}>
            <div className={styles.modalHeader}>
              <div className={styles.profile}>
                <div className={styles.profileImage}>
                  <Image
                    src={profileImage}
                    alt="Sangamesh Myageri"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.profileInfo}>
                  <h3>Sangamesh Myageri</h3>
                  <p>sangumageri@gmail.com</p>
                </div>
              </div>
              <div
                className={`${styles.navToggle} ${styles.modalClose}`}
                onClick={() => setMenuOpen(false)}
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
            <ul className={styles.modalLinks}>
              <li>
                <a href="#about">
                  <i className="fas fa-user"></i> About
                </a>
              </li>
              <li>
                <a href="#experience">
                  <i className="fas fa-briefcase"></i> Experience
                </a>
              </li>
              <li>
                <a href="#projects">
                  <i className="fas fa-code"></i> Projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}