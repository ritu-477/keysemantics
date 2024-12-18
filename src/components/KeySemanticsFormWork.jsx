import React, { useState } from 'react';
import Heading from '../common/Heading';
import Description from '../common/Description';
import CustomButton from '../common/CustomButton';
import { FORM_DATA } from '../utils/helper';
import swal from 'sweetalert';

const KeySemanticsFormWork = () => {
  const formState = {
    name: '',
    email: '',
    company: '',
    phone: '',
  };

  const [formData, setFormData] = useState(formState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      swal("Invalid Email", "Please enter a valid email address.", "error");
      return;
    }

    console.log('Form Data:', formData);

    swal("Confirmed", "Form submitted successfully!", "success");
    setFormData(formState); 
  };

  return (
    <div className='lg:py-24 md:py-14 sm:py-12 py-12 bg-navy-blue'>
      <div className='container relative'>
        <img className='absolute left-0 -top-24 lg:block hidden' src="/assets/images/webp/form-left-ellipse.webp" alt="left-ellipse" />
        <img className='absolute right-0 -bottom-24 lg:block hidden' src="/assets/images/webp/form-right-ellipse.webp" alt="right-ellipse" />
        <Heading classStyle={'text-center text-white'} text={'How does KeySemantics work?'} />
        <Description
          classStyle={'text-center text-white pt-2'}
          text={'Request a demo for your team and let us show you how KeySemantics can help your company'}
        />
        <div className='max-w-[399px] mx-auto w-full lg:pt-[64px] md:pt-14 pt-8'>
          <form onSubmit={handleSubmit} className='space-y-2'>
            {FORM_DATA.map((data) => (
              <div key={data.id} className="lg:max-w-[320px] w-full rounded-[48px] bg-purple mx-auto py-3 px-4 sm:py-[14px] sm:px-5">
                <input
                  id={data.id}
                  type={data.id === 'email' ? 'email' : 'text'}
                  placeholder={data.placeholder}
                  required={data.required}
                  value={formData[data.id]}
                  onChange={handleChange}
                  className="font-normal w-full text-sm leading-5 bg-purple outline-none placeholder:text-soft-indigo text-soft-indigo"
                />
              </div>
            ))}
            <p className='text-custom-sm leading-custom-base text-center text-soft-indigo lg:text-nowrap pt-2'>
              By submitting my contact information I agree to the KeySemantics Privacy Policy
            </p>
            <div className='flex justify-center pt-4'>
              <CustomButton classStyle={'bg-sky-blue text-white hover:bg-soft-indigo !py-[15.2px] !px-[31.4px]'} text={'Request a demo'} type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KeySemanticsFormWork;
