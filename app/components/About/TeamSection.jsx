'use client'
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection = () => {
    const scrollContainerRef = useRef(null);

    const teamMembers = [
        {
            name: 'Michael Patel',
            role: 'Supply Chain',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
        },
        {
            name: 'Emily Thompson',
            role: 'Product Development',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
        },
        {
            name: 'Samantha Lee',
            role: 'Human Resources',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop'
        },
        {
            name: 'Christopher Nguyen',
            role: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop'
        },
        {
            name: 'Rachel Martinez',
            role: 'Sales Executive',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop'
        },
        {
            name: 'David Kim',
            role: 'Marketing Director',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
        },
        {
            name: 'Alex Rivera',
            role: 'Tech Lead',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop'
        },
        {
            name: 'Sophie Chen',
            role: 'Design Director',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop'
        }
    ];

    const logos = [
        { name: 'LogoIpsum', icon: '✦', color: 'text-purple-600' },
        { name: 'LogoIpsum', icon: '◈', color: 'text-blue-600' },
        { name: 'LogoIpsum', icon: '◉', color: 'text-red-600' },
        { name: 'LogoIpsum', icon: '✺', color: 'text-orange-600' }
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 340; // 320px card width + 20px gap
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 px-5 overflow-hidden">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="flex-1">
                        <div className="inline-block mb-4">
              <span className="text-sm font-medium text-green-700 uppercase tracking-wider">
                Pure talent
              </span>
                        </div>
                        <h2 className="h2 font-bold mb-6">
                            Meet our team
                        </h2>
                        <p className="text-lg text-n-3 max-w-xl">
                            Unleashing creativity, our team of design visionaries turns ordinary spaces into extraordinary experiences
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300">
                            Get started
                        </button>
                        <button className="px-6 py-3 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300">
                            Explore features
                        </button>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="flex flex-wrap items-center gap-8 mb-16">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className={`text-2xl ${logo.color}`}>{logo.icon}</span>
                            <span className="text-lg font-semibold text-n-4">{logo.name}</span>
                        </div>
                    ))}
                </div>

                {/* Team Horizontal Scroll */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-900" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-900" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[320px]"
                            >
                                <div className="group relative bg-n-7 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                                    {/* Image */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Progress Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {teamMembers.map((_, index) => (
                            <div
                                key={index}
                                className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default TeamSection;