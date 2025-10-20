import React from 'react'
import { Search } from 'lucide-react'

const blogCategories = [
  "All",
  "Web Development",
  "Design & UX",
  "AI & Automation",
  "Digital Marketing & SEO",
  "Industry Insights"
];


const BlogHero = () => {
  return (
    <section>
      <div className='container'>
        <div className="content max-w-2xl">
        <h1 className="h1">Stay Ahead with Insights That Matter</h1>
        <p className='text-n-3 body-1'>Explore expert perspectives, trends, and strategies shaping the future of digital innovation, branding, and web development.</p>
        </div>
        <div className="input w-full h-12 flex relative mt-12 mb-6">
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <Search className='h-5 w-5 text-slate-400'/>
            </span>
            <input type="text" className='w-full h-full  focus:outline outline-purple-400 pl-10 border border-n-4/70 rounded-md bg-n-7' placeholder='Search Articles' />
        </div>
        <div className='flex items-center flex-wrap gap-4'>
            {blogCategories.map((category, index) => (
                <div key={index} className='border py-2 px-3.5 text-xs md:text-sm rounded-md bg-n-7 border-n-5/60'>
                    {category}
                </div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default BlogHero