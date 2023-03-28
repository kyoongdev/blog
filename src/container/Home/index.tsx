import React from 'react';

import Categories from './Categories';
import styles from './home.module.scss';
import Posts from './Posts';

import { HeadMeta } from 'components';
import { PagingRes } from 'services';
import { GetPostsResponse } from 'services/Posts/type';
import { GetTagsResponse } from 'services/Tags/type';

interface Props {
  posts: PagingRes<GetPostsResponse>;
  tags: GetTagsResponse;
}

const HomePage: React.FC<Props> = ({ posts, tags }) => {
  console.log({ tags });
  return (
    <>
      <HeadMeta />
      <article className={styles.mainInfo}>
        <p>보이는 것, 그 이상을 찾는 개발자</p>
        <p>KyoongDev의 기술 블로그</p>
      </article>
      <section className={styles.body}>
        <Posts data={posts} />
        <Categories data={tags} />
      </section>
    </>
  );
};

export default HomePage;
