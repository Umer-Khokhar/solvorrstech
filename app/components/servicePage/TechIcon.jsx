"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TechIcon = ({ icon, index }) => {
    const cardRef = useRef(null);
    
    // Mouse interaction values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

    // Extract name from the icon path if possible (e.g., /tech-icons/React.svg -> React)
    const techName = icon.split('/').pop().split('.')[0].replace(/-/g, ' ');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut" 
            }}
            className="group relative"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative aspect-square w-full rounded-2xl bg-white/5 dark:bg-white/[0.03] backdrop-blur-md border border-n-1/10 dark:border-white/10 flex items-center justify-center p-4 md:p-6 transition-colors duration-500 group-hover:bg-white/10 dark:group-hover:bg-white/10 group-hover:border-color-1/30"
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-color-1/10 via-transparent to-color-2/10" />
                
                {/* Subtle Shine */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-2xl">
                    <motion.div 
                        animate={{
                            x: ["-100%", "200%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "easeInOut"
                        }}
                        className="absolute w-full h-[200%] bg-gradient-to-r from-transparent via-white/10 dark:via-white/[0.03] to-transparent rotate-45 -top-[50%]"
                    />
                </div>

                <div 
                    style={{ transform: "translateZ(50px)" }}
                    className="relative z-20 w-full h-full flex flex-col items-center justify-center gap-2"
                >
                    <img 
                        src={icon} 
                        alt={techName} 
                        className="w-10 h-10 md:w-14 md:h-14 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all duration-500"
                    />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] md:text-xs font-code text-n-1/60 dark:text-white/40 uppercase tracking-tighter text-center">
                        {techName}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TechIcon;
