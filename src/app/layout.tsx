import React from "react";
import "../styles/global.scss";
import { NextLayout } from "types";
import Header from "components/Header";
console.log(Header);

const RootLayout: NextLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>KyoongDev Logs</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
