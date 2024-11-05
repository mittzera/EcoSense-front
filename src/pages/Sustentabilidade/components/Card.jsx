import React from 'react';

const Card = ({ cards }) => (
  <div className="flex flex-wrap justify-center w-full feedback-container mt-10 z-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="w-[80vh] p-2 m-5 mb-10 bg-black bg-opacity-60 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
      >
        {/* <img className="h-40 object-cover rounded-xl mx-auto" src={card.backg} alt="imagem do cartão" /> */}
        <div className="p-2 text-white">
          <h2 className="font-bold text-2xl mb-2 text-green-400">{card.title}</h2>
          <p className="text-xl text-white">{card.content}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Card;
