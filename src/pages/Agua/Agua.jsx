import React from 'react';
import { bannerAgua, treebg } from '../../assets';
import { cards } from './data/data';
import  YoutubeVideoComponent from '../../components/YoutubeVideoComponent'
import { Card, VideoBanner } from '../../components';

const Agua = () => (
  <div className="relative">    
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>

    <VideoBanner assetsrc={bannerAgua} pagename='Água' whichpage={2}/>
    
    <YoutubeVideoComponent url="https://www.youtube.com/embed/oVADyHI9GIg?si=17mIsZD4QRROdAvb"  />

    <Card cards={cards} />
  </div>
);

export default Agua;
