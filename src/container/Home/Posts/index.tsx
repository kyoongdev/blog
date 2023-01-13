import React from 'react';
import styles from './posts.module.scss';
import exampleImage from '../../../../public/assets/images/logo.png';
import Image from 'next/image';

const Post: React.FC = () => {
  return (
    <li className={styles.listItem}>
      <Image className={styles.thumbnail} src={exampleImage} alt='asdf' width={120} height={120} />
      <header className={styles.listTitle}>
        오늘 공부하면서 느낀 점
        <ul className={styles.tags}>
          <li>프런트엔드</li>
          <li>인간관계</li>
        </ul>
      </header>
      <p className={styles.description}>
        아 개발 정말 재밌다...아 개발 정말 재밌다...아 개발 정말 재밌다...아 개발 정말 재밌다...아
        개발 정말 재밌다...아 개발 정말 재밌다...
      </p>
      <footer>2023.01.12</footer>
    </li>
  );
};

const Posts: React.FC = () => {
  return (
    <section>
      <ul className={styles.listWrapper}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </section>
  );
};

export default Posts;
