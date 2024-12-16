import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-dark-blue py-6'>
      <div className='container'>
        <div className='flex md:justify-between items-center max-md:flex-col justify-center max-md:gap-2'>
          <p className='text-xs md:leading-7 leading-5 text-soft-indigo md:text-start text-center'>©{currentYear} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland</p>
          <a className='text-xs md:leading-7 leading-5 text-soft-indigo' href="/">info@keysemantics.ch</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;