import React from 'react';
import { treebg } from '../../assets';
import VideoBanner from './components/VideoBanner';
import { cards } from './mock/mockData';
import Card from './components/Card';
import ReactPlayer from 'react-player';

const Sustentabilidade = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
       
    <VideoBanner />

    <div className="flex justify-center mt-8 mb-10 p-5 z-10 bg-black rounded-xl">
      <ReactPlayer className="z-[99999999] rounded-lg overflow-hidden" url='https://www.youtube.com/watch?v=UjU0RlTzP4Y' />
    </div>

    <Card cards={cards} />
  </div>
);



export default Sustentabilidade;
