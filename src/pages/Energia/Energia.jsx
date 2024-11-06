  import React from 'react';
  import { VideoBanner, Card,YoutubePlayerComponent } from './components';
  import { treebg } from '../../assets';
  import { cards } from './mock/mockData';
  import ReactPlayer from 'react-player';

  const Energia = () => (
    <div className="relative">
    <div className="fixed inset-0 z-0">
      <img
        src={treebg}
        className=" w-full h-full object-cover"
        alt="Background"
      />
    </div>
    <VideoBanner />
    
    <YoutubePlayerComponent />

    <Card cards={cards} />

  </div>
  
  );

  export default Energia;
