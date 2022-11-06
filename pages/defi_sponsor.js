import Head from "next/head";
import { useRouter } from 'next/router'
import Navigation from "./components/Navigation";

export default function defi_sponsor() {

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
              <div className="cursor-pointer"  onClick={() => router.push("/")}>Home</div>
               <div className="cursor-pointer"  onClick={() => router.push("/list")}>Watch</div>
              <div className="cursor-pointer"  onClick={() => router.push("/upload")}>Upload</div>
             <div className="cursor-pointer"  onClick={() => router.push("/defi_user")}>DeFi</div> 

              </div>
            </div>
            <div className="col-span-2 flex h-full w-full">
              <div className="m-auto flex w-full justify-center">
                <button className="rounded border-2 border-gray-800 bg-[#F0CCCC] p-5">
                  SPONSOR
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr,1fr]">
            <div className="border-r-4 border-black grid grid-rows-2 ">
              <div className="border-b-4 border-black flex flex-col space-y-10 pt-10 ">
                <div className="text-center text-[2.5rem]">Total Amount You Sponsored</div>
                <div className="text-[1.8rem] pl-10"> Sponsored Today : $123.88 (2hr 33mins)</div>
                <div className="text-[1.8rem] pl-10"> Sponsored This Week : $779,32 (5hr 18mins) </div>
                <div className="text-[1.8rem] pl-10"> Sponsored This Month : $ 3382,96 (21hr 3mins) </div>
              </div>
              <div className="grid grid-rows-2">
                <div className="flex flex-col items-center justify-center space-y-10">
                <div className="text-[1.8rem] pl-10">Total User Views : <span className="text-[#0076BA] ">140k</span> viewers</div>
                <div className="text-[1.8rem] pl-10">Total Clicked Links : <span className="text-[#0076BA] ">50k</span> clicked</div>
                </div>
                <div className="flex justify-center items-center space-x-5">
                  <div className="border-2 border-gray-700 p-2 bg-[#CFEBDF] rounded">UPLOAD ADs</div>
                  <div className="border-2 border-gray-700 p-2 bg-[#CFEBDF] rounded">EDIT ADs</div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-[34vw,7vw]">
              <div className="p-10">
                <div className="text-center">Popular Contents You Sponsored</div>
                <div onClick={() => router.push("/")}
                className="col-span-1 h-full  bg-white text-center cursor-pointer"
                style={{
                  background: "url(/static/contents.png) center",
                  backgroundSize: "80%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="mt-[-3vw] text-[1.5rem]">Top Content You Sponsored This Month : Gaming (42.6%)</div>
              </div>
             
              <div onClick={() => router.push("/defi_user")} className="flex items-center justify-center border-t-4 border-black bg-[#4173CF] text-center text-[2rem] hover:text-white  cursor-pointer">
                DeFi User <span className="pl-4 text-[3.5rem]">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
