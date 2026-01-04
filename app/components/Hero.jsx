"use client";
import { Star, ArrowRight, Zap, Brain, LayoutDashboard, Rocket, Database, Code2, Palette, Cpu, Sparkles, GitBranch } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32">
        
        {/* Floating Service Cards */}
        {/* Top Left - Gen AI */}
        <div className="hidden lg:block absolute w-48 top-16 -left-48">
         <img src="./shapes.png" alt="shapes" className='w-full invert-100'/>
        </div>

        {/* Middle Right - APIs */}
        <div className="hidden lg:block absolute top-[40%] right-4 w-54 translate-y-1/2">
          <img src="./arrow.png" alt="arrows" className='dark:invert w-full'/>
        </div>
        {/* Decorative Background Icons */}
        <GitBranch className="hidden lg:block absolute top-1/3 left-1/3 text-purple-200 w-12 h-12 transform -rotate-12 opacity-40" />
        <Cpu className="hidden lg:block absolute bottom-1/3 right-1/4 text-blue-200 w-10 h-10 transform rotate-45 opacity-40" />
        <Sparkles className="hidden lg:block absolute top-2/3 left-1/4 text-pink-200 w-10 h-10 transform -rotate-45 opacity-40" />

        <div className="text-center space-y-10">
          
          {/* Avatar Group */}
          <div className="flex justify-center">
            <div className="flex -space-x-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Team member"
                className="w-14 h-14 rounded-full border-4 border-white shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
              />
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
                alt="Team member"
                className="w-14 h-14 rounded-full border-4 border-white shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="Team member"
                className="w-14 h-14 rounded-full border-4 border-white shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Team member"
                className="w-14 h-14 rounded-full border-4 border-white shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
              />
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                alt="Team member"
                className="w-14 h-14 rounded-full border-4 border-white shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                alt="Team member"
                className="w-14 h-14 rounded-full border-4 border-white shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="h1 lg:text-7xl font-bold">
              Build High-Converting Web Apps That Close Deals! Not Just Look Pretty
            </h1>

            {/* Rating Badge */}
            <div className="flex items-center justify-center space-x-2 pt-4">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-50 to-blue-50 px-5 py-2.5 rounded-full border border-purple-200 shadow-sm">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900 ml-2">4.9/5</span>
                <span className="text-sm text-gray-600 ml-1">(500+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-n-3 max-w-3xl mx-auto leading-relaxed font-light">
            We craft purpose driven web applications and digital experiences that turn visitors from your outreach, emails, and proposals into paying clients fast, scalable, and built to convert.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group px-10 py-5 bg-color-1 cursor-pointer text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center space-x-3">
              <span>Book a call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Section */}
          <div className="pt-20">
            <p className="text-sm font-medium text-gray-500 mb-8 tracking-wide">TRUSTED BY FAMOUS BRANDS</p>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
              <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity group">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition">
                  <span className="font-bold text-gray-700">AK</span>
                </div>
                <span className="font-bold text-xl text-gray-600">Asteroid Kit</span>
              </div>
              
              <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity group">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-sm">A</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Aceternity UI</span>
              </div>
              
              <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity group">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-sm">G</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Gamity</span>
              </div>
              
              <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-sm">H</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Host IT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;