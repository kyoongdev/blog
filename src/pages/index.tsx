import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import { API_URL } from 'config';
import { HomePage } from 'container';
import type { GetPostsResponse } from 'services/Posts/type';
import { GetTagsResponse } from 'services/Tags/type';

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['getPosts', []],
    queryFn: async () =>
      axios.get<GetPostsResponse>(`${API_URL}/posts?page=1&limit=20`).then((res) => res.data),
  });
  await queryClient.prefetchQuery({
    queryKey: 'getTags',
    queryFn: async () => axios.get<GetTagsResponse>(`${API_URL}/tags`).then((res) => res.data),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

const Page: NextPage = () => {
  return <HomePage />;
};

export default Page;
