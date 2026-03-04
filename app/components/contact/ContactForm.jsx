"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
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
  Loader2,
  AlertCircle,
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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectTypes: z
    .array(z.string())
    .min(1, "Please select at least one interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const CyberInput = ({
  label,
  icon,
  name,
  type = "text",
  placeholder,
  required = false,
  isTextArea = false,
  register,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full group">
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`p-1.5 rounded-lg border transition-all duration-300 ${
            isFocused
              ? "bg-color-1/10 border-color-1 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              : error
                ? "bg-red-500/10 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                : "bg-n-8 dark:bg-n-8/50 border-n-3 dark:border-n-6/30"
          }`}
        >
          {React.cloneElement(icon, {
            className: `w-4 h-4 transition-colors ${
              isFocused ? "text-color-1" : error ? "text-red-500" : "text-n-1"
            }`,
          })}
        </div>
        <label
          className={`text-xs font-semibold tracking-wide transition-colors ${
            isFocused
              ? "text-color-1"
              : error
                ? "text-red-500"
                : "text-n-1 dark:text-n-3"
          }`}
        >
          {label} {required && <span className="text-color-1">*</span>}
        </label>
      </div>

      <div className="relative">
        {isTextArea ? (
          <textarea
            {...register(name)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows="5"
            className={`w-full bg-n-7 dark:bg-n-8/30 border rounded-xl px-4 py-4 text-n-8 dark:text-n-1 focus:outline-none transition-all placeholder:text-n-4/50 resize-none ${
              error
                ? "border-red-500/50 focus:border-red-500"
                : "border-n-3/30 dark:border-n-6/50 focus:border-color-1/50"
            }`}
          />
        ) : (
          <input
            type={type}
            {...register(name)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`w-full bg-n-7 dark:bg-n-8 border rounded-xl px-4 py-4 text-n-8 dark:text-n-1 focus:outline-none transition-all placeholder:text-n-4/50 ${
              error
                ? "border-red-500/50 focus:border-red-500"
                : "border-n-3/30 dark:border-n-6/50 focus:border-color-1/50"
            }`}
          />
        )}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] text-red-500 font-medium mt-1 ml-1"
          >
            {error.message}
          </motion.p>
        )}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'error' | null

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectTypes: [],
      message: "",
    },
  });

  const selectedProjectTypes = watch("projectTypes");

  const toggleProjectType = (id) => {
    const current = selectedProjectTypes || [];
    const updated = current.includes(id)
      ? current.filter((t) => t !== id)
      : [...current, id];
    setValue("projectTypes", updated, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        router.push("/thanks");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/50 flex items-center gap-4 text-red-500"
          >
            <AlertCircle className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-bold">Oops! Something went wrong.</p>
              <p className="text-sm opacity-90 text-n-1 dark:text-n-3">
                Please try again later or contact us directly.
              </p>
            </div>
            <button
              onClick={() => setSubmitStatus(null)}
              className="ml-auto p-1 hover:bg-red-500/20 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5 rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
              register={register}
              error={errors.name}
              placeholder="Your Name"
              required
            />
            <CyberInput
              label="Email"
              icon={<Mail />}
              type="email"
              name="email"
              register={register}
              error={errors.email}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CyberInput
              label="Phone"
              icon={<Phone />}
              name="phone"
              register={register}
              error={errors.phone}
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Project Selection */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4 border-b border-n-3 dark:border-n-6 pb-2">
            <h4 className="text-sm font-semibold text-n-1 dark:text-white uppercase tracking-wider">
              I'm interested in...
            </h4>
            {errors.projectTypes && (
              <span className="text-[10px] text-red-500 font-medium">
                {errors.projectTypes.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => toggleProjectType(type.id)}
                className={`flex items-center justify-center p-3 rounded-xl border transition-all duration-200 gap-2
                  ${
                    selectedProjectTypes?.includes(type.id)
                      ? "bg-color-1 text-white border-color-1 shadow-md shadow-color-1/20"
                      : errors.projectTypes
                        ? "bg-red-500/5 border-red-500/30 text-n-3/70 hover:border-red-500/50"
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
            register={register}
            error={errors.message}
            placeholder="Tell us about your project goals and timeline..."
            isTextArea
            required
          />
        </div>

        <div className="pt-4">
          <PrimaryButton
            size="lg"
            className="w-full font-bold group"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            )}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
