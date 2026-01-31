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

const ServiceHero = ({ content }) => {
  return (
    <div className="bg-n-8 pt-16 md:pt-28 min-h-screen relative overflow-hidden">
      <TechBackground />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center">
              <h1 className="h1 font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {content.title}
              </h1>

              <p className="text-n-3 body-1 mb-8 leading-relaxed max-w-3xl mx-auto">
                {content.subTitle}
              </p>

              {/* Stats Badges */}
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
            </div>

            {/* Hero Image */}
            <div className="relative">
              {/* Main Image Container with Premium Frame */}
              <div className="relative group">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                {/* Image Frame */}
                <div className="relative bg-gradient-to-br from-n-7/70 to-n-8/70 rounded-3xl p-3 backdrop-blur-sm border border-n-6/30 shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
<<<<<<< HEAD
                      src="./services/website.png"
=======
                      src={content.imageUrl}
>>>>>>> servic-link
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -left-8 top-1/4 bg-n-7/90 backdrop-blur-xl rounded-2xl p-4 border border-n-6/50 max-w-xs shadow-2xl animate-float hidden lg:block">
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
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-n-7/90 backdrop-blur-xl rounded-2xl p-4 border border-n-6/50 max-w-xs shadow-2xl animate-float-delayed hidden lg:block">
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
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-20 text-center">
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
          </div>
        </div>

        {/* Simple animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-delayed {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
            66% {
              transform: translate(20px, -20px) scale(1.1);
            }
          }

          @keyframes orb-3 {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(25px, 25px) scale(1.05);
            }
            66% {
              transform: translate(-15px, -25px) scale(0.95);
            }
          }

          @keyframes gradient-xy {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes gradient-x {
            0%, 100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }

          @keyframes particle {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh) translateX(20px);
              opacity: 0;
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }

          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
            animation-delay: 0.5s;
          }

          .animate-orb-1 {
            animation: orb-1 20s ease-in-out infinite;
          }

          .animate-orb-2 {
            animation: orb-2 25s ease-in-out infinite;
          }

          .animate-orb-3 {
            animation: orb-3 30s ease-in-out infinite;
          }

          .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 3s ease infinite;
          }

          .animate-gradient-x {
            animation: gradient-x 8s ease infinite;
          }

          .animate-particle {
            animation: particle linear infinite;
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }

          .perspective-container {
            perspective: 2000px;
          }

          .preserve-3d {
            transform-style: preserve-3d;
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
