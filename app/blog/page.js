import React from 'react'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from "@/app/components/blog/BlogGrid";

const page = () => {
  return (
    <div className={"pt-28 md:pt-40"}>
        <BlogHero />
        <BlogGrid />
    </div>
  )
}

export default page