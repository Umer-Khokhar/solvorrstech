"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowUpRight,
  Terminal,
  Share2,
  Clock,
  CheckCircle2,
  Maximize2,
  Layers,
  ShieldCheck,
} from "lucide-react";
import Section from "../Section";
import { TechBackground } from "../index.js";
import ContactForm from "./ContactForm";

const BentoCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`relative group bg-n-8/40 dark:bg-n-9/40 backdrop-blur-md border border-n-4/40 dark:border-white/5 rounded-3xl p-8 overflow-hidden ${className}`}
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-color-1/10 via-transparent to-color-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    {/* Border highlight */}
    <div className="absolute inset-0 border border-color-1/0 group-hover:border-color-1/30 rounded-3xl transition-colors duration-500" />

    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </motion.div>
);

const ContactUs = () => {
  return (
    <Section
      className="pt-[12rem] bg-n-7 dark:bg-n-8 -mt-[5.25rem] pb-24 relative overflow-hidden"
      crosses
      customPadding
      id="contact"
    >
      <TechBackground />

      <div className="container relative z-2">
        {/* Header Section */}
        <div className="mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-n-7 dark:bg-white/5 border border-n-6/30 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color-1 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-color-1"></span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-n-4">
                Contact Us
              </span>
            </div>

            <h1 className="h1 lg:text-8xl tracking-tighter mb-8 leading-[0.9]">
              Let&apos;s Build{" "}
              <span className="text-gradient font-bold italic">
                Something Great.
              </span>
            </h1>

            <p className="body-1 text-n-3 dark:text-n-4 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to start your next project? key us know how we can help you
              scale your digital infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-max">
          {/* Main Form Area - Large Bento Item */}
          <BentoCard className="lg:col-span-8 p-10 md:p-14 border-color-1/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] h-full">
            <div className="flex items-center justify-between mb-16">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-n-1 dark:text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-sm text-n-4">
                  We will get back to you within 24 hours.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1 opacity-20">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-n-4" />
                  <div className="w-8 h-1 bg-n-4" />
                </div>
                <div className="flex gap-1">
                  <div className="w-4 h-1 bg-n-4" />
                  <div className="w-5 h-1 bg-n-4" />
                </div>
                <div className="flex gap-1">
                  <div className="w-6 h-1 bg-n-4" />
                  <div className="w-3 h-1 bg-n-4" />
                </div>
              </div>
            </div>
            <ContactForm />
          </BentoCard>

          {/* Right Column - Info Cards Wrapper */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8 h-full">
            {/* Contact Details Bento Item */}
            <BentoCard className="flex-1" delay={0.2}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-color-2 flex items-center justify-center border border-color-1/20 text-white">
                  <Terminal className="w-6 h-6 font-bold" />
                </div>
                <h4 className="text-lg font-bold tracking-tight text-n-1 dark:text-white">
                  Contact Info
                </h4>
              </div>

              <div className="space-y-4">
                <div className="group/item">
                  <p className="text-[10px] font-mono text-n-4 uppercase tracking-[0.2em] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@solvorr.tech"
                    className="text-lg font-medium text-n-1 dark:text-white hover:text-color-1 flex items-center gap-2 group/link transition-colors truncate"
                  >
                    hello@solvorrtech.com
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all -translate-y-1" />
                  </a>
                </div>
                <div className="group/item">
                  <p className="text-[10px] font-mono text-n-4 uppercase tracking-[0.2em] mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+15550000000"
                    className="text-lg font-medium text-n-1 dark:text-white hover:text-color-1 flex items-center gap-2 group/link transition-colors"
                  >
                    +92 321 8437500
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all -translate-y-1" />
                  </a>
                </div>
              </div>
            </BentoCard>

            {/* Social Social Bento Item */}
            <BentoCard className="flex-1" delay={0.3}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-color-3 flex items-center justify-center border border-color-2/20 text-white">
                  <Share2 className="w-6 h-6 font-bold" />
                </div>
                <h4 className="text-lg font-bold tracking-tight text-n-1 dark:text-white">
                  Follow Us
                </h4>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[Linkedin, Twitter, Instagram, Facebook].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="aspect-square flex items-center justify-center rounded-2xl bg-n-7 dark:bg-white/5 border border-n-3/30 dark:border-n-6/30 text-n-4 hover:text-color-1 hover:border-color-1/50 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </BentoCard>

            {/* Status Bento Item */}
            <BentoCard className="flex-1" delay={0.4}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-color-4 flex items-center justify-center border border-emerald-500/20 text-white">
                  <Clock className="w-6 h-6 font-bold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-n-1 dark:text-white">
                    Office Hours
                  </h4>
                  <span className="text-[9px] font-mono text-emerald-500 uppercase flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />{" "}
                    Open Now
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-n-7 dark:bg-white/5 border border-n-6/30">
                <div className="flex justify-between items-center text-[10px] font-mono text-n-4">
                  <span>Mon-Fri</span>
                  <span className="text-n-1 dark:text-white">
                    09:00 - 18:00 EST
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-n-4 mt-1">
                  <span>Weekend</span>
                  <span className="text-orange-500">Scheduled Support</span>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Full Width Values / Footnote Bento Item */}
          <BentoCard className="lg:col-span-12 flex-row !p-0" delay={0.5}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
              <div className="p-8 border-b sm:border-b-0 sm:border-r border-n-3/30 dark:border-n-6/30 dark:border-white/5">
                <CheckCircle2 className="w-5 h-5 text-color-1 mb-4" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-n-4 mb-1">
                  Architecture
                </p>
                <p className="text-sm font-medium text-n-1 dark:text-white">
                  Enterprise Ready
                </p>
              </div>
              <div className="p-8 border-b sm:border-b-0 lg:border-r border-n-3/30 dark:border-n-6/30 dark:border-white/5">
                <Maximize2 className="w-5 h-5 text-color-2 mb-4" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-n-4 mb-1">
                  Scale
                </p>
                <p className="text-sm font-medium text-n-1 dark:text-white">
                  Built to Grow
                </p>
              </div>
              <div className="p-8 border-b sm:border-b-0 sm:border-r border-n-3/30 dark:border-n-6/30 dark:border-white/5">
                <Layers className="w-5 h-5 text-color-3 mb-4" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-n-4 mb-1">
                  Deploy
                </p>
                <p className="text-sm font-medium text-n-1 dark:text-white">
                  Zero Friction
                </p>
              </div>
              <div className="p-8">
                <ShieldCheck className="w-5 h-5 text-color-1 mb-4" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-n-4 mb-1">
                  Security
                </p>
                <p className="text-sm font-medium text-n-1 dark:text-white">
                  Bank-Grade Standard
                </p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
