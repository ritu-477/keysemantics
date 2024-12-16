import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { HOW_WORKS } from '../utils/helper'
import Keysemantics from './Keysemantics'
import Lottie from 'react-lottie-player'


const HowWork = () => {
  return (
    <div className="lg:pt-24 md:pt-16 sm:pt-14 pt-12">
      <div className="container">
        <Heading classStyle="text-center" text="How does KeySemantics work?" />
        <div className="max-w-[1026px] mx-auto w-full lg:pt-14 sm:pt-12 pt-8">
          <div className="flex lg:justify-between max-lg:gap-5 flex-wrap justify-center">
            {HOW_WORKS.map((work,index) => (
              <div key={index} className="flex flex-col max-w-[278px] w-full">
                <Lottie className='w-[278px] h-[190px]'
                       loop
                      animationData={work.src}
                     play
                  />
                <Description
                  classStyle="max-w-[278px] mx-auto text-center sm:pt-6 pt-4"
                  text={work.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Keysemantics />
    </div>
  )
}
export default HowWork