'use client';
import React from 'react';
import { NextLayout } from 'types';
import Header from 'components/Header';
import styles from './layout.module.scss';
import { useWindowSize } from 'hooks';

const RootLayout: NextLayout = ({ children }) => {
  const { height } = useWindowSize();

  return (
    <main className={styles.main} style={{ minHeight: `calc(${height} - 72px )` }}>
      <Header />
      {children}
    </main>
  );
};

export default RootLayout;
