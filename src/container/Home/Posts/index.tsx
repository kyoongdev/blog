import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './posts.module.scss';

import { Tags } from 'components';
import { blogs } from 'data';
import { TBlog } from 'data/type';

interface PostProps extends TBlog {
  onRoute: () => void;
}

const Post: React.FC<PostProps> = React.memo(
  ({ title, date, thumbnail, description, tags, onRoute }) => {
    return (
      <li className={styles.listItem} onClick={onRoute}>
        <Image
          className={styles.thumbnail}
          src={`${thumbnail}`}
          alt='thumbnail'
          width={120}
          height={120}
        />
        <header className={styles.listTitle}>
          {title}
          <Tags className={styles.tags} tags={tags} />
        </header>
        <p className={styles.description}>{description}</p>
        <footer>{dayjs(date).format('YYYY.MM.DD')}</footer>
      </li>
    );
  },
);

const Posts: React.FC = () => {
  const router = useRouter();

  const onRoute = (id: string) => () => router.push(`/blogs/${id}`);
  return (
    <section className={styles.container}>
      <ul key={'blogs'} className={styles.listWrapper}>
        {blogs.map((blog, index) => (
          <Post key={`blog-${blog.id}-${index}`} {...blog} onRoute={onRoute(blog.id)} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
