'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import services from '@/data/services';

const BaseServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const zoomFactor = 1.75;
  const zoomDuration = 0.9;

  return (
    <div className="my-48">
      <ul className="my-3 md:flex"> 
        {services.map((s, i) => (
          <li
            key={i}
            className="mx-auto"
          >
            <a
              href={s.link}
              className="text-gray-400 hover:text-gray-200"
            >
              <div>
                <center>
                    <motion.div
                      className="overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg w-[275px] h-[200px] outline outline-1 outline-gray-400"
                      onHoverStart={() => setHoveredIndex(i)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <motion.img
                        src={s.imageUrl}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: hoveredIndex === i ? zoomFactor : 1 
                        }}
                        transition={{ duration: zoomDuration }}
                      />
                    </motion.div>
                    <h1
                      className="text-[.8rem] mt-[.7399rem] font-semibold text-gray-400 hover:text-gray-300 float-right pr-[5.3rem] tracking-tighter md:pr-0"
                    >
                      {s.name}
                    </h1>
                </center>
              </div>
              <div className="mx-auto w-[275px] mt-[2.25rem] mb-[5.25rem]">
                <p
                  className="text-[.75rem] pt-[.52335rem] pr-[.52335rem] pb-[.52335] text-gray-400 text-justify hover:text-gray-300 md:mt-2.5rem border-t-[1px] border-r-[1px] border-t-[#9ca3af44] border-r-[#9ca3af44]"
                >
                  {s.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BaseServices;