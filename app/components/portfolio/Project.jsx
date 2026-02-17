"use client";
import React from "react";
import { check } from "../../assets";
import { motion } from "framer-motion";

const Project = ({ title, desc, image, isRight, tech, features }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: isRight ? 50 : -50, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={`flex mb-20 lg:mb-32 flex-col lg:flex-row ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-[5.5rem] items-center justify-center relative`}
    >
      <div className="relative md:w-1/2 overflow-hidden rounded-3xl group shadow-2xl">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="rounded-3xl w-full max-w-[34rem] h-full object-cover"
          loading="lazy"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-n-8/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="relative md:w-1/2">
        <motion.h4
          variants={itemVariants}
          className="h5 lg:h4 max-w-xl mb-4 md:mb-8 text-n-1"
        >
          {title}
        </motion.h4>
        <motion.p
          variants={itemVariants}
          className="body-2 text-n-3 mb-6 leading-relaxed"
        >
          {desc}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="technologies flex items-center gap-2 flex-wrap mb-8"
        >
          <h5 className="h6 text-n-1 mr-2">Technologies:</h5>
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-n-6/50 backdrop-blur-sm rounded-full body-2 font-code text-n-3 border border-n-1/10 hover:border-n-1/40 hover:text-n-1 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <div className="features mt-6">
          <ul className="flex flex-col gap-6">
            {features.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 border-b border-n-1/10 pb-3 group"
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <motion.img
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    src={check}
                    alt="check icon"
                    className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-n-2 group-hover:text-n-1 transition-colors duration-300">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
