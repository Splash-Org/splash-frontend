import Head from "next/head";
import { useRouter } from 'next/router'

export default function list() {

  const router = useRouter();

  return (
    <>
      <Head>Splash / Watch to Invest</Head>
      <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
        <div className="grid w-full grid-rows-[8.5vw,30vw] rounded border-[10px] border-black bg-white  p-0">
          <div className="grid  grid-cols-9 border-[2px] border-black">
            <div
              onClick={() => router.push("/")}
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
                <button className="rounded border-2 border-gray-800 bg-[#E86C66] p-5">
                  0x4729a128f
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[71vw,20.5vw] border-[2px] border-b-0 border-l-0 border-black">
          
            
          </div>
        </div>
      </div>
    </>
  );
}
