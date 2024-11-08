import React from 'react';
import { bannerCombustivel } from '../assets';
import { Background, Card, Banner,YoutubeVideoComponent } from '../components';
import { CombustivelCards } from '../constants/cardDataArrays';

const Combustivel = () => (
  <div>
    <Background />
    <Banner assetsrc={bannerCombustivel} pagename='Combustível' whichpage={2}/>
    <YoutubeVideoComponent url="https://www.youtube.com/embed/s8VneecWQQo?si=vco3J5aiCIHSLXL7"  />
    <Card cards={CombustivelCards} />
  </div>
);

export default Combustivel;
