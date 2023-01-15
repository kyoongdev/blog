import React from 'react';

import Categorires from './Categories';
import styles from './home.module.scss';
import Posts from './Posts';

const HomePage: React.FC = () => {
  return (
    <>
      <article className={styles.mainInfo}>
        <p>보이지 않는 가치를 찾는 개발자</p>
        <p>KyoongDev의 기술 블로그</p>
      </article>
      <section className={styles.body}>
        <Posts />
        <Categorires />
      </section>
    </>
  );
};

export default HomePage;
