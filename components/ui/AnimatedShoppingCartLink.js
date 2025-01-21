'use client';

import React, { useRef, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AnimatedShoppingCartLink = () => {

  // TODO: Integrate with cart items context
  const cartCount = 1;

  return (
    <div className="m-0">
      <a
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
              <span className="">
                <small>
                  {cartCount}
                </small>
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