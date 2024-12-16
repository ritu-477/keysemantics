import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../lottie/key-semantics-layer.json'
import mobileLayer from '../lottie/mobile-layer.json'

const Keysemantics = () => {
  return (
    <div className=''>
      <div className='container'>
        <Lottie className='lg:h-[588px] max-w-[1200px] md:block hidden mx-auto'
          loop
          animationData={lottieJson}
          play
        />
        <Lottie className='md:hidden block'
          loop
          animationData={mobileLayer}
          play
        />
        
     </div>
    </div>
  )
}

export default Keysemantics