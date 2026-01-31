"use client";
import React, { useRef, useState } from "react";
import {
  Wrench,
  Cpu,
  Lightbulb,
  Eye,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { TechBackground } from ".";

const features = [
  {
    icon: Wrench,
    title: "Advanced Tools",
    subtitle: "Enterprise Grade",
    description:
      "We leverage industry-leading software and proprietary tools to engineer robust solutions that scale with your business needs.",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    stat: "100+",
    statLabel: "Tools Integrated",
    highlights: ["Automated Pipelines", "Real-time Monitoring"],
    colSpan: "lg:col-span-2",
    size: "large",
  },
  {
    icon: Cpu,
    title: "Innovation First",
    subtitle: "AI & Cloud",
    description:
      "Always ahead of the curve, we integrate emerging technologies for future-proof growth.",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    stat: "24/7",
    statLabel: "System Monitoring",
    highlights: ["AI Analytics", "Cloud Infra"],
    colSpan: "lg:col-span-1",
    size: "medium",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    subtitle: "UX Centric",
    description:
      "Fusing data-driven strategy with boundary-pushing creativity to craft unique digital experiences.",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    stat: "30%",
    statLabel: "Conversion Uplift",
    highlights: ["Data-Driven", "User-Centric"],
    colSpan: "lg:col-span-1",
    size: "medium",
  },
  {
    icon: Eye,
    title: "Vision & Impact",
    subtitle: "Strategic Results",
    description:
      "Transforming ambitious visions into tangible, high-impact digital realities aligned with your core business objectives.",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    stat: "Global",
    statLabel: "Client Reach",
    highlights: ["Business Alignment", "Scalable Growth"],
    colSpan: "lg:col-span-2",
    size: "large",
  },
];

const BentoCard = ({ feature }) => {
  const Icon = feature.icon;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative h-full min-h-[380px] p-8 lg:p-10 bg-n-9/20 dark:bg-n-8/40 backdrop-blur-xl border border-n-1/10 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-n-1/20 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-color-1/5 ${feature.colSpan}`}
    >
      {/* Background Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--color-color-1-rgb, 59, 130, 246), 0.05), transparent 40%)`,
        }}
      />

      {/* Decorative Glow */}
      <div
        className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-[0.03] group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700 rounded-full`}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] mix-blend-soft-light pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative h-full flex flex-col z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} p-[1px] shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
          >
            <div className="w-full h-full rounded-[15px] flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 backdrop-blur-md">
            <span className="text-[10px] font-code font-bold text-n-4 uppercase tracking-tighter">
              {feature.subtitle}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-bold text-n-1 dark:text-white mb-4 group-hover:text-gradient transition-all duration-300">
            {feature.title}
          </h3>
          <p className="text-n-3 leading-relaxed mb-6 line-clamp-3">
            {feature.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-8">
            {feature.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-n-1/8 dark:bg-white/5 border border-n-1/10 dark:border-white/10 group-hover:border-n-1/15 dark:group-hover:border-white/15 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-color-3" />
                <span className="text-xs text-n-3 font-medium">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-n-1/10 dark:border-white/10 flex items-center justify-between mt-auto group-hover:border-n-1/20 dark:group-hover:border-white/15 transition-colors">
          <div className="flex flex-col">
            <span
              className={`text-3xl font-bold bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} bg-clip-text text-transparent`}
            >
              {feature.stat}
            </span>
            <span className="text-[10px] font-code text-n-4 uppercase tracking-widest mt-1">
              {feature.statLabel}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-n-1/5 dark:bg-white/5 border border-n-1/5 dark:border-white/5 flex items-center justify-center group-hover:bg-n-1/10 dark:group-hover:bg-white/10 group-hover:border-n-1/20 dark:group-hover:border-white/20 transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-n-4 dark:text-n-4 group-hover:text-n-1 dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-n-8 dark:bg-n-8">
      <TechBackground />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-color-1/10 dark:bg-color-1/10 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-color-2/10 dark:bg-color-2/10 blur-[140px] rounded-full -z-10" />

      <div className="container relative z-10 px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="inline-flex items-center space-x-2 bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 rounded-full px-4 py-2 backdrop-blur-md mb-8 hover:bg-n-1/10 dark:hover:bg-white/10 transition-colors cursor-default group">
              <Sparkles className="w-4 h-4 text-color-2 group-hover:scale-125 transition-transform" />
              <span className="text-xs font-code text-n-3 uppercase tracking-[0.2em] font-bold">
                The Solvorr Edge
              </span>
            </div>
            <h2 className="h2 font-bold text-n-1 dark:text-white mb-6">
              Why Leaders <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="body-1 text-n-3 dark:text-n-4 max-w-2xl mx-auto">
              We specialize in engineering high-performance digital ecosystems
              that blend cutting-edge technology with strategic creative vision.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 container">
            {features.map((feature, idx) => (
              <StaggerItem key={idx} className={feature.colSpan}>
                <BentoCard feature={feature} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-n-9 to-transparent pointer-events-none" />
    </section>
  );
}
