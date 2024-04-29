import EventEmitter from 'events';

import type { Metadata } from 'next';

import styles from './layout.module.scss';
import Providers from './providers';

import { Drawer } from 'components';
import Header from 'components/Header';
import '../styles/global.scss';

EventEmitter.defaultMaxListeners = 30;

export const metadata: Metadata = {
  title: {
    default: 'Kyoongdev Village',
    template: '%s | Kyoongdev Village',
  },
  description:
    '보이지 않는 가치를 찾는 개발자, Kyoongdev의 기술 블로그입니다. 개발 관련 글 및 좋은 개발자가 되기 위한 블로그 포스팅을 합니다.',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
  icons: {
    icon: [
      { sizes: '32x32', url: '/favicon.ico' },
      { sizes: '16x16', url: '/favicon.ico' },
    ],
  },
  keywords: '기술블로그, 포트폴리오, 블로그, kyoongdev, kyoongdev blog, 백엔드 블로그',
  manifest: '/manifest.webmanifest',
  themeColor: '#ffffff',
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <Providers>
          <main id='layout-content'>
            <Header />
            <section className={styles.container}>{children}</section>
            <Drawer />
          </main>
          <div id='drawer' />
          <div id='modal' />
          <div id='pop-confirm' />
        </Providers>
      </body>
    </html>
  );
}
