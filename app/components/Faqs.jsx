"use client"
import React, { useState } from 'react';
import { Zap, Shield, Headphones, Rocket, Clock, Users, Plus, Minus } from 'lucide-react';

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'What services does Solvorr Tech provide?',
            answer: 'Solvorr Tech specializes in custom software development, cloud infrastructure solutions, AI/ML implementation, and digital transformation services. We help businesses automate processes, improve scalability, and leverage cutting-edge technologies to stay competitive in rapidly evolving markets.',
            icon: Zap,
        },
        {
            id: 2,
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, medium projects 2-4 months, and enterprise solutions can take 6+ months. We provide detailed timelines during the discovery phase and maintain transparent communication throughout.',
            icon: Clock,
        },
        {
            id: 3,
            question: 'What technologies do you specialize in?',
            answer: 'We work across the full technology stack including React, Node.js, Python, AWS, Google Cloud, Azure, Docker, Kubernetes, and modern databases. Our team stays current with emerging technologies and recommends solutions tailored to your specific business needs.',
            icon: Rocket,
        },
        {
            id: 4,
            question: 'Do you provide ongoing support after project completion?',
            answer: 'Absolutely. We offer comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. Our maintenance packages are flexible and scalable based on your requirements.',
            icon: Headphones,
        },
        {
            id: 5,
            question: 'How do you ensure project security and data protection?',
            answer: 'Security is embedded in every phase of our development process. We follow industry best practices including OWASP guidelines, conduct regular security audits, implement encryption protocols, and ensure GDPR/CCPA compliance. Your data protection is our top priority.',
            icon: Shield,
        },
        {
            id: 6,
            question: 'Can you work with existing legacy systems?',
            answer: 'Yes, we have extensive experience modernizing and integrating legacy systems with new technologies. We can gradually migrate your infrastructure, improve performance, and reduce technical debt without disrupting your operations.',
            icon: Users,
        },
    ];

    const toggleFAQ = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="min-h-screen py-20 px-4 relative overflow-hidden">

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
                        <span className="text-sm font-semibold text-blue-300">Common Questions</span>
                    </div>
                    <h1 className="h2 mb-3">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-n-4 max-w-2xl mx-auto">
                        Everything you need to know about Solvorr Tech's services, processes, and how we can transform your business.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid gap-4">
                    {faqs.map((faq) => {
                        const isActive = activeIndex === faq.id;

                        return (
                            <div key={faq.id} className="group">
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="break-inside-avoid bg-white/[0.04] border border-white/[0.2] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left group/item cursor-pointer"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4 flex-1">
                                            <h3 className="text-lg font-bold text-n-2 group-hover/item:text-color-5 transition-colors">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {isActive ? (
                                                <Minus className="w-5 h-5 text-purple-400 transition-transform duration-300" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-blue-400 group-hover/item:text-blue-300 transition-transform duration-300" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            isActive ? 'max-h-96 mt-4' : 'max-h-0'
                                        }`}
                                    >
                                        <div className="pr-2 text-n-4 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-4 p-4 max-w-3xl text-center mx-auto">
                    <p className="mb-8 text-n-3/80 text-sm">

                        Haven’t found what you’re looking for?
                        {" "}
                    <span className={"text-n-1/90 text-base cursor-pointer hover:text-color-3"}>
                        Contact Us
                    </span>
                    </p>
                </div>
            </div>
        </div>
    );
}