/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "color-1": "var(--color-color-1)",
        "color-2": "var(--color-color-2)",
        "color-3": "var(--color-color-3)",
        "color-4": "var(--color-color-4)",
        "color-5": "var(--color-color-5)",
        "color-6": "var(--color-color-6)",
        "color-7": "var(--color-color-7)",
        "stroke-1": "var(--color-stroke-1)",
        "n-1": "var(--color-n-1)",
        "n-2": "var(--color-n-2)",
        "n-3": "var(--color-n-3)",
        "n-4": "var(--color-n-4)",
        "n-5": "var(--color-n-5)",
        "n-6": "var(--color-n-6)",
        "n-7": "var(--color-n-7)",
        "n-8": "var(--color-n-8)",
        "n-9": "var(--color-n-9)",
        "n-10": "var(--color-n-10)",
        "n-11": "var(--color-n-11)",
        "n-12": "var(--color-n-12)",
        "n-13": "var(--color-n-13)",
        "n-orange": "var(--color-n-orange)",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        sora: "var(--font-sora)",
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
