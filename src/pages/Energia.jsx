import React from 'react';
import { bannerEnergia } from '../assets';
import { Background, Card, Banner,YoutubeVideoComponent } from '../components';
import { EnergiaCards } from '../constants/cardDataArrays';

  const Energia = () => (
  <div>
    <Background />
    <Banner assetsrc={bannerEnergia} pagename='Energia' whichpage={2}/>
    <YoutubeVideoComponent url="https://www.youtube.com/embed/_6tTI1-VsW8?si=knwzPo6Q4w1Bi9hr"  />
    <Card cards={EnergiaCards} />
  </div>
  
  );

  export default Energia;
