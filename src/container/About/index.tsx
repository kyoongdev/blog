import React from 'react';

import MyInfo from './MyInfo';
import Projects from './Projects';
import Skills from './Skills';

import { ProjectsResponse } from 'services/Project/type';
interface Props {
  projects: ProjectsResponse[];
}

const AboutPage: React.FC<Props> = ({ projects }) => {
  return (
    <>
      <MyInfo />
      <Skills />
      <Projects projects={projects} />
    </>
  );
};

export default AboutPage;
