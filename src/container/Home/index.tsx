import React from 'react';

import Categorires from './Categories';
import styles from './home.module.scss';
import Posts from './Posts';

export const formatRate1000 = (rate1000: number): string => {
  if (Number.isInteger(rate1000)) {
    const rate = Math.abs(rate1000);
    const answer = `${[(rate / 10).toString().split('.')[0], Math.abs(rate % 10)].join('.')}%`;
    return rate1000 >= 0 ? answer : `-${answer}`;
  } else {
    const target = Math.abs(rate1000).toString();
    const splitted = target.split('.');
    const integer = splitted[0];
    const decimal = splitted[1];

    return `${integer.slice(0, -1)}.${integer[integer.length - 1]}${decimal}%`;
  }
};

const HomePage: React.FC = () => {
  return (
    <>
      <article className={styles.mainInfo}>
        <p>보이는 것, 그 이상을 찾는 개발자</p>
        <p>KyoongDev의 기술 블로그</p>
      </article>
      <section className={styles.body}>
        <Posts />
        <Categorires />
      </section>
    </>
  );
};

export default HomePage;
