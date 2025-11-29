import { Geist, Geist_Mono, Sora, Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local"
import "@/app/globals.css";
import { Footer, Header } from "@/app/components";
import { ThemeProvider } from "./components/ThemeProvider";

const clashGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/ClashGrotesk-Regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-grotesk',
  display: 'swap',
})



const kumbh = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"]
})
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
