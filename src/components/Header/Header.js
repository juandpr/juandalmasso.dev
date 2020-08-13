import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.about} to='/about'>About</Link>
    </header>
  )
};

export default About;