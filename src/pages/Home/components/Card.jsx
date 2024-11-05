import React from 'react';

const Card = ({ content, name, title, img, backg, id }) => {
  return (
    <div className="flex justify-center">
    
      <div className="relative m-5 xss:mb-5 xss:w-[100%] xs:w-[500px] ss:w-[600px] md:w-[450px] lg:w-[550px] xl:w-[620px]">
        {/* Background overlay */}
        <a href={`/${id}`}>
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[20px]"></div>

        {/* Background image */}
        <img className="w-full h-[338px] object-cover rounded-[20px]" src={backg} alt="Background" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-black bg-opacity-30 backdrop-blur text-white p-4 rounded-b-lg">
          <div className="flex items-center">
           
            <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
          </div>
          <p className="mt-2">{content}</p>
          
        </div>
        </a>
      </div>
      
    </div>
  );
};

export default Card;
