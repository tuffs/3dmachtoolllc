'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { RxArrowRight } from "react-icons/rx";

const Modal = ({ isOpen, onClose, heading, content }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center" style={{ zIndex: 10000 }} onClick={onClose}>
      <div className="relative p-4 w-full max-w-2xl max-h-full" onClick={e => e.stopPropagation()}>
        <div className="relative bg-[#0a0a0a] rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between px-4 md:px-5 my-3 pt-6 rounded-t">
            <h3 className="text-xl font-semibold text-gray-200 dark:text-white">
              {heading}
            </h3>
            <button 
              type="button" 
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="px-4 md:px-5">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {content}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Additional details about {heading} can be added here.
            </p>
          </div>
          <div className="flex items-center p-4 md:p-5 rounded-b">
            <button
              onClick={onClose}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ProcessCard = ({ heading, content, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full group border-[0.09rem] border-gray-700 hover:border-gray-500">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-600 z-0"></div>
      <div className="relative z-20">
        <img src={imageUrl} alt={heading} className="w-full h-48 object-cover" />
      </div>
      <div className="relative z-10 p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-1 text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
          {heading}
        </h3>
        <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200 flex-grow">
          {content}
        </p>

        <button 
          onClick={openModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6"
          type="button"
        >
          Learn More <RxArrowRight className="inline-block ml-2" />
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          heading={heading}
          content={content}
        />
      </div>
    </div>
  );
};

const ProcessCards = ({ processes }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {processes.map((process) => (
      <div key={process.id}>
        <ProcessCard
          heading={process.heading}
          content={process.content}
          imageUrl={process.imageUrl}
        />
      </div>
    ))}
  </div>
);

export default ProcessCards;