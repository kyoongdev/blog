import RootLayout from 'components/Layout';
import React from 'react';
import Categorires from './Categories';
import styles from './home.module.scss';
import Posts from './Posts';

const HomePage = () => {
  return (
    <>
      <article className={styles.mainInfo}>
        <p>Be Curious and Inspired</p>
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
