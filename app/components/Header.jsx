"use client";
import services from "@/lib/services.json";
import { useState, useEffect } from "react";
import { ThemeToggler } from "./ThemeToggler";
import { PrimaryButton } from "./Button";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { solvorrLogoDark, solvorrLogoLight } from "@/app/assets";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(false);
  const [mounted, setMounted] = useState(false); // add this
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []); // add this

  const isDark = mounted && resolvedTheme === "dark";

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-n-6/10 dark:border-n-6/20 bg-white/80 dark:bg-n-8/80 backdrop-blur-xl transition-colors duration-300">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-20 flex items-center"
            aria-label="Solvorr Tech - Home"
          >
            <img
              src={isDark ? solvorrLogoDark : solvorrLogoLight}
              alt="Solvorr Tech"
              width={150}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDesktopDropdown(true)}
                      onMouseLeave={() => setOpenDesktopDropdown(false)}
                    >
                      <button
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-n-2 dark:text-n-3 hover:text-n-1 dark:hover:text-white transition-colors rounded-lg hover:bg-n-1/5 dark:hover:bg-white/5"
                        aria-expanded={openDesktopDropdown}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDesktopDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Services Dropdown */}
                      <AnimatePresence>
                        {openDesktopDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-n-7 rounded-2xl shadow-2xl border border-n-6/10 dark:border-n-6/20 overflow-hidden"
                          >
                            <div className="p-2">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/${service.slug}`}
                                  className="flex flex-col gap-1 p-3 rounded-xl hover:bg-n-1/5 dark:hover:bg-white/5 transition-colors group"
                                >
                                  <span className="text-sm font-semibold text-n-1 dark:text-white group-hover:text-color-1 dark:group-hover:text-color-1 transition-colors">
                                    {service.title}
                                  </span>
                                  <span className="text-xs text-n-4 dark:text-n-3 line-clamp-1">
                                    {service.text}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium text-n-2 dark:text-n-3 hover:text-n-1 dark:hover:text-white transition-colors rounded-lg hover:bg-n-1/5 dark:hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <PrimaryButton size="sm" href="/contact">
                Book a call
              </PrimaryButton>
              <ThemeToggler />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggler />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-n-2 dark:text-n-3 hover:text-n-1 dark:hover:text-white transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-n-6/10 dark:border-n-6/20"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() =>
                            setOpenMobileSubMenu(!openMobileSubMenu)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-n-1 dark:text-white hover:text-color-1 dark:hover:text-color-1 transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              openMobileSubMenu ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {openMobileSubMenu && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 space-y-2"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/${service.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex flex-col gap-1 p-3 rounded-xl hover:bg-n-1/5 dark:hover:bg-white/5 transition-colors border-l-2 border-n-6/10 dark:border-n-6/20 hover:border-color-1"
                                >
                                  <span className="text-sm font-semibold text-n-1 dark:text-white">
                                    {service.title}
                                  </span>
                                  <span className="text-xs text-n-4 dark:text-n-3 line-clamp-2">
                                    {service.text}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-lg font-semibold text-n-1 dark:text-white hover:text-color-1 dark:hover:text-color-1 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 px-4">
                  <PrimaryButton
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    Book a call
                  </PrimaryButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
