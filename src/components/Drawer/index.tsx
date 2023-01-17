import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useMount } from 'react-use';

import styles from './drawer.module.scss';
import DrawerEventEmitter from './DrawerEventEmitter';

import { useCSR, useWindowSize } from 'hooks';
import { MENU } from 'utils';

const DrawerComponent: React.FC = () => {
  const rippleRef = React.useRef<HTMLLIElement[]>([]);

  const router = useRouter();
  const { height } = useWindowSize();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isSettled, setIsSettled] = React.useState<boolean>(false);

  const onClose = () => setIsOpen(false);

  const onClickLink = (path: string) => {
    return () => {
      if (router.pathname !== path) setIsOpen(false);
    };
  };

  React.useEffect(() => {
    if (rippleRef.current.length === 0 || !isSettled) return;

    const handleClicked = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ripple = document.createElement('div');
      const rect = target.getBoundingClientRect();
      ripple.className = styles.animate;
      ripple.style.left = `${e.x - rect.left}px`;
      ripple.style.top = `${e.y - rect.top}px`;

      target.append(ripple);
      setTimeout(function () {
        ripple.parentNode?.removeChild(ripple);
      }, 500);
    };
    rippleRef.current.forEach((ref) => ref.addEventListener('click', handleClicked));
    return () => {
      rippleRef.current.forEach((ref) => ref.removeEventListener('click', handleClicked));
    };
  }, [isSettled]);

  useMount(() => {
    const handleClick = () => setIsOpen(true);
    DrawerEventEmitter.addChangeListner(handleClick);
    return () => DrawerEventEmitter.removeChangeListner(handleClick);
  });

  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames={{
        enterDone: styles.enterDone,
        exitActive: styles.exitActive,
        enter: styles.enter,
      }}
      unmountOnExit
    >
      <div className={styles.wrapper}>
        <div className={styles.overlay} role='button' tabIndex={0} onClick={onClose} />
        <aside className={styles.drawer} aria-label='menu' style={{ height }}>
          <h1 className={styles.title}>
            <Link href='/'>Kyoongdev Village</Link>
          </h1>
          <nav className={styles.nav}>
            <ul className={styles.navItemWrapper}>
              {MENU.map((menu, index) => (
                <Link href={menu.path} onClick={onClickLink(menu.path)}>
                  <li
                    key={`${menu.name}-${index}`}
                    ref={(el) => {
                      rippleRef.current[index] = el as HTMLLIElement;
                      index === MENU.length - 1 && setIsSettled(true);
                    }}
                    tabIndex={index}
                    className={styles.ripple}
                  >
                    {menu.icon}
                    <p>{menu.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </CSSTransition>
  );
};

const Drawer: React.FC = () => {
  const isCSR = useCSR();

  if (!isCSR) return <></>;
  if (typeof window === 'undefined') return <></>;

  const drawerRoot = document.querySelector('#drawer') as HTMLDivElement;

  return createPortal(<DrawerComponent />, drawerRoot);
};

export default Drawer;
