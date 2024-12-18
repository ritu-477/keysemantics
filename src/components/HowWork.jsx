import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { HOW_WORKS } from '../utils/helper'
import Keysemantics from './KeySemanticsApi'
import Lottie from 'react-lottie-player'


const HowWork = () => {
  return (
    <div className="lg:pt-24 md:pt-16 sm:pt-14 pt-12">
      <div className="container">
        <Heading classStyle="text-center" text="How does KeySemantics work?" />
          <div className="flex lg:justify-between max-lg:gap-5 flex-wrap justify-center max-w-[1026px] mx-auto w-full lg:pt-14 pt-8">
            {HOW_WORKS.map((obj,index) => (
              <div key={index} className="flex flex-col">
                <Lottie className='sm:w-[278px] sm:h-[190px]'
                       loop
                      animationData={obj.image}
                     play
                  />
                <Description
                  classStyle="sm:max-w-[284px] w-full mx-auto text-center sm:pt-6 pt-4"
                  text={obj.description}
                />
              </div>
            ))}
          </div>
     
      </div>
    </div>
  )
}
export default HowWork