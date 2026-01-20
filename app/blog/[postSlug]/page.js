"use client"
import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, Check, ChevronLeft } from 'lucide-react';
import Link from "next/link";
import blogs from "@/lib/data.json"
import { FadeIn, BlurIn, StaggerContainer, StaggerItem } from "@/app/components/animations";

// Action Button Component
function ActionButton({ icon, label }) {
    return (
        <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-white/50 dark:bg-n-8/50 backdrop-blur-md border border-n-4/20 text-n-3 dark:text-n-4 hover:border-color-1 hover:text-color-1 transition-all shadow-sm group">
            {icon}
            {label && <span className="text-xs font-bold uppercase tracking-wider">{label}</span>}
        </button>
    );
}

// Category Badge Component
function CategoryBadge({ category }) {
    return (
        <span className="inline-block px-4 py-1.5 rounded-full bg-color-1/10 text-color-1 text-xs font-bold uppercase tracking-widest border border-color-1/20">
            {category}
        </span>
    );
}

// Meta Info Component
function MetaInfo({ publishDate, readTime, views }) {
    return (
        <div className="flex flex-wrap gap-6 text-n-4 text-sm font-medium">
            <div className="flex items-center gap-2">
                <Calendar size={16} className="text-color-1" />
                <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock size={16} className="text-color-1" />
                <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-2">
                <Eye size={16} className="text-color-1" />
                <span>{views} views</span>
            </div>
        </div>
    );
}

// Author Info Component
function AuthorInfo({ author }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-color-1 to-color-2 flex items-center justify-center font-bold text-lg text-white ring-4 ring-white dark:ring-n-8 shadow-lg">
                {author.avatar}
            </div>
            <div>
                <div className="font-bold text-n-1 dark:text-n-2 leading-tight">{author.name}</div>
                <div className="text-xs text-n-4 font-medium">{author.role}</div>
            </div>
        </div>
    );
}

// Article Content Component
function ArticleContent({ content }) {
    return (
        <article className="prose prose-lg dark:prose-invert max-w-none">
            {content.map((section, index) => {
                switch (section.type) {
                    case 'paragraph':
                        return <p key={index} className="text-n-3 dark:text-n-4 leading-relaxed mb-6 text-lg">{section.text}</p>;
                    case 'heading':
                        return <h2 key={index} className="h2 mt-12 mb-6 text-n-1 dark:text-n-2">{section.text}</h2>;
                    case 'quote':
                        return (
                            <blockquote key={index} className="relative py-8 px-10 my-12 border-l-4 border-color-1 bg-color-1/5 rounded-r-3xl italic">
                                <p className="text-xl font-medium text-n-2 dark:text-n-3 leading-relaxed">
                                    "{section.text}"
                                </p>
                            </blockquote>
                        );
                    case 'list':
                        return (
                            <ul key={index} className="space-y-4 my-8">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-n-3 dark:text-n-4">
                                        <span className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-color-1/10 flex items-center justify-center">
                                            <Check size={12} className="text-color-1" />
                                        </span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    case 'numbered-list':
                        return (
                            <ol key={index} className="space-y-4 my-8">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-n-3 dark:text-n-4">
                                        <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-color-1 text-white flex items-center justify-center text-xs font-bold">
                                            {i + 1}
                                        </span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ol>
                        );
                    default:
                        return null;
                }
            })}
        </article>
    );
}

// Author Card Component
function AuthorCard({ author }) {
    return (
        <div className="mt-20 p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-n-8/50 backdrop-blur-md border border-n-4/20 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-color-1 to-color-2 flex items-center justify-center font-bold text-3xl text-white flex-shrink-0 ring-4 ring-white dark:ring-n-8 shadow-xl">
                {author.avatar}
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-n-1 dark:text-n-2">{author.name}</h3>
                <p className="text-color-1 font-semibold mb-4 text-sm uppercase tracking-wider">{author.role}</p>
                <p className="text-n-3 dark:text-n-4 leading-relaxed">{author.bio}</p>
            </div>
        </div>
    );
}

// Main Blog Post Page Component
export default function BlogPostPage({ params }) {
    const ReactParams = React.use(params)
    const { postSlug } = ReactParams
    const blog = blogs.find((b) => b.slug.toLowerCase() === postSlug);

    if (!blog) return <div className="min-h-screen flex items-center justify-center h3">Post not found</div>;

    return (
        <div className="relative min-h-screen bg-white dark:bg-n-8 pt-32 pb-20 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
            </div>

            <div className="container relative z-10">
                {/* Navigation & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                    <Link href="/blog">
                        <button className="group flex items-center gap-2 text-n-4 hover:text-color-1 transition-colors font-semibold">
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </button>
                    </Link>
                    <div className="flex gap-3">
                        <ActionButton icon={<Share2 size={18} />} />
                        <ActionButton icon={<Bookmark size={18} />} />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <FadeIn>
                            <div className="mb-6">
                                <CategoryBadge category={blog.category} />
                            </div>
                            <BlurIn>
                                <h1 className="h1 mb-6 text-n-1 dark:text-n-2 leading-[1.15]">{blog.title}</h1>
                            </BlurIn>
                            <p className="text-xl text-n-3 dark:text-n-4 leading-relaxed mb-10">
                                {blog.subtitle}
                            </p>
                            
                            <div className="flex flex-wrap gap-8 items-center py-8 border-y border-n-4/10">
                                <AuthorInfo author={blog.author} />
                                <div className="h-10 w-px bg-n-4/10 hidden md:block" />
                                <MetaInfo
                                    publishDate={blog.publishDate}
                                    readTime={blog.readTime}
                                    views={blog.views}
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Featured Image */}
                    <FadeIn delay={0.2}>
                        <div className="mb-16 rounded-[2.5rem] overflow-hidden border border-n-4/10 shadow-2xl relative group">
                            <img 
                                src={blog.featuredImage} 
                                alt={blog.title} 
                                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-n-9/20 to-transparent pointer-events-none" />
                        </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn delay={0.4}>
                        <div className="px-0 sm:px-4 md:px-8">
                            <ArticleContent content={blog.content} />

                            {/* Tags */}
                            <div className="mt-16 pt-8 border-t border-n-4/10">
                                <div className="flex flex-wrap gap-3">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-5 py-2 rounded-full bg-white dark:bg-n-8 border border-n-4/20 text-n-4 text-sm font-medium hover:border-color-1 hover:text-color-1 transition-all cursor-pointer shadow-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <AuthorCard author={blog.author} />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}