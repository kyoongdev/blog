import dayjs from 'dayjs';
import React from 'react';
import ReactHTMLParser from 'react-html-parser';

import styles from './projects.module.scss';

interface ProjectProps {
  title: string;
  startedAt: string;
  endedAt: string;
  role: string;
  description: string;
  skills: Array<string>;
  link?: string;
  thumbnail?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  startedAt,
  endedAt,
  role,
  description,
  skills,
  link,
}) => {
  return (
    <li className={styles.project}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.date}>
          <span>{dayjs(startedAt).format('YYYY.MM')}</span>
          <span>~</span>
          <span>{dayjs(endedAt).format('YYYY.MM')}</span>
        </div>
      </header>
      <article className={styles.skillWrapper}>
        <h2>Skills</h2>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </article>
      <article className={styles.description}>
        <h2>
          ROLE <p>{role}</p>
        </h2>
        {ReactHTMLParser(description)}
      </article>
    </li>
  );
};

const Projects: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Projects</h1>
      <ul className={styles.projects}>
        <Project
          key='ID'
          title={'(주) 빗썸라이브'}
          startedAt='2022.08'
          endedAt='2022.10'
          role='Frontend'
          skills={['Next.js', 'Typescript', 'React-Query', 'Recoil', 'SCSS']}
          description='<p>웹페이지의 개발 및 리뉴얼을 진행하였으며</p><p>샵바이 프리미엄을 통한 커머스 시스템 Frontend를 개발하였습니다.</p>'
        />
      </ul>
    </section>
  );
};

export default Projects;
