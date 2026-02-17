import { Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import { Footer, Header } from "@/app/components";
import { ThemeProvider } from "./components/ThemeProvider";

const clashGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/ClashGrotesk-Regular.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
  preload: true,
});

const kumbh = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://www.solvorrtech.com"),
  title:
    "Solvorr Tech – Modern Web Applications, Automation & Digital Solutions",
  description:
    "A problem-solving tech company delivering custom software, automated systems, SEO-optimized websites, and end-to-end digital solutions for business growth",
  verification: {
    google: "mM4EivVNrdAxp4KkLLvDL_6thFebjQbLJ3rYG3L0q9Q",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${clashGrotesk.variable} ${kumbh.variable} antialiased`}
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
