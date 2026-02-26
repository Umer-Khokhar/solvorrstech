"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { TechBackground } from ".";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

 const faqs = [
  {
    id: 1,
    question: "What does Solvorr Tech specialize in?",
    answer:
      "Solvorr Tech builds structured business systems that help growing companies manage operations and improve visibility. We specialize in Business Operations Dashboards, Workflow Automation, and Local Search & Visibility Optimization to bring clarity and efficiency to core processes.",
  },
  {
    id: 2,
    question: "Who are your services best suited for?",
    answer:
      "Our services are designed for growing small and mid-sized businesses that rely on structured operations, lead management, and local visibility. If your business is managing leads, invoicing, or internal processes manually, we help centralize and streamline those systems.",
  },
  {
    id: 3,
    question: "Do you build fully custom dashboards?",
    answer:
      "We design dashboards around your workflow while maintaining a structured framework to ensure reliability and scalability. This approach allows us to deliver tailored systems without introducing unnecessary complexity or instability.",
  },
  {
    id: 4,
    question: "What kind of automation do you implement?",
    answer:
      "We implement practical workflow automation such as lead routing, follow-up reminders, invoice notifications, and tool integrations. Our focus is on reducing repetitive tasks and improving operational consistency without over-engineering your processes.",
  },
  {
    id: 5,
    question: "What results can we expect from Local Search & Visibility Optimization?",
    answer:
      "Our approach focuses on strengthening your local search presence through structured optimization. This improves discoverability, credibility, and long-term visibility on Google Search and Maps, supporting consistent inbound inquiries over time.",
  },
  {
    id: 6,
    question: "Do you provide ongoing support after implementation?",
    answer:
      "Yes. We provide structured post-deployment support to ensure stability, usability, and continuous improvement. As your business evolves, we can refine workflows, expand modules, and optimize visibility strategies accordingly.",
  },
];

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <TechBackground />
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-20 left-[-100px] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-[-100px] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <HelpCircle className="w-4 h-4 text-color-1" />
              <span className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider">
                Support Center
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-purple-500">
                Questions
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and
              technical capabilities.
            </p>
          </FadeIn>
        </div>

        {/* FAQ List */}
        <StaggerContainer className="space-y-4" delayChildren={0.6}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === faq.id;

            return (
              <StaggerItem key={faq.id}>
                <div
                  className={`
                                        group rounded-2xl border transition-all duration-300
                                        ${
                                          isActive
                                            ? "bg-n-8/50 border-color-1/50 shadow-lg shadow-color-1/5"
                                            : "bg-n-8/70 border-n-4/40 dark:border-white/10 hover:border-color-1/30 hover:bg-n-7/70"
                                        }
                                    `}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 md:p-8 focus:outline-none"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`
                                                text-lg md:text-xl font-semibold transition-colors
                                                ${isActive ? "text-color-1" : "text-gray-900 dark:text-white group-hover:text-color-1"}
                                            `}
                      >
                        {faq.question}
                      </h3>
                      <div
                        className={`
                                                flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                                                transition-all duration-300 border
                                                ${
                                                  isActive
                                                    ? "bg-color-1 text-white border-color-1 rotate-180"
                                                    : "bg-white/5 border-white/10 text-gray-500 group-hover:border-color-1/50 group-hover:text-color-1"
                                                }
                                            `}
                      >
                        {isActive ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg pr-8 border-t border-gray-100 dark:border-white/5 mt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Footer / Contact CTA */}
        <FadeIn delay={1}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-color-1 font-semibold hover:text-purple-500 transition-colors inline-flex items-center gap-1 group"
              >
                Contact our team{" "}
                <MessageCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
