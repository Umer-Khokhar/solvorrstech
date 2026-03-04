import React from "react";

export const metadata = {
  title: "Portfolio | Solvorr Tech",
  description:
    "Explore Solvorr Tech's portfolio of custom dashboards, workflow automations, and integrated business systems built for growing companies.",
  alternates: {
    canonical: "https://www.solvorrtech.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Solvorr Tech",
    description:
      "Explore Solvorr Tech's portfolio of custom dashboards, workflow automations, and integrated business systems built for growing companies.",
    url: "https://www.solvorrtech.com/portfolio",
    siteName: "Solvorr Tech",
    type: "website",
  },
};
import { PortfolioHero, Projects, Project } from "@/app/components";

const Page = () => {
  return (
    <div className={""}>
      <PortfolioHero />
      <Projects />
    </div>
  );
};

export default Page;
