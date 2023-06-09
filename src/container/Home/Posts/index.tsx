import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { useMount } from 'react-use';

import styles from './posts.module.scss';
import { tagsState } from '../state';

import { Tags } from 'components';
import { PagingRes } from 'services';
import { getPosts } from 'services/Posts';
import { GetPostsResponse } from 'services/Posts/type';

interface PostProps extends GetPostsResponse {
  onRoute: () => void;
}

const Post: React.FC<PostProps> = React.memo(
  ({ title, createdAt, thumbnail, description, tags, viewCount, onRoute }) => {
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
        <footer>
          <p>{dayjs(createdAt).format('YYYY.MM.DD')}</p>
          <p>조회수 {viewCount}</p>
        </footer>
      </li>
    );
  },
);

const Posts: React.FC = () => {
  const selectedTags = useAtomValue(tagsState);
  const router = useRouter();

  const { ref, inView } = useInView({ threshold: 0.8 });

  const {
    data: blogs,
    isSuccess,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<PagingRes<GetPostsResponse>, any, PagingRes<GetPostsResponse>>(
    ['getPosts', selectedTags],
    async ({ pageParam: page = 1 }) =>
      getPosts({ page, limit: 20, tags: selectedTags }).then((res) => res.data),
    {
      getNextPageParam: (lastPage) => {
        const paging = lastPage.paging;
        if (paging.hasNext) return paging.page + 1;
        return undefined;
      },

      refetchOnMount: true,
    },
  );

  const onRoute = (id: string) => () => router.push(`/blogs/${id}`);

  React.useEffect(() => {
    if (inView || !isLoading) {
      fetchNextPage();
    }
  }, [inView, isLoading]);

  useMount(() => {
    router.prefetch('/blogs/[id]');
    blogs?.pages.at(-1)?.data.forEach((blog, index) => {});
  });

  return (
    <section className={styles.container}>
      <ul key={'blogs'} className={styles.listWrapper}>
        {isSuccess &&
          blogs?.pages
            .at(-1)
            ?.data.map((blog, index) => (
              <Post key={`blog-${blog.id}-${index}`} {...blog} onRoute={onRoute(blog.id)} />
            ))}
      </ul>
      {hasNextPage && <div ref={ref} />}
    </section>
  );
};

export default Posts;
