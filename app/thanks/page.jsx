"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowLeft,
  Twitter,
  Linkedin,
  Globe,
  MessageSquare,
  Zap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "../components/Button";

const ThanksPage = () => {
  return (
    <div className="min-h-screen bg-n-8 pt-[12rem] pb-[8rem] px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-color-1/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-color-2/5 rounded-full blur-[100px] -z-1" />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h1 mb-6 text-white"
        >
          Thank You for <span className="text-color-1">Reaching Out!</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="body-1 text-n-3 mb-12 max-w-[600px] mx-auto"
        >
          We've received your message and our team is already reviewing your
          project details. Expect to hear from us within the next{" "}
          <span className="text-white font-bold">24 hours</span>.
        </motion.p>

        {/* Next Steps / Features */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16 text-left"
        >
          {[
            {
              icon: <MessageSquare className="text-color-1 w-6 h-6" />,
              title: "Quick Response",
              desc: "Our specialists will reach out via email or phone.",
            },
            {
              icon: <Zap className="text-color-2 w-6 h-6" />,
              title: "Project Analysis",
              desc: "We'll prepare initial thoughts on your requirements.",
            },
            {
              icon: <ShieldCheck className="text-color-3 w-6 h-6" />,
              title: "Expert Advice",
              desc: "Get a free consultation session on your first call.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-n-7 border border-n-6/50 hover:border-color-1/30 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="h6 mb-2 text-white">{item.title}</h4>
              <p className="text-sm text-n-4">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <PrimaryButton href="/" size="lg">
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </span>
          </PrimaryButton>

          <div className="flex items-center gap-4">
            <span className="text-sm text-n-4 uppercase font-bold tracking-wider">
              Follow Us
            </span>
            <div className="flex gap-2">
              <a
                href="#"
                className="p-3 rounded-full bg-n-7 border border-n-6 hover:bg-color-1 hover:border-color-1 transition-all"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-n-7 border border-n-6 hover:bg-color-1 hover:border-color-1 transition-all"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThanksPage;
