import React, { ReactNode } from "react";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

import Navigation from "./Navigation";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Default title" }: LayoutProps) => (
  <>
    <div className="flex h-full flex-col ">
      <Head>
        <title>{title || "Splash / Watch to Invest"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress
        height={2}
        color="#e11d48"
        options={{ showSpinner: false }}
      />
    </div>
    <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
      <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
        <div className="grid w-full grid-rows-[8.5vw,30vw] rounded border-[10px] border-black bg-white  p-0">
          <div className="grid  grid-cols-9 border-[2px] border-black">
            <div
              className="col-span-1 h-full border-r-4 border-l-0 border-black bg-white text-center"
              style={{
                background: "url(/static/logo.png) center",
                backgroundSize: "95%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <Navigation />
          </div>
        </div>
      </div>
      <main className="font-satoshi text-white">{children}</main>
    </div>
  </>
);

export default Layout;
