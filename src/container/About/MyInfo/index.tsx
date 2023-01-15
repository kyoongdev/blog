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
      <article className={styles.description}>
        <p>개발 능력은 개발자로서 갖춰야하는 덕목 중 하나입니다.</p>
        <p>
          하지만 그것이 <strong>유일한</strong> 덕목이 되어서는 안됩니다.
        </p>
        <p className={styles.values}>
          보이지 않는 무형의 가치인
          <strong>소통</strong>,<strong>서비스의 목적 파악</strong> 그리고
          <strong>Self-Feedback</strong>을 할 수 있는 능력 갖추어야합니다.
        </p>
        <p>
          저는 유,무형의 가치를 지니기 위해 <strong>꾸준한 배움</strong>을 추구하는 개발자 입니다.
        </p>
      </article>
    </section>
  );
};

export default MyInfo;
