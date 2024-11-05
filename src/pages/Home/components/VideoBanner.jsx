import React from 'react';
import { sustbg } from '../../../../public/assets';

function VideoBanner() {
  return (
    <div className='relative h-screen z-[99999]'>
      {/* Video */}
      <img className='absolute inset-0 w-full h-full object-cover' src={sustbg} alt='Sustainability Background' />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
        {/* Title */}
        <h1 className='text-white font-poppins font-semibold text-4xl md:text-6xl mb-5'>
          Aprenda a Economizar com a <br className='hidden sm:block' />{" "}
          {/* <img className='inline object-cover sm:w-[750px] sm:h-[150px]' src={logosvg02} alt='Arrow Up' /> */}
        </h1>
        <h1 className='text-green-400 font-poppins font-semibold text-4xl md:text-7xl mb-5'>
          EcoSense
        </h1>
        {/* Description */}
        <p className='text-white text-lg md:text-xl max-w-3xl'>
          As melhores dicas para economia e ecologia, além de daos
        </p>
      </div>
    </div>
  );
}

export default VideoBanner;
