import React from 'react';
import { bannerSustentabilidaade, treebg } from '../assets';
import YoutubeVideoComponent from '../components/YoutubeVideoComponent';
import { Card,VideoBanner } from '../components';
import { SustentabilidadeCards } from '../constants/cardDataArrays';

const Sustentabilidade = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
       
    <VideoBanner assetsrc={bannerSustentabilidaade} pagename='Sustentabilidade' whichpage={3}/>

    <YoutubeVideoComponent url="https://www.youtube.com/embed/UjU0RlTzP4Y?si=BgXz0IL0O-5zyd7e"  />

    <Card cards={SustentabilidadeCards  } />
  </div>
);



export default Sustentabilidade;