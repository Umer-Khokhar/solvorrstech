"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Michael Torres",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      socials: { instagram: "#", twitter: "#", linkedin: "#" },
      bio: "Visionary leader with 10+ years in digital innovation.",
    },
    {
      name: "Jessica Harper",
      role: "Creative Officer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
      socials: { instagram: "#", linkedin: "#" },
      bio: "Award-winning designer crafting unique brand identities.",
    },
    {
      name: "David Miller",
      role: "Tech Lead",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
      socials: { twitter: "#", linkedin: "#" },
      bio: "Full-stack expert specializing in scalable architecture.",
    },
    {
      name: "Emily Watson",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
      socials: { linkedin: "#" },
      bio: "Ensuring smooth delivery and agile workflows.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-n-8 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-1 bg-gradient-to-r from-color-1 to-color-2 rounded-full"></div>
              <span className="text-sm font-medium tracking-widest text-n-3 uppercase">
                Our Team
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-n-1 leading-tight"
            >
              Meet the <span className="text-gradient font-medium">Minds</span>{" "}
              behind Solvorr.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-n-4 text-lg max-w-sm md:text-right">
              We are a group of passionate individuals working together to
              create amazing digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-1">
                    <h3 className="text-2xl font-medium text-white mb-1 group-hover:text-color-4 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="pt-4 text-n-3 text-sm line-clamp-2 mb-4">
                        {member.bio}
                      </div>

                      {/* Social Icons */}
                      <div className="flex items-center gap-3">
                        {member.socials.instagram && (
                          <a
                            href={member.socials.instagram}
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-white text-white/80 transition-colors backdrop-blur-sm"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-white text-white/80 transition-colors backdrop-blur-sm"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-white text-white/80 transition-colors backdrop-blur-sm"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Border/Hover effect */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none group-hover:border-color-1/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
