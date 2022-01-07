import Head from "next/head";
import React from "react";
import Header from "./header/Header";

import RightHeader from "./rightHeader/RightHeader";

import Sidebar from "./sidebar/Sidebar";

import Footer from './footer/Footer'

const Layout: React.FC<{title: string, noRightbar?: boolean, noLeftbar?:boolean, bgCol?: string}> = ({ children, title, noRightbar, noLeftbar, bgCol }) => {
  return (
    <div className={"min-h-screen flex flex-col " + (bgCol ? `bg-[${bgCol}]` : 'bg-brown')}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isBack={(noRightbar && noLeftbar)} />

      <div className={"flex page_container pb-10 "}>

       { !noLeftbar && <div className="sticky top-[40px]">
          <Sidebar />
        </div>}

        <div className="flex-grow">

          {children}

        </div>

       { !noRightbar && <RightHeader />}

      </div>
     
      
      <Footer/>
    </div>
  );
};

export default Layout;
