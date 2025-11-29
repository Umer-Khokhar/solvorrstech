"use client"
import React, { useState } from 'react';
import { ChevronDown, Code, Smartphone, Globe, Palette, Search, ShoppingCart, Zap, ArrowRight } from 'lucide-react';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored websites built to your needs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Custom Dashboard Development',
      description: 'Data-driven admin panels & dashboards',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Boost visibility & search rankings',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'API Development & Integration',
      description: 'Seamless third-party integrations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Grow your online presence',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ShoppingCart,
      title: 'CMS & E-Commerce',
      description: 'Powerful content & online stores',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="">
      <div className="relative">
        {/* Dropdown Trigger */}
        <button
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-0.5  hover:text-[#ac6aff] transition-colors duration-200"
        >
          Services
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Desktop: Hover Dropdown */}
        {!isMobile && (
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={`absolute top-[220%] left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-2xl transition-all duration-300 origin-top ${
              isOpen 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="bg-n-8 backdrop-blur-2xl shadow-2xl border border-n-5 overflow-hidden rounded-2xl">
              {/* Header */}
              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-3 p-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className="group relative p-4 rounded-xl hover:bg-[#f7f7f7] transition-all duration-300 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <div className="relative flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-[#0e0c15] text-sm group-hover:text-[#ac6aff] transition-colors">
                              {service.title}
                            </h4>
                            <ArrowRight className="w-4 h-4 text-[#8b859e] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </div>
                          <p className="text-xs text-[#6b6579] leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Mobile: Collapsible List */}
        {isMobile && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-2 bg-white rounded-xl shadow-lg border border-[#e5e3ec]">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isExpanded = expandedService === index;
                
                return (
                  <div key={index} className="border-b border-[#e5e3ec] last:border-b-0">
                    {/* Service Header - Collapsible */}
                    <button
                      onClick={() => toggleService(index)}
                      className="w-full flex items-center justify-between p-4 hover:bg-[#f7f7f7] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-[#0e0c15] text-sm text-left">
                          {service.title}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-[#8b859e] transition-transform duration-300 flex-shrink-0 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-4 pb-4 pt-2">
                        <p className="text-xs text-[#6b6579] leading-relaxed mb-3 pl-[52px]">
                          {service.description}
                        </p>
                        <a
                          href="#"
                          className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium text-xs hover:shadow-lg transition-all duration-300`}
                        >
                          Learn More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* View All CTA */}
              <div className="p-3 bg-[#f7f7f7]">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#ac6aff] to-[#ff98e2] text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesDropdown;