"use client";
import { useCallback, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const AnimatedThemeToggler = ({
  className,
  duration = 300,
  ...props
}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef(null);
  
  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = isDark ? "light" : "dark";

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get button position before anything changes
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Temporarily disable next-themes transitions
    const style = document.createElement('style');
    style.textContent = `*, *::before, *::after { transition: none !important; }`;
    document.head.appendChild(style);

    // Start transition
    const transition = document.startViewTransition(() => {
      // Remove the temporary style
      document.head.removeChild(style);
      // Update theme
      setTheme(newTheme);
    });

    // Wait for transition snapshots
    await transition.ready;

    // Animate the clip-path
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isDark, duration, setTheme]);

  return (
    <>
      <style jsx global>{`
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        
        ::view-transition-old(root) {
          z-index: 1;
        }
        
        ::view-transition-new(root) {
          z-index: 2;
        }
        
        html {
          view-transition-name: root;
        }
      `}</style>
      
      <button
        ref={buttonRef}
        onClick={toggleTheme}
        className={cn(
          "inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground",
          className
        )}
        aria-label="Toggle theme"
        {...props}
      >
          <div className="p-2 cursor-pointer rounded-full flex items-center justify-center">
            {isDark ?  <Moon className="md:h-6 md:w-6 h-5 w-5" /> : <Sun className="md:h-6  md:w-6 h-5 w-5 " />}
          </div>
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  );
};