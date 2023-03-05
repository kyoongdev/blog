import React from 'react';

import { projects } from './data';
import Form from './Form';
import Project from './Project';
import styles from './projects.module.scss';

import { Button } from 'components';
import { isLocal } from 'utils/local';

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.container}>
      <header>
        <h1>Projects</h1>
        {isLocal && (
          <Button type='button' onClick={onClick}>
            {isOpen ? '닫기' : '추가하기'}
          </Button>
        )}
      </header>
      <Form view={isOpen} />
      <ul className={styles.projects}>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
