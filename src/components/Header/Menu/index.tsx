import React from 'react';

import styles from './menu.module.scss';

import MenuIcon from 'assets/svg/menu.svg';
import DrawerEventEmitter from 'components/Drawer/DrawerEventEmitter';

const Menu: React.FC = () => {
  const onClickIcon = React.useCallback(() => DrawerEventEmitter.add(), []);

  return (
    <button className={styles.dropdown} type='button' onClick={onClickIcon}>
      <MenuIcon />
    </button>
  );
};

export default Menu;
