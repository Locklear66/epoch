'use client'
import { useState } from 'react';
import styles from './hamburgerStyles.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="/merch">Merch</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="/sign-in">Account</a></li>
          <li className={styles.play}><a href="https://epochofgenesis.com/download/EOGLauncher-prod-v1.0.exe">Play Now</a></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
