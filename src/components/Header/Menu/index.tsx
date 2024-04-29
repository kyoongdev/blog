import React, { useCallback } from 'react';

import styles from './menu.module.scss';

import { MenuIcon } from 'assets/svg';
import DrawerEventEmitter from 'components/Common/Drawer/DrawerEventEmitter';

const Menu: React.FC = () => {
  const onClickIcon = useCallback(() => DrawerEventEmitter.add(), []);

  return (
    <button className={styles.dropdown} type='button' onClick={onClickIcon}>
      <MenuIcon />
    </button>
  );
};

export default Menu;
