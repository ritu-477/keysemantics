import React from 'react'
import CustomButton from '../common/CustomButton'

const Header = () => {
  return (
      <div className='container'>
          <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
              <a className='md:max-w-[248px] sm:max-w-[200px] max-w-[150px]' href="/"><img src="/assets/images/webp/nav-logo.webp" alt="nav-logo" /></a>
              <CustomButton text={'Request a demo'}/>
           </div>
    </div>
  )
}

export default Header

