"use client";
import { motion } from "motion/react";

const BlurIn = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = "",
  isLCP = false  // pass this as true on your h1
}) => {
  
  if (isLCP) {
    return (
      <motion.div
        initial={{ 
          opacity: 0.001,      // ✅ browser paints immediately
          filter: "blur(8px)",
          y: 10
        }}
        animate={{             // ✅ not whileInView
          opacity: 1, 
          filter: "blur(0px)", 
          y: 0 
        }}
        transition={{ 
          duration, 
          delay: 0,            // ✅ no delay
          ease: [0.2, 0.65, 0.3, 0.9] 
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
        filter: "blur(10px)",
        y: 10
      }}
      whileInView={{ 
        opacity: 1, 
        filter: "blur(0px)",
        y: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;