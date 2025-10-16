import React from 'react'
import {AboutHero, OurStory} from '../components'
import CoreValuesSection from "@/app/components/About/CoreValues";
import TeamSection from "@/app/components/About/TeamSection";
import TestimonialGrid from "@/app/components/Testimonials";

const page = () => {
  return (
    <>
        <AboutHero />
        <OurStory />
        <CoreValuesSection />
        <TeamSection />
        <TestimonialGrid />
    </>
  )
}

export default page