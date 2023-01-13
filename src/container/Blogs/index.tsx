import React from 'react';

import styles from './blogs.module.scss';

import { blogs } from 'data';

interface Props {
  id: string;
}

const Page: React.FC<Props> = ({ id }) => {
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) return <div>Not Found</div>;

  return (
    <>
      <div>sdfds</div>
      <h1>{blog.title}</h1>
    </>
  );
};

export default Page;
