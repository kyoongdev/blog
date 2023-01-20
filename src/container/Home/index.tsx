import React from 'react';

import Categorires from './Categories';
import styles from './home.module.scss';
import Posts from './Posts';

import { HeadMeta } from 'components';

const HomePage: React.FC = () => {
  return (
    <>
      <HeadMeta />
      <article className={styles.mainInfo}>
        <p>보이는 것, 그 이상을 찾는 개발자</p>
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
