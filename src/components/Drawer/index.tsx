import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useMount } from 'react-use';

import styles from './drawer.module.scss';
import DrawerEventEmitter from './DrawerEventEmitter';

import { useCSR, useWindowSize } from 'hooks';
import { MENU } from 'utils';

const DrawerComponent: React.FC = () => {
  const rippleRef = React.useRef<HTMLLIElement[]>([]);

  const { height } = useWindowSize();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClose = () => setIsOpen(false);

  React.useEffect(() => {
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
  }, []);

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
                <li
                  key={`${menu.name}-${index}`}
                  ref={(el) => (rippleRef.current[index] = el as HTMLLIElement)}
                  tabIndex={index}
                  className={styles.ripple}
                >
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
