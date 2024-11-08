import React from 'react';
import { Background, Card, Banner } from '../components';
import { HomeCards } from '../constants/cardDataArrays';
import { bannerAgua, bannerEcosense } from '../assets';

const Home = () => (
  <div>
    <Background />
    <Banner assetsrc={bannerEcosense} whichpage={1} ishome={true}/>
    <Card cards={HomeCards} ishome={true}/>
  </div>
);

export default Home;