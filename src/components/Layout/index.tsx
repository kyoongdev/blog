'use client';
import React from 'react';

import styles from './layout.module.scss';

import { Drawer } from 'components';
import Header from 'components/Header';
import { useWindowSize } from 'hooks';
import { NextLayout } from 'types';

const RootLayout: NextLayout = ({ children }) => {
  const { height } = useWindowSize();

  return (
    <main className={styles.main} style={{ minHeight: `calc(${height} - 72px )` }}>
      <Header />
      {children}
      <Drawer />
    </main>
  );
};

export default RootLayout;
