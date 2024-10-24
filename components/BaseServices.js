'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="my-48">
      <ul className="my-3 md:flex"> 
        {services.map((s, i) => (
          <li
            key={i}
            className="mx-auto"
          >
            <a
              href="/services"
              className="text-gray-400 hover:text-gray-200 group block"
              onMouseEnter={() => handleHoverStart(i)}
              onMouseLeave={handleHoverEnd}
            >
              <div>
                <center>
                    <motion.div
                      className="overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg w-[275px] h-[200px] outline outline-1 outline-[#9ca3af44] group-hover:outline-white transition-all duration-700 ease-in-out"
                    >
                      <AnimatePresence>
                        <motion.img
                          key={s.imageUrl}
                          src={s.imageUrl}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          animate={{ 
                            scale: hoveredIndex === i ? zoomFactor : 1 
                          }}
                          transition={{ duration: zoomDuration }}
                        />
                      </AnimatePresence>
                    </motion.div>
                    <h1
                      className="text-[.8rem] mt-[.7399rem] font-bold text-gray-400 group-hover:text-white float-right pr-[5.3rem] tracking-tighter md:pr-0 transition-colors duration-700"
                    >
                      {s.name}
                    </h1>
                </center>
              </div>
              <div className="mx-auto w-[275px] mt-[2.45rem] mb-[5.25rem]">
                <p
                  className="text-[.75rem] pt-[.52335rem] pr-[.52335rem] pb-[.52335] text-gray-400 text-justify group-hover:text-white md:mt-2.5rem border-t-[1px] border-r-[1px] border-t-[#9ca3af44] border-r-[#9ca3af44] group-hover:border-t-white group-hover:border-r-white transition-colors duration-700"
                >
                  {s.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mr-20 md:mx-36 float-right md:flex">
        <a href="/services" className="w-[300px] flex text-gray-400 border-[1px] border-[#9ca3af44] p-4 pb-2 hover:text-gray-200 hover:border-gray-200 duration-700">
          Learn More About Our Services <RxArrowRight className="text-[2rem] ml-2 pb-[0.3rem]" />
        </a>
      </div>
    </div>
  );
}

export default BaseServices;