import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import styles from './blogs.module.scss';

import { Tags } from 'components';
import HeadMeta from 'components/HeadMeta';
import Markdown from 'components/Markdown';
import { blogs } from 'data';

interface Props {
  id: string;
}

const Page: React.FC<Props> = ({ id }) => {
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) return <div>Not Found</div>;

  return (
    <section className={styles.container}>
      <HeadMeta title={blog.title} description={blog.description} />
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
          <p>{dayjs(blog.date).format('YYYY.MM.DD')}</p>
        </div>
        <Tags className={styles.tags} tags={blog.tags} />
      </header>
      <Markdown content={blog.body} />
    </section>
  );
};

export default Page;
