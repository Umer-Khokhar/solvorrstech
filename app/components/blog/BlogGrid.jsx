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
                                    <div className="relative h-full flex flex-col bg-white/50 dark:bg-n-8/50 backdrop-blur-md border border-n-4/20 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-color-1/30 transition-all duration-500 group-hover:-translate-y-1">
                                        
                                        {/* Image wrapper with shine effect */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={data.featuredImage}
                                                alt={data.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-n-9/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            {/* Shine effect overlay */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out" />
                                            
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-n-9/90 backdrop-blur-md text-color-1 rounded-full border border-color-1/10 shadow-sm">
                                                    {data.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content section */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 mb-4 text-xs font-medium text-n-4">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={14} className="text-color-1" />
                                                    {data.publishDate}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={14} className="text-color-1" />
                                                    {data.readTime}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 text-n-1 dark:text-n-2 group-hover:text-color-1 transition-colors leading-snug">
                                                {data.title}
                                            </h3>

                                            <p className="text-n-3 dark:text-n-4 text-sm leading-relaxed mb-6 line-clamp-2">
                                                {data.subtitle}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-n-4/10 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-color-1 to-color-2 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white dark:ring-n-8">
                                                        {data.author.avatar}
                                                    </div>
                                                    <span className="text-xs font-semibold text-n-2 dark:text-n-3">{data.author.name}</span>
                                                </div>
                                                
                                                <div className="flex items-center gap-1 text-xs font-bold text-color-1 group-hover:translate-x-1 transition-transform">
                                                    Read More <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </div>
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