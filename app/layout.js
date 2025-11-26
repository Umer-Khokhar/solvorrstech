import { Geist, Geist_Mono, Sora } from "next/font/google";

import "@/app/globals.css";
import { Footer, Header } from "@/app/components";
import { ThemeProvider } from "./components/ThemeProvider";

const soraFont = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solvorr Tech – Modern Web Applications, Automation & Digital Solutions",
  description: "A problem-solving tech company delivering custom software, automated systems, SEO-optimized websites, and end-to-end digital solutions for business growth",
  metadataBase: new URL("https://solvorrtech.vercel.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "gKFTJzIMJWqRiuUhTPI8NWNyLCW-VTycN-7gAJRr3Do",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
