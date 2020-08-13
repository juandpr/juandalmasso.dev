import React from 'react';
import styles from './Article.module.css';

const Article = ({title, intro, date, url}) => {
  return (
    <article className={styles.article}>
      <h3 className={styles.title}>{title}</h3>
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
