import React from 'react';

import styles from './menu.module.scss';

import MenuIcon from 'assets/svg/menu.svg';
import DrawerEventEmitter from 'components/Drawer/DrawerEventEmitter';

const Menu: React.FC = () => {
  const onClickIcon = React.useCallback(() => DrawerEventEmitter.add(), []);

  return (
    <div className={styles.dropdown}>
      <button type='button' onClick={onClickIcon}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default Menu;
