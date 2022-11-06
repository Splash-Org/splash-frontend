import Head from "next/head";
import { useRouter } from 'next/router'

export default function list() {

  const router = useRouter();

  return (
    <>
      <Head>Splash / Watch to Invest</Head>
      <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
        <div className="grid w-full grid-rows-[8.5vw,1fr] rounded border-[10px] border-black bg-white  p-0">
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
          <div className="grid grid-cols-[1fr,1fr,1fr] border-[2px]  ">

              <div className="relative">
                <div
                onClick={() => router.push("/player")}
                className="col-span-1 h-full  bg-white text-center cursor-pointer "
                style={{
                  background: "url(/static/video1.png) center",
                  backgroundSize: "70%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}></div>
                <div className="absolute bottom-[11vw] left-[6vw] bg-[#E86C66] pr-2 pl-2 text-[1rem] text-yellow-50">
                  SPONSOR BY Filecoin{" "}
                </div>
                <div onClick={() => router.push("/player")} className=" absolute top-[30.2vw] left-[6vw] bg-[#EAD762] pt-1 pb-1 pl-20 pr-20 text-[1.8rem] text-gray-800 cursor-pointer hover:text-white hover:bg-[#bfea62] ">
                  WATCH →</div>
              </div>

              <div className="relative">
                <div
                onClick={() => router.push("/player")}
                className="col-span-1 h-full  bg-white text-center cursor-pointer "
                style={{
                  background: "url(/static/video2.png) center",
                  backgroundSize: "70%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}></div>
                <div className="absolute bottom-[11vw] left-[6vw] bg-[#E86C66] pr-2 pl-2 text-[1rem] text-yellow-50">
                  SPONSOR BY Filecoin{" "}
                </div>
                <div onClick={() => router.push("/player")} className=" absolute top-[30.2vw] left-[6vw] bg-[#EAD762] pt-1 pb-1 pl-20 pr-20 text-[1.8rem] text-gray-800 cursor-pointer hover:text-white hover:bg-[#bfea62] ">
                  WATCH →</div>
              </div>

              <div className="relative">
                <div
                onClick={() => router.push("/player")}
                className="col-span-1 h-full  bg-white text-center cursor-pointer "
                style={{
                  background: "url(/static/video3.png) center",
                  backgroundSize: "70%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}></div>
                <div className="absolute bottom-[11vw] left-[6vw] bg-[#E86C66] pr-2 pl-2 text-[1rem] text-yellow-50">
                  SPONSOR BY Filecoin{" "}
                </div>
                <div onClick={() => router.push("/player")} className=" absolute top-[30.2vw] left-[6vw] bg-[#EAD762] pt-1 pb-1 pl-20 pr-20 text-[1.8rem] text-gray-800 cursor-pointer hover:text-white hover:bg-[#bfea62] ">
                  WATCH →</div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
