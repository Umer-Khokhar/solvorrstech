"use client"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, CheckCircle, Globe, Layers, Smartphone, Zap, 
  Users, ShoppingBag, BarChart, UserCog, FileCheck, Database, 
  Calendar, Mail, Bot, GitBranch, Plug, Shield, Search, 
  FileText, Map, Settings, Sparkles 
} from 'lucide-react';
import { TechBackground } from "..";

const icons = {
  Globe, Layers, Smartphone, Zap, Users, ShoppingBag, BarChart, 
  UserCog, FileCheck, Database, Calendar, Mail, Bot, GitBranch, 
  Plug, Shield, Search, FileText, Map, Settings, Sparkles
};

const SubtleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_70%)]" />
    <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
  </div>
);

const SubServices = ({ subServices }) => {
  const [activeService, setActiveService] = useState(0);

  if (!subServices || subServices.length === 0) return null;

  return (
    <section id="sub-services" className="relative pt-[5rem] py-12 xl:py-24 px-4 sm:px-6 lg:px-8 bg-n-8 dark:bg-n-8 overflow-hidden">
      <TechBackground />
      {/* <SubtleBackground /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Minimalist */}
        <div className="mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-color-1" />
            <span className="text-xs font-bold text-color-1 uppercase tracking-[0.3em] font-mono">
              Expertise
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h2 text-n-1 dark:text-white tracking-tight lg:text-6xl max-w-3xl"
            style={{ fontFamily: 'var(--font-clash-grotesk)' }}
          >
            Specialized solutions for <br /> modern digital ecosystems
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side - Clean Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <div className="space-y-1">
              {subServices.map((service, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setActiveService(index)}
                    className={`
                      w-full text-left py-4 px-2 transition-all duration-300 flex items-center justify-between group
                      ${activeService === index 
                        ? 'text-n-1 dark:text-white' 
                        : 'text-n-3 dark:text-n-4 hover:text-n-1 dark:hover:text-white'
                      }
                    `}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-xs transition-colors duration-300 ${activeService === index ? 'text-color-1' : 'text-n-4'}`}>
                        0{index + 1}
                      </span>
                      <span className={`text-xl lg:text-2xl font-medium tracking-tight transition-transform duration-300 ${activeService === index ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                        {service.title}
                      </span>
                    </div>
                    
                    <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${activeService === index ? 'opacity-100 text-color-1' : 'opacity-0 -translate-y-1 translate-x-1'}`} />
                  </button>
                  
                  {/* Subtle Indicator Line */}
                  {activeService === index && (
                    <motion.div 
                      layoutId="active-line"
                      className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-color-1"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Minimalist Footnote */}
            <div className="hidden lg:block pt-12">
              <p className="text-xs text-n-4 leading-relaxed max-w-[200px] uppercase tracking-wider font-light">
                Select a service to explore our specialized approach and key deliverables.
              </p>
            </div>
          </div>

          {/* Right Side - Sophisticated Minimal Card */}
          <div className="lg:col-span-8">
            <div className="h-full relative ">
              {/* Ultra-thin Minimalist Border */}
              <div className="absolute inset-0 border border-n-5/30 dark:border-white/5 rounded-[40px] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-white dark:bg-n-9/40 backdrop-blur-sm border border-n-4/30 dark:border-white/5 rounded-[40px] p-8 lg:p-16 h-full flex flex-col"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-12 h-12 rounded-2xl bg-n-7 dark:bg-white/5 flex items-center justify-center border border-n-6/50 dark:border-white/10">
                              {(() => {
                                  const Icon = icons[subServices[activeService]?.icon] || Sparkles;
                                  return <Icon className="w-6 h-6 text-n-1 dark:text-white" strokeWidth={1.5} />;
                              })()}
                           </div>
                           <span className="text-xs font-mono text-n-4 uppercase tracking-[0.2em]">
                             D-0{activeService + 1}
                           </span>
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-bold text-n-1 dark:text-white mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-clash-grotesk)' }}>
                          {subServices[activeService]?.title}
                        </h3>
                        
                        <p className="text-lg lg:text-xl text-n-3 dark:text-n-4 leading-relaxed font-light">
                          {subServices[activeService]?.description}
                        </p>
                    </div>
                  </div>

                  {/* Clean Feature List - Integrated */}
                  {subServices[activeService]?.features && subServices[activeService].features.length > 0 && (
                    <div className="mb-12">
                      <div className="h-[1px] w-full bg-n-6/30 dark:bg-white/5 mb-8" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {subServices[activeService].features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-4 group/feat">
                            <span className="text-[10px] font-mono text-color-1 mt-1 opacity-60 group-hover/feat:opacity-100 transition-opacity">0{idx + 1}</span>
                            <span className="text-base text-n-2 dark:text-n-3 font-medium transition-colors group-hover/feat:text-n-1 dark:group-hover/feat:text-white">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Minimalist CTA */}
                  <div className="mt-auto">
                    <button className="group flex items-center gap-4 py-4 px-8 bg-n-1 dark:bg-white text-white dark:text-n-1 rounded-full font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      <span>Initiate Collaboration</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubServices;
