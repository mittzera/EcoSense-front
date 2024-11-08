import React from 'react';

const Card = ({ cards, ishome }) => (
  <div className="flex flex-wrap justify-center w-full feedback-container mt-10 z-10">
    {cards.map((card) =>
      ishome ? (
        <div
          key={card.id}
          className="relative m-5 xss:mb-5 xss:w-[100%] xs:w-[500px] ss:w-[600px] md:w-[450px] lg:w-[550px] xl:w-[620px]"
        >
          <a href={`/${card.id}`}>
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[20px]"></div>
            <img className="w-full h-[338px] object-cover rounded-[20px]" src={card.backg} alt="Background" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-black bg-opacity-30 backdrop-blur text-white p-4 rounded-b-lg">
              <div className="flex items-center">
                <h1 className="text-xl sm:text-2xl font-semibold">{card.title}</h1>
              </div>
              <p className="mt-2">{card.content}</p>
            </div>
          </a>
        </div>
      ) : (
        <div
          key={card.id}
          className="w-[80vh] p-2 m-5 mb-10 bg-black bg-opacity-60 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        >
          <div className="p-2 text-white">
            <h2 className="font-bold text-2xl mb-2 text-green-400">{card.title}</h2>
            <p className="text-xl text-white">{card.content}</p>
          </div>
        </div>
      )
    )}
  </div>
);

export default Card;
