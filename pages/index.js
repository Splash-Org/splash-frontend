import Head from 'next/head'

export default function Home() {
  return (
   <div className='w-[100vw] h-[58vw] flex bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-20 font-mplus font-extrabold text-3xl text-gray-800 '>
    <head>Splash / Watch to Invest</head>
        <div className="w-full grid grid-rows-[17%,83%] border-[10px] p-0 bg-white border-black  rounded-[1.8%]">
          <div className='border-[2px]  border-black grid grid-cols-9'>
            <div className='col-span-1 border-black border-r-4 bg-white h-full text-center' style={{
                  background: 'url(/static/logo.png) center',
                  backgroundSize: '90%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:'center'
                }}>
              
            </div>
            <div className='col-span-6  border-black '>
              <div className='flex justify-evenly items-center  w-full h-full  '>
                <div>Home</div>
                <div>Subscriptions</div>
                <div>Trends</div>
                <div>Favorites</div>
                <div>History</div>
                <div>DeFi</div>
              </div>
            </div>
            <div className='col-span-2 w-full h-full flex'>
              <div className='flex w-full m-auto justify-center'>
                <button className='bg-[#CFEBDF] p-6 border-2 border-gray-800 rounded'>CONNECT WALLET</button>
              </div>
            </div>
          </div>
          <div className='border-[2px] border-black grid grid-cols-[77%,23%]'>
            <div className='border-r-4 h-full w-full border-black grid grid-rows-[80%,20%]'>
              <div className='border-b-4 border-black grid grid-rows-2 w-full h-full p-10'>
                <div className='flex items-end pb-10 text-[3rem]'>HELLO</div>
                <div className='flex'>
                  <div className='text-[14rem] pr-8 pt-14 font-Rubik text-[#4173CF]'>SPLASH</div>
                  <div className='flex-col space-y-6 text-3xl font-bold '>
                    <div>INVEST MONEY WHAT YOU WATCH</div>
                    <div>CHOOSE YOUR PRIVACY</div>
                    <div>EARN MORE MONEY BY DEFI</div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-[5%,8%,87%]'>
                  <div className='border-r-4 h-full w-full border-black'>1</div>
                  <div className='border-r-4 h-full w-full border-black'>2</div>
                  <div className='flex text-center items-center pl-10 text-[4rem] font-Rubik bg-gradient-to-r from-[#CCFCFF] to-[#DDA7FC]'>STREAMING ... TO ... YOU </div>
              </div>
            </div>
            <div className='grid grid-rows-[60%,20%,20%]'>
              <div className='border-b-4 border-black'></div>
              <div className='flex text-center items-center justify-center border-b-4 border-black bg-[#FFE3D3]'>CREATE ACCOUNT</div>
              <div className='flex text-center items-center justify-center'>TeamⓒThirdWaves</div>
            </div>
          </div>
        
        </div>
   </div>
  )
}
