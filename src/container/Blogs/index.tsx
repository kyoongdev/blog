import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useMutation } from 'react-query';

import styles from './blogs.module.scss';

import { Button, Markdown, Tags } from 'components';
import HeadMeta from 'components/HeadMeta';
import { API_URL } from 'config';
import { updatePostState } from 'container/state';
import { useMe } from 'hooks';
import { increaseViewCountApi } from 'services/Posts';
import { GetPostResponse } from 'services/Posts/type';
import { getHeaderNodes, HeaderNodes } from 'utils';

interface Props {
  blog: GetPostResponse | null;
}

const Page: React.FC<Props> = ({ blog }) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const { isAdmin } = useMe();
  const router = useRouter();
  const setUpdatePost = useSetAtom(updatePostState);
  const { mutateAsync } = useMutation(increaseViewCountApi);
  const [headerNodes, setHeaderNodes] = React.useState<HeaderNodes[]>([]);

  const onClickRoute = () => {
    if (!blog) return;
    setUpdatePost(blog);
    router.push(`/post/${blog?.id}`);
  };
  const onClickSideMenu = (node?: HTMLElement) => {
    return () => {
      node?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  };

  React.useEffect(() => {
    if (!blog) return;

    mutateAsync(blog.id);
  }, []);

  React.useEffect(() => {
    if (!bodyRef.current) return;

    const markdownNode = bodyRef.current.getElementsByTagName('div')[0];
    setHeaderNodes(getHeaderNodes(markdownNode));
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
        {isAdmin && (
          <Button className={styles.update} onClick={onClickRoute}>
            수정
          </Button>
        )}
      </header>
      <article ref={bodyRef} className={styles.body}>
        <Markdown content={blog.content} />
        <ul className={styles.index}>
          {headerNodes.map((node) => {
            return (
              <li className={styles.h1Tags}>
                {node.h2?.map((h2) => {
                  return (
                    <p className={styles.preTags} onClick={onClickSideMenu(h2)}>
                      {h2.innerHTML}
                    </p>
                  );
                })}
                <p className={styles.h1Tags} onClick={onClickSideMenu(node.h1?._self)}>
                  {node.h1?._self.innerHTML}
                </p>
                {node.h1?.h2?.map((h2) => {
                  return (
                    <p className={styles.h2Tags} onClick={onClickSideMenu(h2)}>
                      {h2.innerHTML}
                    </p>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default Page;
