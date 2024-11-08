import React from 'react';
import { bannerAgua, treebg } from '../assets';
import { Card, VideoBanner } from '../components';
import { HomeCards } from '../constants/cardDataArrays';

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
    <Card cards={HomeCards} ishome={true}/>

    
  </div>
);

export default Home;
