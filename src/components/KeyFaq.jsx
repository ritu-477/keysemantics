import React, { useRef, useState } from 'react';
import Heading from '../common/Heading';
import { KEY_DATA } from '../utils/helper';
import Description from '../common/Description';
import { ACCORDION_DATA } from '../utils/helper';
import CustomButton from '../common/CustomButton';

const KeyFaq = () => {
  const [activeIndex, setActiveIndex] = useState(2); 
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-ice-white max-md:-mt-6'>
      <div className='container lg:pt-[82px] sm:pt-12 pt-6 lg:pb-[74px] sm:pb-12 pb-6'>
        <div className='flex lg:flex-row flex-col w-full sm:gap-12 gap-8'>
          <div className='lg:w-[600px] w-full flex max-lg:justify-center lg:sticky h-fit top-4'>
            <img className='max-w-[600px] pointer-events-none w-full rounded-lg' src="/assets/images/webp/faq-women-image.webp" alt="women-image" />
          </div>
          <div className='lg:w-[555px] w-full'>
            <Heading text={'Key Q&A'} classStyle={'lg:text-start text-center'} />
            <ul className='list-disc pt-2 pl-5'>
              {KEY_DATA.map((data, index) => (
                <li className='pb-2' key={index}>
                  <Description classStyle={'lg:max-w-[552px] w-full'} text={data} />
                </li>
              ))}
            </ul>
            <div className='border-b border-gray pt-2 lg:max-w-[552px] w-full'></div>
            <div className='lg:max-w-[552px] w-full'>
              {ACCORDION_DATA.map((item, index) => (
                <div key={index} className="lg:max-w-[552px] w-full border-b-gray border-b transition-all duration-500">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center font-medium text-navy-blue text-base sm:text-lg sm:py-4 py-3 transition-all duration-500"
                  >
                    <span>{item.heading}</span>
                    <svg
                      className={`transform transition-transform duration-500 size-4 sm:size-6 ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                        }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.25178 6.27599C1.33158 6.18849 1.42633 6.11908 1.53061 6.07173C1.63488 6.02437 1.74665 6 1.85952 6C1.9724 6 2.08416 6.02437 2.18844 6.07173C2.29272 6.11908 2.38746 6.18849 2.46727 6.27599L12 16.7255L21.5328 6.276C21.6126 6.18851 21.7073 6.11911 21.8116 6.07177C21.9159 6.02442 22.0277 6.00005 22.1405 6.00005C22.2534 6.00005 22.3652 6.02442 22.4694 6.07177C22.5737 6.11911 22.6685 6.18851 22.7483 6.276C22.8281 6.36348 22.8914 6.46734 22.9346 6.58165C22.9778 6.69595 23 6.81846 23 6.94218C23 7.0659 22.9778 7.18841 22.9346 7.30272C22.8914 7.41702 22.8281 7.52088 22.7483 7.60837L12.6078 18.724C12.528 18.8115 12.4332 18.8809 12.3289 18.9283C12.2247 18.9756 12.1129 19 12 19C11.8871 19 11.7754 18.9756 11.6711 18.9283C11.5668 18.8809 11.4721 18.8115 11.3923 18.724L1.25178 7.60836C1.17196 7.52089 1.10864 7.41703 1.06543 7.30272C1.02223 7.18842 0.999999 7.06591 0.999999 6.94218C0.999999 6.81845 1.02223 6.69594 1.06543 6.58163C1.10864 6.46733 1.17196 6.36347 1.25178 6.27599Z"
                        fill="#191A42"
                      />
                    </svg>
                  </button> 
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                    }}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                  >
                    <div className="pb-4">
                      {item.description && <Description classStyle="mb-3" text={item.description} />}
                      {item.title && <Description classStyle="mb-4" text={item.title} />}
                      {item.images.length > 0 && (
                        <div className="flex space-x-4">
                          {item.images.map((imgSrc, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={imgSrc}
                              alt={`Accordion ${index + 1} Image ${imgIndex + 1}`}
                              className="w-1/2 h-auto object-cover rounded-md pointer-events-none"
                            />
                          ))}
                        </div>
                      )}
                      {item.content && <Description classStyle="pt-4" text={item.content} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='sm:pt-6 pt-4 flex max-lg:justify-center'>
              <CustomButton classStyle={'sm:!px-[14.6px] sm:!py-[11.3px]'} text={'Get a demo'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFaq;
