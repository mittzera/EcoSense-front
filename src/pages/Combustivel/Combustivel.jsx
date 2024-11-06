import React from 'react';
import { VideoBanner, Card } from './components';
import { treebg } from '../../assets';
import { cards } from './mock/mockData';
import ReactPlayer from 'react-player';

const Combustivel = () => (
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
      <ReactPlayer className="z-[99999999] rounded-lg overflow-hidden" url='https://youtu.be/s8VneecWQQo?si=6YZSyclMwKgzdOx-' />
    </div>

    <Card cards={cards} />
  </div>
);

export default Combustivel;
