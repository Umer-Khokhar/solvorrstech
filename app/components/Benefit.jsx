"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, TrendingUp, Globe, Smartphone, Code, Layout, BarChart, 
  CheckCircle2, Cpu, Server, Bot, Database, Users, Star, Layers, Sparkles,
  ShoppingBag, FileCheck, ArrowUpRight
} from 'lucide-react';

const getIconForTitle = (title) => {
  if (!title) return <CheckCircle2 className="w-6 h-6" />;
  const lower = title.toLowerCase();
  
  if (lower.includes("fast") || lower.includes("speed") || lower.includes("performance") || lower.includes("efficient") || lower.includes("blazing") || lower.includes("time")) return <Zap className="w-6 h-6" />;
  if (lower.includes("secure") || lower.includes("security") || lower.includes("safe") || lower.includes("protection") || lower.includes("access") || lower.includes("auth") || lower.includes("error")) return <Shield className="w-6 h-6" />;
  if (lower.includes("growth") || lower.includes("results") || lower.includes("traffic") || lower.includes("seo") || lower.includes("scale") || lower.includes("visibility") || lower.includes("ranking")) return <TrendingUp className="w-6 h-6" />;
  if (lower.includes("web") || lower.includes("global") || lower.includes("cloud") || lower.includes("connectivity")) return <Globe className="w-6 h-6" />;
  if (lower.includes("mobile") || lower.includes("app") || lower.includes("responsive") || lower.includes("device")) return <Smartphone className="w-6 h-6" />;
  if (lower.includes("custom") || lower.includes("code") || lower.includes("dev") || lower.includes("script") || lower.includes("logic")) return <Code className="w-6 h-6" />;
  if (lower.includes("design") || lower.includes("ux") || lower.includes("ui") || lower.includes("layout") || lower.includes("template") || lower.includes("clean")) return <Layout className="w-6 h-6" />;
  if (lower.includes("analytics") || lower.includes("data") || lower.includes("track") || lower.includes("report") || lower.includes("insight")) return <BarChart className="w-6 h-6" />;
  if (lower.includes("tech") || lower.includes("architecture") || lower.includes("system") || lower.includes("structure")) return <Cpu className="w-6 h-6" />;
  if (lower.includes("api") || lower.includes("server") || lower.includes("backend") || lower.includes("deployment")) return <Server className="w-6 h-6" />;
  if (lower.includes("automation") || lower.includes("bot") || lower.includes("ai") || lower.includes("smart") || lower.includes("intelligence")) return <Bot className="w-6 h-6" />;
  if (lower.includes("database") || lower.includes("sql") || lower.includes("storage")) return <Database className="w-6 h-6" />;
  if (lower.includes("user") || lower.includes("customer") || lower.includes("team") || lower.includes("staff") || lower.includes("client")) return <Users className="w-6 h-6" />;
  if (lower.includes("integrated") || lower.includes("integration") || lower.includes("compatible") || lower.includes("connect")) return <Layers className="w-6 h-6" />;
  if (lower.includes("shop") || lower.includes("store") || lower.includes("commerce") || lower.includes("payment")) return <ShoppingBag className="w-6 h-6" />;
  if (lower.includes("quality") || lower.includes("test") || lower.includes("assurance")) return <FileCheck className="w-6 h-6" />;
  
  return <Sparkles className="w-6 h-6" />;
};

const MagicCard = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden p-[1px] rounded-3xl group ${className}`}>
        {/* Spinning Gradient Border */}
        <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Static Border (for non-hover state) */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-transparent transition-colors duration-500" />

        {/* Content Container */}
        <div className="relative h-full bg-[#050505] rounded-[23px] overflow-hidden">
            {/* Inner Grid Noise */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
            
            <div className="relative h-full p-8 z-10 flex flex-col">
                {children}
            </div>
        </div>
    </div>
  );
};

export default function Benefit({ serviceBenefits = [], serviceTitle = "Services" }) {
  if (!serviceBenefits || serviceBenefits.length === 0) return null;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-n-8 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-color-1/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block"
           >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 mx-auto w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color-1 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-color-1"></span>
                    </span>
                    <span className="text-xs font-mono text-white/80 uppercase tracking-widest">
                        Values & Advantages
                    </span>
              </div>
           </motion.div>

           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 mb-6 tracking-tight"
             style={{ fontFamily: 'var(--font-clash-grotesk)' }}
           >
             Why Choose Our <br />
             <span className="text-white">
               {serviceTitle}
             </span>
           </motion.h2>

           <p className="text-lg text-n-4 leading-relaxed px-4">
             Experience the perfect synergy of technical excellence and creative innovation.
           </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceBenefits.map((benefit, index) => {
            const icon = getIconForTitle(benefit.title);
            // Dynamic Spanning
            const isLarge = index === 0 || index === 3 || index === 6;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${isLarge ? 'lg:col-span-2' : ''}`}
              >
                  <MagicCard className="h-full">
                       {/* Floating Number */}
                       <div className="absolute top-6 right-6 font-mono text-5xl font-bold text-white/5 select-none pointer-events-none">
                           0{index + 1}
                       </div>

                       {/* Header Icon */}
                       <div className="mb-8 relative z-10 w-fit">
                           <div className="relative flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-color-1/10 group-hover:border-color-1/50 transition-all duration-300">
                               <div className="text-white/80 group-hover:text-color-1 transition-colors">
                                   {icon}
                               </div>
                           </div>
                           {/* Glow Effect under icon */}
                           <div className="absolute -inset-4 bg-color-1/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                       </div>

                       {/* Text Content */}
                       <div className="mt-auto relative z-10">
                           <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-color-1 transition-colors duration-300" style={{ fontFamily: 'var(--font-clash-grotesk)' }}>
                               {benefit.title}
                           </h3>
                           
                           {benefit.description && (
                               <p className="text-n-4 leading-relaxed group-hover:text-n-3 transition-colors duration-300">
                                   {benefit.description}
                               </p>
                           )}
                           {!benefit.description && benefit.text && (
                               <p className="text-n-4 leading-relaxed group-hover:text-n-3 transition-colors duration-300">
                                   {benefit.text}
                               </p>
                           )}
                       </div>
                       
                       {/* Decorative Arrow */}
                       <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                           <ArrowUpRight className="text-color-1 w-6 h-6" />
                       </div>
                  </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}