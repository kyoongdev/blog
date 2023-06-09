import axios from 'axios';
import { GetServerSideProps } from 'next';
import { getServerSideSitemapLegacy } from 'next-sitemap';

import { API_URL, HOST_URL } from 'config';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await axios.get(`${API_URL}/posts/all`);
  const lastmod = new Date().toISOString();

  const defaultFields = [
    {
      loc: HOST_URL,
      changefreq: 'daily',
      priority: '0.8',
      lastmod,
    },
    {
      loc: `${HOST_URL}/about`,
      changefreq: 'daily',
      priority: '0.8',
      lastmod,
    },
  ];

  const postFields = posts.data.map(({ id }: { id: string }) => ({
    loc: `${HOST_URL}/${id}`,
    changefreq: 'daily',
    priority: '0.9',
    lastmod,
  }));

  const fields = [...defaultFields, ...postFields];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default () => {
  return;
};
