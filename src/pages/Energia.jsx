import React from 'react';
import { bannerEnergia, treebg } from '../assets';
import YoutubeVideoComponent from '../components/YoutubeVideoComponent';
import { Card, VideoBanner } from '../components';
import { EnergiaCards } from '../constants/cardDataArrays';

  const Energia = () => (
    <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className=" w-full h-full object-cover"
        alt="Background"
      />
    </div>
    <VideoBanner assetsrc={bannerEnergia} pagename='Energia' whichpage={2}/>

    <YoutubeVideoComponent url="https://www.youtube.com/embed/_6tTI1-VsW8?si=knwzPo6Q4w1Bi9hr"  />

 
    <Card cards={EnergiaCards} />

  </div>
  
  );

  export default Energia;
