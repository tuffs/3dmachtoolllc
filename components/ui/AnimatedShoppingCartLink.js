'use client';

import React, { useRef, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AnimatedShoppingCartLink = () => {

  // TODO: Integrate with cart items context
  const cartCount = 0;

  const linkRef = useRef(null);

  useEffect(() => {
    const linkElement = linkRef.current;

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
        href={'/cart'}
        className={`relative mx-2 pb-[.785rem] md:ml-[28px] text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out inline-block`}
        style={{
          fontSize: '14px'
        }}
      >
        <div className="pt-5">

          <FaShoppingCart className="inline-block mr-2 mb-1" />
          <span
            className="absolute bottom-0 left-1/2 w-0 h-[.045rem] bg-gray-400 transition-colors duration-300 ease-in-out group-hover:bg-gray-200"
          ></span>
          {(cartCount > 0) ? (
            <>
              <span className="border border-1 border-gray-400 rounded-sm p-1">
                {cartCount}
              </span>
            </>
          ) : (
            <>
              &nbsp;
            </>
          )}
        </div>
      </a>
    </div>
  );
}

export default AnimatedShoppingCartLink;