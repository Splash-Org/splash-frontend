import Head from 'next/head'

export default function Home() {
  return (
   <div className='w-[100vw] h-[58vw] flex bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-20  '>
    <head>Splash / Watch to Invest</head>
        <div className="w-full grid grid-rows-[18%,67%,15%] border-[10px] p-0 bg-white border-black  rounded-[1.8%]">
          <div className='border-[2px]  border-black grid grid-cols-8'>
            <div className='col-span-1 border-black border-r-4 '>logo</div>
            <div className='col-span-5  border-black '>
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
              <div className='flex w-full m-auto justify-center '>Connect Wallet</div>
            </div>
          </div>
          <div className='border-[2px] border-black grid grid-cols-[75%,25%]'>
            <div className='border-r-4 border-black '>1</div>
            <div className='grid grid-rows-[75%,25%]'>
              <div className='border-b-4 border-black '>1</div>
              <div>2</div>
            </div>
          </div>
          <div className='border-[2px]  border-black grid grid-cols-[75%,25%]'>
            <div>1</div>
            <div>2</div>
          </div>
        </div>
   </div>
  )
}
