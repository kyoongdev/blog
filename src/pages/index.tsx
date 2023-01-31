import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';

import { API_URL } from 'config';
import { HomePage } from 'container';
import type { PagingRes } from 'services';
import type { IGetPostsRes } from 'services/Posts/type';
import { IGetTagsRes } from 'services/Tags/type';

interface Props {
  posts: PagingRes<IGetPostsRes>;
  tags: IGetTagsRes;
}
export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await axios.get<IGetPostsRes>(`${API_URL}/posts?page=1&limit=20`);
  const { data: tags } = await axios.get<IGetTagsRes>(`${API_URL}/tags`);
  return {
    props: {
      posts,
      tags,
    },
  };
};

const Page: NextPage<Props> = ({ posts, tags }) => {
  return <HomePage posts={posts} tags={tags} />;
};

export default Page;
