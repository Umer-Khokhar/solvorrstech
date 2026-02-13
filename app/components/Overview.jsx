"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Layers, BarChart3 } from "lucide-react";
import { PrimaryButton, OutlineButton } from "./Button";

// --- Universal "Core" Visual ---
const OverviewVisual = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center py-10 lg:py-0 perspective-1000"
    >
      {/* 1. Cinematic Ambient Glow (Basis of Premium Feel) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent dark:from-color-1/10 blur-[80px] opacity-60 pointer-events-none" />

      {/* 2. The "Universal Core" - A Massive Glass Monolith */}
      <motion.div
        style={{ y, rotateX, rotateY }}
        className="relative w-full max-w-[600px] aspect-[4/3] z-10"
      >
        {/* Main Glass Panel */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden backdrop-blur-2xl bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]">
          {/* Inner Light Reflection (Sheen) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none z-20" />

          {/* CONTENT: The "Digital Flow" - Abstract yet Clear */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            {/* A. The "Pulse" - Central Active Element */}
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-color-1/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-dashed border-color-2/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 rounded-full bg-color-1/10 blur-xl animate-pulse" />

              {/* Center Icon - Abstract Logo/Core */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-color-1 to-color-2 flex items-center justify-center shadow-lg shadow-color-1/20">
                <Layers className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* B. The "Growth" - Stylized Data Wave */}
            {/* Represents: Impact, Results, Progress */}
            <div className="w-full h-24 relative flex items-end justify-between px-4 gap-2 opacity-80">
              {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  className="w-full rounded-t-lg bg-gradient-to-t from-slate-900/5 to-slate-900/20 dark:from-white/5 dark:to-white/20 relative group overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900/20 dark:bg-white/20" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-900/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* C. The Labels - Clear Communication */}
            <div className="w-full flex justify-between mt-6 px-4 pt-6 border-t border-slate-900/5 dark:border-white/5">
              <div className="text-center group cursor-default">
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                  Scale
                </div>
                <div className="bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 dark:text-white group-hover:bg-color-1 group-hover:text-white transition-colors">
                  Unlimited
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                  Speed
                </div>
                <div className="bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 dark:text-white group-hover:bg-color-2 group-hover:text-white transition-colors">
                  Lightning
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                  Security
                </div>
                <div className="bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 dark:text-white group-hover:bg-green-500 group-hover:text-white transition-colors">
                  Enterprise
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Floating "Satellite" Elements - Depth & Context */}
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 lg:-right-12 z-20"
        >
          <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 p-4 rounded-xl shadow-xl border border-white/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                Growth
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                +145% YoY
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-6 -left-6 lg:-left-12 z-20"
        >
          <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 p-4 rounded-xl shadow-xl border border-white/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-color-1/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-color-1 fill-color-1" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                Performance
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Optimized
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Overview = ({ content }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 dark:bg-n-8 overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-500/10 dark:bg-color-1/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-500/10 dark:bg-color-2/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Tag */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-color-1 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Overview
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-6 font-clash-grotesk tracking-tight text-slate-900 dark:text-white">
                {content.title || "Elevating Digital Experiences"}
              </h2>

              {/* Description */}
              <div className="mb-8 space-y-4 text-slate-600 dark:text-n-4 text-base md:text-lg leading-relaxed">
                {Array.isArray(content.description) ? (
                  content.description.map((desc, i) => <p key={i}>{desc}</p>)
                ) : (
                  <p>{content.description}</p>
                )}
              </div>

              {/* Key Benefit Points */}
              <div className="space-y-4 mb-10">
                {[
                  "Scalable Architecture",
                  "Premium Experience",
                  "24/7 Expert Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-color-1 shrink-0" />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <PrimaryButton
                  size="lg"
                  href="/contact"
                  rightIcon={
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  }
                  className="rounded-full"
                >
                  Start Project
                </PrimaryButton>
                <OutlineButton size="lg" href="/about" className="rounded-full">
                  Learn More
                </OutlineButton>
              </div>
            </motion.div>
          </div>

          {/* Visual Column - The Universal Core */}
          <div className="order-1 lg:order-2">
            <OverviewVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
