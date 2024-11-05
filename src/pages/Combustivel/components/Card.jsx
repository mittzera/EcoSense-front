import React from 'react';

const Card = ({ content, backg, title, link }) => (
  <div className="w-[80vh] p-2 m-5 mb-10 bg-primary bg-opacity-40 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
    {/* <img className="h-40 object-cover rounded-xl mx-auto" src={backg} alt="aa" /> */}
    <div className="p-2 text-white">
      <h2 className="font-bold text-2xl mb-2 text-green-400">{title}</h2>
      <p className="text-xl text-white">{content}</p>
    </div>
   
  </div>
);

export default Card;
