import React from 'react';
import { VideoBanner, Card } from './components';
import { treebg } from '../../assets';
import { cards } from './mock/mockData';
import ReactPlayer from 'react-player';

const Energia = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
    <VideoBanner />
    
    <div className="flex justify-center mt-8 mb-10 p-5 z-10 bg-black rounded-lg">
      <ReactPlayer className="z-[99999999] rounded-lg overflow-hidden" url='https://www.youtube.com/watch?v=_6tTI1-VsW8' />
    </div>

    <Card cards={cards} />


  </div>
);

export default Energia;
