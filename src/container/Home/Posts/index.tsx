import React from 'react';
import styles from './posts.module.scss';

const Post: React.FC = () => {
  return (
    <li className={styles.listItem}>
      <div>ㅇㄹㅇㄹㅇㄹ</div>
    </li>
  );
};

const Posts: React.FC = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.listWrapper}>
        <Post />
      </ul>
    </section>
  );
};

export default Posts;
