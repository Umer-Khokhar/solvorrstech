"use client";

import { motion } from "framer-motion";

const BlurIn = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = "" 
}) => {
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
