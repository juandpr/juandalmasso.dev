import React from 'react';
import styles from './Blog.module.css';
import data from '../../data/articles';
import Article from '../Article';

const Blog = () => {
  return (
    <div className={styles.blog}>
    <h2 className={styles.blogTitle}>My personal blog</h2>
    {
      data && data.map(entry => 
        <Article
          key={entry.title}
          title={entry.title}
          intro={entry.intro}
          date={entry.date}
          url={entry.url}
        />
      )
    }
    </div>
  )
};

export default Blog;
