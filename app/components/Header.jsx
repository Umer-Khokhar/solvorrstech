"use client";
import services from "@/lib/services.json";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ThemeToggler } from "./ThemeToggler";
import { PrimaryButton } from "./Button";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "#",
      children: services.map((service) => ({
        name: service.title,
        link: `/${service.slug}`,
        description: service.text.slice(0, 30) + "...",
        icon: service.iconUrl,
      })),
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Case Studies",
      link: "/case-studies",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);

  const toggleSubMenu = (name) => {
    setOpenMobileSubMenu(openMobileSubMenu === name ? null : name);
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <PrimaryButton size="sm" href="/contact">
              Book a call
            </PrimaryButton>
            <ThemeToggler />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center">
              <ThemeToggler />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-6">
              {navItems.map((item, idx) => (
                <div key={`mobile-item-${idx}`} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-semibold text-neutral-900 dark:text-neutral-100"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleSubMenu(item.name)}
                        className="p-2 text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={cn(
                            "transition-transform duration-300",
                            openMobileSubMenu === item.name && "rotate-180",
                          )}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {item.children && (
                    <AnimatePresence>
                      {openMobileSubMenu === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-4 pl-4 pt-2 border-l border-neutral-200 dark:border-neutral-800">
                            {item.children.map((child, cIdx) => (
                              <Link
                                key={`mobile-child-${cIdx}`}
                                href={child.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group flex flex-col gap-1"
                              >
                                <span className="text-base font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                  {child.name}
                                </span>
                                <span className="text-xs text-neutral-500 dark:text-neutral-500">
                                  {child.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4">
              <PrimaryButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
                href="/contact"
              >
                Book a call
              </PrimaryButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
