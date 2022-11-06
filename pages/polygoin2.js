import Head from "next/head";

export default function polygon1() {
  return (
    <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
      <Head>Splash / Watch to Invest</Head>
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
              <button className="rounded border-2 border-gray-800 bg-[#CFEBDF] p-5">
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[71vw,20.5vw] border-[2px] border-b-0 border-l-0 border-black">
          <div className="grid h-full w-full grid-rows-[33vw,7.8vw] border-r-4 border-black">
            <div className="grid w-full grid-rows-2 border-b-4 border-black text-[2.5rem]">
              <div className="flex items-center pl-20 font-mplus">
                Open your Polygon ID Wallet and Scan QR code.
              </div>
              <div className="mt-[-2vw] flex-col space-y-5">
                <div className="flex items-center pl-[25vw] text-[2rem]">
                  AGE (Required Over 18 +)
                </div>
                <div
                  className="m-auto h-[10vw] w-[10vw] bg-white "
                  style={{
                    background: "url(/static/age_qr.png) center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-[3vw,5.8vw,62vw]">
              <div className="h-full w-full border-r-4 border-black"></div>
              <div className="h-full w-full border-r-4 border-black bg-[#]"></div>
              <div className="flex items-center bg-gradient-to-r from-[#CCFCFF] to-[#DDA7FC] pl-10 text-center   font-Rubik text-[4rem] font-semibold">
                STREAMING ... 20%{" "}
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
                <div className="relative top-[22.8vw] bg-[#EAD762] pt-1 pb-1 text-gray-800 ">
                  BECOME A SPONSOR
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center border-b-4 border-black bg-[#FFE3D3] text-center text-[2.5rem]">
              NEXT <span className="pl-4 text-[3.5rem]">→</span>
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
