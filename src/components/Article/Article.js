import React from 'react';
import styles from './Article.module.css';

const Article = ({title, intro, date, url}) => {
  return (
    <article className={styles.article}>
      <a className={styles.title} href={url} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <div className={styles.intro}>
        {intro}
      </div>
      <div className={styles.date}>
          {date}
      </div>
    </article>
  )
};

export default Article;
