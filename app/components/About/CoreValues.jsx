"use client"
import React from 'react';
import {benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4} from "@/app/assets";

const CoreValuesSection = () => {
    const values = [
        {
            number: '01',
            title: 'Innovation First',
            description: 'We push boundaries and embrace cutting-edge technologies to deliver solutions that set new industry standards.',
            icon: benefitIcon1
        },
        {
            number: '02',
            title: 'Timely Delivery',
            description: 'Your deadlines are our commitment. We deliver exceptional quality without compromising on speed.',
            icon: benefitIcon2
        },
        {
            number: '03',
            title: 'Client-Centric',
            description: 'Your success is our success. We build lasting partnerships through transparent communication and dedicated support.',
            icon: benefitIcon3
        },
        {
            number: '04',
            title: 'Excellence',
            description: 'We obsess over [postSlug] and maintain the highest standards in every line of code we write.',
            icon: benefitIcon4
        },
        {
            number: '05',
            title: 'Scalability',
            description: 'We architect solutions that grow with your business, ensuring long-term success and adaptability.',
            icon: benefitIcon1
        },
        {
            number: '06',
            title: 'Security First',
            description: 'We build with security at the core, protecting your data and ensuring compliance with industry standards.',
            icon: benefitIcon2
        }
    ];

    return (
        <section className="relative py-16 md:py-32 px-5 bg-[#0a0a0f] overflow-hidden">
            {/* Floating Orbs Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-600 to-purple-900 opacity-30 blur-3xl top-[10%] left-[5%] animate-float"></div>
                <div className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-30 blur-3xl top-[50%] right-[10%] animate-float-delayed"></div>
                <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-30 blur-3xl bottom-[20%] left-[15%] animate-float-slow"></div>
            </div>

            {/* Radial Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.15)_0%,transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1)_0%,transparent_60%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block px-5 py-2 mb-5 text-sm font-semibold uppercase tracking-wider border border-purple-500/30 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Our Core Values
                    </div>
                    <h2 className="h2 font-bold">
                        The DNA of Innovation
                    </h2>
                    <p className="body-1 text-white/60 max-w-2xl mx-auto leading-relaxed">
                        These principles drive everything we do, from the way we code to how we collaborate with our clients.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative p-6 md:p-12 bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:bg-gradient-to-br group cursor-pointer"
                        >
                            {/* Hover Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon Container */}
                            <div className="relative w-10 h-10 md:w-20 md:h-20 mb-4 sm:mb-8 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-color-3/20 to-color-1/20 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <img src={value.icon} alt={'value icon'}/>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="relative h3 font-bold mb-4 bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
                                {value.title}
                            </h3>
                            <p className="relative body-1 leading-relaxed text-white/60">
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