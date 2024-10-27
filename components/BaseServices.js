'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RxArrowRight } from "react-icons/rx";

import services from '@/data/services';

const BaseServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const zoomFactor = 1.75;
  const zoomDuration = 1;

  const handleHoverStart = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <div className="my-32 mb-24">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {services.map((s, i) => (
          <li
            key={i}
            className="w-full max-w-md mx-auto"
          >
            <a
              href="/services"
              className="text-gray-400 hover:text-gray-200 group block"
              onMouseEnter={() => handleHoverStart(i)}
              onMouseLeave={handleHoverEnd}
            >
              <div>
                <motion.div
                  className="overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg w-full aspect-[11/8] outline outline-1 outline-[#9ca3af44] group-hover:outline-white transition-all duration-700 ease-in-out"
                >
                  <motion.img
                    src={s.imageUrl}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: hoveredIndex === i ? zoomFactor : 1 
                    }}
                    transition={{ duration: zoomDuration }}
                    alt={s.name}
                  />
                </motion.div>
                <h1
                  className="text-base mt-3 font-bold text-gray-400 group-hover:text-white tracking-tighter transition-colors duration-700"
                >
                  {s.name}
                </h1>
              </div>
              <div className="mt-4">
                <p
                  className="text-sm text-gray-400 text-justify group-hover:text-white border-t-[1px] border-r-[1px] border-t-[#9ca3af44] border-r-[#9ca3af44] group-hover:border-t-white group-hover:border-r-white transition-colors duration-700 pt-2 pr-2"
                >
                  {s.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-24 px-4 md:px-8 flex justify-center">
        <a href="/services" className="inline-flex items-center text-gray-400 border-[1px] border-[#9ca3af44] p-4 hover:text-gray-200 hover:border-gray-200 transition-colors duration-700">
          Learn More About Our Services <RxArrowRight className="text-2xl ml-2" />
        </a>
      </div>
    </div>
  );
}

export default BaseServices;