"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const BaseButton = React.forwardRef(
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
    ref,
  ) => {
    // Premium variant styles with sophisticated effects
    const variants = {
      // Primary: Refined gradient with inner glow and layered shadows
      primary: `
        relative overflow-hidden
        bg-gradient-to-br from-color-1 via-color-1 to-color-2/80
        text-white font-semibold tracking-wide
        shadow-[0_4px_20px_-4px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]
        hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.6),inset_0_1px_0_rgba(255,255,255,0.2)]
        dark:shadow-[0_4px_25px_-4px_rgba(96,165,250,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
        dark:hover:shadow-[0_8px_35px_-4px_rgba(96,165,250,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]
        border border-white/10
        before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/10 before:to-transparent before:rounded-2xl
      `,

      // Secondary: Glassmorphism with subtle gradient border
      secondary: `
        relative overflow-hidden
        bg-gradient-to-br from-n-7/90 to-n-7/70 backdrop-blur-sm
        dark:from-white/95 dark:to-n-2/90
        text-n-2 dark:text-n-8 font-medium
        shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]
        hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)]
        dark:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]
        dark:hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,1)]
        border border-n-6/50 dark:border-white/60
        before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-n-5/30 before:via-transparent before:to-n-5/10 before:-z-10
        dark:before:from-white/30 dark:before:to-white/5
      `,

      // Outline: Elegant border with gradient hover effect
      outline: `
        relative overflow-hidden
        bg-transparent
        text-n-2 dark:text-n-2 font-medium
        border-2 border-n-5/40 dark:border-n-5/60
        hover:border-color-1/60 dark:hover:border-color-1/50
        hover:bg-color-1/5 dark:hover:bg-color-1/10
        shadow-[0_1px_3px_rgba(0,0,0,0.05)]
        hover:shadow-[0_4px_15px_-3px_rgba(59,130,246,0.15)]
        dark:hover:shadow-[0_4px_15px_-3px_rgba(96,165,250,0.2)]
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-color-1/0 before:to-color-2/0 before:opacity-0 hover:before:opacity-5 before:transition-opacity before:duration-300
      `,

      // Ghost: Minimal with subtle hover reveal
      ghost: `
        relative
        bg-transparent
        text-n-3 dark:text-n-3 font-medium
        hover:text-n-1 dark:hover:text-n-1
        hover:bg-n-7/50 dark:hover:bg-n-7/30
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-n-6/0 before:to-n-7/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 before:-z-10
      `,

      // Glass: Premium frosted glass with prismatic edge
      glass: `
        relative overflow-hidden
        bg-white/8 backdrop-blur-xl
        text-white font-medium
        shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]
        hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)]
        border border-white/20 hover:border-white/30
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-white/5
        after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-tl after:from-color-1/5 after:via-transparent after:to-color-4/5 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500
      `,

      // Gradient: Multi-layered with depth and motion
      gradient: `
        relative overflow-hidden
        bg-gradient-to-r from-color-1 via-color-2 to-color-4
        text-white font-semibold tracking-wide
        shadow-[0_4px_25px_-5px_rgba(139,92,246,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
        hover:shadow-[0_8px_35px_-5px_rgba(139,92,246,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]
        border border-white/15
        before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/15 before:via-transparent before:to-white/5 before:rounded-2xl
        after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/0 after:via-white/5 after:to-white/0 after:rounded-2xl
      `,

      // Premium: The ultimate button with all effects
      premium: `
        relative overflow-hidden
        bg-gradient-to-br from-color-1 via-color-2 to-color-4
        text-white font-bold tracking-wide
        shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_30px_-5px_rgba(139,92,246,0.5),0_10px_40px_-10px_rgba(59,130,246,0.3)]
        hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_40px_-5px_rgba(139,92,246,0.6),0_15px_50px_-10px_rgba(59,130,246,0.4)]
        border border-white/20
        before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/20 before:via-transparent before:to-white/10 before:rounded-2xl
        after:absolute after:inset-[2px] after:rounded-[14px] after:bg-gradient-to-br after:from-white/15 after:via-transparent after:to-transparent after:pointer-events-none
      `,
    };

    const sizes = {
      xs: "px-4 py-2 text-xs rounded-xl",
      sm: "px-5 py-2.5 text-sm rounded-xl",
      md: "px-7 py-3.5 text-base rounded-2xl",
      lg: "px-9 py-4.5 text-lg rounded-2xl",
      xl: "px-12 py-5 text-xl rounded-3xl",
    };

    const baseStyles = `
      inline-flex items-center justify-center
      font-medium
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-color-1/50 focus-visible:ring-offset-2 focus-visible:ring-offset-n-8
      disabled:opacity-40 disabled:pointer-events-none disabled:saturate-50
      active:scale-[0.97] active:transition-transform active:duration-100
      cursor-pointer select-none
    `;

    const content = (
      <>
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="mr-2.5 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left Icon */}
        {!isLoading && leftIcon && (
          <span className="mr-2.5 flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
            {leftIcon}
          </span>
        )}

        {/* Button Text */}
        <span className="relative z-10">{children}</span>

        {/* Right Icon */}
        {!isLoading && rightIcon && (
          <span className="ml-2.5 flex items-center opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
            {rightIcon}
          </span>
        )}

        {/* Hover Shine Effect - Refined sweep */}
        {(variant === "primary" ||
          variant === "gradient" ||
          variant === "premium") && (
          <span className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-15deg]" />
          </span>
        )}

        {/* Continuous Shimmer for Premium */}
        {variant === "premium" && (
          <span className="absolute inset-0 -translate-x-full animate-shimmer pointer-events-none">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
          </span>
        )}

        {/* Subtle noise texture overlay for depth */}
        {(variant === "primary" ||
          variant === "gradient" ||
          variant === "premium") && (
          <span
            className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: "url('/noise.svg')" }}
          />
        )}

        {/* Animated glow ring for premium */}
        {variant === "premium" && (
          <span className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-color-1/30 via-color-2/30 to-color-4/30 blur-xl -z-10" />
        )}
      </>
    );

    if (href) {
      return (
        <motion.div
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="inline-block"
        >
          <Link
            href={href}
            className={cn(
              baseStyles,
              variants[variant],
              sizes[size],
              "group",
              className,
            )}
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
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          "group",
          className,
        )}
        ref={ref}
        disabled={disabled || isLoading}
        onClick={onClick}
        {...props}
      >
        {content}
      </motion.button>
    );
  },
);

BaseButton.displayName = "BaseButton";

// Export individual button components
export const PrimaryButton = React.forwardRef((props, ref) => (
  <BaseButton ref={ref} variant="primary" {...props} />
));
PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = React.forwardRef((props, ref) => (
  <BaseButton ref={ref} variant="secondary" {...props} />
));
SecondaryButton.displayName = "SecondaryButton";

export const OutlineButton = React.forwardRef((props, ref) => (
  <BaseButton ref={ref} variant="outline" {...props} />
));
OutlineButton.displayName = "OutlineButton";

export const GhostButton = React.forwardRef((props, ref) => (
  <BaseButton ref={ref} variant="ghost" {...props} />
));
GhostButton.displayName = "GhostButton";

export const GlassButton = React.forwardRef((props, ref) => (
  <BaseButton ref={ref} variant="glass" {...props} />
));
GlassButton.displayName = "GlassButton";

export const GradientButton = React.forwardRef((props, ref) => (
  <BaseButton ref={ref} variant="gradient" {...props} />
));
GradientButton.displayName = "GradientButton";

export const PremiumButton = React.forwardRef((props, ref) => (
  <BaseButton ref={ref} variant="premium" {...props} />
));
PremiumButton.displayName = "PremiumButton";

export default BaseButton;
