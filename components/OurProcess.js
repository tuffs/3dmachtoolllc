"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { RxArrowRight } from "react-icons/rx";

const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isInView]
}

const hoverVariants = {
  hover: {
    color: '#ffffff', // white
    transition: { duration: 1.5 },
  },
}

const paragraphVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 3,
      ease: "linear"
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

const OurProcess = () => {
  const [ref, isInView] = useInView()
  const controls = useAnimation()
  const paragraphControls = useAnimation()
  const imageControls1 = useAnimation()
  const imageControls2 = useAnimation()
  const imageControls3 = useAnimation()
  const imageControls4 = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      paragraphControls.start("visible")
      imageControls1.start("visible")
      setTimeout(() => imageControls2.start("visible"), 1000) // 1 second delay
      setTimeout(() => imageControls3.start("visible"), 2000) // 2 seconds delay
      setTimeout(() => imageControls4.start("visible"), 3000) // 3 seconds delay
    } else {
      controls.start("hidden")
      paragraphControls.start("hidden")
      imageControls1.start("hidden")
      imageControls2.start("hidden")
      imageControls3.start("hidden")
      imageControls4.start("hidden")
    }
  }, [isInView, controls, paragraphControls, imageControls1, imageControls2, imageControls3, imageControls4])

  return (
    <div ref={ref} className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 text-center overflow-hidden">
      <motion.h2 
        className="text-2xl sm:text-3xl text-gray-400 font-light flex justify-center items-center space-x-2"
        variants={hoverVariants}
        whileHover="hover"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          color: '#9ca3af',
          transition: { duration: 1.5 },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                duration: 1.5,
                ease: "linear"
              } 
            },
          }}
          initial="hidden"
          animate={controls}
          className="flex items-center space-x-2"
        >
          Our Process for Precision
        </motion.div>
        <span className="sr-only">Our Process for Precision</span>
      </motion.h2>

      <motion.div
        variants={paragraphVariants}
        initial="hidden"
        animate={paragraphControls}
        className="w-[90%] md:w-[45%] mx-auto mt-[-10px]"
      >
        <p className="text-left mb-12 md:text-center text-[.9rem] text-gray-400 mt-4 hover:text-white duration-1000">
          We ensure that your original design is honored from datum to completion and is within the specified ISO precision values provided in your design document. If needed, we can assist with creating the precision scale for your system in your project with professional expterise of Mechanical Engineers and Experienced Machinists.
        </p>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={imageControls1}
        className="w-[90%] md:w-[45%] mx-auto mt-[-10px]"
      >
        <img
          src="lathe_spinning_and_cutting__optimized.webp"
          alt="Lathe spinning and cutting"
          className="mt-6 border-[.1rem] mx-auto w-full rounded-lg shadow-lg md:24 md:m-8 md:mx-0 md:border-[.09rem] border-[#9ca3af]"
        />
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={imageControls2}
        className="w-[90%] md:w-[45%] mx-auto mt-[-10px]"
      >
        <img
          src="cnc_lathe_cutting__optimized.webp"
          alt="CNC Lathe Cutting"
          className="mt-6 border-[.1rem] mx-auto w-full rounded-lg shadow-lg md:24 md:m-8 md:mx-0 md:border-[.09rem] border-[#9ca3af]"
        />
      </motion.div>
      
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={imageControls3}
        className="w-[90%] md:w-[45%] mx-auto mt-[-10px]"
      >
        <img
          src="perfect_threading__optimized.webp"
          alt="Perfect Threading"
          className="mt-6 border-[.1rem] mx-auto w-full rounded-lg shadow-lg md:24 md:m-8 md:mx-0 md:border-[.09rem] border-[#9ca3af]"
        />
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={imageControls4}
        className="w-[90%] md:w-[45%] mx-auto mt-[-10px]"
      >
        <img
          src="finished_parts__optimized.webp"
          alt="Finished Parts"
          className="mt-6 border-[.1rem] mx-auto w-full rounded-lg shadow-lg md:24 md:m-8 md:mx-0 md:border-[.09rem] border-[#9ca3af]"
        />
      </motion.div>

      <div className="mt-12 px-4 md:px-8 flex justify-center">
        <a href="/our-process" className="inline-flex items-center text-gray-400 border-[1px] border-[#9ca3af44] p-4 hover:text-gray-200 hover:border-gray-200 transition-colors duration-700">
          Learn More Our Process <RxArrowRight className="text-2xl ml-2" />
        </a>
      </div>
    </div>
  )
}

export default OurProcess