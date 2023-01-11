'use client';
import React from 'react';
import { NextLayout } from 'types';
import Header from 'components/Header';
import styles from './layout.module.scss';
import { useWindowSize } from 'hooks';
import '../styles/global.scss';

const RootLayout: NextLayout = ({ children }) => {
  const { height } = useWindowSize();

  return (
    <html>
      <head>
        <title>KyoongDev Notes</title>
      </head>
      <body>
        <main className={styles.main} style={{ minHeight: `${height}` }}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
