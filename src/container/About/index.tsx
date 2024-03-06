import React from 'react';

import styles from './aboutPage.module.scss';
import Career from './Career';
import MyInfo from './MyInfo';
import Projects from './Projects';
import Skills from './Skills';

const AboutPage: React.FC = () => {
  return (
    <>
      <MyInfo />
      <hr className={styles.divider} />
      <Skills />
      <hr className={styles.divider} />
      <Career />
      <hr className={styles.divider} />
      <Projects />
    </>
  );
};

export default AboutPage;
