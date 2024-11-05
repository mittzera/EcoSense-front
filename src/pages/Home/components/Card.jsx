import React from 'react';

const Card = ({ cards }) => (
  <div className="flex flex-wrap justify-center">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative m-5 xss:mb-5 xss:w-[100%] xs:w-[500px] ss:w-[600px] md:w-[450px] lg:w-[550px] xl:w-[620px]"
      >
        {/* Background overlay */}
        <a href={`/${card.id}`}>
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[20px]"></div>

          {/* Background image */}
          <img className="w-full h-[338px] object-cover rounded-[20px]" src={card.backg} alt="Background" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-black bg-opacity-30 backdrop-blur text-white p-4 rounded-b-lg">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-semibold">{card.title}</h1>
            </div>
            <p className="mt-2">{card.content}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
);

export default Card;
