import { useSetAtom } from 'jotai';
import React from 'react';

import { fusebleProjects, humonlabProjects, teamProjects } from './data';
import Project from './Project';
import styles from './projects.module.scss';

import { fusbleRef, humonlabRef } from 'state/project';

const Projects: React.FC = () => {
  const setFusebleRef = useSetAtom(fusbleRef);
  const setHumonlabRef = useSetAtom(humonlabRef);

  return (
    <section className={styles.container}>
      <header>
        <h1>Projects</h1>
      </header>

      <ul className={styles.projects}>
        {teamProjects.map((project, index) => (
          <Project key={project.title} {...project} />
        ))}
        {humonlabProjects.map((project, index) => (
          <Project ref={setHumonlabRef} key={project.title} {...project} />
        ))}
        {fusebleProjects.map((project, index) => (
          <Project ref={setFusebleRef} key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
