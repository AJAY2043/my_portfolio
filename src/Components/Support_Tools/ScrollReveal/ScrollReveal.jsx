import React from 'react';
import { motion } from 'framer-motion';
import './ScrollReveal.css';

const ScrollReveal = ({ children, delay = 0, y = 32, once = true, as = 'div', className = '' }) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;