"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      leftIcon,
      rightIcon,
      isLoading,
      disabled,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-color-1 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(96,165,250,0.2)]",
      secondary:
        "bg-n-7 text-n-1 dark:bg-white dark:text-n-8 shadow-sm hover:bg-n-6 dark:hover:bg-n-2",
      outline:
        "border border-n-6 bg-transparent text-n-1 hover:bg-n-7 dark:border-n-5 dark:text-n-1 dark:hover:bg-n-7",
      ghost:
        "bg-transparent text-n-1 hover:bg-n-7 dark:text-n-1 dark:hover:bg-n-7",
      glass:
        "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
      gradient:
        "bg-gradient-to-r from-color-1 via-color-2 to-color-4 text-white hover:opacity-90 shadow-lg",
    };

    const sizes = {
      xs: "px-3 py-1.5 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl font-bold",
    };

    const baseStyles =
      "relative inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-color-1 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const content = (
      <>
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
        
        {/* Hover Shine Effect for Primary/Gradient */}
        {(variant === "primary" || variant === "gradient") && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        )}
      </>
    );

    if (href) {
      return (
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            href={href}
            className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
            ref={ref}
            {...props}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
        ref={ref}
        disabled={disabled || isLoading}
        onClick={onClick}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
