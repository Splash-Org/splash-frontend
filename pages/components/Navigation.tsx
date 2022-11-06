import React from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navigation = () => {
  const router = useRouter();
  return (
    <>
      <div className="col-span-6  border-black ">
        <div className="flex h-full w-full  items-center justify-evenly  ">
          <div onClick={() => router.push("/")}>Home</div>
          <div onClick={() => router.push("/watch")}>Watch</div>
          <div onClick={() => router.push("/upload")}>Upload</div>
          <div onClick={() => router.push("/defi")}>DeFi</div>
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
