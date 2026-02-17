"use client";
import React from "react";
import { CheckCircle2, Zap, ArrowRight, DollarSign } from "lucide-react";
import { PremiumButton } from "../index.js";
import FadeIn from "../animations/FadeIn";
import { StaggerContainer, StaggerItem } from "../animations/Stagger";

const StarterOffer = ({ offer }) => {
  if (!offer) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Special Starter Package</span>
            </div>
            <h2 className="h2 font-bold mb-6 bg-gradient-to-r from-n-1 via-n-1 to-n-3 bg-clip-text text-transparent">
              {offer.title}
            </h2>
            <p className="text-n-3 body-1 max-w-2xl mx-auto">
              {offer.description}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <div className="relative group">
              {/* Glassmorphism Card */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40 rounded-[2.5rem] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-n-8/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-n-6/50 overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Column: Price & CTA */}
                  <div className="relative z-10">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-n-3 text-lg font-medium">
                        Starting from
                      </span>
                      <div className="flex items-baseline">
                        <span className="text-4xl md:text-6xl font-bold text-n-1">
                          {offer.startingFrom}
                        </span>
                      </div>
                    </div>

                    <p className="text-n-4 text-sm mb-8">
                      Get your project started with our essential feature set.
                      Perfect for proof of concepts and small-scale operations.
                    </p>

                    <PremiumButton
                      href="/contact"
                      className="w-full md:w-auto rounded-full px-8 py-4 text-lg"
                      rightIcon={<ArrowRight className="w-5 h-5" />}
                    >
                      {offer.cta}
                    </PremiumButton>
                  </div>

                  {/* Right Column: Inclusions */}
                  <div className="relative z-10 bg-n-7/30 rounded-3xl p-6 md:p-8 border border-n-6/30">
                    <h4 className="text-n-1 font-semibold mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      What's Included:
                    </h4>

                    <ul className="space-y-4">
                      {offer.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="mt-1 bg-blue-500/20 rounded-full p-1">
                            <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-n-3 text-base">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-n-6/30">
                      <div className="flex items-center gap-3 text-sm text-n-4">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span>Ready to scale when you are</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default StarterOffer;
