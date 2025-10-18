import React from 'react';
import { Code, Zap, TrendingUp, Shield, Target, Sparkles } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, tags, illustration, className, id }) => {
    const isTall = id === 0
    return (
        <div className={`group relative bg-gradient-to-br ${className} from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1`}>
            {/* Illustration Area */}
            <div className={`mb-6  ${isTall ? "h-52 md:h-[700px]" : "h-48"} bg-slate-900/50 rounded-xl flex items-center justify-center relative overflow-hidden`}>
                {illustration}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-slate-900/5"></div>
            </div>

            {/* Tags */}
            {tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-slate-800/80 border border-slate-700 rounded-full text-slate-300"
                        >
              {tag}
            </span>
                    ))}
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">
                <h3 className="h5 font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            </div>
        </div>
    );
};

const CustomBuiltIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-slate-600 rounded"></div>
                ))}
            </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 space-y-6 w-full max-w-sm">
            {/* Code blocks floating */}
            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform -rotate-3 shadow-xl border border-slate-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                    <div className="h-2 bg-purple-400 rounded w-1/2"></div>
                    <div className="h-2 bg-pink-400 rounded w-2/3"></div>
                </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur rounded-xl p-4 transform rotate-2 shadow-xl border border-slate-600/50">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-2 bg-cyan-400 rounded w-2/3"></div>
                    <div className="h-2 bg-teal-400 rounded w-3/4"></div>
                    <div className="h-2 bg-emerald-400 rounded w-1/2"></div>
                </div>
            </div>

            {/* Center piece - Custom tag */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl transform scale-110">
                <div className="text-center">
                    <div className="text-white text-4xl font-bold mb-2">{'</>'}</div>
                    <div className="text-white/90 text-sm font-medium">Custom Built</div>
                </div>
            </div>

            {/* Bottom elements */}
            <div className="flex gap-3 justify-center">
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-slate-300">Tailored</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-slate-300">Unique</div>
                </div>
                <div className="bg-slate-700/50 backdrop-blur rounded-lg px-4 py-2 border border-slate-600/50">
                    <div className="text-xs text-slate-300">Flexible</div>
                </div>
            </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
    </div>
);

// Benefit 2: Lightning Fast Performance
const PerformanceIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5"></div>

        <div className="relative z-10">
            {/* Lightning bolt */}
            <div className="relative">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <path d="M60 10L40 60H60L50 110L80 50H60L70 10H60Z" fill="url(#lightning-gradient)" className="drop-shadow-2xl"/>
                    <defs>
                        <linearGradient id="lightning-gradient" x1="40" y1="10" x2="80" y2="110" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#FCD34D"/>
                            <stop offset="50%" stopColor="#F97316"/>
                            <stop offset="100%" stopColor="#EF4444"/>
                        </linearGradient>
                    </defs>
                </svg>

                {/* Speed lines */}
                <div className="absolute top-1/4 -left-16 space-y-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
                    <div className="h-1 w-10 bg-gradient-to-r from-transparent to-yellow-400 rounded-full"></div>
                    <div className="h-1 w-8 bg-gradient-to-r from-transparent to-red-400 rounded-full"></div>
                </div>
            </div>

            {/* Performance badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-700 rounded-full px-4 py-2 border-2 border-orange-500 shadow-lg">
                <div className="text-orange-400 font-bold text-sm">99ms</div>
            </div>
        </div>
    </div>
);

// Benefit 3: Scalable
const ScalableIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5"></div>

        <div className="relative z-10 flex items-end gap-2">
            {/* Growing bars */}
            <div className="w-8 h-16 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg shadow-lg"></div>
            <div className="w-8 h-24 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg shadow-lg"></div>
            <div className="w-8 h-32 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg shadow-lg relative">
                {/* Arrow up */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="w-8 h-40 border-4 border-dashed border-emerald-400/40 rounded-t-lg"></div>
        </div>

        {/* Growth percentage */}
        <div className="absolute top-4 right-4 bg-emerald-500 rounded-lg px-3 py-1 shadow-lg">
            <div className="text-white font-bold text-xs">+150%</div>
        </div>
    </div>
);

// Benefit 4: Secure & Reliable
const SecurityIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>

        <div className="relative z-10">
            {/* Shield */}
            <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
                <path d="M50 10L10 30V60C10 85 30 105 50 110C70 105 90 85 90 60V30L50 10Z"
                      fill="url(#shield-gradient)"
                      stroke="url(#shield-stroke)"
                      strokeWidth="2"
                      className="drop-shadow-2xl"/>

                {/* Checkmark */}
                <path d="M35 60L45 70L65 45"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-lg"/>

                <defs>
                    <linearGradient id="shield-gradient" x1="50" y1="10" x2="50" y2="110" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#3B82F6"/>
                        <stop offset="50%" stopColor="#6366F1"/>
                        <stop offset="100%" stopColor="#8B5CF6"/>
                    </linearGradient>
                    <linearGradient id="shield-stroke" x1="50" y1="10" x2="50" y2="110" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#60A5FA"/>
                        <stop offset="100%" stopColor="#A78BFA"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* Security badges */}
            <div className="absolute -bottom-2 -left-2 bg-green-500 rounded-lg px-3 py-1 shadow-lg border-2 border-slate-900">
                <div className="text-white font-bold text-xs">SSL</div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-slate-900">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
        </div>
    </div>
);

// Benefit 5: Results Driven
const ResultsIllustration = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-pink-500/5 to-purple-500/5"></div>

        <div className="relative z-10">
            {/* Target circles */}
            <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-full border-4 border-rose-500/30"></div>
                <div className="absolute inset-4 rounded-full border-4 border-rose-500/50"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 shadow-2xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="4" fill="white"/>
                    </svg>
                </div>
            </div>

            {/* Success checkmark */}
            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-3 border-slate-900">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* Metric tags */}
            <div className="absolute -bottom-3 -left-3 bg-pink-500 rounded-lg px-3 py-1 shadow-lg border-2 border-slate-900">
                <div className="text-white font-bold text-xs">+47%</div>
            </div>
            <div className="absolute top-1/2 -right-6 bg-purple-500 rounded-lg px-2 py-1 shadow-lg border-2 border-slate-900">
                <div className="text-white font-bold text-xs">↑</div>
            </div>
        </div>
    </div>
);


export default function Benefit() {
    const services = [
        {
            id: 0,
            title: 'Built Exactly for You — No Templates, No Limits',
            description: 'Your business is unique — your website should be too. We craft tailored web solutions that perfectly match your goals, brand, and audience.',
            illustration: <CustomBuiltIllustration />,
        },
        {
            id: 1,
            title: 'Lightning-Fast Performance That Converts',
            description: 'Speed isn’t optional — it’s essential. Our optimized builds load in seconds, boost engagement, and keep visitors coming back.',
            illustration: <PerformanceIllustration />,
        },
        {
            id: 2,
            title: 'Scalable for the Future',
            description: 'As your business grows, your website grows with it. Add new features, products, or pages anytime — no rebuilds, no downtime.',
            illustration: <ScalableIllustration />,
        },
        {
            id: 3,
            title: 'Secure, Stable, and Reliable',
            description: 'We use modern frameworks and enterprise-grade security to ensure your website runs smoothly, safely, and without interruptions.',
            illustration: <SecurityIllustration />,
        },
        {
            id: 4,
            title: 'Designed to Drive Results',
            description: 'Every design choice and interaction is purpose-driven — to engage users, build trust, and turn visitors into loyal customers.',
            illustration: <ResultsIllustration />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b bg-[#0F1424] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        We love challenging projects that require a comprehensive content strategy,
                        thoughtful design, sophisticated development, and ongoing marketing.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 3).map((service, index) => (

                            <ServiceCard {...service} id={service.id} key={service.id}  className={`
        ${index === 0 ? "md:row-span-2 md:col-span-2" : ""} col-span-1 row-span-1
      `}/>

                    ))}
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.slice(3, 5).map((service, index) => (

                                <ServiceCard {...service} key={service.id} id={service.id}/>
                        ))}
                    </div>

                </div>
            </div>

            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}