import React from 'react';
import { notFound } from 'next/navigation';
import ServiceHero from "@/app/components/servicePage/ServiceHero";
import Overview from "@/app/components/Overview";
import SubServices from "@/app/components/servicePage/SubServices";
import Benefit from "@/app/components/Benefit";
import ServiceProcess from "@/app/components/servicePage/ServiceProcess";
import TechStack from "@/app/components/servicePage/TechStack";
import MasonryTestimonials from "@/app/components/Testimonials";
import Faqs from "@/app/components/Faqs";
import Cta from "@/app/components/Cta";
import services from "@/lib/services.json"


export async function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }))
}

// Optional: Generate metadata for SEO


const Page = async ({ params }) => {
  const { serviceSlug } = await params
  const service = services.find((ser) => ser.slug === serviceSlug)

  // Use Next.js notFound() for proper 404 handling
  if (!service) {
    notFound()
  }

  const { detailPage } = service
  const heroContent = { 
    title: detailPage.heroTitle, 
    subTitle: detailPage.heroSubTitle 
  }
  const overviewContent = { 
    title: detailPage.overview.title, 
    subTitle: detailPage.overview.subTitle, 
    description: detailPage.overview.description 
  }

  return (
    <div className={"pt-16 md:pt-28"}>
      <ServiceHero content={heroContent}/>
      <Overview content={overviewContent}/>
      <SubServices subServices={detailPage.subServices}/>
      <Benefit serviceBenefits={detailPage.serviceBenefits}/>
      <ServiceProcess serviceProccess={detailPage.serviceProccess} />
      <TechStack />
      <MasonryTestimonials />
      <Faqs />
      <Cta />
    </div>
  );
};

export default Page;