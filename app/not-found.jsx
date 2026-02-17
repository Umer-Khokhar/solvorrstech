import {
  SearchX,
  Home,
  Mail,
  AlertTriangle,
  Code,
  Database,
  Zap,
} from "lucide-react";
import { BlurIn, FadeIn } from "./components/animations";
import { PremiumButton, OutlineButton } from "./components/Button";
import { TechBackground } from "./components";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
      <TechBackground />

      {/* Background Ambience - Matching Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animation-delay-2000 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse animation-delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Animated 404 Number with Gradient */}
          <BlurIn duration={0.6}>
            <div className="relative">
              <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-gradient tracking-tight select-none">
                404
              </h1>
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-gradient opacity-30 animate-pulse pointer-events-none">
                404
              </div>
            </div>
          </BlurIn>

          {/* Glassmorphic Error Card */}
          <FadeIn delay={0.3}>
            <div className="relative overflow-hidden">
              {/* Glass card background */}
              <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-2xl dark:shadow-slate-900/50 p-8 md:p-12">
                {/* Icon Badge */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-color-1 to-color-2 flex items-center justify-center shadow-lg shadow-color-1/30 dark:shadow-color-1/20">
                    <SearchX
                      className="w-10 h-10 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Error Message */}
                <h2 className="h2 mb-4 text-n-2 dark:text-n-1">
                  Page Not Found
                </h2>
                <p className="body-1 text-n-3 dark:text-n-4 max-w-2xl mx-auto mb-8">
                  Oops! The page you're looking for seems to have wandered off
                  into the digital void. Don't worry though – let's get you back
                  on track.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <PremiumButton
                    size="lg"
                    href="/"
                    leftIcon={<Home className="w-5 h-5" />}
                  >
                    Back to Home
                  </PremiumButton>
                  <OutlineButton
                    size="lg"
                    href="/contact"
                    leftIcon={<Mail className="w-5 h-5" />}
                  >
                    Contact Support
                  </OutlineButton>
                </div>

                {/* Subtle decorative gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-color-1/5 via-transparent to-color-4/5 pointer-events-none" />
              </div>
            </div>
          </FadeIn>

          {/* Additional Help Section */}
          <FadeIn delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-n-4 dark:text-n-5">
                <AlertTriangle className="w-4 h-4 text-color-1" />
                <span>Error Code: 404</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-n-5 dark:bg-n-6" />
              <a
                href="/"
                className="text-sm text-color-1 hover:text-color-2 transition-colors font-medium"
              >
                Visit Homepage
              </a>
              <div className="w-1 h-1 rounded-full bg-n-5 dark:bg-n-6" />
              <a
                href="/portfolio"
                className="text-sm text-color-1 hover:text-color-2 transition-colors font-medium"
              >
                View Portfolio
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Decorative Floating Tech Icons - Similar to Hero */}
        <div className="hidden lg:block">
          <FadeIn delay={0.7} direction="none">
            <div className="absolute top-1/4 left-10 w-16 h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center animate-[float_6s_ease-in-out_infinite] rotate-[-10deg] border border-slate-200 dark:border-slate-700">
              <Code className="w-8 h-8 text-blue-500" />
            </div>
          </FadeIn>
          <FadeIn delay={0.9} direction="none">
            <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center animate-[float_7s_ease-in-out_infinite_1s] rotate-[10deg] border border-slate-200 dark:border-slate-700">
              <Database className="w-10 h-10 text-purple-500" />
            </div>
          </FadeIn>
          <FadeIn delay={1.1} direction="none">
            <div className="absolute top-1/3 right-[12%] w-14 h-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-[float_5s_ease-in-out_infinite_0.5s] border border-slate-200 dark:border-slate-700">
              <Zap className="w-7 h-7 text-cyan-500" />
            </div>
          </FadeIn>
          <FadeIn delay={1.3} direction="none">
            <div className="absolute bottom-1/3 left-[15%] w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-[float_6.5s_ease-in-out_infinite_0.8s] rotate-[-5deg] border border-slate-200 dark:border-slate-700">
              <SearchX className="w-6 h-6 text-orange-500" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Gradient Fade - Matching Hero */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-n-8 dark:from-n-9 to-transparent pointer-events-none" />
    </div>
  );
}
