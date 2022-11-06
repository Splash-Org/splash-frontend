import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navigation = () => {
  return (
    <>
      <div className="col-span-6  border-black ">
        <div className="flex h-full w-full  items-center justify-evenly  ">
          <Link href="/">Home</Link>
          <Link href="/watch">Watch</Link>
          <Link href="/upload">Upload</Link>
          {/* <div>Favorites</div>
          <div>History</div>
          <div>DeFi</div> */}
        </div>
      </div>
      <div className="col-span-2 flex h-full w-full">
        <div className="m-auto flex w-full justify-center">
          {/* <button className="rounded border-2 border-gray-800 bg-[#CFEBDF] p-5">
                CONNECT WALLET
              </button> */}

          <ConnectButton label="Connect Wallet" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
