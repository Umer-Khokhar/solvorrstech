import React from "react";

export const metadata = {
  title: "Blog | Solvorr Tech",
  description:
    "Insights, guides, and updates from the Solvorr Tech team on business automation, custom dashboards, CRM systems, and digital operations.",
  alternates: {
    canonical: "https://www.solvorrtech.com/blog",
  },
  openGraph: {
    title: "Blog | Solvorr Tech",
    description:
      "Insights, guides, and updates from the Solvorr Tech team on business automation, custom dashboards, CRM systems, and digital operations.",
    url: "https://www.solvorrtech.com/blog",
    siteName: "Solvorr Tech",
    type: "website",
  },
};
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "@/app/components/blog/BlogGrid";

const page = () => {
  return (
    <div className={"pt-28 md:pt-40"}>
      <BlogHero />
      <BlogGrid />
    </div>
  );
};

export default page;
