"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Smartphone,
  Code,
  Layout,
  BarChart,
  CheckCircle2,
  Cpu,
  Server,
  Bot,
  Database,
  Users,
  Star,
  Layers,
  Sparkles,
  ShoppingBag,
  FileCheck,
  ArrowUpRight,
  Search,
  FileText,
  Map,
  Settings,
  GitBranch,
  Plug,
  Calendar,
  Mail,
  UserCog,
} from "lucide-react";

const getIconForTitle = (title) => {
  if (!title) return <CheckCircle2 className="w-8 h-8" />;
  const lower = title.toLowerCase();

  if (
    lower.includes("fast") ||
    lower.includes("speed") ||
    lower.includes("performance") ||
    lower.includes("efficient") ||
    lower.includes("blazing") ||
    lower.includes("time")
  )
    return <Zap className="w-8 h-8" />;
  if (
    lower.includes("secure") ||
    lower.includes("security") ||
    lower.includes("safe") ||
    lower.includes("protection") ||
    lower.includes("access") ||
    lower.includes("auth") ||
    lower.includes("error") ||
    lower.includes("protection")
  )
    return <Shield className="w-8 h-8" />;
  if (
    lower.includes("growth") ||
    lower.includes("results") ||
    lower.includes("traffic") ||
    lower.includes("seo") ||
    lower.includes("scale") ||
    lower.includes("visibility") ||
    lower.includes("ranking") ||
    lower.includes("authority")
  )
    return <TrendingUp className="w-8 h-8" />;
  if (
    lower.includes("web") ||
    lower.includes("global") ||
    lower.includes("cloud") ||
    lower.includes("connectivity") ||
    lower.includes("consumption")
  )
    return <Globe className="w-8 h-8" />;
  if (
    lower.includes("mobile") ||
    lower.includes("app") ||
    lower.includes("responsive") ||
    lower.includes("device")
  )
    return <Smartphone className="w-8 h-8" />;
  if (
    lower.includes("custom") ||
    lower.includes("code") ||
    lower.includes("dev") ||
    lower.includes("script") ||
    lower.includes("logic")
  )
    return <Code className="w-8 h-8" />;
  if (
    lower.includes("design") ||
    lower.includes("ux") ||
    lower.includes("ui") ||
    lower.includes("layout") ||
    lower.includes("template") ||
    lower.includes("clean")
  )
    return <Layout className="w-8 h-8" />;
  if (
    lower.includes("analytics") ||
    lower.includes("data") ||
    lower.includes("track") ||
    lower.includes("report") ||
    lower.includes("insight")
  )
    return <BarChart className="w-8 h-8" />;
  if (
    lower.includes("tech") ||
    lower.includes("architecture") ||
    lower.includes("system") ||
    lower.includes("structure")
  )
    return <Cpu className="w-8 h-8" />;
  if (
    lower.includes("api") ||
    lower.includes("server") ||
    lower.includes("backend") ||
    lower.includes("deployment")
  )
    return <Server className="w-8 h-8" />;
  if (
    lower.includes("automation") ||
    lower.includes("bot") ||
    lower.includes("ai") ||
    lower.includes("smart") ||
    lower.includes("intelligence")
  )
    return <Bot className="w-8 h-8" />;
  if (
    lower.includes("database") ||
    lower.includes("sql") ||
    lower.includes("storage")
  )
    return <Database className="w-8 h-8" />;
  if (
    lower.includes("user") ||
    lower.includes("customer") ||
    lower.includes("team") ||
    lower.includes("staff") ||
    lower.includes("client")
  )
    return <Users className="w-8 h-8" />;
  if (
    lower.includes("integrated") ||
    lower.includes("integration") ||
    lower.includes("compatible") ||
    lower.includes("connect")
  )
    return <Layers className="w-8 h-8" />;
  if (
    lower.includes("shop") ||
    lower.includes("store") ||
    lower.includes("commerce") ||
    lower.includes("payment")
  )
    return <ShoppingBag className="w-8 h-8" />;
  if (
    lower.includes("quality") ||
    lower.includes("test") ||
    lower.includes("assurance")
  )
    return <FileCheck className="w-8 h-8" />;
  if (lower.includes("search")) return <Search className="w-8 h-8" />;
  if (lower.includes("text") || lower.includes("audit"))
    return <FileText className="w-8 h-8" />;
  if (lower.includes("map") || lower.includes("local"))
    return <Map className="w-8 h-8" />;
  if (lower.includes("settings")) return <Settings className="w-8 h-8" />;
  if (lower.includes("branch")) return <GitBranch className="w-8 h-8" />;
  if (lower.includes("plug")) return <Plug className="w-8 h-8" />;
  if (lower.includes("calendar") || lower.includes("booking"))
    return <Calendar className="w-8 h-8" />;
  if (lower.includes("mail") || lower.includes("notification"))
    return <Mail className="w-8 h-8" />;
  if (lower.includes("cog") || lower.includes("admin"))
    return <UserCog className="w-8 h-8" />;

  return <Sparkles className="w-8 h-8" />;
};

const BentoCard = ({ children, className = "", delay = 0 }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group h-full ${className}`}
    >
      <div className="relative h-full w-full rounded-[2rem] border border-n-6/50 dark:border-n-6 bg-white/50 dark:bg-n-8/80 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-color-1/30 group-hover:bg-white/80 dark:group-hover:bg-n-8 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {/* Soft Gradient Background Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-color-1/5 via-transparent to-color-2/5" />
        </div>

        {/* Dynamic Spotlight Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mouseXSpring.get() * 100 + 50}% ${mouseYSpring.get() * 100 + 50}%, rgba(var(--color-1-rgb), 0.06), transparent 40%)`,
          }}
        />

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

        <div
          className="relative h-full p-8 md:p-10 flex flex-col z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default function Benefit({
  serviceBenefits = [],
  serviceTitle = "Services",
}) {
  if (!serviceBenefits || serviceBenefits.length === 0) return null;

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-n-8/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-color-1/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-color-2/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-n-7 border border-n-6 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-color-1 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-n-3">
                Value Proposition
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h2 font-semibold text-n-1 mb-6"
              style={{ fontFamily: "var(--font-clash-grotesk)" }}
            >
              Why Partner With Us For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-2">
                {serviceTitle}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-n-3 max-w-xl leading-relaxed font-light"
            >
              We don&apos;t just deliver services; we build strategic advantages
              that propel your business into the future of digital excellence.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {serviceBenefits.map((benefit, index) => {
            const icon = getIconForTitle(benefit.title);
            const totalItems = serviceBenefits.length;

            // Default span configuration
            let colSpanClasses = "lg:col-span-4";

            if (totalItems === 4) {
              // Balanced 2x2 layout for 4 items, but making it interesting
              if (index === 0) colSpanClasses = "lg:col-span-7";
              if (index === 1) colSpanClasses = "lg:col-span-5";
              if (index === 2) colSpanClasses = "lg:col-span-5";
              if (index === 3) colSpanClasses = "lg:col-span-7";
            } else if (totalItems === 3) {
              // Classic 3 col
              colSpanClasses = "lg:col-span-4";
            } else {
              // Default specific overrides for other counts to maintain "bento" feel
              if (index === 0) colSpanClasses = "lg:col-span-7";
              if (index === 1) colSpanClasses = "lg:col-span-5";
              if (index === 2) colSpanClasses = "lg:col-span-4";
              if (index > 2) colSpanClasses = "lg:col-span-4";
            }

            return (
              <BentoCard
                key={index}
                className={colSpanClasses}
                delay={index * 0.1}
              >
                {/* Index Number */}
                <div
                  className="absolute top-8 right-8 text-6xl font-black text-n-1/5 select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-clash-grotesk)" }}
                >
                  0{index + 1}
                </div>

                {/* Content Container */}
                <div className="relative flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-8 relative inline-block">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-n-7 to-n-8 border border-n-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
                      <div className="text-n-1 group-hover:text-color-1 transition-colors duration-300">
                        {icon}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-color-1/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Text */}
                  <div className="mt-auto">
                    <h3
                      className="text-2xl font-semibold text-n-1 mb-3 group-hover:text-color-1 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-clash-grotesk)" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-n-3 text-base leading-relaxed group-hover:text-n-2 transition-colors duration-300 line-clamp-3">
                      {benefit.description || benefit.text}
                    </p>
                  </div>

                  {/* Action Hint */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-color-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4" />
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
