import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactHTMLParser from 'react-html-parser';

import { type Project as ProjectData } from './data';
import styles from './project.module.scss';

import { LinkIcon } from 'assets/svg';
import { Tags } from 'components';

const Project: React.FC<ProjectData> = ({
  title,
  startedAt,
  endedAt,
  roles,
  content,
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
          {ReactHTMLParser(content)}
        </article>
      </div>
    </li>
  );
};

export default Project;
