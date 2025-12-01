"use client";
import React from "react";
import {
  Code,
  Zap,
  Shield,
  Target,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import MagicButton from "../design/MagicButton";

const ServiceHero = ({ content }) => {
  return (
    <div className="bg-n-8 min-h-screen">
      {/* OPTION 1: With Animated Orbs + 2-Column Layout + Stats */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(148, 163, 184, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(148, 163, 184, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
          }}
        ></div>
      </div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated gradient orbs */}

        {/* Grid pattern overlay */}

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center">
              <h1 className="h1 font-bold mb-6 leading-tight">
                {content.title}
              </h1>

              <p className="text-n-3 body-1 mb-8 leading-relaxed">
                {content.subTitle}
              </p>

              <MagicButton
                children="Get a Free Consultation"
                className="rounded-full"
              />

              {/* Stats */}
            </div>

            {/* Right: Visual Element */}
            <div className="relative">
             <div className="relative w-full h-full">
  <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-3 md:p-8 backdrop-blur border border-purple-500/20 w-full h--auto">
    <img src="./services/website.png" className="w-full h-full object-cover" alt="hero image" />
  </div>
</div>


              {/* Floating Feature Cards */}
              <div className="absolute -left-8 top-1/4 bg-slate-800/80 backdrop-blur-lg rounded-2xl p-4 border border-slate-700/50 max-w-xs shadow-2xl animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Lightning Fast
                    </div>
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
                    <div className="text-white font-semibold text-sm">
                      100% Secure
                    </div>
                    <div className="text-slate-400 text-xs">SSL Encrypted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos / Social Proof */}
          <div className="mt-20 text-center">
            <p className="text-slate-500 text-sm mb-8">
              Trusted by leading brands worldwide
            </p>
            <div className="flex flex-wrap gap-12 justify-center items-center opacity-40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                <span className="text-slate-600 font-semibold">TechCorp</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                <span className="text-slate-600 font-semibold">
                  InnovateLab
                </span>
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
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
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
