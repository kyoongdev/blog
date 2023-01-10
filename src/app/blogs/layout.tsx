import Head from "next/head";
import { NextLayout } from "types";

const Layout: NextLayout = ({ children }) => {
  return <section>{children}</section>;
};

export default Layout;
