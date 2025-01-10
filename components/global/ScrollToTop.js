'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Lenis from 'lenis';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      lenisInstance.destroy();
    };
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-1.5 rounded-lg secondary_bg_color text-gray-400 hover:text-gray-200 focus:outline-none transition-colors duration-300 ease-in-out border-[0.05rem] border-gray-200"
          style={{
            boxShadow: 'none',
          }}
          whileHover={{
            backgroundColor: '#141414',
          }}
          aria-label="Scroll To Top"
        >
          <FaArrowUp className="w-3 h-3" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}