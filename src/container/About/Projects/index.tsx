import React from 'react';

import { projects as projectData } from './data';
import Project from './Project';
import styles from './projects.module.scss';

import { ClickProjectType, Project as ProjectType } from 'interface/project.interface';

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  const onClickProject = (type: ClickProjectType, project: ProjectType) => {
    return () => {
      setIsOpen(true);
    };
  };

  return (
    <section className={styles.container}>
      <header>
        <h1>Projects</h1>
      </header>

      <ul className={styles.projects}>
        {projectData.map((project, index) => (
          <Project key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
