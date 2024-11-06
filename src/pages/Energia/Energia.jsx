  import React from 'react';
  import { VideoBanner, Card } from './components';
  import { treebg } from '../../assets';
  import { cards } from './mock/mockData';
import YoutubeVideoComponent from '../../components/YoutubeVideoComponent';

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

    <YoutubeVideoComponent url="https://www.youtube.com/embed/_6tTI1-VsW8?si=knwzPo6Q4w1Bi9hr"  />

 
    <Card cards={cards} />

  </div>
  
  );

  export default Energia;
