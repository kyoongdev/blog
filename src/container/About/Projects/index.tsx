import { useSetAtom } from 'jotai';
import React from 'react';

import { fusebleProjects, humonlabProjects, teamProjects } from './data';
import Project from './Project';
import styles from './projects.module.scss';

import { ClickProjectType, Project as ProjectType } from 'interface/project.interface';
import { fusbleRef } from 'state/project';

const Projects: React.FC = () => {
  const setFusebleRef = useSetAtom(fusbleRef);
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
        {teamProjects.map((project, index) => (
          <Project
            ref={(ref) => index == 0 && setFusebleRef(ref)}
            key={project.title}
            {...project}
          />
        ))}
        {fusebleProjects.map((project, index) => (
          <Project
            ref={(ref) => index == 0 && setFusebleRef(ref)}
            key={project.title}
            {...project}
          />
        ))}
        {humonlabProjects.map((project, index) => (
          <Project
            ref={(ref) => index == 0 && setFusebleRef(ref)}
            key={project.title}
            {...project}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
