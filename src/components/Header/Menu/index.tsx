import React, { useState } from "react";
import cx from "classnames";
import styles from "./menu.module.scss";
import MenuIcon from "../../../../public/assets/svg/menu.svg";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const onClickIcon = () => setIsOpen((isOpen) => !isOpen);
  return (
    <div className={styles.dropdown}>
      <div onClick={onClickIcon}>
        <MenuIcon />
      </div>
      <menu className={cx(styles.dropdownMenu, { [styles.isOpen]: isOpen })}>
        <li className={styles.dropdownItem}>Home</li>
        <li className={styles.dropdownItem}>Blogs</li>
      </menu>
    </div>
  );
};

export default Menu;
