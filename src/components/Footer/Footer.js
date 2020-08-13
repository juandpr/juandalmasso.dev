import React from 'react';
import styles from './Footer.module.css';
import data from '../../data/footer';
import { FaGithub, FaLinkedin, FaMedium, FaUser } from 'react-icons/fa';

const getIconByType = (type) => {
  switch (type) {
    case 'github':
      return <FaGithub/>;
    case 'linkedin':
      return <FaLinkedin/>;
    case 'medium':
      return <FaMedium/>;
    default:
      return <FaUser/>
  }
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {
        data && data.map(entry => (
          <a className={styles.link} href={entry.url} title={entry.title} target="_blank" rel="noopener noreferrer">{getIconByType(entry.icon)}</a>
        ))
      }
    </footer>
  )
};

export default Footer;