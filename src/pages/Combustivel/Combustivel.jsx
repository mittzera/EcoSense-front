import React from 'react';
import { bannerCombustivel, treebg } from '../../assets';
import { cards } from './data/data';  
import YoutubeVideoComponent from '../../components/YoutubeVideoComponent';
import { Card, VideoBanner } from '../../components';

const Combustivel = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
    <VideoBanner assetsrc={bannerCombustivel} pagename='Combustível' whichpage={2}/>

    <YoutubeVideoComponent url="https://www.youtube.com/embed/s8VneecWQQo?si=vco3J5aiCIHSLXL7"  />


    <Card cards={cards} />
  </div>
);

export default Combustivel;
