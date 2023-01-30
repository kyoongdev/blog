import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';

import { API_URL } from 'config';
import { BlogsPage } from 'container';
import { IGetPostRes } from 'services/Posts/type';

interface Props {
  blog: IGetPostRes | null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data: blog } = await axios.get(`${API_URL}/posts/${ctx.query.id as string}`);

  return {
    props: {
      blog,
    },
  };
};

const Page: NextPage<Props> = ({ blog }) => {
  return <BlogsPage blog={blog} />;
};

export default Page;
