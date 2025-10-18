"use client"
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function FloatingGlassHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/service' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blogs', href: '/blog' },
        { name: 'Pricing', href: '/pricing' }
    ];

    return (
        <div>
            {/* Header */}
            <header className="fixed top-4 left-0 right-0 z-50 px-4 py-4">
                <nav className={`
          max-w-7xl mx-auto transition-all duration-300 ease-in-out
          ${isScrolled
                    ? 'bg-black/30 backdrop-blur-md border border-white/30 shadow-lg shadow-black/5'
                    : 'bg-black/20 backdrop-blur-sm border border-white/20'
                }
           ${isMobileMenuOpen ? "rounded-lg" : "rounded-full"} px-6 py-3
        `}>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <Link href={"/"}>
                            <img src="/solvorr-logo.svg" alt="website logo" className={'h-8 md:h-10'}/>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white/80 hover:text-white transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
                            <div className="space-y-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <div className="pt-3 space-y-2">
                                    <button className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium">
                                        Contact Sales
                                    </button>
                                    <button className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium">
                                        Log in
                                    </button>
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}