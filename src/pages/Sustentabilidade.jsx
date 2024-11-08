import React from 'react';
import { bannerSustentabilidaade } from '../assets';
import { Background, Card, Banner, YoutubeVideoComponent } from '../components';
import { SustentabilidadeCards } from '../constants/cardDataArrays';

const Sustentabilidade = () => (
  <div>
    <Background />
    <Banner assetsrc={bannerSustentabilidaade} pagename='Sustentabilidade' whichpage={3}/>
    <YoutubeVideoComponent url="https://www.youtube.com/embed/UjU0RlTzP4Y?si=BgXz0IL0O-5zyd7e"  />
    <Card cards={SustentabilidadeCards  } />
  </div>
); 



export default Sustentabilidade;
