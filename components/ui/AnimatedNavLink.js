'use client';

import React, { useRef, useEffect } from 'react';

const AnimatedNavLink = ({ link, text }) => {
  const underlineRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const linkElement = linkRef.current;

    const animateUnderline = (expand) => {
      const duration = 300; // same as color transition duration
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = expand ? progress : 1 - progress;

        const width = `${easeProgress * 100}%`;
        const left = `${(1 - easeProgress) * 50}%`;

        underline.style.width = width;
        underline.style.left = left;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => animateUnderline(true);
    const handleMouseLeave = () => animateUnderline(false);

    linkElement.addEventListener('mouseenter', handleMouseEnter);
    linkElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      linkElement.removeEventListener('mouseenter', handleMouseEnter);
      linkElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="m-0">
      <a
        ref={linkRef}
        href={link}
        className="relative text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out inline-block"
        style={{
          fontSize: '11px'
        }}
      >
        {text}
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gray-400 transition-colors duration-300 ease-in-out group-hover:bg-gray-200"
        ></span>
      </a>
    </div>
  );
}

export default AnimatedNavLink;