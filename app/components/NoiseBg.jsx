export default function NoiseBg({
  children,
  className = "",
  lightGradient = "from-n-8 to-n-7",
  darkGradient = "from-n-8 to-n-9",
}) {
  return (
    <section className={`relative transition-colors duration-500 ${className}`}>
      {/* Light mode gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${lightGradient} dark:hidden`}
      />

      {/* Dark mode gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b hidden dark:block ${darkGradient}`}
      />

      {/* Noise on top */}
      <div className="noise-overlay z-1"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
