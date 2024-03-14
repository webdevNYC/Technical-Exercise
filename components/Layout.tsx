import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "Course title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="px-28"> {children}</div>
    <footer className="px-28 pt-28">
      <hr />
      <span className="text-sm text-gray-600">Adriana Fruchter email: adrianafruchter@gmail.com p: 9176120163</span>
    </footer>
  </div>
);

export default Layout;
