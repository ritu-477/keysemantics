import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
      <div className='sm:pt-[47px] pt-8 bg-hero-bg bg-cover bg-no-repeat bg-center lg:bg-[100%_100%] bg-ice-white lg:min-h-[900px]'>
          <Header />
          <div className='container lg:pt-[198px] max-lg:py-24 max-md:py-16 max-sm:py-12'>
              <div className='flex flex-col items-center'>
                  < h1 className='lg:text-custom-2xl lg:leading-custom-4xl md:text-5xl sm:text-4xl text-custom-xl leading-10 font-bold text-navy-blue text-center mx-auto max-w-[720px]' >AI - Powered Search as a Service</h1>
                  <p className='sm:text-2xl text-xl font-medium text-center sm:pt-8 pt-6'>Unlock your content with KeySemantics.</p>
                  <div className='lg:pt-12 sm:pt-10 pt-7'>
                      <button className='bg-navy-blue text-sm sm:text-base sm:leading-custom-xl sm:py-[18px] sm:px-[30px] border border-navy-blue py-4 px-6 hover:text-navy-blue text-white hover:bg-white rounded-[48px] transition-all duration-500'>Get started</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero