import React from 'react';
import { sustbg, bannerEnergia } from '../../../../public/assets';

function VideoBanner() {
  return (
    <div className='relative h-screen z-[99999]'>
      {/* Background Image */}
      <img className='absolute inset-0 w-full h-full object-cover' src={bannerEnergia} alt='Sustainability Background' />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
        {/* Title */}
        <h1 className='text-white font-poppins font-semibold text-4xl md:text-6xl mb-5'>
          Aprenda a Economizar <br className='hidden sm:block' />{" "}
          {/* <img className='inline object-cover sm:w-[750px] sm:h-[150px]' src={logosvg02} alt='Arrow Up' /> */}
        </h1>
        <h1 className='text-green-400 font-poppins font-semibold text-4xl md:text-7xl mb-5'>
          Energia
        </h1>

        {/* Description */}

      </div>
    </div>
  );
}

export default VideoBanner;
