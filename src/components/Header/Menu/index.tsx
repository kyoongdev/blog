import React from 'react';
import cx from 'classnames';
import styles from './menu.module.scss';
import MenuIcon from '../../../../public/assets/svg/menu.svg';
import useClickOutside from 'hooks/useClickOutside';
import Link from 'next/link';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false), isOpen);

  const onClickIcon = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div onClick={onClickIcon}>
        <MenuIcon />
      </div>
      <menu className={cx(styles.dropdownMenu, { [styles.isOpen]: isOpen })}>
        <li className={styles.dropdownItem}>
          <Link href={'/'}>Home</Link>
        </li>
        <li className={styles.dropdownItem}>
          <Link href={'/blogs'}>Blogs</Link>
        </li>
      </menu>
    </div>
  );
};

export default Menu;
