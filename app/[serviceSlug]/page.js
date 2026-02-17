import React from "react";
import { notFound } from "next/navigation";
import ServiceHero from "@/app/components/servicePage/ServiceHero";
import Overview from "@/app/components/Overview";
import SubServices from "@/app/components/servicePage/SubServices";
import Benefit from "@/app/components/Benefit";
import ServiceProcess from "@/app/components/servicePage/ServiceProcess";
import TechStack from "@/app/components/servicePage/TechStack";
import MasonryTestimonials from "@/app/components/Testimonials";
import Faqs from "@/app/components/Faqs";
import Cta from "@/app/components/Cta";
import services from "@/lib/services.json";

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = services.find((ser) => ser.slug === serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.detailPage.heroTitle} | Solvorr Tech`,
    description: service.detailPage.overview.description[0],
    alternates: {
      canonical: `/${service.slug}`,
    },
    openGraph: {
      title: service.detailPage.heroTitle,
      description: service.detailPage.overview.description[0],
      url: `/${service.slug}`,
      images: [
        {
          url: service.imageUrl || "/overview.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

const Page = async ({ params }) => {
  const { serviceSlug } = await params;
  const service = services.find((ser) => ser.slug === serviceSlug);

  // Use Next.js notFound() for proper 404 handling
  if (!service) {
    notFound();
  }

  const { detailPage } = service;
  const heroContent = {
    title: detailPage.heroTitle,
    subTitle: detailPage.heroSubTitle,
    imageUrl: service.imageUrl,
  };
  const overviewContent = {
    title: detailPage.overview.title,
    subTitle: detailPage.overview.subTitle,
    description: detailPage.overview.description,
    // Use overview specific image, or fallback to main service image, or default to general overview
    image: detailPage.overview.image || service.imageUrl || "/overview.png",
  };

  return (
    <>
      <ServiceHero content={heroContent} />
      <Overview content={overviewContent} />
      <SubServices subServices={detailPage.subServices} />
      <Benefit
        serviceBenefits={detailPage.serviceBenefits}
        serviceTitle={service.title}
      />
      <ServiceProcess serviceProccess={detailPage.serviceProccess} />
      <TechStack technologies={detailPage.technologies} />
      <MasonryTestimonials />
      <Faqs />
      <Cta />
    </>
  );
};

export default Page;
