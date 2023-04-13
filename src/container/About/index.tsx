import React from 'react';

import MyInfo from './MyInfo';
import Projects from './Projects';
import Skills from './Skills';

const AboutPage: React.FC = () => {
  return (
    <>
      <MyInfo />
      <Skills />
      <Projects />
    </>
  );
};

export default AboutPage;
