"use client";
import React from "react";
import {
  Zap,
  Shield,
  Award,
  CheckCircle2,
  Users,
  Star,
  Sparkles,
} from "lucide-react";
import { TechBackground, PremiumButton } from "../index.js";
import { StaggerContainer, StaggerItem } from "../animations/Stagger";
import BlurIn from "../animations/BlurIn";
import FadeIn from "../animations/FadeIn";

const ServiceHero = ({ content }) => {
  return (
    <div className="bg-n-8 pt-16 md:pt-28 min-h-screen relative overflow-hidden">
      <TechBackground />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Text Content */}
            <StaggerContainer className="text-center">
              <StaggerItem>
                <h1 className="h1 font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {content.title}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-n-3 body-1 mb-8 leading-relaxed max-w-3xl mx-auto">
                  {content.subTitle}
                </p>
              </StaggerItem>

              {/* Stats Badges */}
              <StaggerItem>
                <div className="flex flex-wrap gap-3 justify-center items-center mb-8">
                  <div className="flex items-center gap-2 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-full px-4 py-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-n-3 text-sm font-medium">
                      99% Success Rate
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-full px-4 py-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-n-3 text-sm font-medium">
                      500+ Clients
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-n-7/50 backdrop-blur-sm border border-n-6/50 rounded-full px-4 py-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-n-3 text-sm font-medium">
                      5.0 Rating
                    </span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <PremiumButton
                  href="/contact"
                  size="lg"
                  rightIcon={
                    <Zap className="w-5 h-5 fill-current animate-pulse" />
                  }
                  className="rounded-full"
                >
                  Get a Free Consultation
                </PremiumButton>
              </StaggerItem>
            </StaggerContainer>

            {/* Hero Image */}
            <div className="relative">
              {/* Main Image Container with Premium Frame */}
              <BlurIn delay={0.4} duration={1}>
                <div className="relative group">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                  {/* Image Frame */}
                  <div className="relative bg-gradient-to-br from-n-7/70 to-n-8/70 rounded-3xl p-3 backdrop-blur-sm border border-n-6/30 shadow-2xl">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={content.imageUrl}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        alt={content.title}
                      />
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />
                </div>
              </BlurIn>

              {/* Floating Feature Cards */}
              <FadeIn
                delay={0.8}
                direction="right"
                className="absolute -left-8 top-1/4 bg-n-7/90 backdrop-blur-xl rounded-2xl p-4 border border-n-6/50 max-w-xs shadow-2xl animate-float hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-n-1 font-semibold text-sm">
                      Lightning Fast
                    </div>
                    <div className="text-n-4 text-xs">99ms Response</div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn
                delay={1.0}
                direction="left"
                className="absolute -right-8 bottom-1/4 bg-n-7/90 backdrop-blur-xl rounded-2xl p-4 border border-n-6/50 max-w-xs shadow-2xl animate-float-delayed hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-n-1 font-semibold text-sm">
                      100% Secure
                    </div>
                    <div className="text-n-4 text-xs">SSL Encrypted</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Trust Section */}
          <FadeIn delay={0.6} direction="up" className="mt-20 text-center">
            <p className="text-n-4 text-sm mb-8 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Trusted by leading brands worldwide</span>
            </p>
            <div className="flex flex-wrap gap-12 justify-center items-center opacity-40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-n-7 rounded-lg"></div>
                <span className="text-n-4 font-semibold">TechCorp</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-n-7 rounded-lg"></div>
                <span className="text-n-4 font-semibold">InnovateLab</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-n-7 rounded-lg"></div>
                <span className="text-n-4 font-semibold">DataFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-n-7 rounded-lg"></div>
                <span className="text-n-4 font-semibold">CloudSync</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Simple animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-20px) translateX(5px);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-15px) translateX(-5px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 7s ease-in-out infinite;
            animation-delay: 1.5s;
          }

          .perspective-container {
            perspective: 2000px;
          }

          .hero-image-transform {
            transform: translateZ(20px);
            transition: transform 0.6s ease;
          }

          .group:hover .hero-image-transform {
            transform: translateZ(30px) rotateX(2deg);
          }
        `}</style>
      </section>
    </div>
  );
};

export default ServiceHero;
