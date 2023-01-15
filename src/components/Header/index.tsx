'use client';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <Link href='/'>Kyoongdev Village</Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
