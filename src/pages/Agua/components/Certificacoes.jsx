import React from 'react';

const Certificacoes = ({ content, backg, title }) => (
  <div className="w-[30vh] p-2 m-5 mb-10 bg-primary bg-opacity-40 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
    <img className="h-40 object-cover rounded-xl mx-auto" src={backg} alt="Certificação" />
    <div className="p-2 text-white text-center">
      <h2 className="font-bold text-2xl mb-2">{title}</h2>
      <p className="text-xl">{content}</p>
    </div>
  </div>
);

export default Certificacoes;
