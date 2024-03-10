import cx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import styles from './skills.module.scss';

import {
  AwsImage,
  ExpressLogo,
  JiraLogo,
  NaverCloudImage,
  NestLogo,
  NextLogo,
  ReactLogo,
  SlackLogo,
  SpringBootImage,
} from 'assets/images';

interface SkillProps {
  title: string;
  main: Array<StaticImageData>;
  sub: Array<[string, number] | string>;
}

const Skill: React.FC<SkillProps> = ({ title, main, sub }) => {
  return (
    <article className={styles.skill}>
      <h1>{title}</h1>
      <div>
        <ul className={styles.main}>
          {main.map((item) => (
            <li key={item.src}>
              <Image src={item} alt={'logo'} />
            </li>
          ))}
        </ul>
        <ul className={styles.sub}>
          {sub.map((item) => (
            <li
              className={cx({ [styles.isBar]: typeof item !== 'string' })}
              key={typeof item == 'string' ? item : item[0]}
            >
              {typeof item == 'string' ? item : item[0]}
              {typeof item !== 'string' && (
                <div className={styles.progress}>
                  <div className={styles.bar} style={{ '--width': `${item[1] * 10}%` } as any}>{`${
                    item[1] * 10
                  }%`}</div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Skills: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>
        Skills <p>* 각 스킬에 마우스 호버 시 숙련도가 나옵니다.</p>
      </h1>
      <section className={styles.skills}>
        <Skill
          title='Frontend'
          main={[ReactLogo, NextLogo]}
          sub={[
            ['React', 6],
            ['NextJs', 6],
            ['Redux Toolkit', 2],
            ['React-Query', 6],
            ['Recoil', 6],
            ['SCSS', 6],
            ['Emotion.js', 2],
            ['styled-component', 2],
          ]}
        />
        <Skill
          title='Backend'
          main={[ExpressLogo, NestLogo, SpringBootImage]}
          sub={[
            ['NestJs', 8],
            ['Express', 7],
            ['Sequelize', 5],
            ['TypeORM', 5],
            ['Prisma', 8],
            ['mongoose', 2],
            ['Redis', 2],
            ['MySQL', 6],
            ['MongoDB', 2],
            ['Socket', 5],
            ['SpringBoot', 3],
            ['JPA', 3],
          ]}
        />
        <Skill
          title='Infra'
          main={[AwsImage, NaverCloudImage]}
          sub={[
            ['EC2', 5],
            ['RDS (+ Aurora)', 5],
            ['VPC', 5],
            ['ALB', 4],
            ['S3', 5],
            ['Cloud Front', 4],
            ['NAVER Server', 3],
          ]}
        />
        <Skill
          title='Tools'
          main={[SlackLogo, JiraLogo]}
          sub={['Slack', 'Jira', 'Telegram', 'Dooray', 'Github', 'Bitbucket', 'Gitlab', 'Notion']}
        />
      </section>
    </section>
  );
};

export default Skills;
