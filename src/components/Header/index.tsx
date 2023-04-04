'use client';
import cx from 'clsx';
import { useAtom, useAtomValue } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './header.module.scss';
import Menu from './Menu';

import { Button } from 'components/Common';
import { meState } from 'container/state';
import { clearTokens } from 'utils';
const HEIGHT = 72;
const OFFSET = 2;

const Header: React.FC = () => {
  const router = useRouter();
  const [me, setMe] = useAtom(meState);
  const [visible, setVisible] = React.useState<boolean>(true);
  const [scrollTop, setScrollTop] = React.useState<number>(0);
  const beforeScroll = React.useRef<number>(0);

  const onClickLogin = () => {
    if (me) {
      const res = confirm('로그아웃 하시겠습니까?');
      if (res) {
        clearTokens();
        setMe(null);
      }
    } else {
      router.push('/auth/login');
    }
  };

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const onFitAnimation = (): FrameRequestCallback => () => {
      const currentScrollY = window.scrollY;

      if (beforeScroll.current < currentScrollY) {
        setScrollTop((prev) => {
          if (currentScrollY > HEIGHT && prev < -HEIGHT) {
            return -HEIGHT;
          } else {
            return prev + OFFSET;
          }
        });
      } else {
        setScrollTop((prev) => {
          if (prev === 0) return 0;
          else if (prev > HEIGHT) return HEIGHT;
          else return prev - OFFSET;
        });
      }
      beforeScroll.current = currentScrollY;
    };

    const onScroll = () => requestAnimationFrame(onFitAnimation());
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cx(styles.header, { [styles.visible]: visible })}
      style={{ top: `-${scrollTop}px` }}
    >
      <div>
        <h1>
          <Link href='/'>Kyoongdev Village</Link>
        </h1>
        <Button className={styles.login} onClick={onClickLogin}>
          <p>{me ? `${me.name ?? me.userId}님` : '로그인'}</p>
        </Button>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
