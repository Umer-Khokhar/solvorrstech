export default function NoiseBg({
  children,
  className = "",
  lightGradient = "from-[#f8faf7] to-[#e5efe8]",
  darkGradient = "from-[#1a1a1a] to-[#0e0e0e]",
}) {
  return (
    <section className={`relative ${className}`}>
      {/* Light mode gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${lightGradient} dark:hidden`}
      />

      {/* Dark mode gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b hidden dark:block ${darkGradient}`}
      />

      {/* Noise on top */}
      <div className="noise-overlay"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
