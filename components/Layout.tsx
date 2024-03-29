import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/react"

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "Course title" }: Props) => (
  <div className='w-full'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="px-2 md:px-8 lg:px-16 xl:px-28">
      {children}
      <Analytics />
    </div>
    <footer className="pt-12 px-4 md:px-8 lg:px-16 xl:px-28">
      <hr />
      <span className="text-sm text-gray-600">Adriana Fruchter email: adrianafruchter@gmail.com p: 9176120163</span>
    </footer>
  </div>
);

export default Layout;
