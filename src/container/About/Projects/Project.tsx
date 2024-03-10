import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { forwardRef } from 'react';

import styles from './project.module.scss';

import { LinkIcon } from 'assets/svg';
import { Markdown, Tags } from 'components';
import { Project as ProjectType } from 'interface/project.interface';

interface Props extends ProjectType {}

const Project = forwardRef<HTMLLIElement, Props>(
  ({ title, roles, content, skills, link, endDate, startDate, hardPoints, image, isTeam }, ref) => {
    return (
      <li className={styles.project} ref={ref}>
        {image && (
          <figure className={styles.image}>
            <Image src={image} alt='이미지' width={240} height={220} />
          </figure>
        )}
        <div className={styles.mainInfo}>
          <header className={styles.header}>
            <h1>
              {title}
              {isTeam && <p>팀 프로젝트</p>}
            </h1>
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
        {hardPoints && (
          <ul className={styles.hardPoints}>
            {hardPoints.map((hardPoint, idx) => (
              <>
                <hr />
                <li key={idx} className={styles.hardPoint}>
                  <strong>겪었던 문제</strong>
                  <p>{hardPoint.cause}</p>
                  <strong>해결 방안 및 개선점</strong>
                  <p>{hardPoint.solution}</p>
                </li>
              </>
            ))}
          </ul>
        )}
      </li>
    );
  },
);

export default Project;
