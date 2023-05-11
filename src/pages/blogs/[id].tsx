import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';

import { API_URL } from 'config';
import { BlogsPage } from 'container';
import { GetPostResponse } from 'services/Posts/type';

// export const getStaticPaths = async () => {
//   const response = await axios
//     .get<{ id: string }[]>(`${API_URL}/posts/all`)
//     .then((res) => res.data);

//   const paths = response.map((id) => ({
//     params: { id },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params as ParsedUrlQuery;
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ['getPost', id],
//     queryFn: async () =>
//       axios.get<GetPostResponse>(`${API_URL}/posts/${id}/detail`).then((res) => res.data),
//   });

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };

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
