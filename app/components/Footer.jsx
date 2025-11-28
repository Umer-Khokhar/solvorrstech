import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./";
import { Section } from "./";

const Footer = () => {
  return (
    <>
      <Section className="relative bg-n-7 dark:bg-n-8 text-foreground pb-8">
        <div
          className="absolute w-full h-full inset-0 z-10
                    bg-[url('/grain-main.png')]
                    dark:bg-[url('/grain.png')]
                    bg-cover bg-center opacity-80 md:opacity-80"
        />
        <div className="container mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Logo and About - Takes more space */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-3">
                  <span className="text-gradient">Solvorr</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-color-1 to-color-5 rounded-full" />
              </div>
              <p className="text-n-3 leading-relaxed mb-6 pr-4">
                A forward-thinking digital agency focused on creating stunning
                and effective web solutions that drive results and exceed
                expectations.
              </p>

              {/* Social Links - More prominent */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="group w-10 h-10 rounded-lg bg-n-6 dark:bg-n-7 flex items-center justify-center hover:bg-color-1 transition-all duration-300"
                >
                  <Facebook
                    size={18}
                    className="text-n-3 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-lg bg-n-6 dark:bg-n-7 flex items-center justify-center hover:bg-color-1 transition-all duration-300"
                >
                  <Twitter
                    size={18}
                    className="text-n-3 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-lg bg-n-6 dark:bg-n-7 flex items-center justify-center hover:bg-color-1 transition-all duration-300"
                >
                  <Linkedin
                    size={18}
                    className="text-n-3 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-lg bg-n-6 dark:bg-n-7 flex items-center justify-center hover:bg-color-1 transition-all duration-300"
                >
                  <Github
                    size={18}
                    className="text-n-3 group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6 text-n-1">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/service", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/blog", label: "Blog" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-n-3 hover:text-color-1 hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6 text-n-1">Services</h3>
              <ul className="space-y-3">
                {[
                  "Web Design",
                  "Development",
                  "UI/UX Design",
                  "Branding",
                  "Consulting",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/service"
                      className="text-n-3 hover:text-color-1 hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-semibold mb-6 text-n-1">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:contact@solvorr.com"
                  className="flex items-center gap-3 text-n-3 hover:text-color-1 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-n-6 dark:bg-n-7 flex items-center justify-center group-hover:bg-color-1/10 transition-colors">
                    <Mail
                      size={18}
                      className="group-hover:text-color-1 transition-colors"
                    />
                  </div>
                  <span>contact@solvorr.com</span>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-n-3 hover:text-color-1 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-n-6 dark:bg-n-7 flex items-center justify-center group-hover:bg-color-1/10 transition-colors">
                    <Phone
                      size={18}
                      className="group-hover:text-color-1 transition-colors"
                    />
                  </div>
                  <span>+123 456 7890</span>
                </a>

                <div className="flex items-center gap-3 text-n-3">
                  <div className="w-10 h-10 rounded-lg bg-n-6 dark:bg-n-7 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter with better design */}
              <div className="bg-n-6 dark:bg-n-7 rounded-2xl p-6 border border-n-6 dark:border-n-6/20">
                <h4 className="text-base font-semibold mb-2 text-n-1">
                  Join Newsletter
                </h4>
                <p className="text-n-4 text-sm mb-4">
                  Get updates on latest trends and offers.
                </p>
                <form className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-n-8 dark:bg-n-8 border border-n-6/50 dark:border-n-6/20 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-color-1 transition-all placeholder:text-n-4"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-color-1 hover:bg-color-1/90 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  >
                    <Send size={16} className="text-white" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar with better separation */}
          <div className="pt-8 border-t border-n-5/40 dark:border-n-6/80">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-n-4 text-sm">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-n-2 font-medium">Solvorr</span>. All
                rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-n-4 hover:text-color-1 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-n-6">•</span>
                <Link
                  href="/terms"
                  className="text-n-4 hover:text-color-1 transition-colors"
                >
                  Terms of Service
                </Link>
                <span className="text-n-6">•</span>
                <Link
                  href="/cookies"
                  className="text-n-4 hover:text-color-1 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient blur */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[200px] bg-gradient-to-t from-color-5/10 via-color-2/5 to-transparent blur-3xl pointer-events-none" />
      </Section>
    </>
  );
};

export default Footer;
