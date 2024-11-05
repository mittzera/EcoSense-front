import React from 'react';
import Card from './components/Card';
import { skybg } from '../../../public/assets';
import { cards } from './mock/mockData';

const Combustivel = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={skybg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
        <div className="flex flex-wrap justify-center w-full feedback-container mt-10 z-10 mb-10">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
    </div>
  </div>
);

export default Combustivel;
