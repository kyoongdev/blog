import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import { API_URL } from 'config';
import { BlogsPage } from 'container';
import { GetPostResponse } from 'services/Posts/type';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as ParsedUrlQuery;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getPost', id],
    queryFn: async () =>
      axios.get<GetPostResponse>(`${API_URL}/posts/${id}/detail`).then((res) => res.data),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

const Page: NextPage = () => {
  return <BlogsPage />;
};

export default Page;
