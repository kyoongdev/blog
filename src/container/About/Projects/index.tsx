import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactHTMLParser from 'react-html-parser';

import { type TProject, projects } from './data';
import styles from './projects.module.scss';

import LinkIcon from 'assets/svg/link.svg';
import { Tags } from 'components';

const Project: React.FC<TProject> = ({
  title,
  startedAt,
  endedAt,
  roles,
  description,
  skills,
  link,
  thumbnail,
}) => {
  return (
    <li className={styles.project}>
      {thumbnail && (
        <div className={styles.thumbnail}>
          <Image src={thumbnail} alt={`${title}_thumbnail`} width={220} height={160} />
        </div>
      )}
      <div className={styles.mainInfo}>
        <header className={styles.header}>
          <h1>{title}</h1>
          <div>
            <div className={styles.date}>
              <span>{dayjs(startedAt).format('YYYY.MM')}</span>
              <span>~</span>
              <span>{dayjs(endedAt).format('YYYY.MM')}</span>
            </div>
            {link && (
              <Link href={link} target='_blank' passHref className={styles.link}>
                <LinkIcon />
              </Link>
            )}
          </div>
        </header>
        <article className={styles.skillWrapper}>
          <h2>Skills</h2>
          <Tags className={styles.tags} tags={skills} />
        </article>
        <article className={styles.description}>
          <div>
            <h2>ROLE</h2>
            <Tags className={styles.tags} tags={roles} isDark />
          </div>
          {ReactHTMLParser(description)}
        </article>
      </div>
    </li>
  );
};

const Projects: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Projects</h1>
      <ul className={styles.projects}>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
