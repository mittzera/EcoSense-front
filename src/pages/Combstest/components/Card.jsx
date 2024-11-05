import React, { useState } from 'react';
import { skybg } from '../../../../public/assets';

const Card = ({ content, backg, title, link, modalContent, modalBackg, modalLink, modalImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handler to close the modal when clicking outside of it
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="relative mt-6 flex w-96 flex-col rounded-xl xss:w-full sm:w-[48%] bg-primary bg-opacity-50 bg-clip-border text-white shadow-md mx-2">
      <div className="p-6">
        <img src={backg} alt={title} className="mb-4 h-12 w-12 object-cover" />
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
          {title}
        </h5>
        <p className="block font-sans text-2xl font-light leading-relaxed text-inherit antialiased">
          {content}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all bg-quarternary hover:bg-secondary active:bg-terciary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={openModal}
        >
          Saiba Mais
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[99999999999999999999999999999] flex items-center justify-center modal-overlay  bg-primary bg-opacity-60"
          onClick={handleClickOutside}
        >
          <div className="relative ss:w-[70%] xss:w-[90%] max-h-[90%] bg-primary rounded-3xl shadow-lg overflow-auto p-6 ">
            <button
              className="absolute top-2 right-2 text-#ffffff"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <img src={backg} alt={title} className="mb-4 h-12 w-12 object-cover" />
              <h2 className="text-4xl font-semibold mb-5">{title}</h2>
              
              {/* Add image between title and modal content */}
              {modalImage && (
                <img src={modalImage} alt="Modal image" className="mb-4 md:w-[100vh] xss:w-[100vh] h-[50vh] object-cover rounded-3xl" />
              )}
              
              <p className="mt-2 text-white text-2xl whitespace-pre-wrap text-center">
                {modalContent}
              </p>
              
              {modalLink && (
                <a href={modalLink} className="text-blue-500 underline mt-4 block text-center">
                  Learn more
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
