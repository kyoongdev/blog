import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
}

const HeadMeta: React.FC<Props> = ({ title, description, url, image, keywords }) => {
  return (
    <Head>
      <title>{title || 'Kyoongdev Village'}</title>
      <meta
        name='description'
        content={description || '보이지 않는 가치를 찾는 개발자, Kyoongdev의 기술 블로그입니다.'}
      />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content={title || 'Kyoongdev Village'} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url || 'https://blog.kyoongdev.com/'} />
      <meta
        property='og:image'
        content={image || 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/me.jpg'}
      />
      <meta property='og:article:author' content='Kyoongdev' />
      <meta name='description' content={description || 'Kyoongdev Village'} />
      <meta name='author' content='Kyoongdev' />
      <meta name='keyword' content={keywords ? keywords.join(', ') : '기술블로그, 포트폴리오'} />
    </Head>
  );
};

export default HeadMeta;
