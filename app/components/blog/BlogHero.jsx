"use client"

import blogData from "@/lib/data.json"
import { Search } from 'lucide-react'
import useSearchStore from "@/store/useSearchStore";
import useCategoryFilter from "@/store/useCategoryFilter";
import { BlurIn, FadeIn } from "../animations";

const BlogHero = () => {
    const { searchTerm, setSearchTerm } = useSearchStore()
    const { categories, setCategories, selectedCategory, setSelectedCategory } = useCategoryFilter()

    const handleSearch = (e) => {
        let searchValue = e.target.value
        setSearchTerm(searchValue)
    }

    const handleFilter = (cat) => {
        if (cat === "All") {
            cat = ""
        }
        setSelectedCategory(cat)
    }

    if (categories.length === 0) {
        const filterCategory = blogData.reduce((acc, blog) => {
            if (!acc.includes(blog.category)) {
                acc.push(blog.category)
            }
            return acc
        }, ["All"])
        setCategories(filterCategory)
    }

    return (
        <section className="relative overflow-hidden pt-20 pb-12">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animation-delay-2000 animate-pulse" />
            </div>

            <div className='container relative z-10'>
                <div className="content max-w-3xl">
                    <BlurIn>
                        <h1 className="h1 mb-6">Stay Ahead with <span className="text-gradient">Insights</span> That Matter</h1>
                    </BlurIn>
                    <FadeIn delay={0.2}>
                        <p className='text-n-3 dark:text-n-4 body-1 mb-10'>
                            Explore expert perspectives, trends, and strategies shaping the future of digital innovation, branding, and web development.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                    <div className="relative max-w-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-r from-color-1/20 to-color-2/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                        <div className="input w-full h-14 flex relative mb-8">
                            <span className='absolute inset-y-0 left-4 flex items-center'>
                                <Search className='h-5 w-5 text-n-4 group-focus-within:text-color-1 transition-colors'/>
                            </span>
                            <input 
                                onChange={handleSearch} 
                                value={searchTerm} 
                                type="text" 
                                className='w-full h-full bg-white/50 dark:bg-n-8/50 backdrop-blur-md border border-n-4/20 rounded-2xl pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-color-1/20 focus:border-color-1 transition-all placeholder:text-n-4 text-n-1 dark:text-n-2 shadow-sm' 
                                placeholder='Search articles by title or keyword...' 
                            />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className='flex items-center flex-wrap gap-3'>
                        <span className="text-xs font-bold tracking-widest text-n-4/60 uppercase mr-2">Filters:</span>
                        {categories.map((category, index) => (
                            <button 
                                onClick={() => handleFilter(category)} 
                                key={index} 
                                className={`
                                    py-2 px-5 text-sm font-medium rounded-full transition-all duration-300 border
                                    ${(selectedCategory === category || (selectedCategory === "" && category === "All")) 
                                        ? "bg-color-1 text-white border-color-1 shadow-lg shadow-color-1/20" 
                                        : "bg-white/50 dark:bg-n-8/50 backdrop-blur-md border-n-4/20 text-n-3 dark:text-n-4 hover:border-color-1 hover:text-color-1"
                                    }
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default BlogHero