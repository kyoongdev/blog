import React from 'react';

import styles from './myInfo.module.scss';

import Building from 'assets/svg/building.svg';
import Github from 'assets/svg/github.svg';
import Gmail from 'assets/svg/gmail.svg';
import Phone from 'assets/svg/phone.svg';
import School from 'assets/svg/school.svg';

const MyInfo: React.FC = () => {
  return (
    <section className={styles.container}>
      <section>
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
          <p>을 할 수 있는 능력 갖추는 개발자가 되겠습니다.</p>
        </article>
      </section>
      <article className={styles.aboutMe}>
        <ul>
          <li className={styles.career}>
            <School />
            <p>Konkuk Univ. Industrial Engineerging & Smart ICT Convergence</p>
          </li>
          <li className={styles.career}>
            <Building />
            <p>Huemonelab - FE/BE (2020.09 ~ 2021.04)</p>
          </li>
          <li className={styles.career}>
            <Building />
            <p>Fuseble (with Freelancer) - FE/BE / Co-Founder (2021.11 ~ 2022.10)</p>
          </li>
          <li className={styles.career}>
            <Building />
            <p>MayB (Sole Proprietorship) - BE / BE Tutor (2022.10 ~ )</p>
          </li>
          <li className={styles.career}>
            <Building />
            <p>CodeStates - FE Tutor (2023.01 ~ 2023.04)</p>
          </li>
          <hr />
          <li>
            <Github />
            <p>Github</p>
          </li>
          <li>
            <Gmail />
            <p>Gmail</p>
          </li>
          <li>
            <Phone />
            <p>
              Phone<span>010-4059-7883</span>
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default MyInfo;
