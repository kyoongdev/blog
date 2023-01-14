import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { createPortal } from 'react-dom';
import { useMount } from 'react-use';

import styles from './drawer.module.scss';
import DrawerEventEmitter from './DrawerEventEmitter';

import { useCSR } from 'hooks';
import { MENU } from 'utils';

const DrawerComponent: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClose = () => setIsOpen(false);

  useMount(() => {
    const handleClick = () => {
      console.log('ASDF!!');
      setIsOpen(true);
    };
    DrawerEventEmitter.addChangeListner(handleClick);
    return () => DrawerEventEmitter.removeChangeListner(handleClick);
  });
  console.log(isOpen);

  return (
    <div className={cx(styles.wrapper, { [styles.isOpen]: isOpen })}>
      <div className={styles.overlay} role='button' tabIndex={0} onClick={onClose} />
      <aside className={styles.drawer} aria-label=''>
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
  );
};

const Drawer: React.FC = () => {
  const isCSR = useCSR();

  if (!isCSR) return <></>;
  if (typeof window === 'undefined') return <></>;

  const drawerRoot = document.getElementById('#drawer') as HTMLDivElement;

  return createPortal(<DrawerComponent />, drawerRoot);
};

export default Drawer;
