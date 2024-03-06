import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './myInfo.module.scss';

import { ProfileImage } from 'assets/images';
import Building from 'assets/svg/building.svg';
import Github from 'assets/svg/github.svg';
import Gmail from 'assets/svg/gmail.svg';
import School from 'assets/svg/school.svg';

const MyInfo: React.FC = () => {
  return (
    <section className={styles.container}>
      <section>
        <figure className={styles.profile}>
          <Image src={ProfileImage} alt='프로필 사진' width={140} height={140} />
        </figure>
        <article className={styles.myInfo}>
          <h1>안녕하세요.</h1>
          <div>
            <h1>보이는 것, 그 이상을 찾는 개발자</h1>
            <h1 className={styles.name}>박용준</h1>
            <h1>입니다.</h1>
          </div>
        </article>
        <article className={styles.description}>
          <p>개발 능력을 갖추는 것을 넘어</p>
          <p className={styles.values}>
            <strong>소통</strong>,<strong>서비스의 목적 파악</strong>
            <span /> 그리고
            <strong>Self-Feedback</strong>
          </p>
          <p>을 통해 꾸준히 발전하는 개발자가 되겠습니다.</p>
        </article>
      </section>
      <article className={styles.aboutMe}>
        <ul>
          <li className={styles.career}>
            <School />
            <p>Konkuk Univ. Industrial Engineerging</p>
          </li>
          <li className={styles.career}>
            <Building />
            <p>(주) 휴몬랩 - 인턴 (2020.09 ~ 2021.04)</p>
          </li>
          <li className={styles.career}>
            <Building />
            <p>(주) 퓨저블 - BE Developer (2022.03 ~ 2022.10)</p>
          </li>
          <hr />
          <li>
            <Link target={'_blank'} href={'https://github.com/kyoongdev'}>
              <Github />
              <p>Github</p>
            </Link>
          </li>
          <li>
            <Link href={'mailto:9898junjun2@gmail.com'}>
              <Gmail />
              <p>Gmail</p>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default MyInfo;
