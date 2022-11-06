import Head from 'next/head'

export default function polygon3() {
  return (
   <div className='w-[100vw] h-[58vw] flex bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus font-extrabold text-3xl text-gray-800 '>
    <head>Splash / Watch to Invest</head>
    <div className="w-full grid grid-rows-[8.5vw,30vw] border-[10px] p-0 bg-white border-black  rounded">
          <div className='border-[2px]  border-black grid grid-cols-9'>
            <div className='col-span-1 border-black border-r-4 border-l-0 bg-white h-full text-center' style={{
                  background: 'url(/static/logo.png) center',
                  backgroundSize: '95%',
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
                <button className='bg-[#CFEBDF] p-5 border-2 border-gray-800 rounded'>CONNECT WALLET</button>
              </div>
            </div>
          </div>
          <div className='border-[2px] border-black border-b-0 border-l-0 grid grid-cols-[71vw,20.5vw]'>
            <div className='border-r-4 h-full w-full border-black grid grid-rows-[33vw,7.8vw]'>
              <div className='border-b-4 border-black grid grid-rows-2 w-full text-[2.5rem]'>
                  <div className='flex font-mplus items-center pl-20'> Congratulation! Your trait verified successfully.</div>
                  <div className='flex-col space-y-5 mt-[-2vw]'>   
                    <div className='bg-white h-[10vw] w-[10vw] m-auto ' style={{
                    background: 'url(/static/age_qr.png) center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}>
                  </div>
                  <div className='flex pl-[25vw] items-center text-[2rem]'>
                  <div className='pr-[2vw] text-[3rem] text-[#E86C66]'>✔</div>Verified Success
                    </div> 
                  </div>        
              </div>
              <div className='grid grid-cols-[3vw,5.8vw,62vw]'>
                  <div className='border-r-4 h-full w-full border-black'></div>
                  <div className='border-r-4 h-full w-full border-black bg-[#]'></div>
                  <div className='flex text-center items-center pl-10 text-[4rem] font-Rubik font-semibold   bg-gradient-to-r from-[#CCFCFF] to-[#DDA7FC]'>STREAMING ... 20% </div>
              </div>
            </div>
            <div className='grid grid-rows-[26vw,7vw,7vw]'>
              <div className='border-b-4 border-black'>
              <div className='border-black border-r-4 border-l-0 bg-white h-full text-center' style={{
                  background: 'url(/static/ad.png) center',
                  backgroundSize: '130%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:'center'
                }}>
                <div className='fixed bottom-[23vw] bg-[#E86C66] text-yellow-50 text-[1rem] pr-2 pl-2'>SPONSOR BY Filecoin </div>
                <div className='relative top-[22.8vw] bg-[#EAD762] text-gray-800 pt-1 pb-1 '>BECOME A SPONSOR</div>
            </div>
              </div>
              <div className='flex text-center items-center justify-center border-b-4 border-black bg-[#FFE3D3] text-[2.5rem]'>NEXT <span className='text-[3.5rem] pl-4'>→</span></div>
              <div className='flex text-center items-center justify-center'>TeamⓒThirdWaves</div>
            </div>
          </div>
        
        </div>
   </div>
  )
}
