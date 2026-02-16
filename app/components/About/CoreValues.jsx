"use client"
import React from 'react';
import {benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4} from "@/app/assets";

const CoreValuesSection = () => {
   const values = [
    {
        number: '01',
        title: 'Structured Thinking',
        description: 'We approach every project with system architecture in mind — designing dashboards and automation that bring clarity, order, and operational stability.',
        icon: benefitIcon1
    },
    {
        number: '02',
        title: 'Reliable Execution',
        description: 'We value consistency and disciplined delivery. Every system we build is tested, stable, and ready for real business use.',
        icon: benefitIcon2
    },
    {
        number: '03',
        title: 'Operational Clarity',
        description: 'Our solutions are built to improve visibility — helping businesses understand clients, revenue, workflows, and performance in one structured environment.',
        icon: benefitIcon3
    },
    {
        number: '04',
        title: 'Practical Collaboration',
        description: 'We work closely with clients to understand how their business truly operates, ensuring every system aligns with real-world workflows.',
        icon: benefitIcon4
    },
    {
        number: '05',
        title: 'Scalable Foundations',
        description: 'We build systems that support growth — handling increasing clients, transactions, and operational complexity without breaking structure.',
        icon: benefitIcon1
    },
    {
        number: '06',
        title: 'Security & Data Integrity',
        description: 'We prioritize secure architecture and controlled access, ensuring your business data remains protected and reliable.',
        icon: benefitIcon2
    }
];


    return (
        <section className="relative py-16 md:py-32 px-5 bg-n-8 overflow-hidden">
            {/* Radial Gradients */}
            <div className="absolute hidden inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.15)_0%,transparent_60%)]"></div>
            <div className="absolute hidden inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1)_0%,transparent_60%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block px-5 py-2 mb-5 text-sm font-semibold uppercase tracking-wider border border-purple-500/30 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Our Core Values
                    </div>
                    <h2 className="h2 font-bold">
                        The Principles Behind Our Systems
                    </h2>
                    <p className="body-1 text-n-4 max-w-2xl mx-auto leading-relaxed">
                       These principles shape how we design systems, build dashboards, and structure automation ensuring every solution is reliable, scalable, and aligned with real business operations.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group z-50 relative p-6 md:p-8 bg-n-2/[0.02] border border-n-3/[0.08] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:bg-gradient-to-br group cursor-pointer"
                        >
                            {/* Hover Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon Container */}
                            <div className="relative w-10 h-10 md:w-18 md:h-18 mb-4 sm:mb-8 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-color-3/20 to-color-1/20 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <img src={value.icon} alt={'value icon'}/>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="relative text-xl md:h4 font-semibold mb-4 bg-gradient-to-r from-n-2 to-purple-500 bg-clip-text text-transparent">
                                {value.title}
                            </h3>
                            <p className="relative body-1 leading-relaxed text-n-3/60">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, 50px) scale(1.1); }
          50% { transform: translate(-30px, 80px) scale(0.9); }
          75% { transform: translate(-50px, -50px) scale(1.05); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 60px) scale(1.1); }
          50% { transform: translate(40px, -70px) scale(0.9); }
          75% { transform: translate(60px, 40px) scale(1.05); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -50px) scale(1.1); }
          50% { transform: translate(-50px, -30px) scale(0.9); }
          75% { transform: translate(-30px, 50px) scale(1.05); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        .animate-float-delayed {
          animation: float-delayed 20s infinite ease-in-out 5s;
        }

        .animate-float-slow {
          animation: float-slow 20s infinite ease-in-out 10s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default CoreValuesSection;