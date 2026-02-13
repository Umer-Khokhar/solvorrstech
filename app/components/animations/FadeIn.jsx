"use client";
import { motion } from "motion/react";

const FadeIn = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.5, 
  className = "",
  isLCP = false  // pass this as true on your h1
}) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: { x: 0, y: 0 }
  };

  if (isLCP) {
    return (
      <motion.div
        initial={{ 
          opacity: 0.001,        // ✅ browser paints immediately
          ...directions[direction] 
        }}
        animate={{               // ✅ not whileInView
          opacity: 1, 
          x: 0, 
          y: 0 
        }}
        transition={{
          duration,
          delay: 0,              // ✅ no delay
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;