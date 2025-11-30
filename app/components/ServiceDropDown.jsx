"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import services from "@/lib/services.json";

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Desktop / Mobile wrapper */}
      <div
        className="relative"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        {/* Dropdown Trigger */}
        <button className="flex items-center text-sm font-medium gap-0.5 hover:text-[#ac6aff] transition-colors duration-200">
          Services
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Desktop Dropdown */}
        {!isMobile && (
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[300px] max-w-[400px] rounded-2xl z-50 transition-all duration-300 ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-n-8 dark:bg-n-9 backdrop-blur-2xl shadow-2xl border border-n-5 dark:border-n-6 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-1 p-3">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/${service.name}`} // using name as slug
                    className="group relative px-4 py-3 rounded-xl hover:bg-[#f7f7f7] dark:hover:bg-[#1a1a1a] transition-all duration-300 block"
                  >
                    <div className="relative flex items-center justify-between gap-4">
                      <h4 className="font-semibold text-[#0e0c15] dark:text-white text-sm group-hover:text-[#ac6aff] transition-colors whitespace-nowrap">
                        {service.title}
                      </h4>
                      <ArrowRight className="w-4 h-4 text-[#8b859e] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Dropdown */}
        {isMobile && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-2 bg-white dark:bg-n-8 rounded-xl shadow-lg border border-[#e5e3ec] dark:border-n-5">
              {services.map((service, index) => {
                const isExpanded = expandedService === index;
                return (
                  <div
                    key={index}
                    className="border-b border-[#e5e3ec] dark:border-n-5 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleService(index)}
                      className="w-full flex items-center justify-between p-4 hover:bg-[#f7f7f7] dark:hover:bg-[#1a1a1a] transition-colors"
                    >
                      <span className="font-semibold text-[#0e0c15] dark:text-white text-sm text-left">
                        {service.title}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#8b859e] transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-4 pb-4 pt-2">
                        <p className="text-xs text-[#6b6579] dark:text-[#cfc9e2] leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <Link
                          href={`/${service.name}`} // use name as slug
                          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-xs hover:shadow-lg transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                            setExpandedService(null);
                          }}
                        >
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* View All */}
              <div className="p-3 bg-[#f7f7f7] dark:bg-[#1a1a1a]">
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#ac6aff] to-[#ff98e2] text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesDropdown;
