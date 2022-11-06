import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "./components/Navigation";
import React, { useState, useRef } from "react";
import { BiCloud, BiMusic, BiPlus } from "react-icons/bi";
import { create } from "ipfs-http-client";

// export default function upload() {

//   const router = useRouter();

//   return (
//     <>
//       <Head>Splash / Watch to Invest</Head>
//       <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
//         <div className="grid w-full grid-rows-[8.5vw,30vw] rounded border-[10px] border-black bg-white  p-0">
//           <div className="grid  grid-cols-9 border-[2px] border-black">
//             <div onClick={() => router.push("/")}
//               className="col-span-1 h-full border-r-4 border-l-0 border-black bg-white text-center cursor-pointer"
//               style={{
//                 background: "url(/static/logo.png) center",
//                 backgroundSize: "95%",
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center",
//               }}
//             ></div>
//             <Navigation />
//           </div>
//           <div className="grid grid-cols-[71vw,20.5vw] border-[2px] border-b-0 border-l-0 border-black">
//             <div className="grid h-full w-full grid-rows-[33vw,7.8vw] border-r-4 border-black">

//             </div>
//             <div className="grid grid-rows-[27vw,7vw,7vw]">
//             <div className="border-b-4 border-black relative">
//               <div
//                 className="h-full border-r-4 border-l-0 border-black bg-white text-center"
//                 style={{
//                   background: "url(/static/ad.png) center",
//                   backgroundSize: "130%",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className="absolute bottom-[5vw] bg-[#E86C66] pr-2 pl-2 text-[1rem] text-yellow-50">
//                   SPONSOR BY Polygon{" "}
//                 </div>
//                 <div onClick={() => router.push("/sponsor")} className="relative top-[22.8vw] bg-[#EAD762] pt-1 pb-1 text-gray-800 cursor-pointer hover:text-white hover:bg-[#bfea62] ">
//                   BECOME A SPONSOR
//                 </div>
//               </div>
//             </div>
//               <div onClick={() => router.push("/")} className="flex items-center justify-center border-b-4 border-black bg-[#FFE3D3] text-center text-[2.5rem] hover:text-white hover:bg-[#ffd6d3] cursor-pointer">
//                 HOME <span className="pl-4 text-[3.5rem]">→</span>
//               </div>
//               <div onClick={() => router.push("/list")} className="flex items-center justify-center border-b-4 border-black bg-[#4173CF] text-center text-[2.5rem] hover:text-white  cursor-pointer">
//                 UPLOAD <span className="pl-4 text-[3.5rem]">→</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>

export default function Upload() {
  // Creating state for the input field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");

  //  Creating a ref for thumbnail and video
  const thumbnailRef = useRef();
  const videoRef = useRef();

  return (
    <>
      <div className="grid  grid-cols-9 border-[2px] border-black">
        <div
          onClick={() => router.push("/")}
          className="col-span-1 h-full cursor-pointer border-r-4 border-l-0 border-black bg-white text-center"
          style={{
            background: "url(/static/logo.png) center",
            backgroundSize: "95%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <Navigation />
      </div>
      <div className="flex h-[58vw] w-[100vw] bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus text-3xl font-extrabold text-gray-800 ">
        <div className="flex flex-1 flex-col">
          <div className="m-10 mt-5 flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-2/4 ">
              <label className="text-sm  text-[#9CA3AF]">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                className="mt-2 h-12 w-[90%]  rounded-md border border-[#444752] bg-transparent p-2 text-base text-white placeholder:text-white placeholder:opacity-20 focus:outline-none"
              />
              <label className="mt-10 text-[#9CA3AF]">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Never Gonna Give You Up was a global smash on its release in July 1987."
                className="mt-2 h-16 w-[90%] rounded-md  border border-[#444752] bg-transparent p-2 text-base text-white placeholder:text-white placeholder:opacity-20 focus:outline-none"
              />

              <label className="mt-10  text-sm text-[#9CA3AF]">Thumbnail</label>

              <div
                onClick={() => {
                  thumbnailRef.current.click();
                }}
                className="mt-2 flex h-36  w-64 items-center justify-center rounded-md  border-2 border-dashed border-gray-600 p-2"
              >
                {thumbnail ? (
                  <img
                    onClick={() => {
                      thumbnailRef.current.click();
                    }}
                    src={URL.createObjectURL(thumbnail)}
                    alt="thumbnail"
                    className="h-full rounded-md"
                  />
                ) : (
                  <BiPlus size={40} color="gray" />
                )}
              </div>

              <input
                type="file"
                className="hidden"
                ref={thumbnailRef}
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                }}
              />
            </div>

            <div
              onClick={() => {
                videoRef.current.click();
              }}
              className={
                video
                  ? " flex   h-64  w-96 items-center justify-center rounded-md"
                  : "mt-8 flex  h-64 w-96 items-center justify-center   rounded-md border-2 border-dashed border-gray-600"
              }
            >
              {video ? (
                <video
                  controls
                  src={URL.createObjectURL(video)}
                  className="h-full rounded-md"
                />
              ) : (
                <p className="text-[#9CA3AF]">Upload Video</p>
              )}
            </div>
          </div>
          <input
            type="file"
            className="hidden"
            ref={videoRef}
            accept={"video/*"}
            onChange={(e) => {
              setVideo(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
          <div className="mt-5 mr-10 flex  justify-center">
            <div className="flex items-center">
              <button className="mr-6  rounded-lg border border-gray-600 bg-transparent py-2  px-6  text-[#9CA3AF]">
                Discard
              </button>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="flex flex-row items-center  justify-between  rounded-lg bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
              >
                <BiCloud />
                <p className="ml-2">Upload</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
