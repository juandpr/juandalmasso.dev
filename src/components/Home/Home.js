import React from 'react';
import styles from './Home.module.css';
import Blog from '../Blog';

const Home = () => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>Juan Dalmasso</h1>
      <p className={styles.subtitle}>
        Software engineer, specialised in web development. Passionate about clean, testable and scalable code. 
      </p>
      <Blog/>
    </React.Fragment>
  )
};

export default Home;
