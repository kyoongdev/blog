'use client';
import cx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';
import Menu from './Menu';

import { Button } from 'components/Common';
import { useMe } from 'hooks';

const Header: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(true);
  const beforeScroll = React.useRef<number>(0);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const onFitAnimation = (): FrameRequestCallback => () => {
      const currentScrollY = window.scrollY;

      if (beforeScroll.current < currentScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      beforeScroll.current = currentScrollY;
    };

    const onScroll = () => requestAnimationFrame(onFitAnimation());
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cx(styles.header, { [styles.visible]: visible })}>
      <div>
        <h1>
          <Link href='/'>Kyoongdev Village</Link>
        </h1>
        <Link href='/auth/login'>
          <Button className={styles.login}>
            <p>로그인</p>
          </Button>
        </Link>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
