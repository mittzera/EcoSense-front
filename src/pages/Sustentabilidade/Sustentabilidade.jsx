import React from 'react';
import { treebg } from '../../assets';
import VideoBanner from './components/VideoBanner';
import { cards } from './mock/mockData';
import Card from './components/Card';
import YoutubeVideoComponent from '../../components/YoutubeVideoComponent';

const Sustentabilidade = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
       
    <VideoBanner />

    <YoutubeVideoComponent url="https://www.youtube.com/embed/UjU0RlTzP4Y?si=BgXz0IL0O-5zyd7e"  />

    <Card cards={cards} />
  </div>
);



export default Sustentabilidade;
