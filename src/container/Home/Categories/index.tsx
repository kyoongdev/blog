import React from 'react';
import styles from './categories.module.scss';

const Categorires: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>카테고리</h2>
      <ul className={styles.categories}>
        <li>프런트엔드</li>
        <li>백엔드</li>
        <li>인프라</li>
        <li>라이프스타일</li>
        <li>인간관계</li>
      </ul>
    </section>
  );
};

export default Categorires;
