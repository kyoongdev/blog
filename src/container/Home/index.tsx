import React from 'react';
import Categorires from './Categories';
import styles from './home.module.scss';

const HomePage = () => {
  return (
    <>
      <section className={styles.container}>
        <article className={styles.mainInfo}>
          <div>
            <span>Dev</span>
            <span>+</span>
            <span>Skills</span>
            <span>+</span>
            <span>Life</span>
          </div>
        </article>
      </section>
      <Categorires />
    </>
  );
};

export default HomePage;
