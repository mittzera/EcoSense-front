import React from 'react';
import { skybg, treebg } from '../../../public/assets';
import { cards } from './mock/mockData'; // Assuming feedback is imported correctly
import {Card, VideoBanner} from './components'; // Assuming components are imported correctly

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <VideoBanner />
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
    <Card cards={cards} />
  </div>
);

export default Home;
