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
        content={
          description ||
          '보이지 않는 가치를 찾는 개발자, Kyoongdev의 기술 블로그입니다. 개발 관련 글 및 좋은 개발자가 되기 위한 블로그 포스팅을 합니다.'
        }
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
      <link rel='canonical' href={url || 'https://blog.kyoongdev.com/'} />
      <meta name='author' content='Kyoongdev' />
      <meta
        name='keyword'
        content={
          keywords
            ? keywords.join(', ')
            : '기술블로그, 포트폴리오, 블로그, kyoongdev, kyoongdev blog, 백엔드 블로그, 프론트엔드 블로그'
        }
      />
    </Head>
  );
};

export default HeadMeta;
