import React from 'react';
import { treebg } from '../assets';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
    <img
      src={treebg}
      className="absolute inset-0 w-full h-full object-cover"
      alt="Background"
    />
  </div>
  );
};

export default Background;
