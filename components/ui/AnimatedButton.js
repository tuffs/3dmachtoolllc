'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedButton = ({ children, className, ...props }) => {
  return (
    <motion.button
      className={className}
      whileHover={{
        backgroundColor: '#121212',
        color: '#ffffff',
        borderColor: 'rgb(45,45,45)',
        transition: { duration: 3 }
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton;