"use client";
import { useTheme } from "next-themes";

export default function ThemeBackground({ lightSrc, darkSrc }) {
  const { theme } = useTheme();
  const src = theme === "dark" ? darkSrc : lightSrc;

  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className="absolute inset-0 -z-10 bg-cover bg-center"
    />
  );
}