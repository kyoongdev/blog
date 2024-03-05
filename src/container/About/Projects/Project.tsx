import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './project.module.scss';

import { LinkIcon } from 'assets/svg';
import { Markdown, Tags } from 'components';
import { Project as ProjectType } from 'interface/project.interface';

interface Props extends ProjectType {}

const Project: React.FC<Props> = ({
  title,
  roles,
  content,
  skills,
  link,
  thumbnail,
  endDate,
  startDate,
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
              <span>{dayjs(startDate).format('YYYY.MM')}</span>
              <span>~</span>
              <span>{dayjs(endDate).format('YYYY.MM')}</span>
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
        </article>
        <Markdown className={'project'} content={content} />
      </div>
    </li>
  );
};

export default Project;
