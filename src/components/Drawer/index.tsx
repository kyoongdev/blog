import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useMount } from 'react-use';

import styles from './drawer.module.scss';
import DrawerEventEmitter from './DrawerEventEmitter';

import { useCSR, useWindowSize } from 'hooks';
import { MENU } from 'utils';

const DrawerComponent: React.FC = () => {
  const { height } = useWindowSize();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClose = () => setIsOpen(false);

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
        exit: styles.exit,
        enter: styles.enter,
      }}
      unmountOnExit
      mountOnEnter
    >
      <div className={styles.wrapper}>
        <div className={styles.overlay} role='button' tabIndex={0} onClick={onClose} />
        <aside className={styles.drawer} aria-label='menu' style={{ height }}>
          <h1 className={styles.title}>Kyoongdev Notes</h1>
          <nav className={styles.nav}>
            <ul className={styles.navItemWrapper}>
              {MENU.map((menu, index) => (
                <li tabIndex={index}>
                  <Link href={menu.path}>{menu.name}</Link>
                </li>
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
