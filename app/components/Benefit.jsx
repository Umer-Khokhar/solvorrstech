"use client"
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Zap, Shield, TrendingUp, Globe, Smartphone, Code, Layout, BarChart, 
  CheckCircle2, Cpu, Server, Bot, Database, Users, Star, Layers, Sparkles,
  ShoppingBag, FileCheck, ArrowUpRight, Search, FileText, Map, Settings,
  GitBranch, Plug, Calendar, Mail, UserCog
} from 'lucide-react';

const getIconForTitle = (title) => {
  if (!title) return <CheckCircle2 className="w-8 h-8" />;
  const lower = title.toLowerCase();
  
  if (lower.includes("fast") || lower.includes("speed") || lower.includes("performance") || lower.includes("efficient") || lower.includes("blazing") || lower.includes("time")) return <Zap className="w-8 h-8" />;
  if (lower.includes("secure") || lower.includes("security") || lower.includes("safe") || lower.includes("protection") || lower.includes("access") || lower.includes("auth") || lower.includes("error") || lower.includes("protection")) return <Shield className="w-8 h-8" />;
  if (lower.includes("growth") || lower.includes("results") || lower.includes("traffic") || lower.includes("seo") || lower.includes("scale") || lower.includes("visibility") || lower.includes("ranking") || lower.includes("authority")) return <TrendingUp className="w-8 h-8" />;
  if (lower.includes("web") || lower.includes("global") || lower.includes("cloud") || lower.includes("connectivity") || lower.includes("consumption")) return <Globe className="w-8 h-8" />;
  if (lower.includes("mobile") || lower.includes("app") || lower.includes("responsive") || lower.includes("device")) return <Smartphone className="w-8 h-8" />;
  if (lower.includes("custom") || lower.includes("code") || lower.includes("dev") || lower.includes("script") || lower.includes("logic")) return <Code className="w-8 h-8" />;
  if (lower.includes("design") || lower.includes("ux") || lower.includes("ui") || lower.includes("layout") || lower.includes("template") || lower.includes("clean")) return <Layout className="w-8 h-8" />;
  if (lower.includes("analytics") || lower.includes("data") || lower.includes("track") || lower.includes("report") || lower.includes("insight")) return <BarChart className="w-8 h-8" />;
  if (lower.includes("tech") || lower.includes("architecture") || lower.includes("system") || lower.includes("structure")) return <Cpu className="w-8 h-8" />;
  if (lower.includes("api") || lower.includes("server") || lower.includes("backend") || lower.includes("deployment")) return <Server className="w-8 h-8" />;
  if (lower.includes("automation") || lower.includes("bot") || lower.includes("ai") || lower.includes("smart") || lower.includes("intelligence")) return <Bot className="w-8 h-8" />;
  if (lower.includes("database") || lower.includes("sql") || lower.includes("storage")) return <Database className="w-8 h-8" />;
  if (lower.includes("user") || lower.includes("customer") || lower.includes("team") || lower.includes("staff") || lower.includes("client")) return <Users className="w-8 h-8" />;
  if (lower.includes("integrated") || lower.includes("integration") || lower.includes("compatible") || lower.includes("connect")) return <Layers className="w-8 h-8" />;
  if (lower.includes("shop") || lower.includes("store") || lower.includes("commerce") || lower.includes("payment")) return <ShoppingBag className="w-8 h-8" />;
  if (lower.includes("quality") || lower.includes("test") || lower.includes("assurance")) return <FileCheck className="w-8 h-8" />;
  if (lower.includes("search")) return <Search className="w-8 h-8" />;
  if (lower.includes("text") || lower.includes("audit")) return <FileText className="w-8 h-8" />;
  if (lower.includes("map") || lower.includes("local")) return <Map className="w-8 h-8" />;
  if (lower.includes("settings")) return <Settings className="w-8 h-8" />;
  if (lower.includes("branch")) return <GitBranch className="w-8 h-8" />;
  if (lower.includes("plug")) return <Plug className="w-8 h-8" />;
  if (lower.includes("calendar") || lower.includes("booking")) return <Calendar className="w-8 h-8" />;
  if (lower.includes("mail") || lower.includes("notification")) return <Mail className="w-8 h-8" />;
  if (lower.includes("cog") || lower.includes("admin")) return <UserCog className="w-8 h-8" />;
  
  return <Sparkles className="w-8 h-8" />;
};

const BentoCard = ({ children, className = "", delay = 0 }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      <div className="relative h-full w-full rounded-[2.5rem] border border-n-6 bg-n-9/80 dark:bg-n-9/50 backdrop-blur-3xl overflow-hidden transition-all duration-500 group-hover:border-color-1/40 group-hover:bg-white dark:group-hover:bg-n-9/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-none group-hover:shadow-[0_20px_48px_rgba(59,130,246,0.1)] transition-shadow duration-500">
        
        {/* Spectral Border Effect - More vibrant for light theme */}
        <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
                background: `radial-gradient(circle at ${mouseXSpring.get() * 100 + 50}% ${mouseYSpring.get() * 100 + 50}%, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 60%)`
            }}
        />

        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-color-1/5 to-transparent opacity-30 pointer-events-none" />
        
        {/* Patterns */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative h-full p-10 flex flex-col z-10" style={{ transform: "translateZ(50px)" }}>
          {children}
        </div>

        {/* Bottom Glow */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-color-1/10 rounded-full blur-[80px] group-hover:bg-color-1/20 transition-colors duration-500" />
      </div>
    </motion.div>
  );
};

export default function Benefit({ serviceBenefits = [], serviceTitle = "Services" }) {
  if (!serviceBenefits || serviceBenefits.length === 0) return null;

  return (
    <section className="relative py-32 px-6 lg:px-12 bg-n-8 overflow-hidden">
      
      {/* Background Orbs - More vibrant and colorful */}
      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-color-1/20 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-pulse" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-color-2/20 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-pulse opacity-70" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[2px] w-12 bg-gradient-to-r from-color-1 to-color-2" />
              <span className="text-sm font-mono text-color-1 dark:text-color-1 uppercase tracking-[0.3em] font-bold">
                The Edge You Need
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold text-n-1 tracking-tighter leading-[0.9] mb-8"
              style={{ fontFamily: 'var(--font-clash-grotesk)' }}
            >
              Why Partner With Us For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 via-color-1 to-color-2 inline-block pb-4">
                {serviceTitle}
              </span>
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-n-3 dark:text-n-4 max-w-xl leading-relaxed font-light"
            >
              We don&apos;t just deliver services; we build strategic advantages that propel your business into the future of digital excellence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 rounded-full border border-n-6 bg-white/50 dark:bg-transparent flex items-center justify-center relative group cursor-pointer overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-color-1/10 to-color-2/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <ArrowUpRight className="w-8 h-8 text-n-1 relative z-10 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-n-3 dark:text-n-4 text-center">Scroll to <br /> explore</span>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8">
          {serviceBenefits.map((benefit, index) => {
            const icon = getIconForTitle(benefit.title);
            
            let colSpanClasses = "lg:col-span-4 md:col-span-3";
            if (index === 0) colSpanClasses = "lg:col-span-7 md:col-span-6";
            if (index === 1) colSpanClasses = "lg:col-span-5 md:col-span-3";
            if (index === 2) colSpanClasses = "lg:col-span-4 md:col-span-3";
            if (index === 3) colSpanClasses = "lg:col-span-4 md:col-span-3";
            if (index === 4) colSpanClasses = "lg:col-span-4 md:col-span-6";

            return (
              <BentoCard 
                key={index} 
                className={colSpanClasses}
                delay={index * 0.1}
              >
                {/* Index Number */}
                <div className="absolute top-10 right-10 text-xs font-mono text-color-1/20 dark:text-n-1/10 select-none font-bold">
                    0{index + 1}
                </div>

                {/* Icon Section */}
                <div className="mb-12">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-color-1/10 to-transparent border border-n-6 flex items-center justify-center group-hover:scale-110 group-hover:border-color-1/50 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-color-1/20 to-color-2/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-color-1 dark:text-n-1 group-hover:text-color-1 transition-colors duration-500 relative z-10">
                            {icon}
                        </div>
                   </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                    <h3 
                        className="text-3xl font-bold text-n-1 mb-4 tracking-tight group-hover:text-color-1 transition-colors duration-500" 
                        style={{ fontFamily: 'var(--font-clash-grotesk)' }}
                    >
                        {benefit.title}
                    </h3>
                    <p className="text-n-3 dark:text-n-4 text-lg leading-relaxed font-light group-hover:text-n-2 transition-colors duration-500">
                        {benefit.description || benefit.text}
                    </p>
                </div>

                {/* Interactive Detail Button - More pleasing eyes */}
                <div className="mt-10 pt-10 border-t border-n-6 flex items-center justify-between opacity-10 lg:opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-color-1/5 dark:bg-color-1/10 border border-color-1/20">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-color-1 font-bold">Strategic Edge</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-color-1/10 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-color-1" />
                    </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}