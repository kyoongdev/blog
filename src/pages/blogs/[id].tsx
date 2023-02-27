import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';

import { API_URL } from 'config';
import { BlogsPage } from 'container';
import { GetPostResponse } from 'services/Posts/type';

interface Props {
  blog: GetPostResponse | null;
}

export const getStaticPaths = async () => {
  const res = await axios.get<{ id: string }[]>(`${API_URL}/posts/all`);

  const paths = res.data.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

// 빌드될 때 실행
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };

  const res = await axios.get(`${API_URL}/posts/${params.id}/detail`);

  // 해당 페이지에 props로 보냄
  return { props: { blog: res.data } };
};

const Page: NextPage<Props> = ({ blog }) => {
  return <BlogsPage blog={blog} />;
};

export default Page;
