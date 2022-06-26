import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Page404 = () => {
  return (
    <>
        <div className='min-h-screen flex items-center justify-center flex-col'>
        <Player
            autoplay
            className='w-full lg:w-[600px]'
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_kcsr6fcp.json"
            >
          </Player>
         </div>
    </>

            )
}

export default Page404