import React from 'react';
import { bannerAgua } from '../assets';
import { Background, Card, Banner, YoutubeVideoComponent } from '../components';
import { AguaCards } from '../constants/cardDataArrays';

const Agua = () => (
  <div>    
    <Background />
    <Banner assetsrc={bannerAgua} pagename='Água' whichpage={2}/>
    <YoutubeVideoComponent url="https://www.youtube.com/embed/oVADyHI9GIg?si=17mIsZD4QRROdAvb"  />
    <Card cards={AguaCards} />
  </div>
);

export default Agua;
