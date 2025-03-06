'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={styles.footer}
      style={{
        background: 'linear-gradient(135deg, rgba(46, 134, 171, 0.2), rgba(107, 191, 89, 0.2))',
      }}
    >
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} Sangamesh Myageri. All rights reserved.
        </p>
        <button onClick={scrollToTop} className={styles.backToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
}