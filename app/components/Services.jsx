import services from "@/lib/services.json";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Heading } from ".";
import { FadeIn, StaggerContainer, StaggerItem, TiltCard } from "./animations";
import React from "react";

const Services = () => {
  return (
    <section
      id="features"
      className="py-24 lg:py-40 overflow-hidden bg-white dark:bg-n-8 relative transition-colors duration-500"
    >
      {/* Soft Minimalist Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] -left-[5%] w-[50%] h-[50%] bg-color-1/5 dark:bg-color-1/5 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-color-2/5 dark:bg-color-2/5 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container relative z-10">
        {/* Balanced Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 lg:mb-32">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 bg-n-1/10 dark:bg-white/5 border border-n-1/10 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-color-1" />
              <span className="text-sm font-code text-n-1 dark:text-n-3 uppercase tracking-wider font-bold">
                Solutions for Growth
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="text-5xl md:text-7xl font-bold text-n-1 dark:text-white leading-[1.1] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-clash-grotesk)" }}
            >
              Engineering Excellence <br />
              <span className="text-gradient">For Your Digital Future</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-1 text-n-3 dark:text-n-4 max-w-2xl">
              We combine strategic thinking with technical mastery to build
              scalable software that drives real, measurable impact.
            </p>
          </FadeIn>
        </div>

        {/* Card Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          delayChildren={0.3}
          staggerChildren={0.1}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <TiltCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Call-to-Action */}
        <FadeIn delay={0.6} className="mt-24 lg:mt-32 text-center">
          <div className="group inline-flex flex-col items-center cursor-pointer">
            <span className="text-n-3 dark:text-n-4 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-black opacity-50">
              Discovery Phase
            </span>
            <div className="flex items-center gap-4 border-b border-n-1/10 dark:border-white/10 pb-2 group-hover:border-color-1 transition-colors">
              <span className="text-2xl font-bold text-n-1 dark:text-white">
                View Full Service Catalog
              </span>
              <ArrowUpRight className="w-6 h-6 text-color-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
