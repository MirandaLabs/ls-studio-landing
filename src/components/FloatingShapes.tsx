import React from 'react';
import { motion } from 'framer-motion';
export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large soft blush blob top left */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-rose-200/20 rounded-full blur-[100px]" />


      {/* Champagne blob bottom right */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-champagne-300/20 rounded-full blur-[80px]" />


      {/* Smaller accent blob */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5
        }}
        className="absolute bottom-[10%] left-[20%] w-[20vw] h-[20vw] bg-pink-300/10 rounded-full blur-[60px]" />

    </div>);

}