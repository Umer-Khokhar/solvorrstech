"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Sparkles,
  User,
  Mail,
  Phone,
  MessageSquare,
  Plus,
  Database,
  Globe,
  Cpu,
  Layout,
  Search,
  Shield,
  Rocket,
} from "lucide-react";
import { PrimaryButton } from "../Button";

const projectTypes = [
  { id: "web", label: "Web Development", icon: <Globe className="w-4 h-4" /> },
  { id: "app", label: "Mobile App", icon: <Cpu className="w-4 h-4" /> },
  { id: "automation", label: "Automation", icon: <Zap className="w-4 h-4" /> },
  {
    id: "software",
    label: "Custom Software",
    icon: <Database className="w-4 h-4" />,
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: <Rocket className="w-4 h-4" />,
  },
  { id: "cyber", label: "Security", icon: <Shield className="w-4 h-4" /> },
  { id: "other", label: "Other", icon: <Plus className="w-4 h-4" /> },
];

const CyberInput = ({
  label,
  icon,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  isTextArea = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full group">
      <div className="flex items-center gap-3 mb-2">
        {/* Icon Container with active state styling */}
        <div
          className={`p-1.5 rounded-lg border transition-all duration-300 ${isFocused ? "bg-color-1/10 border-color-1 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "bg-n-8 dark:bg-n-8/50 border-n-3 dark:border-n-6/30"}`}
        >
          {React.cloneElement(icon, {
            className: `w-4 h-4 transition-colors ${isFocused ? "text-color-1" : "text-n-1"}`,
          })}
        </div>
        <label
          className={`text-xs font-semibold tracking-wide transition-colors ${isFocused ? "text-color-1" : "text-n-1 dark:text-n-3"}`}
        >
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
            rows="5"
            className="w-full bg-n-7 dark:bg-n-8/30 border border-n-3/30 dark:border-n-6/50 rounded-xl px-4 py-4 text-n-8 dark:text-n-1 focus:outline-none transition-all placeholder:text-n-4/50 resize-none focus:border-color-1/50"
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
            className="w-full bg-n-7 dark:bg-n-8 border border-n-3/30 dark:border-n-6/50 rounded-xl px-4 py-4 text-n-8 dark:text-n-1 focus:outline-none transition-all placeholder:text-n-4/50 focus:border-color-1/50"
          />
        )}
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
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(id)
        ? prev.projectType.filter((t) => t !== id)
        : [...prev.projectType, id],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Details */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-n-1 dark:text-white uppercase tracking-wider mb-4 border-b border-n-3 dark:border-n-6 pb-2">
            Personal Details
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            <CyberInput
              label="Name"
              icon={<User />}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <CyberInput
              label="Email"
              icon={<Mail />}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CyberInput
              label="Phone"
              icon={<Phone />}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Project Selection */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-n-1 dark:text-white uppercase tracking-wider mb-4 border-b border-n-3 dark:border-n-6 pb-2">
            I'm interested in...
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => toggleProjectType(type.id)}
                className={`flex items-center justify-center p-3 rounded-xl border transition-all duration-200 gap-2
                  ${
                    formData.projectType.includes(type.id)
                      ? "bg-color-1 text-white border-color-1 shadow-md"
                      : "bg-n-7 dark:bg-n-8/30 border-n-3/30 dark:border-n-6 text-n-3 dark:text-n-4 hover:border-n-4 dark:hover:border-n-5"
                  }
                `}
              >
                <span className="text-xs font-medium whitespace-nowrap">
                  {type.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-n-1 dark:text-white uppercase tracking-wider mb-4 border-b border-n-3 dark:border-n-6 pb-2">
            Project Details
          </h4>

          <CyberInput
            label="Message"
            icon={<MessageSquare />}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project goals and timeline..."
            isTextArea
            required
          />
        </div>

        <div className="pt-4">
          <PrimaryButton size="lg" className="w-full font-bold" type="submit">
            Send Message
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
