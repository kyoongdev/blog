import React from 'react';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { projects } from './data';
import Form from './Form';
import Project from './Project';
import styles from './projects.module.scss';
import { selectedProjectState } from './state';

import { Button } from 'components';
import { ClickProjectType } from 'interface/project.interface';
import { deleteProjectApi } from 'services/Project';
import { ProjectsResponse } from 'services/Project/type';
import { isLocal } from 'utils/local';

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<ProjectsResponse | null>(null);

  const { mutateAsync } = useMutation(deleteProjectApi);

  const onClick = () => {
    setIsOpen(!isOpen);
    setSelectedProject(null);
  };
  const onClickProject = (type: ClickProjectType, project: ProjectsResponse) => {
    return () => {
      if (type === 'delete') {
        mutateAsync(project.id);
      } else {
        setSelectedProject(project);
        setIsOpen(true);
      }
    };
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
      <Form view={isOpen} selectedProject={selectedProject} />
      <ul className={styles.projects}>
        {projects.map((project, index) => (
          <Project
            key={project.title}
            {...project}
            id={`${index}`}
            onClickEdit={onClickProject('edit', { ...project, id: `${index}` })}
            onClickDelete={onClickProject('delete', { ...project, id: `${index}` })}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
