"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';
import { TechBackground } from '.';

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'What services does Solvorr Tech provide?',
            answer: 'Solvorr Tech specializes in custom software development, cloud infrastructure solutions, AI/ML implementation, and digital transformation services. We help businesses automate processes, improve scalability, and leverage cutting-edge technologies to stay competitive in rapidly evolving markets.',
        },
        {
            id: 2,
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, medium projects 2-4 months, and enterprise solutions can take 6+ months. We provide detailed timelines during the discovery phase and maintain transparent communication throughout.',
        },
        {
            id: 3,
            question: 'What technologies do you specialize in?',
            answer: 'We work across the full technology stack including React, Node.js, Python, AWS, Google Cloud, Azure, Docker, Kubernetes, and modern databases. Our team stays current with emerging technologies and recommends solutions tailored to your specific business needs.',
        },
        {
            id: 4,
            question: 'Do you provide ongoing support after project completion?',
            answer: 'Absolutely. We offer comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. Our maintenance packages are flexible and scalable based on your requirements.',
        },
        {
            id: 5,
            question: 'How do you ensure project security and data protection?',
            answer: 'Security is embedded in every phase of our development process. We follow industry best practices including OWASP guidelines, conduct regular security audits, implement encryption protocols, and ensure GDPR/CCPA compliance. Your data protection is our top priority.',
        },
        {
            id: 6,
            question: 'Can you work with existing legacy systems?',
            answer: 'Yes, we have extensive experience modernizing and integrating legacy systems with new technologies. We can gradually migrate your infrastructure, improve performance, and reduce technical debt without disrupting your operations.',
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
                        <div 
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
                        >
                            <HelpCircle className="w-4 h-4 text-color-1" />
                            <span className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider">Support Center</span>
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={0.2}>
                        <h2 
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Frequently Asked <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-purple-500">
                                Questions
                            </span>
                        </h2>
                    </FadeIn>
                    
                    <FadeIn delay={0.4}>
                        <p 
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        >
                            Find answers to common questions about our services, process, and technical capabilities.
                        </p>
                    </FadeIn>
                </div>

                {/* FAQ List */}
                <StaggerContainer className="space-y-4" delayChildren={0.6}>
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === faq.id;

                        return (
                            <StaggerItem
                                key={faq.id}
                            >
                                <div
                                    className={`
                                        group rounded-2xl border transition-all duration-300
                                        ${isActive 
                                            ? 'bg-white/5 border-color-1/50 shadow-lg shadow-color-1/5' 
                                            : 'bg-white/5 border-gray-200/50 dark:border-white/5 hover:border-color-1/30 hover:bg-white/10'
                                        }
                                    `}
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full text-left p-6 md:p-8 focus:outline-none"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className={`
                                                text-lg md:text-xl font-semibold transition-colors
                                                ${isActive ? 'text-color-1' : 'text-gray-900 dark:text-white group-hover:text-color-1'}
                                            `}>
                                                {faq.question}
                                            </h3>
                                            <div className={`
                                                flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                                                transition-all duration-300 border
                                                ${isActive 
                                                    ? 'bg-color-1 text-white border-color-1 rotate-180' 
                                                    : 'bg-white/5 border-white/10 text-gray-500 group-hover:border-color-1/50 group-hover:text-color-1'
                                                }
                                            `}>
                                                {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                    <div 
                        className="mt-16 text-center"
                    >
                        <p className="text-gray-500 dark:text-gray-400">
                            Still have questions?{" "}
                            <a href="/contact" className="text-color-1 font-semibold hover:text-purple-500 transition-colors inline-flex items-center gap-1 group">
                                Contact our team <MessageCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}