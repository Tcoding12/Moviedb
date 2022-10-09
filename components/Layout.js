import React from "react";
import Head from "next/head";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title> Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;