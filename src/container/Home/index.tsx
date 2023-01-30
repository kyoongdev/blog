import React from 'react';

import Categories from './Categories';
import styles from './home.module.scss';
import Posts from './Posts';

import { HeadMeta } from 'components';
import { PagingRes } from 'services';
import { IGetPostsRes } from 'services/Posts/type';

interface Props {
  data: PagingRes<IGetPostsRes>;
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <HeadMeta />
      <article className={styles.mainInfo}>
        <p>보이는 것, 그 이상을 찾는 개발자</p>
        <p>KyoongDev의 기술 블로그</p>
      </article>
      <section className={styles.body}>
        <Posts data={data} />
        <Categories />
      </section>
    </>
  );
};

export default HomePage;
