import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const About = () => {
  const { pathname } = useLocation();
  const isNotHome = pathname !== '/home';
  const headerExtraClass = isNotHome ? styles.headerLeft : styles.headerRight

  return (
    <header className={`${styles.header} ${headerExtraClass}`}>
      {
        isNotHome
        ? <Link className={styles.link} to='/home'><FaArrowLeft/></Link>
        : <Link className={styles.link} to='/about'>About</Link>
      }
    </header>
  )
};

export default About;