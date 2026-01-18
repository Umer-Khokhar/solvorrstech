"use client";
import services from "@/lib/services.json";
import { ArrowUpRight, Code, LayoutDashboard, Bot, Search, Network } from "lucide-react";
import { Heading } from ".";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const iconMap = {
  development: Code,
  dashboard: LayoutDashboard,
  automation: Bot,
  seo: Search,
  api: Network,
};

const TiltCard = ({ service, index }) => {
  const Icon = iconMap[service.iconUrl] || Code;
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]); // Reduced tilt for classier feel
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[500px] w-full rounded-[2rem] bg-white dark:bg-n-8 border border-n-1/10 dark:border-white/10 group perspective-1000 shadow-xl dark:shadow-none transition-all duration-300 hover:shadow-2xl hover:border-color-1/30"
    >
      {/* 3D Depth Elements - Screen floating behind */}
      <div 
        style={{ transform: "translateZ(-40px)" }}
        className="absolute inset-4 rounded-[2rem] bg-color-1/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
      />

      <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-white dark:bg-n-8 transition-colors duration-300">
        {/* Seamless Image Integration */}
        <div className="absolute top-0 left-0 w-full h-[65%] overflow-hidden">
             {/* Gradient Mask for Smooth Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-n-8/20 dark:to-n-8 z-10" />
            
            <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 dark:opacity-60 group-hover:opacity-100 dark:group-hover:opacity-80"
            />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
            {/* Floating Icon */}
            <div 
                style={{ transform: "translateZ(30px)" }}
                className="w-16 h-16 mb-6 rounded-2xl bg-white/80 dark:bg-n-8/80 backdrop-blur-xl border border-n-1/10 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-color-1 group-hover:dark:bg-color-1 group-hover:border-transparent transition-all duration-500"
            >
                <Icon className="w-7 h-7 text-n-1 group-hover:text-white transition-colors duration-300" />
            </div>

            <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-bold text-n-1 mb-3 group-hover:text-color-1 transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-n-3 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 font-medium">
                    {service.text}
                </p>

                <div className="flex items-center gap-3 text-xs font-bold font-code uppercase tracking-wider text-n-1/60 group-hover:text-color-1 transition-colors duration-300">
                    <span className="relative">
                        Explore Service
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-color-1 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:bg-color-1 group-hover:border-color-1 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-px group-hover:translate-x-px transition-transform" />
                    </div>
                </div>
            </div>
        </div>

        {/* Glossy Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="features" className="py-20 lg:py-32 overflow-hidden bg-n-8 relative transition-colors duration-300">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-color-1/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
        </div>

      <div className="container relative z-10">
        <Heading
          className="max-w-3xl mb-16 lg:mb-24 mx-auto text-center md:text-left"
          title="Digital Solutions That Drive Growth"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 perspective-2000">
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
