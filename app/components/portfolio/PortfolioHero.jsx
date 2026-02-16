import React from "react";
import Section from "../Section";
import { grid, HeroPortfolio } from "../../assets";
import { motion } from "framer-motion";
import { TechBackground, PremiumButton } from "../index.js";
import { Zap } from "lucide-react";

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

  const title = "Systems We’ve Built for Real Business Operations";

  return (
    <div
      className={
        "!px-0 py-32 md:py-4 mb-8 bg-n-8 overflow-hidden relative min-h-screen flex items-center"
      }
    >
      <TechBackground />
      <div className={"!px-0 !py-4 w-full"}>
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
                Explore the structured dashboards, automation workflows, and integrated systems we’ve built to improve operational clarity, streamline processes, and support scalable business growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-8"
              >
                <PremiumButton
                  href="/contact"
                  size="lg"
                  rightIcon={
                    <Zap className="w-5 h-5 fill-current animate-pulse" />
                  }
                >
                  Start Your Project
                </PremiumButton>
              </motion.div>
            </div>

            <div className="relative mt-12 md:mt-0">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: -5,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
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
      </div>
    </div>
  );
};

export default PortfolioHero;
