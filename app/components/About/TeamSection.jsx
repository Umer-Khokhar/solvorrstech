"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe, Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Umer Khokhar",
    role: "Founder & CEO",
    tag: "Leadership",
    bio: "Systems-focused founder who believes every growing business deserves structured digital infrastructure.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-400",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sara Ahmed",
    role: "Lead Developer",
    tag: "Engineering",
    bio: "Builds clean, scalable backend architectures and dashboards that handle real operational complexity.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    socials: { linkedin: "#" },
  },
  {
    name: "Bilal Nawaz",
    role: "UI/UX Designer",
    tag: "Design",
    bio: "Turns operational complexity into clear, intuitive interfaces that teams actually want to use every day.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-400",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Fatima Malik",
    role: "Project Strategist",
    tag: "Strategy",
    bio: "Ensures every project translates client goals into precise, well-scoped technical deliverables from day one.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face",
    gradientFrom: "from-orange-500",
    gradientTo: "to-amber-400",
    socials: { linkedin: "#" },
  },
];

const TeamCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-n-9/30 dark:bg-n-8/50 backdrop-blur-xl border border-n-1/10 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-n-1/20 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-color-1/10 hover:-translate-y-2"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.06), transparent 40%)`,
        }}
      />

      {/* Decorative Top Glow */}
      <div
        className={`absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} opacity-[0.04] group-hover:opacity-[0.1] blur-3xl transition-opacity duration-700 rounded-full pointer-events-none`}
      />

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-n-9/80 dark:from-n-8/80 via-n-9/20 dark:via-n-8/20 to-transparent" />

        {/* Role Tag */}
        <div className="absolute top-4 left-4 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-n-9/60 dark:bg-n-8/60 backdrop-blur-md border border-n-1/10 dark:border-white/10">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} animate-pulse`}
            />
            <span className="text-[10px] font-code font-bold text-n-3 dark:text-n-4 uppercase tracking-widest">
              {member.tag}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-6 z-10">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-n-1 dark:text-white mb-1 group-hover:text-gradient transition-all duration-300">
            {member.name}
          </h3>
          <p
            className={`text-xs font-code font-bold uppercase tracking-[0.2em] bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} bg-clip-text text-transparent`}
          >
            {member.role}
          </p>
        </div>

        <p className="text-sm text-n-3 dark:text-n-4 leading-relaxed mb-6 flex-1">
          {member.bio}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-n-1/10 dark:bg-white/10 mb-4 group-hover:bg-n-1/20 dark:group-hover:bg-white/15 transition-colors" />

        {/* Socials */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                className="p-2 rounded-xl bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 text-n-4 hover:text-n-1 dark:hover:text-white hover:bg-n-1/10 dark:hover:bg-white/10 hover:border-n-1/20 dark:hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {member.socials.twitter && (
              <a
                href={member.socials.twitter}
                className="p-2 rounded-xl bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 text-n-4 hover:text-n-1 dark:hover:text-white hover:bg-n-1/10 dark:hover:bg-white/10 hover:border-n-1/20 dark:hover:border-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            )}
            {member.socials.website && (
              <a
                href={member.socials.website}
                className="p-2 rounded-xl bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 text-n-4 hover:text-n-1 dark:hover:text-white hover:bg-n-1/10 dark:hover:bg-white/10 hover:border-n-1/20 dark:hover:border-white/20 transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <div className="w-8 h-8 rounded-full bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 flex items-center justify-center group-hover:bg-n-1/10 dark:group-hover:bg-white/10 group-hover:border-n-1/20 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-n-4 group-hover:text-n-1 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-n-8 dark:bg-n-8">
      {/* Background Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-color-1/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-color-2/10 blur-[120px] rounded-full -z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 rounded-full px-4 py-2 backdrop-blur-md mb-8 hover:bg-n-1/10 dark:hover:bg-white/10 transition-colors cursor-default group"
          >
            <Sparkles className="w-4 h-4 text-color-2 group-hover:scale-125 transition-transform" />
            <span className="text-xs font-code text-n-3 dark:text-n-4 uppercase tracking-[0.2em] font-bold">
              Our Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h2 font-bold text-n-1 dark:text-white mb-6"
          >
            The People Behind <span className="text-gradient">Solvorr</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-1 text-n-3 dark:text-n-4 px-4 md:px-0 max-w-2xl mx-auto"
          >
            A focused team of specialists who build structured systems, not just
            software — driven by a shared belief that operational clarity is the
            foundation of sustainable growth.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
