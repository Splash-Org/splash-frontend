import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from "./components/Navigation" 

export default function lens() {
  const router = useRouter();
  
  return (
   <div className='w-[100vw] h-[58vw] flex bg-gradient-to-b from-deep-blue via-md1-blue  to-orange-pink p-16 font-mplus font-extrabold text-3xl text-gray-800 '>
    <Head>Splash / Watch to Invest</Head>
    <div className="w-full grid grid-rows-[8.5vw,30vw] border-[10px] p-0 bg-white border-black  rounded">
          <div className='border-[2px]  border-black grid grid-cols-9'>
            <div onClick={() => router.push("/")}
            className='col-span-1 border-black border-r-4 border-l-0 bg-white h-full text-center cursor-pointer' style={{
                  background: 'url(/static/logo.png) center',
                  backgroundSize: '95%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:'center'
                }}>
              
            </div>
            <Navigation />
          </div>
          <div className='border-[2px] border-black border-b-0 border-l-0 grid grid-cols-[71vw,20.5vw]'>
            <div className='border-r-4 h-full w-full border-black grid grid-rows-[33vw,7.8vw]'>
              <div className='border-b-4 border-black grid grid-rows-2 w-full text-[2.5rem]'>
                  <div className='flex font-mplus items-center pl-20'>Please Choose Your Login Method.</div>
                  <div className='flex-col items-center space-y-5 mt-[-2vw] pl-20 text-[2rem] justify-center'>   
                   <div>CONNECT LENS</div>
                   <div>CONNECT ENS</div>
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
                  background: 'url(/static/lens.png) center',
                  backgroundSize: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:'top'
                }}>
                <div className='fixed bottom-[20vw] bg-[#E86C66] text-yellow-50 text-[1rem] pr-2 pl-2'>AD SPONSOR BY Lens Protocol</div>
                <div onClick={() => router.push("/sponsor")} className="relative top-[22.4vw] bg-[#EAD762] pt-1 pb-1 text-gray-800 cursor-pointer hover:text-white  ">
                  BECOME A SPONSOR</div>
            </div>
              </div>
              <div onClick={() => router.push("/list")} className='flex text-center items-center justify-center border-b-4 border-black bg-[#FFE3D3] text-[2.5rem] hover:text-white hover:bg-[#ffd6d3] cursor-pointer'>HOME <span className='text-[3.5rem] pl-4  '>→</span></div>
              <div className='flex text-center items-center justify-center'>TeamⓒThirdWaves</div>
            </div>
          </div>
        
        </div>
   </div>
  )
}
