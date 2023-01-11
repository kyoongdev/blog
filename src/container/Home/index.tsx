import RootLayout from 'components/Layout';
import React from 'react';
import Categorires from './Categories';
import styles from './home.module.scss';

const HomePage = () => {
  return (
    <RootLayout>
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
    </RootLayout>
  );
};

export default HomePage;
