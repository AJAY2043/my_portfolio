import React from 'react';
import { motion } from 'framer-motion';
import './ScrollReveal.css';

/**
 * ScrollReveal
 * Wraps any content and fades+slides it up when it scrolls into view.
 * Use it like:
 *   <ScrollReveal>
 *     <h2>My heading</h2>
 *   </ScrollReveal>
 *
 * Props:
 *   delay    - optional stagger delay in seconds (default 0)
 *   y        - optional starting offset in px (default 32)
 *   once     - if true, animates only the first time it's seen (default true)
 *   as       - which HTML/motion element to render (default 'div')
 */
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