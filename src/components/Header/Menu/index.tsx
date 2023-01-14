import cx from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './menu.module.scss';
import MenuIcon from '../../../../public/assets/svg/menu.svg';

import DrawerEventEmitter from 'components/Drawer/DrawerEventEmitter';
import useClickOutside from 'hooks/useClickOutside';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false), isOpen);

  const onClickIcon = React.useCallback(() => {
    console.log('ASDF');
    DrawerEventEmitter.add();
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div onClick={onClickIcon}>
        <MenuIcon />
      </div>
      {/* <nav className={cx(styles.dropdownMenu, { [styles.isOpen]: isOpen })}>
        <ul>
          <li className={styles.dropdownItem}>
            <Link href={'/'}>Home</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link href={'/blogs'}>Blogs</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Menu;
