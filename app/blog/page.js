"use client"
import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowUpRight, Tag, TrendingUp, User } from 'lucide-react';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'AI & ML', 'Web Development', 'Cloud', 'DevOps', 'Security'];

    const blogPosts = [
        {
            id: 1,
            title: 'Building Scalable Microservices with Kubernetes',
            excerpt: 'Discover how web solutions are reshaping the business landscape.',
            category: 'Cloud',
            date: 'Oct 15, 2024',
            readTime: '8 min read',
            author: 'Sarah Johnson',
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
            featured: true
        },
        {
            id: 2,
            title: 'The Future of AI: GPT-5 and Beyond',
            excerpt: 'Learn how cutting-edge AI technology is transforming modern development practices.',
            category: 'AI & ML',
            date: 'Oct 12, 2024',
            readTime: '6 min read',
            author: 'Michael Chen',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            featured: true
        },
        {
            id: 3,
            title: "Next.js 15: What's New and Why It Matters",
            excerpt: 'Discover how web solutions are reshaping the business landscape.',
            category: 'Web Development',
            date: 'Oct 10, 2024',
            readTime: '5 min read',
            author: 'Emily Rodriguez',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            featured: false
        },
        {
            id: 4,
            title: 'Zero Trust Security: Implementation Guide',
            excerpt: 'A comprehensive approach to modern security architecture and best practices.',
            category: 'Security',
            date: 'Oct 8, 2024',
            readTime: '10 min read',
            author: 'David Park',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
            featured: false
        },
        {
            id: 5,
            title: 'CI/CD Pipeline Best Practices for 2025',
            excerpt: 'Optimize your deployment workflow with proven continuous delivery strategies.',
            category: 'DevOps',
            date: 'Oct 5, 2024',
            readTime: '7 min read',
            author: 'Jessica Taylor',
            image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
            featured: false
        },
        {
            id: 6,
            title: 'Serverless Architecture: Pros and Cons',
            excerpt: 'Understanding when serverless computing makes sense for your infrastructure.',
            category: 'Cloud',
            date: 'Oct 3, 2024',
            readTime: '6 min read',
            author: 'Robert Martinez',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
            featured: false
        },
        {
            id: 7,
            title: 'Optimizing Business Decisions with Advanced Data Analytics',
            excerpt: 'Discover how web solutions are reshaping the business landscape.',
            category: 'AI & ML',
            date: 'Mar 09, 2024',
            readTime: '5 min read',
            author: 'William Ashford',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            featured: false
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="py-28 md:py-32" style={{ backgroundColor: '#030718', color: '#F8FAFC' }}>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <section className="mb-16">
                    <h2 className="text-5xl font-extrabold mb-4 leading-tight">
                        Insights & Innovation
                    </h2>
                    <p className="text-xl max-w-2xl" style={{ color: '#94A3B8' }}>
                        Exploring the cutting edge of technology, development, and digital transformation
                    </p>
                </section>

                {/* Search and Filter */}
                <section className="mb-12">
                    <div className="flex gap-4 flex-wrap items-center mb-8">
                        <div className="relative flex-1 min-w-[250px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#64748B' }} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500"
                                style={{
                                    backgroundColor: '#0A0F1E',
                                    border: '1px solid #1E293B',
                                    color: '#F8FAFC'
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                    selectedCategory === category
                                        ? 'text-white'
                                        : 'hover:bg-opacity-80'
                                }`}
                                style={{
                                    backgroundColor: selectedCategory === category ? '#3B82F6' : '#0A0F1E',
                                    border: `1px solid ${selectedCategory === category ? '#3B82F6' : '#1E293B'}`,
                                    color: selectedCategory === category ? '#F8FAFC' : '#CBD5E1'
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Blog Cards Grid */}
                <section>
                    <h3 className="text-2xl font-bold mb-6">
                        {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map(post => (
                            <article
                                key={post.id}
                                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                                style={{
                                    backgroundColor: '#0A0F1E',
                                    border: '1px solid #1E293B'
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 p-4 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full rounded-lg shadow-lg h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Author and Read Time */}
                                    <div className="flex items-center justify-between mb-4 text-xs" style={{ color: '#94A3B8' }}>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                        <span>• {post.readTime}</span>
                                    </div>

                                    {/* Title and Arrow */}
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <h4 className="text-lg font-semibold leading-tight flex-1">
                                            {post.title}
                                        </h4>
                                        <ArrowUpRight
                                            className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                            style={{ color: '#3B82F6' }}
                                        />
                                    </div>

                                    {/* Excerpt */}
                                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#CBD5E1' }}>
                                        {post.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between text-xs">
                    <span
                        className="px-3 py-1 rounded-md font-medium"
                        style={{
                            backgroundColor: '#0F1629',
                            color: '#8B5CF6'
                        }}
                    >
                      {post.category}
                    </span>
                                        <span style={{ color: '#64748B' }}>{post.date}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-16" style={{ color: '#94A3B8' }}>
                            <p className="text-lg mb-2">No articles found</p>
                            <p className="text-sm">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </section>
            </main>

            {/* Footer */}
            <footer className="mt-24" style={{ borderTop: '1px solid #1E293B', backgroundColor: '#0A0F1E' }}>
                <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm" style={{ color: '#64748B' }}>
                    <p>© 2025 Solvorr Tech. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default BlogPage;