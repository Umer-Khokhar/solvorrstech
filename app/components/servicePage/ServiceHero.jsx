// import React from 'react';
// import {Button} from "@/app/components";
//
// const ServiceHero = () => {
//     return (
//         <section className={'py-28'}>
//             <div className="container">
//                 <div className="info text-center max-w-5xl mx-auto">
//                     <h1 className={'h1 mb-8 space-y-2'}><span className={"text-gradient"}>Web Development</span> Solutions That Power Your <span>Digital</span> Growth</h1>
//                     <p className={"body-1 mx-auto mb-12 text-n-2"}>At Solvorr Tech, we don’t just build websites — we create intelligent digital systems designed to convert, scale, and perform. Whether you’re a startup or a growing enterprise, our tailored web solutions bring your brand vision to life.</p>
//                     <button className={'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-4 rounded-full text-base cursor-pointer font-medium transition-all duration-200 shadow-lg hover:shadow-xl"'}>
//                         Get a Free Consultation
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default ServiceHero;

"use client"
import React from 'react';
import { Code, Zap, Shield, Target, CheckCircle, TrendingUp } from 'lucide-react';

const ServiceHero = () => {
    return (
        <div className="bg-[#030718] min-h-screen">

            {/* OPTION 1: With Animated Orbs + 2-Column Layout + Stats */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Animated gradient orbs */}

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(to right, rgb(148, 163, 184, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(148, 163, 184, 0.5) 1px, transparent 1px)
            `,
                        backgroundSize: '4rem 4rem'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 gap-12 items-center">

                        {/* Left: Text Content */}
                        <div className="text-center">
                            <h1 className="h1 font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Web Development
                </span>{' '}
                                Solutions That Power Your Digital Growth
                            </h1>

                            <p className="text-slate-400 body-1 mb-8 leading-relaxed">
                                At Solvorr Tech, we don't just build websites — we create intelligent digital systems designed to convert, scale, and perform. Whether you're a startup or a growing enterprise, our tailored web solutions bring your brand vision to life.
                            </p>

                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                                Get a Free Consultation
                            </button>

                            {/* Stats */}
                        </div>

                        {/* Right: Visual Element */}
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 backdrop-blur border border-purple-500/20">
                                {/* Mockup Window */}
                                <div className="bg-[#0A0F1E] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
                                    {/* Browser Header */}
                                    <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="flex-1 bg-slate-900/50 rounded px-3 py-1 text-xs text-slate-500 ml-4">
                                            solvorr-tech.com
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 space-y-4">
                                        <div className="space-y-3">
                                            <div className="h-4 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded w-3/4"></div>
                                            <div className="h-4 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded w-1/2"></div>
                                            <div className="h-4 bg-gradient-to-r from-pink-500/50 to-red-500/50 rounded w-5/6"></div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mt-6">
                                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg mb-2"></div>
                                                <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                            </div>
                                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                                <div className="w-8 h-8 bg-purple-500/20 rounded-lg mb-2"></div>
                                                <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Feature Cards */}
                            <div className="absolute -left-8 top-1/4 bg-slate-800/80 backdrop-blur-lg rounded-2xl p-4 border border-slate-700/50 max-w-xs shadow-2xl animate-float hidden lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">Lightning Fast</div>
                                        <div className="text-slate-400 text-xs">99ms Load Time</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-8 bottom-1/4 bg-slate-800/80 backdrop-blur-lg rounded-2xl p-4 border border-slate-700/50 max-w-xs shadow-2xl animate-float-delayed hidden lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">100% Secure</div>
                                        <div className="text-slate-400 text-xs">SSL Encrypted</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Client Logos / Social Proof */}
                    <div className="mt-20 text-center">
                        <p className="text-slate-500 text-sm mb-8">Trusted by leading brands worldwide</p>
                        <div className="flex flex-wrap gap-12 justify-center items-center opacity-40">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                                <span className="text-slate-600 font-semibold">TechCorp</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                                <span className="text-slate-600 font-semibold">InnovateLab</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                                <span className="text-slate-600 font-semibold">DataFlow</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                                <span className="text-slate-600 font-semibold">CloudSync</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom animations */}
                <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }
        `}</style>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="border-t border-slate-800/50"></div>
            </div>

        </div>
    );
};

export default ServiceHero;