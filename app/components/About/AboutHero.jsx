import NoiseBg from "../NoiseBg";
import { ArrowUpRight, Code2, Palette, TrendingUp, Zap } from "lucide-react";

const AboutHero = () => {
    return (
        <NoiseBg>
            <section className="relative overflow-hidden bg-n-8">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

                <div className="relative min-h-[90vh] flex z-20 items-center mt-12 max-w-[1400px] mx-auto px-6 lg:px-8 py-24 sm:py-32">
                    <div className="grid z-20 grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
                        {/* Left Column: Text Content */}
                        <div className="text-center lg:text-left space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm mx-auto lg:mx-0">
                                <span className="flex h-2 w-2 rounded-full bg-color-3 animate-pulse"></span>
                                <span className="text-sm font-code text-n-3 uppercase tracking-wider font-semibold">Who We Are</span>
                            </div>

                            <h1 className="h1 font-bold text-white leading-tight">
                                We Build The Future of <br className="hidden lg:block" />
                                <span className="text-gradient relative inline-block">
                                    Digital Experiences
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-color-2 opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7667 9.00627 75.3619 8.01977 197.974 1.98668" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-n-3 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                                Every obstacle is an invitation to innovate. At Solvorr Tech, we cut through complexity—designing sleek web apps, automating the tedious, and driving digital marketing that actually converts.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                                <button className="group relative px-8 py-4 bg-white text-n-8 rounded-xl font-bold text-sm tracking-wider uppercase overflow-hidden transition-all hover:scale-105 active:scale-95">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Join Our Journey <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                                
                                <div className="flex items-center gap-4 text-n-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-n-8 bg-n-6 flex items-center justify-center text-xs font-bold text-n-1 uppercase">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-left">
                                        <p className="font-bold text-white">Trusted by</p>
                                        <p>Innovative Brands</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                                <div>
                                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">7+</p>
                                    <p className="text-sm text-n-4 mt-2 font-medium uppercase tracking-wide">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">9.3K</p>
                                    <p className="text-sm text-n-4 mt-2 font-medium uppercase tracking-wide">Happy Clients</p>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">24/7</p>
                                    <p className="text-sm text-n-4 mt-2 font-medium uppercase tracking-wide">Support</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Premium Visuals */}
                        <div className="relative h-full min-h-[500px] w-full flex items-center justify-center perspective-[2000px]">
                             {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                            <div className="relative z-10 w-full max-w-md">
                                {/* Main Glass Card */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl rotate-[-6deg] hover:rotate-0 transition-all duration-500 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-color-1/20 via-transparent to-color-2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    <div className="p-6 flex flex-col h-full justify-between relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-color-1 to-blue-600 flex items-center justify-center shadow-lg shadow-color-1/30">
                                            <Code2 className="text-white w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                                            <p className="text-sm text-n-3">Scalable, high-performance architectures built for growth.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Secondary Glass Card */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[60%] w-60 h-72 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl rotate-[6deg] hover:rotate-[12deg] transition-all duration-500 -z-10 group">
                                     <div className="absolute inset-0 bg-gradient-to-br from-color-2/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                     <div className="p-6 flex flex-col h-full justify-between relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-color-2 to-purple-600 flex items-center justify-center shadow-lg shadow-color-2/30">
                                            <Palette className="text-white w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">Design</h3>
                                            <p className="text-xs text-n-3">User-centric interfaces that captivate and convert.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-10 -right-4 bg-n-8/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <TrendingUp className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-n-4 uppercase font-bold">Growth</p>
                                            <p className="text-sm font-bold text-white">+125%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-12 -left-8 bg-n-8/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl animate-pulse delay-700">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                                            <Zap className="w-5 h-5 text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-n-4 uppercase font-bold">Speed</p>
                                            <p className="text-sm font-bold text-white">0.2s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </NoiseBg>
    );
};

export default AboutHero;
