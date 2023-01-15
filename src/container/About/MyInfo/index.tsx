import React from 'react';

import styles from './myInfo.module.scss';

import Github from 'assets/svg/github.svg';
import Gmail from 'assets/svg/gmail.svg';
import Phone from 'assets/svg/phone.svg';

const MyInfo: React.FC = () => {
  return (
    <section className={styles.container}>
      <article className={styles.myInfo}>
        <h1>안녕하세요.</h1>
        <div>
          <h1>눈에 보이지 않는 가치를 찾는 개발자</h1>
          <h1 className={styles.name}>박용준</h1>
          <h1>입니다.</h1>
        </div>
      </article>
      <article className={styles.aboutMe}>
        <ul>
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
