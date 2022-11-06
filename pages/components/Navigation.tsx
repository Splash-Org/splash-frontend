import React from "react";
import { useRouter } from 'next/router'
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navigation = () => {

  const router = useRouter();
  return (
    <>
      <div className="col-span-6  border-black ">
        <div className="flex h-full w-full  items-center justify-evenly  ">
          <div className="cursor-pointer" onClick={() => router.push("/")}>Home</div>
          <div className="cursor-pointer"  onClick={() => router.push("/list")}>Watch</div>
          <div className="cursor-pointer" onClick={() => router.push("/upload")}>Upload</div>
          <div className="cursor-pointer"  onClick={() => router.push("/defi_user")}>DeFi</div> 
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
