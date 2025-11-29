import React from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative bg-gradient-to-b from-color-4 to-color-2 overflow-hidden">
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

            <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
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
              className="text-2xl md:text-3xl font-bold text-white mb-3 hover:text-green-400 transition-colors tracking-tight"
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
      <div className="absolute  w-[120%] -left-5 h-auto top-4 bottom-4 rotate-1 bg-black"></div>
    </section>
  );
}
