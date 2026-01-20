import React from 'react'
import {AboutHero, OurStory} from '../components'
import CoreValuesSection from "@/app/components/About/CoreValues";
import TeamSection from "@/app/components/About/TeamSection";
import TestimonialGrid from "@/app/components/Testimonials";
import WhyChooseUs from '../components/WhyChooseUs';

const page = () => {
  return (
    <>
        <AboutHero />
        <OurStory />
        <CoreValuesSection />
        <WhyChooseUs />
        <TeamSection />
        <TestimonialGrid />
    </>
  )
}

export default page