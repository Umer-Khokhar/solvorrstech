import React from 'react';
import ServiceHero from "@/app/components/servicePage/ServiceHero";
import Overview from "@/app/components/Overview";
import SubServices from "@/app/components/servicePage/SubServices";
import Benefit from "@/app/components/Benefit";
import ServiceProcess from "@/app/components/servicePage/ServiceProcess";
import TechStack from "@/app/components/servicePage/TechStack";
import MasonryTestimonials from "@/app/components/Testimonials";


const Page = () => {
    return (
        <div className={"pt-16 md:pt-28"}>
            <ServiceHero />
            <Overview />
            <SubServices />
            <Benefit />
            <ServiceProcess />
            <TechStack />
            <MasonryTestimonials />
        </div>
    );
};

export default Page;