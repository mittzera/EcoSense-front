import React from 'react';
import { VideoBanner, Card } from './components';
import { treebg } from '../../assets';
import { cards } from './mock/mockData';
const Agua = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>

    <VideoBanner />
    
    <YoutubeVideoComponent url="https://www.youtube.com/embed/oVADyHI9GIg?si=17mIsZD4QRROdAvb"  />

    <Card cards={cards} />
  </div>
);

export default Agua;
