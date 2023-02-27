import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';

import { API_URL } from 'config';
import { HomePage } from 'container';
import type { PagingRes } from 'services';
import type { GetPostsResponse } from 'services/Posts/type';
import { GetTagsResponse } from 'services/Tags/type';

interface Props {
  posts: PagingRes<GetPostsResponse>;
  tags: GetTagsResponse;
}
export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await axios.get<GetPostsResponse>(`${API_URL}/posts?page=1&limit=20`);
  const { data: tags } = await axios.get<GetTagsResponse>(`${API_URL}/tags`);
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
