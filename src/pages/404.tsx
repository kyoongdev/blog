import { useRouter } from 'next/router';
import React from 'react';

export const Page = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/');
  }, []);
  return <div></div>;
};

export default Page;
