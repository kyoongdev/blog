import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { useMutation } from 'react-query';

import styles from './blogs.module.scss';

import { Markdown, Tags } from 'components';
import HeadMeta from 'components/HeadMeta';
import { API_URL } from 'config';
import { useMe } from 'hooks';
import { increaseViewCountApi } from 'services/Posts';
import { GetPostResponse } from 'services/Posts/type';

interface Props {
  blog: GetPostResponse | null;
}

const Page: React.FC<Props> = ({ blog }) => {
  const { mutateAsync } = useMutation(increaseViewCountApi);

  React.useEffect(() => {
    if (!blog) return;

    mutateAsync(blog.id);
  }, []);

  if (!blog) return <div>Not Found</div>;

  return (
    <section className={styles.container}>
      <HeadMeta
        title={blog.title}
        url={`${API_URL}/blogs/${blog.id}`}
        description={blog.description}
        keywords={blog.keywords}
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
