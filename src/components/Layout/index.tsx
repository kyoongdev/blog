'use client';
import React from 'react';
import { useWindowSize } from 'react-use';

import styles from './layout.module.scss';

import Header from 'components/Header';
import { NextLayout } from 'types';

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
