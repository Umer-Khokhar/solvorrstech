"use client";
import React, { useState } from "react";
import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Clock, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  ];

  return (
    <Section className="pt-[14rem] -mt-[5.25rem] pb-20" crosses customPadding id="contact">
      <div className="container relative z-2">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
            <Heading
            className="md:max-w-md lg:max-w-3xl mb-12 lg:mb-20"
            title="Let's Build Something Extraordinary"
            text="Whether you have a groundbreaking idea or need to elevate your current digital presence, our team is ready to partner with you. Let's start the conversation."
            />
        </motion.div>

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16 xl:gap-24">
            {/* Left Column: Contact Info & Value Prop */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-10"
            >
                {/* Info Cards */}
                <div className="flex flex-col gap-6">
                    <div className="p-0.5 rounded-2xl bg-gradient-to-br from-color-1/30 via-color-2/30 to-color-3/30">
                        <div className="rounded-[0.9375rem] bg-n-8/80 backdrop-blur-sm p-8 h-full border border-n-1/10">
                            <h4 className="h4 mb-6 text-xl">Contact Details</h4>
                            <ul className="flex flex-col gap-6">
                                <li className="flex items-start gap-4 group">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-n-7 text-color-1 group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="caption text-n-4 uppercase tracking-wider mb-1">Email Us</p>
                                        <a href="mailto:hello@solvorr.tech" className="body-1 text-n-1 hover:text-color-1 transition-colors">hello@solvorr.tech</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-n-7 text-color-2 group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="caption text-n-4 uppercase tracking-wider mb-1">Call Us</p>
                                        <a href="tel:+15550000000" className="body-1 text-n-1 hover:text-color-2 transition-colors">+1 (555) 000-0000</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-n-7 text-color-3 group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="caption text-n-4 uppercase tracking-wider mb-1">Visit Us</p>
                                        <p className="body-1 text-n-1">123 Innovation Dr, Tech City, TC 90210</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-0.5 rounded-2xl bg-gradient-to-br from-color-1/30 via-color-2/30 to-color-3/30">
                         <div className="rounded-[0.9375rem] bg-n-8/80 backdrop-blur-sm p-8 h-full border border-n-1/10">
                            <h4 className="h4 mb-6 text-xl">Office Hours</h4>
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <Clock className="w-5 h-5 text-n-4" />
                                    <div className="flex justify-between w-full">
                                        <span className="text-n-3">Mon - Fri</span>
                                        <span className="text-n-1 font-code">9:00 AM - 6:00 PM</span>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                     <Clock className="w-5 h-5 text-n-4" />
                                    <div className="flex justify-between w-full">
                                        <span className="text-n-3">Sat - Sun</span>
                                        <span className="text-n-1 font-code">Closed</span>
                                    </div>
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-4">
                    <p className="caption text-n-4 uppercase tracking-wider">Connect with us</p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href} 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-n-7 text-n-1 hover:bg-n-6 hover:text-color-1 transition-all duration-300"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Premium Form */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }} 
                className="relative"
            >
                {/* Glow effect */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-color-1 rounded-full mix-blend-mode-screen filter blur-[10rem] opacity-20 pointer-events-none data-[theme='dark']:opacity-10"></div>
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-color-2 rounded-full mix-blend-mode-screen filter blur-[10rem] opacity-20 pointer-events-none data-[theme='dark']:opacity-10"></div>

                <div className="relative p-[1px] rounded-3xl bg-conic-gradient">
                    <div className="relative rounded-[1.4rem] bg-n-8 p-6 md:p-10 lg:p-12 overflow-hidden">
                        {/* Background Texture */}
                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>

                        <h3 className="h3 mb-2">Send a Message</h3>
                        <p className="body-2 text-n-4 mb-8">We usually respond within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-1">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="caption text-n-4 uppercase tracking-wider font-semibold ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full bg-n-7/40 border border-n-6 rounded-xl px-5 py-4 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-7 transition-all placeholder:text-n-4/40"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="caption text-n-4 uppercase tracking-wider font-semibold ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@company.com"
                                        className="w-full bg-n-7/40 border border-n-6 rounded-xl px-5 py-4 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-7 transition-all placeholder:text-n-4/40"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="caption text-n-4 uppercase tracking-wider font-semibold ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this regarding?"
                                    className="w-full bg-n-7/40 border border-n-6 rounded-xl px-5 py-4 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-7 transition-all placeholder:text-n-4/40"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="caption text-n-4 uppercase tracking-wider font-semibold ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your goals..."
                                    rows="5"
                                    className="w-full bg-n-7/40 border border-n-6 rounded-xl px-5 py-4 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-7 transition-all placeholder:text-n-4/40 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <Button className="w-full mt-4 h-14 text-sm tracking-widest shadow-lg shadow-color-1/10" white>
                                SEND MESSAGE
                            </Button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
