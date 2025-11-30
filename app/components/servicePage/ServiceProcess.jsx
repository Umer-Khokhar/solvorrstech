'use client'
import React, { useState } from 'react';
import { Search, Palette, Code, CheckCircle, Rocket, Users, Target, Zap } from 'lucide-react';

// Custom illustrations for each process step
const DiscoveryIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-4">
                {[...Array(48)].map((_, i) => (
                    <div key={i} className="border border-slate-600 rounded"></div>
                ))}
            </div>
        </div>

        <div className="relative z-10 flex items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Search className="w-16 h-16 text-white" strokeWidth={2} />
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3 bg-n-7/50 backdrop-blur rounded-xl p-4 border border-slate-700/50">
                    <Target className="w-8 h-8 text-blue-400" />
                    <div>
                        <div className="text-n-2 font-semibold">Define Goals</div>
                        <div className="text-n-4 text-sm">Business objectives</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-n-7/50 backdrop-blur rounded-xl p-4 border border-slate-700/50">
                    <Users className="w-8 h-8 text-purple-400" />
                    <div>
                        <div className="text-n-2 font-semibold">Know Audience</div>
                        <div className="text-n-4 text-sm">User research</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const DesignIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full max-w-2xl">
            <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 flex-1 bg-slate-900/50 rounded-lg px-4 py-2">
                        <div className="h-2 bg-slate-700 rounded w-1/3"></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-500/30">
                        <div className="flex items-center justify-between mb-4">
                            <div className="h-3 bg-pink-400 rounded w-1/4"></div>
                            <Palette className="w-6 h-6 text-pink-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                            <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                            <div className="w-full h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded mb-2"></div>
                            <div className="h-1.5 bg-slate-700 rounded"></div>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                            <div className="w-full h-16 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded mb-2"></div>
                            <div className="h-1.5 bg-slate-700 rounded"></div>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                            <div className="w-full h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded mb-2"></div>
                            <div className="h-1.5 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const DevelopmentIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full max-w-2xl">
            <div className="bg-slate-900/70 backdrop-blur rounded-3xl border border-slate-700/50 overflow-hidden">
                <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-slate-400 text-sm font-mono">index.tsx</div>
                </div>

                <div className="p-6 font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="text-purple-400">import</span>
                        <span className="text-slate-300">React</span>
                        <span className="text-purple-400">from</span>
                        <span className="text-green-400">'react'</span>
                    </div>
                    <div className="h-4"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400">const</span>
                        <span className="text-yellow-400">App</span>
                        <span className="text-slate-300">= () =&gt; {'{'}</span>
                    </div>
                    <div className="pl-6 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-purple-400">return</span>
                            <span className="text-slate-300">(</span>
                        </div>
                        <div className="pl-6">
                            <div className="h-3 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded w-2/3 mb-2"></div>
                            <div className="h-3 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded w-1/2 mb-2"></div>
                            <div className="h-3 bg-gradient-to-r from-green-500/50 to-emerald-500/50 rounded w-3/4"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-slate-300">)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-300">{'}'}</span>
                    </div>
                </div>
            </div>

            <div className="absolute -right-4 top-1/4 bg-green-500/20 backdrop-blur rounded-xl p-3 border border-green-500/30 shadow-lg">
                <Code className="w-8 h-8 text-green-400" />
            </div>
        </div>
    </div>
);

const TestingIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
        <div className="relative flex flex-col items-center gap-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 relative">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg mb-3"></div>
                    <div className="h-2 bg-slate-700 rounded mb-2"></div>
                    <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#030718]">
                        <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 relative">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg mb-3"></div>
                    <div className="h-2 bg-slate-700 rounded mb-2"></div>
                    <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#030718]">
                        <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 relative">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg mb-3"></div>
                    <div className="h-2 bg-slate-700 rounded mb-2"></div>
                    <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#030718]">
                        <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur rounded-2xl px-8 py-4 border border-green-500/30">
                <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                    <div>
                        <div className="text-green-400 font-semibold text-lg">All Tests Passed</div>
                        <div className="text-slate-400 text-sm">Ready for deployment</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const LaunchIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full animate-pulse"
                    style={{
                        width: Math.random() * 4 + 2 + 'px',
                        height: Math.random() * 4 + 2 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        animationDelay: Math.random() * 2 + 's',
                        animationDuration: Math.random() * 2 + 2 + 's'
                    }}
                ></div>
            ))}
        </div>

        <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-8">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Rocket className="w-20 h-20 text-white" strokeWidth={2} />
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="flex gap-4">
                <div className="bg-slate-800/50 backdrop-blur rounded-xl px-6 py-3 border border-slate-700/50">
                    <div className="text-center">
                        <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">Live</div>
                    </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-xl px-6 py-3 border border-slate-700/50">
                    <div className="text-center">
                        <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">Monitored</div>
                    </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur rounded-xl px-6 py-3 border border-slate-700/50">
                    <div className="text-center">
                        <Target className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">Optimized</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ServiceProcess = ({serviceProccess}) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="bg-n-8 min-h-screen">
            <section className="w-full py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                            HOW WE WORK
                        </div>
                        <h2 className="text-4xl font-bold mb-4">
                            Our Process
                        </h2>
                        <p className="text-n-3 max-w-2xl mx-auto">
                            A transparent, step-by-step approach that ensures quality, precision, and collaboration at every stage.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">

                        {serviceProccess.map((step, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`cursor-pointer p-4 border-2 transition-all rounded-2xl hover:border-blue-500 ${
                                    activeStep === index
                                        ? "border-blue-500 bg-n-1/5"
                                        : "border-slate-800 bg-n-7"
                                }`}
                            >
                                <h3 className="font-semibold text-sm mb-1">
                  <span className="text-blue-400 font-medium mr-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className={`text-center mx-auto mb-6`}>
                    <h4 className="text-3xl font-bold mb-4">
                        {serviceProccess[activeStep].title}
                    </h4>
                    <p className="text-n-4 max-w-2xl mx-auto text-lg">
                        {serviceProccess[activeStep].description}
                    </p>
                    </div>
                    {/* Active Step Illustration + Content */}
                    <div className="relative w-full max-w-7xl mx-auto">
                        <div className="flex flex-col items-center">
                            {/* Large Illustration */}
                            <div className="w-full h-96 rounded-2xl overflow-hidden mb-8">
                                {serviceProccess[activeStep]?.illustration}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceProcess;