"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const VisualIllustration = () => {
  return (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
      {/* Animated Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-[100px] animate-pulse" />
      
      {/* Decorative Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[90%] h-[90%] border border-n-6/30 rounded-full border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80%] h-[80%] border border-n-5/20 rounded-full"
      />

      {/* Main Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full h-full"
      >
        <Image
          src="/why-choose-us-premium.png"
          alt="Premium Tech Illustration"
          fill
          className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]"
          priority
        />
      </motion.div>

      {/* Floating Interactive Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 z-20 hidden md:block"
      >
        <div className="glass-morphism p-4 rounded-2xl border border-n-6/50 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-code text-n-1 uppercase tracking-tighter">System Optimal</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 left-10 z-20 hidden md:block"
      >
        <div className="glass-morphism p-4 rounded-2xl border border-n-6/50 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-n-4 font-code uppercase">Success Rate</span>
            <span className="text-lg font-bold text-gradient">99.9%</span>
          </div>
        </div>
      </motion.div>

      {/* Subtle Particles or Glows */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-ping" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full blur-sm animate-ping delay-700" />
    </div>
  );
};

export default VisualIllustration;
