import { Star, Zap, Shield, Globe } from "lucide-react";
import { BlurIn, FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { PremiumButton, OutlineButton } from "./Button";
import { TechBackground } from ".";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <TechBackground />
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animation-delay-2000 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
          {/* Top Badge */}
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:scale-105 cursor-default">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border border-white dark:border-slate-900 bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                      fetchPriority="low"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left leading-none ml-1">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2 h-2 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground font-medium">
                  from 200+ clients
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Main Headline */}
          <div className="space-y-6 max-w-4xl">
            <BlurIn isLCP>
              <h1 className="h1 font-bold tracking-tight">
                Build <span className="text-gradient">High-Converting</span> Web
                Apps That{" "}
                <span className="italic relative inline-block">
                  Close Deals
                  <svg
                    className="absolute w-full h-2 bottom-2 left-0 text-blue-400/30 -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </BlurIn>
            <FadeIn delay={0.4}>
              <p className="body-1 text-n-3 dark:text-n-4 max-w-2xl mx-auto">
                We craft purpose driven digital experiences that turn visitors
                into paying clients. Fast, scalable, and built for growth.
              </p>
            </FadeIn>
          </div>

          {/* CTA Buttons */}
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <PremiumButton
                size="lg"
                href="/contact"
                rightIcon={
                  <Zap className="w-5 h-5 fill-current animate-pulse" />
                }
              >
                Book a 15-min Call
              </PremiumButton>
              <OutlineButton
                size="lg"
                className="w-full md:w-auto flex-1"
                href="/portfolio"
              >
                View Our Work
              </OutlineButton>
            </div>
          </FadeIn>

          {/* Trust Section */}
          <div className="pt-8 w-full">
            <FadeIn delay={0.8}>
              <p className="text-xs font-bold tracking-widest text-n-4/60 uppercase mb-8">
                Trusted by innovative teams
              </p>
            </FadeIn>
            <StaggerContainer
              delayChildren={1}
              staggerChildren={0.1}
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-80"
            >
              {/* Brand 1 */}
              <StaggerItem>
                <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/20">
                    A
                  </div>
                  <span className="font-bold text-lg text-n-3 group-hover:text-n-1 dark:text-n-4 dark:group-hover:text-white transition-colors">
                    Acme Corp
                  </span>
                </div>
              </StaggerItem>
              {/* Brand 2 */}
              <StaggerItem>
                <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/20">
                    G
                  </div>
                  <span className="font-bold text-lg text-n-3 group-hover:text-n-1 dark:text-n-4 dark:group-hover:text-white transition-colors">
                    GlobalTech
                  </span>
                </div>
              </StaggerItem>
              {/* Brand 3 */}
              <StaggerItem>
                <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-orange-500/20">
                    S
                  </div>
                  <span className="font-bold text-lg text-n-3 group-hover:text-n-1 dark:text-n-4 dark:group-hover:text-white transition-colors">
                    Startup.io
                  </span>
                </div>
              </StaggerItem>
              {/* Brand 4 */}
              <StaggerItem>
                <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-emerald-500/20">
                    N
                  </div>
                  <span className="font-bold text-lg text-n-3 group-hover:text-n-1 dark:text-n-4 dark:group-hover:text-white transition-colors">
                    NextLevel
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="hidden lg:block">
          <FadeIn delay={1.2} direction="none">
            <div className="absolute top-1/4 left-10 w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center animate-[float_6s_ease-in-out_infinite] rotate-[-10deg] border border-slate-100 dark:border-slate-700">
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
          </FadeIn>
          <FadeIn delay={1.4} direction="none">
            <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center animate-[float_7s_ease-in-out_infinite_1s] rotate-[10deg] border border-slate-100 dark:border-slate-700">
              <Globe className="w-10 h-10 text-blue-500" />
            </div>
          </FadeIn>
          <FadeIn delay={1.6} direction="none">
            <div className="absolute top-1/3 right-[15%] w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-xl flex items-center justify-center animate-[float_5s_ease-in-out_infinite_0.5s] border border-slate-100 dark:border-slate-700">
              <Shield className="w-6 h-6 text-green-500" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-n-8/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
