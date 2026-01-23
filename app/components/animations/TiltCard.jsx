"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  LayoutDashboard,
  Bot,
  Search,
  Network,
} from "lucide-react";
import React, { useState, useRef } from "react";

const iconMap = {
  development: Code,
  dashboard: LayoutDashboard,
  automation: Bot,
  seo: Search,
  api: Network,
};

const TiltCard = ({ service }) => {
  const Icon = iconMap[service.iconUrl] || Code;
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[480px] w-full group perspective-1000"
    >
      {/* Main Container - Minimalist Premium Glass Tile */}
      <motion.div className="relative h-full w-full rounded-[2rem] bg-white/90 dark:bg-n-8/40 backdrop-blur-3xl border border-n-1/5 dark:border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white dark:group-hover:bg-white/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] dark:shadow-none group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] group-hover:-translate-y-2">
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "200%"],
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="absolute w-full h-[200%] bg-gradient-to-br from-transparent via-white/50 dark:via-white/5 to-transparent rotate-45"
          />
        </div>

        {/* Content Section */}
        <div className="relative h-full w-full flex flex-col p-10 z-20">
          {/* Top Image Section */}
          <div className="relative w-full h-[40%] mb-10 rounded-2xl overflow-hidden border border-n-1/5 dark:border-white/5 group-hover:border-color-1/20 transition-colors">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-n-8/40" />
          </div>

          {/* Icon & Title */}
          <div className="mb-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-n-1/5 dark:bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-color-1/10 group-hover:scale-110">
              <Icon className="w-6 h-6 text-n-1 dark:text-white group-hover:text-color-1 transition-colors" />
            </div>
            <h3
              className="text-2xl font-semibold text-n-1 dark:text-white tracking-tight"
              style={{ fontFamily: "var(--font-clash-grotesk)" }}
            >
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-n-2/80 dark:text-n-4 text-sm leading-relaxed mb-10 line-clamp-3">
            {service.text}
          </p>

          {/* Action Area */}
          <div className="mt-auto flex items-center justify-between pt-6 border-t border-n-1/5 dark:border-white/5">
            <div className="flex items-center gap-3 group/btn cursor-pointer">
              <span className="text-xs font-bold font-code uppercase tracking-wider text-n-1/70 dark:text-white/60 group-hover:text-color-1 transition-colors">
                Learn More
              </span>
              <div className="w-8 h-8 rounded-full border border-n-1/10 dark:border-white/10 flex items-center justify-center group-hover:bg-color-1 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </div>
            </div>

            <span className="text-3xl font-bold text-n-1/[0.18] dark:text-white/[0.15] select-none font-mono">
              0{parseInt(service.id) + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;
