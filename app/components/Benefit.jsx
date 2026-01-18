"use client"
import { useState } from 'react';

export default function Benefit() {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      title: "Niche research",
      description: "Niche research identifies a market segment to help tailor growth strategies.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor">
          <rect x="8" y="8" width="24" height="28" rx="2" strokeWidth="2"/>
          <line x1="12" y1="14" x2="28" y2="14" strokeWidth="2"/>
          <line x1="12" y1="20" x2="24" y2="20" strokeWidth="2"/>
          <line x1="12" y1="26" x2="26" y2="26" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Enterprise SEO",
      description: "Embarking on a journey of higher education in a foreign country opens doors to opportunities and experiences.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor">
          <circle cx="20" cy="16" r="6" strokeWidth="2"/>
          <path d="M14 28C14 24.686 16.686 22 20 22C23.314 22 26 24.686 26 28" strokeWidth="2"/>
          <circle cx="28" cy="12" r="4" strokeWidth="2" fill="currentColor"/>
        </svg>
      ),
      highlight: true
    },
    {
      title: "Link building",
      description: "Link building hyperlinks from other sites to boost and improve search rankings.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor">
          <path d="M16 24L12 20L16 16M24 16L28 20L24 24M12 20H28" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="20" r="3" strokeWidth="2"/>
          <circle cx="28" cy="20" r="3" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "SEO audit",
      description: "An SEO audit evaluates a website identify improvements for better search rankings.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor">
          <circle cx="18" cy="18" r="8" strokeWidth="2"/>
          <path d="M24 24L30 30" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 14V18L21 21" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      tall: true
    },
    {
      title: "International SEO",
      description: "Enterprise SEO optimizes large websites to improve visibility and drive traffic.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor">
          <circle cx="20" cy="20" r="12" strokeWidth="2"/>
          <path d="M8 20H32M20 8C22 12 22 28 20 32M20 8C18 12 18 28 20 32" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Penalty recovery",
      description: "Penalty recovery fixes issues that caused search engine penalty to restore rankings.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor">
          <rect x="10" y="24" width="20" height="10" rx="1" strokeWidth="2"/>
          <path d="M15 24V16C15 13 16.5 8 20 8C23.5 8 25 13 25 16V24" strokeWidth="2"/>
          <path d="M18 16L20 18L24 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-20">
          {/* Left Content - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 font-medium text-sm">Feature-services</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-n-2 mb-4">
              Growth with<br />SEO services
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              SEO services boost visibility and organic traffic, driving leads and growth.
            </p>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
              View more services
            </button>
          </div>

          {/* Right Content - Service Cards with Custom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-[60%] auto-rows-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border-[10px] border-n-6 transition-all duration-300 hover:shadow-lg group cursor-pointer ${
                  service.highlight ? 'ring-2 ring-blue-100' : ''
                } ${
                  service.tall ? 'row-span-1.2' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="h4 font-semibold text-n-1 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-n-3 text-body-1 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-auto md:mt-12 pt-6">
                    <div className="text-gray-900 transform transition-transform duration-300 scale-150">
                      {service.icon}
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center transition-colors duration-300">
                      <svg 
                        className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 17L17 7M17 7H7M17 7V17" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}