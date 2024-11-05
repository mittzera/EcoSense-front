import React from 'react';
import { sustbg } from '../../../../public/assets';

function VideoBanner() {
  return (
    <div className='relative h-screen z-[99999]'>
      {/* Background Image */}
      <img className='absolute inset-0 w-full h-full object-cover' src={sustbg} alt='Sustainability Background' />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
        {/* Title */}
        <h1 className='text-white font-poppins font-semibold text-4xl xss:text-2xl md:text-6xl mb-5'>
          Pratique sustentabilidade com a <br className='hidden sm:block' />{" "}
          
        </h1>
        <h1 className='text-green-400 font-poppins font-semibold text-4xl md:text-7xl mb-5'>
          EcoSense
        </h1>
        {/* Description */}
        <p className='text-white text-lg md:text-3xl max-w-7xl'>
          Na EcoSense, ensinamos a importância da economia e os impactos que isto pode causar no nosso meio ambiente
        </p>
      </div>
    </div>
  );
}

export default VideoBanner;
