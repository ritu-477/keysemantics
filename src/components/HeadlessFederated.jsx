import React from 'react'
import CommonCard from '../common/CommonCard'
import { HEADLESS_DATA } from '../utils/helper'

const HeadlessFederated = () => {
  return (
    <div className='lg:pt-[74px] md:pt-14 sm:pt-12 pt-6 lg:pb-[164px] md:pb-32 sm:pb-24 pb-6 bg-ice-white'>
      <div className='container'>
        <div className='flex sm:gap-12 gap-8 lg:flex-row flex-col max-lg:flex-col-reverse'>
          <div className='lg:w-[558px] w-full flex flex-col justify-center max-lg:items-center'>
            <CommonCard classStyle="!text-left" heading="Headless federated search" text="Get a demo" list={HEADLESS_DATA} />
          </div>
          <div className='lg:w-[600px] w-full flex max-lg:justify-center'>
            <img className='max-w-[600px] w-full' src="/assets/images/webp/headless-image.webp" alt="data-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadlessFederated