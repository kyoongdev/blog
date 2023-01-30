import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import styles from './blogs.module.scss';

import { Tags } from 'components';
import HeadMeta from 'components/HeadMeta';
import Markdown from 'components/Markdown';
import { IGetPostRes } from 'services/Posts/type';

const URL_PREFIX = 'https://kyoongdev.github.io';

interface Props {
  blog: IGetPostRes | null;
}

const Page: React.FC<Props> = ({ blog }) => {
  if (!blog) return <div>Not Found</div>;

  return (
    <section className={styles.container}>
      <HeadMeta
        title={blog.title}
        url={`${URL_PREFIX}/blogs/${blog.id}`}
        description={blog.description}
        keywords={[]}
      />
      <Image
        className={styles.thumbnail}
        src={`${blog.thumbnail}`}
        alt='thumbnail'
        width={240}
        height={240}
      />
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>{blog.title}</h1>
          <p>{dayjs(blog.createdAt).format('YYYY.MM.DD')}</p>
        </div>
        <Tags className={styles.tags} tags={blog.tags} />
      </header>
      <Markdown content={blog.content} />
    </section>
  );
};

export default Page;
