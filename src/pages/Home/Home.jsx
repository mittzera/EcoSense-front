import React from 'react';
import { bannerAgua, treebg } from '../../assets';
import { cards } from './data/data'; 
import { Card, VideoBanner } from '../../components';

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>

    <VideoBanner assetsrc={bannerAgua} whichpage={1} ishome={true}/>
    <Card cards={cards} ishome={true}/>

    
  </div>
);

export default Home;
