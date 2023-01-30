import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';

import { API_URL } from 'config';
import { HomePage } from 'container';
import type { PagingRes } from 'services';
import type { IGetPostsRes } from 'services/Posts/type';

interface Props {
  data: PagingRes<IGetPostsRes>;
}
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const { data } = await axios.get<IGetPostsRes>(`${API_URL}/posts?page=1&limit=20`);

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
};

const Page: NextPage<Props> = ({ data }) => {
  return <HomePage data={data} />;
};

export default Page;
