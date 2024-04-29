'use client';
import cx from 'clsx';
import Link from 'next/link';
import React, { useEffect } from 'react';

import styles from './header.module.scss';
import Menu from './Menu';

const HEIGHT = 72 as const;
const OFFSET = 6 as const;

const Header: React.FC = () => {
  const [scrollTop, setScrollTop] = React.useState<number>(0);
  const beforeScroll = React.useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onFitAnimation = (): FrameRequestCallback => () => {
      const currentScrollY = window.scrollY;

      if (beforeScroll.current < currentScrollY) {
        setScrollTop((prev) => {
          if (currentScrollY + window.innerHeight >= document.documentElement.scrollHeight)
            return HEIGHT;
          if (currentScrollY > HEIGHT && prev < -HEIGHT) {
            return -HEIGHT;
          } else {
            return prev + OFFSET;
          }
        });
      } else {
        setScrollTop((prev) => {
          if (currentScrollY === 0) return 0;
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
    <header className={cx(styles.header)} style={{ top: `-${scrollTop}px` }}>
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
