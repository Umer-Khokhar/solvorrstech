import React from "react";
import Section from "../Section";
import { grid, HeroPortfolio } from "../../assets";
import { motion } from "framer-motion";

const PortfolioHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const title = "Work We're Proud Of";

  return (
    <div className={"!px-0 py-32 md:py-4 mb-8 bg-n-7 overflow-hidden relative"}>
      <div className={"!px-0 !py-4"}>
        <div className="container relative z-10">
          <div className="relative lg:h-screen flex flex-col md:flex-row items-center lg:justify-between xl:mx-auto">
            {/* content section  */}
            <div className="relative z-20 max-w-xl">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="h1 mb-4 lg:mb-8 flex flex-wrap"
              >
                {title.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={charVariants}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="body-1 text-n-3 mb-8 leading-relaxed"
              >
                Discover our collection of high-impact digital solutions. From
                stunning UI/UX designs to robust full-stack applications, we
                bring visions to life with precision and creativity.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {/* Optional CTA or sub-text could go here if needed, keeping it clean for now */}
              </motion.div>
            </div>

            <div className="relative mt-12 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.5,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="relative z-1"
              >
                <motion.img
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={HeroPortfolio}
                  alt="portfolio image"
                  width={550}
                  height={390}
                  className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Grid - Properly contained to prevent overflow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute md:-right-20 -bottom-20 md:bottom-auto lg:top-0"
          >
            <motion.img
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
              src={grid}
              className="max-w-[800px] w-full"
              alt="grid image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
