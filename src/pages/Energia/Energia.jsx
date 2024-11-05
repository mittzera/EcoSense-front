import React from 'react';
import { VideoBanner, Card } from './components';
import { treebg } from '../../../public/assets';
import { cards } from './mock/mockData';

const Energia = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
    <VideoBanner />
    
    <Card cards={cards} />
  </div>
);

export default Energia;
