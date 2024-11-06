import React from 'react';
import { VideoBanner, Card } from './components';
import { treebg } from '../../assets';
import { cards } from './mock/mockData';  
import YoutubeVideoComponent from '../../components/YoutubeVideoComponent';

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

    <YoutubeVideoComponent url="https://www.youtube.com/embed/s8VneecWQQo?si=vco3J5aiCIHSLXL7"  />


    <Card cards={cards} />
  </div>
);

export default Combustivel;
