import Head from "next/head";
import { useRouter } from 'next/router'
import Navigation from "./components/Navigation";

export default function polygon1() {

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
            <Navigation />
          </div>
          <div className="grid grid-cols-[71vw,20.5vw] border-[2px] border-b-0 border-l-0 border-black">
            <div className="grid h-full w-full grid-rows-[33vw,7.8vw] border-r-4 border-black">
             
             
            </div>
            <div className="grid grid-rows-[19vw,17vw,7vw] mt-[-2vw]">
            <div className="relative p-20">
              <div
                className="h-full border-4  border-gray-700  bg-white text-center"
                style={{
                  background: "url(/static/livepeer.png) center",
                  backgroundSize: "90%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-[5vw] bg-[#E86C66] pr-2 pl-2 text-[0.7rem] text-yellow-50">
                  SPONSOR BY LIVEPEER{" "}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[1.1rem]">How to use Livepeer ?</div>
                <div className="flex space-x-10">
                  <div className="text-[0.7rem]">joymun.eth</div>
                  <div className="text-[0.7rem] border-green-600 border-2 rounded-xl ml-5 pl-1 pr-1">Follow +</div>
                </div>
                <div className="text-[0.8rem] ">1.6K views 4 months ago</div>
              </div>
            </div>
      
            <div className=" relative p-20 ">
              <div
                className="h-full border-4  border-gray-700  bg-white text-center"
                style={{
                  background: "url(/static/ipfs.png) center",
                  backgroundSize: "90%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-[5vw] bg-[#E86C66] pr-2 pl-2 text-[0.7rem] text-yellow-50">
                  SPONSOR BY IPFS{" "}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[1.1rem]">How to save file?</div>
                <div className="flex space-x-10">
                  <div className="text-[0.7rem]">swapneel.eth</div>
                  <div className="text-[0.7rem] border-green-600 border-2 rounded-xl ml-5 pl-1 pr-1">Follow +</div>
                </div>
                
              </div>
            </div>
              <div onClick={() => router.push("/list")} className="flex items-center justify-center border-t-4 border-black bg-[#4173CF] text-center text-[2.5rem] hover:text-white  cursor-pointer">
                LIST <span className="pl-4 text-[3.5rem]">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
