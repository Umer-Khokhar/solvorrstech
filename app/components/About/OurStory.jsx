import { Eye, Target, Zap, ArrowRight, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations";
import { OurStory } from "@/app/assets";
import { PremiumButton } from "../Button";
import { TechBackground } from "..";

export default function OurStorySection() {
  return (
    <section className="relative py-24 overflow-hidden bg-n-8">
      <TechBackground />
      {/* Background Decorations */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-color-1/10 dark:bg-color-1/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-color-2/10 dark:bg-color-2/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content Information */}
          <div className="relative z-10 space-y-8">
            <FadeIn direction="left">
              <div>
                <div className="inline-flex items-center space-x-2 bg-n-1/5 dark:bg-white/5 border border-n-1/10 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
                  <Sparkles className="w-4 h-4 text-color-2" />
                  <span className="text-sm font-code text-n-1 dark:text-n-3 uppercase tracking-wider font-bold">
                    Our Philosophy
                  </span>
                </div>
                <h2 className="h2 font-bold text-n-1 dark:text-white leading-tight">
                  Why We Build 
                  <span className="block">Business Systems</span>
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-6 text-lg text-n-3 leading-relaxed">
              <FadeIn direction="left" delay={0.2}>
                <p>
                  Solvorr Tech was built for businesses that are tired of running operations on scattered tools and manual processes. We saw growing companies lose time, revenue visibility, and efficiency because their systems were not built to scale.
                </p>
              </FadeIn>
              <FadeIn direction="left" delay={0.4}>
                <p>
                  Our mission is to replace that chaos with structured infrastructure. Through custom dashboards, workflow automation, and seamless integrations, we create centralized business systems that improve control, reduce operational friction, and support sustainable growth.
                </p>
              </FadeIn>
            </div>

            {/* Interactive Stats/Action */}
            <FadeIn direction="up" delay={0.6}>
              <div className="pt-8 flex flex-wrap gap-8">
                <PremiumButton
                  href="/team"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Meet the Team
                </PremiumButton>
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual Glass Cards */}
          <div className="relative">
            {/* Decorative background for visuals */}
            <div className="absolute inset-0 bg-gradient-to-tr from-color-1/20 to-color-2/20 rounded-3xl blur-2xl transform rotate-3 scale-95 opacity-60" />

            {/* Main Grid of Glass Tiles */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {/* Mission Card */}
              <StaggerItem>
                <div className="group p-8 bg-white/70 dark:bg-n-8/40 backdrop-blur-xl border border-n-1/10 dark:border-white/10 rounded-2xl hover:bg-white/80 dark:hover:bg-white/5 hover:border-color-3/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-n-1/5 dark:shadow-none h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-color-3 to-color-3/50 flex items-center justify-center mb-6 border border-color-3/20 group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-n-1 dark:text-white mb-3">
                    Our Mission
                  </h3>
                  <p className="text-n-3 text-sm leading-relaxed">
                    To simplify complexity. We craft smart, scalable digital
                    products that solve real problems efficiently.
                  </p>
                </div>
              </StaggerItem>

              {/* Vision Card */}
              <StaggerItem className="sm:translate-y-12">
                <div className="group p-8 bg-white/70 dark:bg-n-8/40 backdrop-blur-xl border border-n-1/10 dark:border-white/10 rounded-2xl hover:bg-white/80 dark:hover:bg-white/5 hover:border-color-1/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-n-1/5 dark:shadow-none h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-color-1 to-color-1/50 flex items-center justify-center mb-6 border border-color-1/20 group-hover:scale-110 transition-transform duration-500">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-n-1 dark:text-white mb-3">
                    Our Vision
                  </h3>
                  <p className="text-n-3 text-sm leading-relaxed">
                    A world where every business leverages technology seamlessly
                    bridging creativity and functionality.
                  </p>
                </div>
              </StaggerItem>

              {/* Speed/Impact Card */}
              <StaggerItem>
                <div className="group p-8 bg-white/70 dark:bg-n-8/40 backdrop-blur-xl border border-n-1/10 dark:border-white/10 rounded-2xl hover:bg-white/80 dark:hover:bg-white/5 hover:border-color-2/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-n-1/5 dark:shadow-none h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-color-2 to-color-2/50 flex items-center justify-center mb-6 border border-color-2/20 group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-n-1 dark:text-white mb-3">
                    High Impact
                  </h3>
                  <p className="text-n-3 text-sm leading-relaxed">
                    We don't just build; we accelerate. Fast delivery without
                    compromising on premium quality.
                  </p>
                </div>
              </StaggerItem>

              {/* Floating Image Mini-Card */}
              <StaggerItem className="sm:translate-y-12">
                <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden border border-n-1/10 dark:border-white/10 group shadow-xl shadow-n-1/5 dark:shadow-none">
                  <img
                    src={OurStory}
                    alt="Office Culture"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-n-2 dark:from-n-8 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-bold text-white text-lg">Solvorr HQ</p>
                    <p className="text-xs text-white/70">
                      Where innovation happens.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
