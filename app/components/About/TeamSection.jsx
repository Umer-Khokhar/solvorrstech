import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    { name: 'Michael Torres', role: 'CEO & Founder', featured: true },
    { name: 'Jessica Harper', role: 'Creative Officer', featured: false },
    { name: 'David Miller', role: 'Digital Marketing Director', featured: false },
    { name: 'Emily Watson', role: 'Project Manager', featured: false }
  ];

  return (
    <div className="bg-n-8 p-4 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-color-1 rounded-sm"></div>
              <span className="text-n-3 font-medium">Our Team Members</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-n-1">
              The minds behind FeAvertoux
            </h1>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            <span className="font-medium">Our Members</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Team Grid */}
        <div className="flex items-center justify-between flex-col md:flex-row gap-20">
          {/* Left Side - Featured Member */}
          <div className="relative min-w-[35%] w-auto h-auto">
            <div className="border md:w-[450px] border-n-4/50 rounded-full p-8 shadow-sm">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Michael Torres"
                  className="w-full aspect-square object-cover rounded-full"
                />
                {/* Social Icons */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                    <Instagram className="w-5 h-5 text-gray-700" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                    <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7.535V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7.535l9.5 6.317a1 1 0 0 0 1 0L22 7.535zM20 4a2 2 0 0 1 2 2v.465l-10 6.667L2 6.465V6a2 2 0 0 1 2-2h16z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                    <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Team List */}
          <div className="flex-1 w-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex w-full flex-col md:flex-row mb-5 border-n-5/70 border items-baseline justify-between pl-12 pr-4 py-4  rounded-[50px] md:rounded-full transition-all ${
                  member.featured
                    ? 'bg-color-1 text-white'
                    : 'bg-transparent'
                }`}
              >
                  <h3 className="text-3xl font-normal mb-1">{member.name}</h3>
                  <p className={`text-lg ${member.featured ? 'text-white/90' : 'text-gray-600'}`}>
                    • {member.role}
                  </p>
                <button
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    member.featured
                      ? 'bg-white/20 hover:bg-white/30'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden flex items-center gap-2 px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors mx-auto mt-8">
          <span className="font-medium">Our Members</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TeamSection;