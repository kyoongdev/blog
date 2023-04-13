import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import { API_URL } from 'config';
import { AboutPage } from 'container';
import { ProjectsResponse } from 'services/Project/type';

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getProjects'],
    queryFn: async () =>
      axios.get<ProjectsResponse[]>(`${API_URL}/projects`).then((res) => res.data),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

const Page: NextPage = () => {
  return <AboutPage />;
};

export default Page;
