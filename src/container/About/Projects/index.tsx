import React from 'react';
import { useMutation, useQuery } from 'react-query';

import { projects as projectData } from './data';
import Form from './Form';
import Project from './Project';
import styles from './projects.module.scss';

import { Button } from 'components';
import { useMe } from 'hooks';
import { ClickProjectType } from 'interface/project.interface';
import { deleteProjectApi, getProjectsApi } from 'services/Project';
import { ProjectsResponse } from 'services/Project/type';

const Projects: React.FC = () => {
  const { isAdmin } = useMe();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<ProjectsResponse | null>(null);

  const { mutateAsync } = useMutation(deleteProjectApi);

  const { data: projects } = useQuery(['getProjects'], () =>
    getProjectsApi().then((res) => res.data),
  );

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
        {isAdmin && (
          <Button type='button' onClick={onClick}>
            {isOpen ? '닫기' : '추가하기'}
          </Button>
        )}
      </header>
      <Form view={isOpen} selectedProject={selectedProject} />
      <ul className={styles.projects}>
        {[...(projects ?? []), ...projectData].map((project, index) => (
          <Project
            key={project.title}
            {...project}
            isAdmin={isAdmin}
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
