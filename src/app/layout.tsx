import React from "react";
import { NextLayout } from "types";
import Header from "components/Header";
import styles from "./layout.module.scss";
import "../styles/global.scss";

const RootLayout: NextLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>KyoongDev Notes</title>
      </head>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
