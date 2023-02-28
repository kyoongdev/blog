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
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { height } = useWindowSize();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isSettled, setIsSettled] = React.useState<boolean>(false);

  const onClose = () => setIsOpen(false);

  React.useEffect(() => {
    if (rippleRef.current.length === 0 || !isSettled || !isOpen) return;

    const handleClicked = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const id = (e.currentTarget as HTMLElement).id;

      if (id !== router.pathname) {
        setIsOpen(false);
        setIsSettled(false);
        router.push(id);
      }
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
    rippleRef.current.forEach((ref) => ref?.addEventListener('click', handleClicked));
    return () => {
      rippleRef.current.forEach((ref) => ref?.removeEventListener('click', handleClicked));
    };
  }, [isSettled, isOpen]);

  useMount(() => {
    const handleClick = () => {
      setIsOpen(true);
      setIsSettled(true);
    };
    DrawerEventEmitter.addChangeListner(handleClick);
    return () => DrawerEventEmitter.removeChangeListner(handleClick);
  });

  return (
    <CSSTransition
      in={isOpen}
      timeout={100}
      nodeRef={nodeRef}
      classNames={{
        enterDone: styles.enterDone,
        exitActive: styles.exitActive,
        exit: styles.exit,
        enter: styles.enter,
      }}
      unmountOnExit
    >
      <div className={styles.wrapper} ref={nodeRef}>
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
                  ref={(el) => {
                    if (!isOpen) return;

                    rippleRef.current[index] = el as HTMLLIElement;
                    index === MENU.length - 1 && setIsSettled(true);
                  }}
                  tabIndex={index}
                  id={menu.path}
                  className={styles.ripple}
                >
                  {menu.icon}
                  <p>{menu.name}</p>
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
