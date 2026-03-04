import { DM_Sans } from "next/font/google";
import "@/app/globals.css";
import { Footer, Header } from "@/app/components";
import { ThemeProvider } from "./components/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.solvorrtech.com"),
  title: "Solvorr Tech | Custom Dashboards, Automation & Integrations",
  description:
    "Custom dashboards, workflow automation, and integrated business systems designed to centralize operations, reduce manual work, and support scalable growth.",
  verification: {
    google: "mM4EivVNrdAxp4KkLLvDL_6thFebjQbLJ3rYG3L0q9Q",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://ik.imagekit.io"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/solvorrtech/Solvorr_Tech_Media/images/solvorr-light.webp?updatedAt=1770817367474"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://ik.imagekit.io/solvorrtech/Solvorr_Tech_Media/images/solvorr-dark.webp?updatedAt=1770817367465"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
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
