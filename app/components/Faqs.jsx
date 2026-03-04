"use client";
import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, MessageCircle, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { FadeIn } from "./animations";
import { TechBackground } from ".";

export default function Faqs() {
  const faqs = [
    {
      id: "1",
      question: "What does Solvorr Tech specialize in?",
      answer:
        "Solvorr Tech builds structured business systems that help growing companies manage operations and improve visibility. We specialize in Business Operations Dashboards, Workflow Automation, and Local Search & Visibility Optimization to bring clarity and efficiency to core processes.",
    },
    {
      id: "2",
      question: "Who are your services best suited for?",
      answer:
        "Our services are designed for growing small and mid-sized businesses that rely on structured operations, lead management, and local visibility. If your business is managing leads, invoicing, or internal processes manually, we help centralize and streamline those systems.",
    },
    {
      id: "3",
      question: "Do you build fully custom dashboards?",
      answer:
        "We design dashboards around your workflow while maintaining a structured framework to ensure reliability and scalability. This approach allows us to deliver tailored systems without introducing unnecessary complexity or instability.",
    },
    {
      id: "4",
      question: "What kind of automation do you implement?",
      answer:
        "We implement practical workflow automation such as lead routing, follow-up reminders, invoice notifications, and tool integrations. Our focus is on reducing repetitive tasks and improving operational consistency without over-engineering your processes.",
    },
    {
      id: "5",
      question:
        "What results can we expect from Local Search & Visibility Optimization?",
      answer:
        "Our approach focuses on strengthening your local search presence through structured optimization. This improves discoverability, credibility, and long-term visibility on Google Search and Maps, supporting consistent inbound inquiries over time.",
    },
    {
      id: "6",
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Yes. We provide structured post-deployment support to ensure stability, usability, and continuous improvement. As your business evolves, we can refine workflows, expand modules, and optimize visibility strategies accordingly.",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <TechBackground />
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-20 left-[-100px] w-[500px] h-[500px] bg-color-1/10 dark:bg-color-1/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-[-100px] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
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

        {/* FAQ List with new Accordion Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="border-n-6/10 dark:border-white/10 bg-white/5 dark:bg-n-8/30 w-full rounded-2xl border p-2 backdrop-blur-sm shadow-2xl"
            defaultValue="1"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={faq.id}
                  className={cn(
                    "bg-transparent my-2 overflow-hidden rounded-xl border border-n-6/10 dark:border-white/10 px-2 transition-all duration-300",
                    "hover:border-color-1/30 data-[state=open]:border-color-1/50 data-[state=open]:bg-n-8/50 data-[state=open]:dark:bg-white/5 data-[state=open]:shadow-lg shadow-color-1/5",
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex flex-1 items-center justify-between gap-4 py-5 text-left text-lg font-semibold",
                        "text-gray-900 dark:text-white hover:text-color-1 dark:hover:text-color-1 transition-all duration-300 outline-none",
                        "data-[state=open]:text-color-1",
                      )}
                    >
                      {faq.question}
                      <PlusIcon
                        size={20}
                        className={cn(
                          "text-color-1/70 shrink-0 transition-transform duration-300 ease-out",
                          "group-data-[state=open]:rotate-45 group-data-[state=open]:text-color-1",
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      "text-gray-600 dark:text-gray-400 overflow-hidden pt-0 pb-5",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up",
                    )}
                  >
                    <div className="border-n-6/10 dark:border-white/5 border-t pt-4 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

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
