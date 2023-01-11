"use client";
import styles from "./header.module.scss";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>KyoongDev Notes</h1>
      <h1>KY</h1>
      <Menu />
    </header>
  );
};

export default Header;
