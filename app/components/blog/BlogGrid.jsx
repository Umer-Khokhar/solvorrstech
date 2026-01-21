"use client"
import React from 'react';
import blogData from "@/lib/data.json"
import Link from "next/link";
import useSearchStore from "@/store/useSearchStore";
import useCategoryFilter from "@/store/useCategoryFilter";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations";
import { Clock, Calendar, ArrowRight } from "lucide-react";

const BlogGrid = () => {
    const { searchTerm } = useSearchStore();
    const { selectedCategory } = useCategoryFilter();
    const filteredData = blogData.filter(blog => {
        let searchFilter = blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        let categoriesFilter = blog.category.toLowerCase().includes(selectedCategory.toLowerCase())
        return searchFilter && categoriesFilter
    })

    return (
        <section className={"py-20 relative"}>
            <div className={"container"}>
                <div className="flex items-end justify-between mb-12">
                    <FadeIn>
                        <div>
                            <h2 className="h2 mb-4">Latest <span className="text-gradient">Articles</span></h2>
                            <p className="text-n-3 dark:text-n-4 max-w-xl">
                                Stay informed with the latest news, tutorials, and insights from our team of experts.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {filteredData.length > 0 ? (
                    <StaggerContainer
                        className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}
                    >
                        {filteredData.map((data) => (
                            <StaggerItem key={data.id}>
                                <Link href={`/blog/${data.slug.toLowerCase()}`} className="group block h-full">
                                    <div className="relative h-full flex flex-col bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:border-color-1/50">
                                        
                                        {/* Image Section */}
                                        <div className="relative h-72 overflow-hidden m-3 rounded-[2rem]">
                                            <img
                                                src={data.featuredImage}
                                                alt={data.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                            
                                            {/* Category Tag */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 shadow-xl">
                                                    {data.category}
                                                </span>
                                            </div>

                                            {/* Date Overlay */}
                                            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-[0.7rem] font-medium">
                                                <Calendar size={12} className="text-color-1" />
                                                {data.publishDate}
                                            </div>
                                        </div>

                                        {/* Content section */}
                                        <div className="px-8 pb-8 pt-4 flex flex-col flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex items-center gap-1 text-[0.65rem] font-bold text-n-4 tracking-tight uppercase">
                                                    <Clock size={12} className="text-color-1" />
                                                    {data.readTime}
                                                </div>
                                            </div>

                                            <h3 className="h5 mb-4 text-n-1 dark:text-n-1 group-hover:text-color-1 transition-colors leading-[1.3] font-semibold">
                                                {data.title}
                                            </h3>

                                            <p className="body-2 text-n-3 dark:text-n-4 mb-8 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                                {data.subtitle}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-9 h-9">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-color-1 to-color-2 rounded-full blur-[2px] opacity-50"></div>
                                                        <div className="relative w-full h-full rounded-full bg-n-8 flex items-center justify-center text-white font-bold text-[0.6rem] border border-white/10 overflow-hidden">
                                                            <span className="relative z-10">{data.author.avatar}</span>
                                                            <div className="absolute inset-0 bg-gradient-to-tr from-color-1/20 to-transparent"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.7rem] font-bold text-n-1 dark:text-n-1 leading-none">{data.author.name}</span>
                                                        <span className="text-[0.6rem] text-n-4 font-medium uppercase tracking-widest mt-1">Author</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="w-10 h-10 rounded-full border border-n-4/20 flex items-center justify-center text-n-1 dark:text-n-2 group-hover:bg-color-1 group-hover:text-white group-hover:border-color-1 transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                                    <ArrowRight size={18} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Corner Accent */}
                                        <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-br from-transparent to-color-1/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                ) : (
                    <FadeIn>
                        <div className="text-center py-20 bg-white/30 dark:bg-n-8/30 backdrop-blur-sm border border-dashed border-n-4/20 rounded-3xl">
                            <p className="text-n-4 body-1">No articles found matching your search.</p>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    );
};

export default BlogGrid;