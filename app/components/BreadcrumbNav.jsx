"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

/**
 * BreadcrumbNav Component
 * Displays breadcrumb navigation with schema markup for SEO
 *
 * @param {Array} items - Array of breadcrumb items with { label, href } structure
 */
export default function BreadcrumbNav({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 md:px-12 lg:px-24">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        {/* Home Link */}
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-n-4 hover:text-n-1 dark:text-n-3 dark:hover:text-n-1 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>

        {/* Dynamic Breadcrumb Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-n-4 dark:text-n-3" />
              {isLast ? (
                <span
                  className="text-n-1 dark:text-n-1 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-n-4 hover:text-n-1 dark:text-n-3 dark:hover:text-n-1 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
