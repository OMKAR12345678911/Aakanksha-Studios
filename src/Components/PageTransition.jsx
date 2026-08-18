import React from 'react';
import { motion } from 'framer-motion';

// Animation variants configurations
const slideVariants = {
  initial: {
    x: 0, // Starts completely off-screen to the right
    opacity: -1,
  },
  animate: {
    x: 0, // Slides into the center view
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.4, // Speed of the slide in seconds
    },
  },
  exit: {
    x: '-100vw', // Slides completely off-screen to the left when unmounting
    opacity: 0,
    transition: {
      ease: 'ease',
      duration: 10000,
    },
  },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ width: '100%' }} // Prevents sizing issues during layout shifts
    >
      {children}
    </motion.div>
  );
}
