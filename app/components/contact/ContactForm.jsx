"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, Zap, ShieldCheck, Sparkles, 
  User, Mail, Phone, MessageSquare, Plus,
  Database, Globe, Cpu, Layout, Search, Shield, Rocket
} from "lucide-react";
import Button from "../Button";

const projectTypes = [
  { id: "web", label: "Web Ecosystem", icon: <Globe className="w-4 h-4" /> },
  { id: "app", label: "Mobile Tech", icon: <Cpu className="w-4 h-4" /> },
  { id: "automation", label: "Automation", icon: <Zap className="w-4 h-4" /> },
  { id: "software", label: "Custom Engine", icon: <Database className="w-4 h-4" /> },
  { id: "marketing", label: "Digital Growth", icon: <Rocket className="w-4 h-4" /> },
  { id: "cyber", label: "Security", icon: <Shield className="w-4 h-4" /> },
  { id: "other", label: "Other Systems", icon: <Plus className="w-4 h-4" /> }
];

const CyberInput = ({ label, icon, name, type = "text", value, onChange, placeholder, required = false, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full group">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-1.5 rounded-lg border transition-all duration-300 ${isFocused ? 'bg-color-1/10 border-color-1 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-n-8/50 border-n-6/30'}`}>
          {React.cloneElement(icon, { className: `w-4 h-4 transition-colors ${isFocused ? 'text-color-1' : 'text-n-4'}` })}
        </div>
        <label className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${isFocused ? 'text-color-1' : 'text-n-4'}`}>
          {label} {required && <span className="text-color-1">*</span>}
        </label>
      </div>

      <div className="relative">
        {isTextArea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            required={required}
            rows="4"
            className="w-full bg-n-8/30 border border-n-6/30 rounded-xl px-4 py-4 text-n-1 dark:text-white focus:outline-none transition-all placeholder:text-n-4/30 resize-none group-hover:border-n-5/50 focus:border-color-1/50"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            required={required}
            className="w-full bg-n-8/30 border border-n-6/30 rounded-xl px-4 py-4 text-n-1 dark:text-white focus:outline-none transition-all placeholder:text-n-4/30 group-hover:border-n-5/50 focus:border-color-1/50"
          />
        )}
        
        {/* Futuristic focus line */}
        <motion.div 
          initial={false}
          animate={{ width: isFocused ? '100%' : '0%' }}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-color-1 to-transparent shadow-[0_0_10px_#3B82F6]"
        />
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: [],
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleProjectType = (id) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(id)
        ? prev.projectType.filter(t => t !== id)
        : [...prev.projectType, id]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transmission Initiated:", formData);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Module 01: Connection Core */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono bg-n-7 dark:bg-white/5 px-2 py-1 rounded border border-n-6/30 text-color-1">MOD_01</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-n-6/30 to-transparent" />
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-n-4">Identity Matrix</h4>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CyberInput 
              label="Operator Name" 
              icon={<User />} 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <CyberInput 
              label="Digital Address" 
              icon={<Mail />} 
              type="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CyberInput 
              label="Comms Frequency" 
              icon={<Phone />} 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Module 02: Selection Engine */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono bg-n-7 dark:bg-white/5 px-2 py-1 rounded border border-n-6/30 text-color-2">MOD_02</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-n-6/30 to-transparent" />
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-n-4">Scope Configuration</h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => toggleProjectType(type.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 gap-3 group/chip
                  ${formData.projectType.includes(type.id)
                    ? "bg-color-1/10 border-color-1 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    : "bg-n-8/30 border-n-6/30 text-n-4 hover:border-n-5/50"
                  }
                `}
              >
                <div className={`p-2 rounded-xl border transition-all ${formData.projectType.includes(type.id) ? 'bg-color-1 border-white/20 text-white' : 'bg-n-7 border-n-6/30'}`}>
                  {type.icon}
                </div>
                <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Module 03: Logic Input */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono bg-n-7 dark:bg-white/5 px-2 py-1 rounded border border-n-6/30 text-color-3">MOD_03</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-n-6/30 to-transparent" />
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-n-4">Operational Intent</h4>
          </div>

          <CyberInput 
            label="Project Matrix Detail" 
            icon={<MessageSquare />} 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            placeholder="Describe the architecture you want to build..."
            isTextArea
            required
          />
        </div>

        <div className="relative pt-6">
          <div className="absolute inset-0 bg-color-1/20 blur-3xl rounded-full opacity-20" />
          <Button 
            variant="primary"
            size="xl"
            className="w-full tracking-[0.3em] font-bold overflow-hidden" 
            type="submit"
            leftIcon={<Zap className="w-5 h-5 fill-current" />}
            rightIcon={<ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
          >
            INITIATE SYSTEM LINK
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-color-1" />
              <span className="text-[9px] font-mono tracking-widest uppercase">Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-color-2" />
              <span className="text-[9px] font-mono tracking-widest uppercase">AI-Optimized</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
