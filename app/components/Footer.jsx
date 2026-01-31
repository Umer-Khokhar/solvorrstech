"use client";

import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "./Button";
import { useTheme } from "next-themes";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const servicesLinks = [
    "Web Design",
    "Development",
    "UI/UX Design",
    "Branding",
    "Consulting",
  ];

  const resourcesLinks = ["Blog", "Case Studies", "Support", "Documentation"];

  return (
    <footer className="relative bg-n-8 overflow-hidden pt-20 pb-10">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-n-6) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-n-6) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-color-1/30 to-transparent" />

      {/* Subtle Background Glow - Single, minimal */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-color-1/5 to-transparent blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="block mb-6 group w-fit">
              <img
                src={isDark ? "./solvorr-dark.svg" : "./solvorr-light.svg"}
                alt="Solvorr Logo"
                width={180}
                className="h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </Link>

            <p className="text-n-3 leading-relaxed mb-8 text-base max-w-sm">
              Crafting digital experiences that merge innovation with elegance.
              We build the future of tech, one pixel at a time.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-lg bg-n-7 border border-n-6 flex items-center justify-center text-n-4 hover:text-n-1 hover:border-color-1/50 transition-all duration-300 group"
                >
                  <social.icon
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            {/* Contact */}
            <a
              href="mailto:hello@solvorr.com"
              className="flex items-center gap-3 text-n-3 hover:text-color-1 transition-colors group w-fit"
            >
              <span className="w-9 h-9 rounded-lg bg-n-7 border border-n-6 flex items-center justify-center group-hover:border-color-1/50 transition-all">
                <Mail size={16} />
              </span>
              <span className="text-sm">hello@solvorr.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-n-1 font-semibold text-base mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-n-3 text-sm hover:text-n-1 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-color-1 group-hover:w-4 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-n-1 font-semibold text-base mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/service"
                    className="text-n-3 text-sm hover:text-n-1 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-color-2 group-hover:w-4 transition-all duration-300" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-n-1 font-semibold text-base mb-6">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((resource) => (
                <li key={resource}>
                  <Link
                    href="#"
                    className="text-n-3 text-sm hover:text-n-1 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-color-3 group-hover:w-4 transition-all duration-300" />
                    <span>{resource}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-n-7/50 to-n-8 border border-n-6 rounded-xl p-6 overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-color-1/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-color-1" />
                  <h3 className="text-n-1 font-semibold text-base">
                    Newsletter
                  </h3>
                </div>

                <p className="text-xs text-n-3 mb-4 leading-relaxed">
                  Get updates on our latest work and insights.
                </p>

                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-n-7 border border-n-6 rounded-lg py-2.5 px-3 text-sm text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 transition-colors"
                  />
                  <PrimaryButton
                    type="submit"
                    size="sm"
                    className="w-full"
                    rightIcon={<Send size={12} />}
                  >
                    Subscribe
                  </PrimaryButton>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-n-6/30 to-transparent mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-n-4 text-sm">
            © {currentYear} <span className="text-n-2">Solvorr Tech</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-n-4 hover:text-n-1 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Big Watermark Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 z-0 opacity-[0.06] dark:opacity-[0.04] pointer-events-none select-none">
        <span className="text-[20vw] font-bold tracking-tighter whitespace-nowrap text-n-1">
          SOLVORR
        </span>
      </div>
    </footer>
  );
};

export default Footer;
