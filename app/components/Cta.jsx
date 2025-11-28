import React from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-r from-green-500 via-green-400 to-green-300"></div>

      {/* Decorative curved dashed line on left */}
      <svg
        className="absolute left-0 top-0 h-full w-auto"
        viewBox="0 0 300 500"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 Q 120,150 80,250 Q 40,350 0,500"
          stroke="#2d5016"
          strokeWidth="3"
          strokeDasharray="12,12"
          fill="none"
        />
      </svg>

      {/* Concentric circles on left */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <div className="w-72 h-72 border-2 border-green-900/40 rounded-full absolute"></div>
        <div className="w-48 h-48 border-2 border-green-900/30 rounded-full absolute top-12 left-12"></div>
      </div>

      {/* Diagonal lines pattern on bottom right */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] overflow-hidden">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 500 500"
          fill="none"
        >
          <line
            x1="250"
            y1="250"
            x2="550"
            y2="-50"
            stroke="#4ade80"
            strokeWidth="2"
          />
          <line
            x1="250"
            y1="280"
            x2="550"
            y2="-20"
            stroke="#4ade80"
            strokeWidth="2"
          />
          <line
            x1="250"
            y1="310"
            x2="550"
            y2="10"
            stroke="#4ade80"
            strokeWidth="2"
          />
          <line
            x1="250"
            y1="340"
            x2="550"
            y2="40"
            stroke="#4ade80"
            strokeWidth="2"
          />
          <line
            x1="250"
            y1="370"
            x2="550"
            y2="70"
            stroke="#4ade80"
            strokeWidth="2"
          />
          <line
            x1="280"
            y1="250"
            x2="580"
            y2="-50"
            stroke="#4ade80"
            strokeWidth="1"
          />
          <line
            x1="310"
            y1="250"
            x2="610"
            y2="-50"
            stroke="#4ade80"
            strokeWidth="1"
          />
          <line
            x1="340"
            y1="250"
            x2="640"
            y2="-50"
            stroke="#4ade80"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-white relative">
            {/* Star decoration */}
            <div className="absolute -top-12 left-0">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="#4ade80"
                className="animate-pulse"
              >
                <path d="M25 0L27.5 22.5L50 25L27.5 27.5L25 50L22.5 27.5L0 25L22.5 22.5L25 0Z" />
              </svg>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Are You Ready to for Your
              <br />
              Business Success?
            </h2>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
              Ullamcorper risus ultrices risus lorem. Mollis libero in
              pellentesque potenti. Vulputate ut aliquam, consectetur turpis
              odio.
            </p>

            <button className="group inline-flex items-center gap-3 text-green-400 font-semibold text-lg hover:gap-5 transition-all duration-300 border-b-2 border-green-400 pb-2">
              Contact Us
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Content - Contact Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full p-8 mb-6 shadow-2xl shadow-yellow-500/40 relative">
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Phone
                className="w-12 h-12 text-gray-900 relative z-10"
                strokeWidth={2.5}
              />
            </div>

            <a
              href="tel:+9806923502020"
              className="text-4xl md:text-5xl font-bold text-white mb-3 hover:text-green-400 transition-colors tracking-tight"
            >
              +98 069 (2350) 020
            </a>

            <p className="text-gray-500 text-base tracking-wide">
              (Whats App/Call)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent"></div>
    </section>
  );
}
