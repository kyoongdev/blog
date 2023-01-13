import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { BlogsPage } from 'container';
import { blogs } from 'data';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: blogs.map((blog) => ({ params: { id: blog.id } })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  return {
    props: {
      id,
    },
  };
};

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogsPage id={id} />;
};

export default Page;
