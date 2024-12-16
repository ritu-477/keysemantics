import React from 'react'
import { SECURITY_DATA } from '../utils/helper'
import CommonCard from '../common/CommonCard'


const DataSecurity = () => {
  return (
      <div className='lg:pt-[74px] md:pt-14 sm:pt-12 pt-6 lg:pb-[164px] md:pb-32 sm:pb-24 pb-6 bg-ice-white'>
          <div className='container'>
              <div className='flex sm:gap-12 gap-8 lg:flex-row flex-col'>
                  <div className='lg:w-[600px] w-full flex max-lg:justify-center'>
                      <img className='max-w-[600px] w-full' src="/assets/images/webp/data-image.webp" alt="data-image" />
                  </div>
                  <div className='lg:w-[552px] w-full flex flex-col justify-center max-lg:items-center'>
                      <CommonCard classStyle="!text-left" heading="Data Security and Hosting" text="Get a demo" list={SECURITY_DATA} />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default DataSecurity