import React from 'react';
import { treebg } from '../../../public/assets';
import VideoBanner from './components/VideoBanner';
import { cards } from './mock/mockData';
import Card from './components/Card';

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
        <div className="flex flex-wrap justify-center w-full feedback-container mt-10 z-10">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  </div>
);

export default Sustentabilidade;
