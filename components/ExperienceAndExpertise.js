"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

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

const wordVariants = {
  hidden: (direction) => ({
    x: direction === -1 ? '-50vw' : '50vw',
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
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

const ExperienceAndExpertise = () => {
  const [ref, isInView] = useInView()
  const controls = useAnimation()
  const paragraphControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      paragraphControls.start("visible")
    } else {
      controls.start("hidden")
      paragraphControls.start("hidden")
    }
  }, [isInView, controls, paragraphControls])

  return (
    <div ref={ref} className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 text-center overflow-hidden">
      <motion.h2 
        className="text-2xl sm:text-3xl text-gray-400 font-light flex justify-center items-center space-x-2"
        variants={hoverVariants}
        whileHover="hover"
        transition={{
          color: { duration: 1.5 },
        }}
        animate={{
          color: '#9ca3af',
          transition: { duration: 1.5 },
        }}
      >
        <div className="relative inline-flex items-center justify-center">
          <motion.span
            className="absolute whitespace-nowrap"
            custom={-1}
            variants={wordVariants}
            initial="hidden"
            animate={controls}
            aria-hidden="true"
          >
            Experience
          </motion.span>
          <span className="invisible">Experience</span>
        </div>
        <motion.span
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
        >
          +
        </motion.span>
        <div className="relative inline-flex items-center justify-center">
          <motion.span
            className="absolute whitespace-nowrap"
            custom={1}
            variants={wordVariants}
            initial="hidden"
            animate={controls}
            aria-hidden="true"
          >
            Expertise
          </motion.span>
          <span className="invisible">Expertise</span>
        </div>
        <span className="sr-only">Experience and Expertise</span>
      </motion.h2>

      <motion.div
        variants={paragraphVariants}
        initial="hidden"
        animate={paragraphControls}
        className="w-[90%] md:w-[45%] mx-auto mt-[-10px]"
      >
        <p className="text-left md:text-center text-[.9rem] text-gray-400 mt-4 hover:text-white duration-1000">
          Our team has a combined 60+ years of design, machine, and manufacturing experience. We have the expertise to handle any project, big or small, which aligns with the <a href="/capabilities" className="underline hover:text-[#cc4b4b] duration-500">capabilites</a> we have in house. We are dedicated to providing the highest quality and precision in all of our work.
        </p>
      </motion.div>
    </div>
  )
}

export default ExperienceAndExpertise