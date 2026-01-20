"use client";
import React from "react";

const TechBackground = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Digital Grid */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
      style={{ backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
    />
    
    {/* Radial Glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-color-1/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-color-2/10 rounded-full blur-[120px]" />
    
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
  </div>
);

export default TechBackground;
