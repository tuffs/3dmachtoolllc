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
              style={{

              }}
            >
              <div className="my-24 md:my-0">
                <center>
                  
                    <motion.div
                      className="overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg"
                      style={{
                        width: '275px',
                        height: '200px',
                        outline: "1px solid #9ca3af",
                      }}
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
                      className="mt-[.7399rem] font-semibold text-gray-400 hover:text-gray-300 md:float-right"
                      style={{
                        letterSpacing: "-0.04rem",
                        fontSize: ".8rem",
                      }}
                    >
                      {s.name}
                    </h1>
                </center>
              </div>
              <div className="w-[275px]">
                <p
                  className="text-gray-400 text-justify hover:text-gray-300"
                  style={{
                    fontSize: ".75rem",
                    marginTop: "2.5rem",
                    paddingTop: ".52335rem",
                    paddingRight: ".52335rem",
                    paddingBottom: ".52335rem",
                    borderTop: "1px solid #9ca3af44",
                    borderRight: "1px solid #9ca3af44",
                  }}
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