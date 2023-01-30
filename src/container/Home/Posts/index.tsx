import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import styles from './posts.module.scss';
import { tags } from '../state';

import { Tags } from 'components';
import { blogs } from 'data';
import { TBlog } from 'data/type';
import { PagingRes } from 'services';
import { getPosts } from 'services/Posts';
import { IGetPostsQuery, IGetPostsRes } from 'services/Posts/type';

interface PostProps extends IGetPostsRes {
  onRoute: () => void;
}

const Post: React.FC<PostProps> = React.memo(
  ({ title, createdAt, thumbnail, description, tags, onRoute }) => {
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
        <footer>{dayjs(createdAt).format('YYYY.MM.DD')}</footer>
      </li>
    );
  },
);

interface Props {
  data: PagingRes<IGetPostsRes>;
}

const Posts: React.FC<Props> = ({ data }) => {
  const selectedTags = useRecoilValue(tags);
  const router = useRouter();
  const { ref, inView } = useInView({ threshold: 0.8 });

  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<PagingRes<IGetPostsRes>, any, PagingRes<IGetPostsRes>>(
    ['getPosts', selectedTags],
    async ({ pageParam: page = 1 }) =>
      getPosts({ page, limit: 20, tags: selectedTags }).then((res) => res.data),
    {
      getNextPageParam: (lastPage) => {
        const paging = lastPage.paging;
        if (paging.hasNext) return paging.page + 1;
        return undefined;
      },
      initialData: { pageParams: [1], pages: [data] },
    },
  );

  const onRoute = (id: string) => () => router.push(`/blogs/${id}`);

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section className={styles.container}>
      <ul key={'blogs'} className={styles.listWrapper}>
        {posts?.pages.at(-1)?.data.map((blog, index) => (
          <Post key={`blog-${blog.id}-${index}`} {...blog} onRoute={onRoute(blog.id)} />
        ))}
      </ul>
      {hasNextPage && <div ref={ref} />}
    </section>
  );
};

export default Posts;
