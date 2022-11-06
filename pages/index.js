import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
      <Head>Splash / Watch to Invest</Head>
      <div className="grid w-full grid-rows-[8.5vw,30vw] rounded border-[10px] border-black bg-white  p-0">
        <div className="grid  grid-cols-9 border-[2px] border-black cursor-pointer">
          <div onClick={() => router.push("/")}
            className="col-span-1 h-full border-r-4 border-l-0 border-black bg-white text-center "
            style={{
              background: "url(/static/logo.png) center",
              backgroundSize: "95%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="col-span-6  border-black ">
            <div className="flex h-full w-full  items-center justify-evenly  ">
              <div>Home</div>
              <div>Subscriptions</div>
              <div>Trends</div>
              <div>Favorites</div>
              <div>History</div>
              <div>DeFi</div>
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
        </div>
        <div className="grid grid-cols-[71vw,20.5vw] border-[2px] border-b-0 border-l-0 border-black">
          <div className="grid h-full w-full grid-rows-[33vw,7.8vw] border-r-4 border-black">
            <div className="grid w-full grid-rows-2 border-b-4 border-black p-5 pl-7">
              <div className="flex items-end pb-2 text-[3rem]">HELLO</div>
              <div className="flex pt-10">
                <div className="pr-4 pt-[4vw] font-Rubik text-[11.6rem] text-[#4173CF]">
                  SPLASH
                </div>
                <div className="flex-col space-y-4 pt-3 text-[1.5rem] font-bold ">
                  <div>INVEST MONEY WHAT YOU WATCH</div>
                  <div>CHOOSE YOUR PRIVACY</div>
                  <div>EARN MORE MONEY BY DEFI</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[3vw,5.8vw,62vw]">
              <div className="h-full w-full border-r-4 border-black"></div>
              <div className="h-full w-full border-r-4 border-black bg-[#]"></div>
              <div className="flex items-center bg-gradient-to-r from-[#CCFCFF] to-[#DDA7FC] pl-10 text-center   font-Rubik text-[4rem] font-semibold">
                STREAMING ... TO ... YOU{" "}
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[26vw,7vw,7vw]">
            <div className="border-b-4 border-black">
              <div
                className="h-full border-r-4 border-l-0 border-black bg-white text-center"
                style={{
                  background: "url(/static/ad.png) center",
                  backgroundSize: "130%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="fixed bottom-[23vw] bg-[#E86C66] pr-2 pl-2 text-[1rem] text-yellow-50">
                  SPONSOR BY Filecoin{" "}
                </div>
                <div onClick={() => router.push("/sponsor")} className="relative top-[22.8vw] bg-[#EAD762] pt-1 pb-1 text-gray-800 cursor-pointer hover:text-white hover:bg-[#bfea62] ">
                  BECOME A SPONSOR
                </div>
              </div>
            </div>
            <div onClick={() => router.push("/worldcoin1")}  className="flex items-center justify-center border-b-4 border-black bg-[#FFE3D3] text-center hover:text-white hover:bg-[#ffd6d3] cursor-pointer">
              CREATE ACCOUNT
            </div>
            <div className="flex items-center justify-center text-center">
              TeamⓒThirdWaves
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
