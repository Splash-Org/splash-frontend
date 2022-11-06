import Head from "next/head";
import { useRouter } from 'next/router'
import Navigation from "./components/Navigation";

export default function defi_user() {

  const router = useRouter();

  return (
    <>
      <Head>Splash / Watch to Invest</Head>
      <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
        <div className="grid w-full grid-rows-[8.5vw,30vw] rounded border-[10px] border-black bg-white  p-0">
          <div className="grid  grid-cols-9 border-[2px] border-black">
            <div onClick={() => router.push("/")}
              className="col-span-1 h-full border-r-4 border-l-0 border-black bg-white text-center cursor-pointer"
              style={{
                background: "url(/static/logo.png) center",
                backgroundSize: "95%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
               <div className="col-span-6  border-black ">
              <div className="flex h-full w-full  items-center justify-evenly  ">
              <div onClick={() => router.push("/")}>Home</div>
               <div onClick={() => router.push("/list")}>Watch</div>
              <div onClick={() => router.push("/upload")}>Upload</div>
             <div onClick={() => router.push("/defi")}>DeFi</div> 

              </div>
            </div>
            <div className="col-span-2 flex h-full w-full">
              <div className="m-auto flex w-full justify-center">
                <button className="rounded border-2 border-gray-800 bg-[#F0CCCC] p-5">
                  0x4729a128f
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr,1fr]">
            <div className="border-r-4 border-black grid grid-rows-2 ">
              <div className="border-b-4 border-black flex flex-col space-y-10 pt-10 ">
                <div className="text-center text-[2.5rem]">Total Amount Earned</div>
                <div className="text-[1.8rem] pl-10"> Earned Today : $123.88 (2hr 33mins) <span className="text-[#0076BA] ">USDCx</span></div>
                <div className="text-[1.8rem] pl-10"> Earned This Week : $779,32 (5hr 18mins) <span className="text-[#0076BA] ">USDCx</span></div>
                <div className="text-[1.8rem] pl-10"> Earned This Month : $ 3382,96 (21hr 3mins) <span className="text-[#0076BA] ">USDCx</span></div>
              </div>
              <div className="grid grid-rows-2">
                <div className="flex flex-col items-center justify-center space-y-10">
                <div className="text-[1.8rem] pl-10">Total Amount You Staking APR : <span className="text-[#0076BA] ">5.70 %</span></div>
                <div className="text-[1.8rem] pl-10">Total Balance Staking : $  3575.78 <span className="text-[#0076BA] ">USDCx</span></div>
                </div>
                <div className="flex justify-center items-center space-x-5">
                  <div className="border-2 border-gray-700 p-2 bg-[#CFEBDF] rounded">STAKE TOKENS</div>
                  <div className="border-2 border-gray-700 p-2 bg-[#CFEBDF] rounded">SELL TOKENS</div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-[34vw,7vw]">
              <div className="p-10">
                <div className="text-center">Earned Sponsors ADs</div>
                <div onClick={() => router.push("/")}
                className="col-span-1 h-full  bg-white text-center cursor-pointer"
                style={{
                  background: "url(/static/sponsors.png) center",
                  backgroundSize: "80%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="mt-[-3vw] text-[1.5rem]">Top Sponsors You Earned By This Month : Filecoin (39.8%)</div>
              </div>
             
              <div onClick={() => router.push("/defi_sponsor")} className="flex items-center justify-center border-t-4 border-black bg-[#4173CF] text-center text-[2rem] hover:text-white  cursor-pointer">
                DeFi SPONSOR <span className="pl-4 text-[3.5rem]">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
