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
import BreadcrumbNav from "@/app/components/BreadcrumbNav";
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

  const baseUrl = "https://www.solvorrtech.com";
  const serviceUrl = `${baseUrl}/${service.slug}`;

  // Generate keywords from service content
  const keywords = [
    service.title,
    ...service.detailPage.subServices.map((sub) => sub.title),
    "Solvorr Tech",
    "Business Solutions",
    "Web Development",
    "Automation",
  ].join(", ");

  return {
    title: `${service.detailPage.heroTitle} | Solvorr Tech`,
    description: service.detailPage.overview.description[0],
    keywords,
    authors: [{ name: "Solvorr Tech" }],
    creator: "Solvorr Tech",
    publisher: "Solvorr Tech",
    alternates: {
      canonical: `/${service.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: serviceUrl,
      title: service.detailPage.heroTitle,
      description: service.detailPage.overview.description[0],
      siteName: "Solvorr Tech",
      images: [
        {
          url: service.imageUrl || "/overview.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.detailPage.heroTitle,
      description: service.detailPage.overview.description[0],
      images: [service.imageUrl || "/overview.png"],
      creator: "@solvorrtech",
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

  const baseUrl = "https://www.solvorrtech.com";
  const serviceUrl = `${baseUrl}/${service.slug}`;

  // JSON-LD Structured Data for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.text,
    provider: {
      "@type": "Organization",
      name: "Solvorr Tech",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    serviceType: service.title,
    offers: detailPage.starterOffer
      ? {
          "@type": "Offer",
          name: detailPage.starterOffer.title,
          description: detailPage.starterOffer.description,
          priceSpecification: {
            "@type": "PriceSpecification",
            price: detailPage.starterOffer.startingFrom.replace("$", ""),
            priceCurrency: "USD",
          },
        }
      : undefined,
  };

  // JSON-LD Structured Data for BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Solvorr Tech",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "A problem-solving tech company delivering custom software, automated systems, SEO-optimized websites, and end-to-end digital solutions for business growth",
    sameAs: [
      "https://twitter.com/solvorrtech",
      "https://linkedin.com/company/solvorrtech",
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <BreadcrumbNav
        items={[
          {
            label: service.title,
            href: `/${service.slug}`,
          },
        ]}
      />

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
