import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, Check } from 'lucide-react';
import Link from "next/link";
import blogs from "@/lib/data.json"

const slugify = (title) => title.toLowerCase().replace(/\s+/g, "-");

// Blog data
const blogPost = {
    id: 1,
    title: "Building Scalable Web Applications with Modern JavaScript",
    subtitle: "A comprehensive guide to architecting robust web applications",
    author: {
        name: "Sarah Chen",
        avatar: "SC",
        role: "Senior Software Engineer",
        bio: "Passionate about building scalable systems and sharing knowledge"
    },
    publishDate: "March 15, 2024",
    readTime: "12 min read",
    views: "2.4k",
    category: "Web Development",
    tags: ["JavaScript", "React", "Architecture", "Best Practices"],
    featuredImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    content: [
        {
            type: "paragraph",
            text: "In today's fast-paced digital landscape, building scalable web applications has become more critical than ever. As user bases grow and feature requirements expand, the architecture decisions we make early on can significantly impact our ability to maintain and scale our applications."
        },
        {
            type: "heading",
            text: "Understanding Scalability"
        },
        {
            type: "paragraph",
            text: "Scalability isn't just about handling more users—it's about creating a system that can grow gracefully. This means considering performance, maintainability, and extensibility from the ground up."
        },
        {
            type: "list",
            title: "Core Scalability Principles:",
            items: [
                "Design for horizontal scaling from day one",
                "Implement efficient caching strategies at multiple levels",
                "Use asynchronous operations to prevent blocking",
                "Monitor and optimize database queries continuously"
            ]
        },
        {
            type: "heading",
            text: "Modern Architecture Patterns"
        },
        {
            type: "paragraph",
            text: "Component-based architecture has revolutionized how we build web applications. By breaking down our UI into reusable, isolated components, we create systems that are easier to test, maintain, and scale."
        },
        {
            type: "quote",
            text: "The best architecture is the one that allows your team to move fast while keeping technical debt manageable."
        },
        {
            type: "numbered-list",
            title: "Steps to Implement Component Architecture:",
            items: [
                "Identify reusable UI patterns in your design",
                "Create a component library with consistent naming",
                "Establish clear props interfaces and documentation",
                "Write unit tests for each component",
                "Implement Storybook or similar for component showcase"
            ]
        },
        {
            type: "heading",
            text: "State Management Best Practices"
        },
        {
            type: "paragraph",
            text: "State management is crucial for building predictable applications. Whether you choose Redux, MobX, Zustand, or React's built-in context, consistency is key."
        },
        {
            type: "list",
            title: "Key State Management Rules:",
            items: [
                "Keep state as close to where it's used as possible",
                "Avoid prop drilling beyond 2-3 levels",
                "Use context for global theme and auth state",
                "Consider atomic state management for complex UIs",
                "Always normalize nested data structures"
            ]
        }
    ]
};

const relatedPosts = [
    {
        id: 2,
        title: "Optimizing React Performance",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
        category: "Performance",
        readTime: "8 min",
        color: "#AC6AFF"
    },
    {
        id: 3,
        title: "TypeScript Best Practices",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        category: "TypeScript",
        readTime: "10 min",
        color: "#FFC876"
    },
    {
        id: 4,
        title: "Modern CSS Techniques",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop",
        category: "CSS",
        readTime: "6 min",
        color: "#FF776F"
    }
];

// Navigation Component
function Navigation() {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href={"/blog"}>
                    <button className="flex cursor-pointer items-center gap-2 text-slate-300 hover:text-slate-50 transition-colors">
                        <ArrowLeft size={18} />
                        <span className="text-sm">Back to Blog</span>
                    </button>
                    </Link>
                    <div className="flex gap-3">
                        <ActionButton icon={<Share2 size={18} />} />
                        <ActionButton icon={<Bookmark size={18} />} />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Action Button Component
function ActionButton({ icon }) {
    return (
        <button className="p-2 rounded-lg bg-[#0F1629] border border-[#1E293B] text-slate-300 hover:bg-[#1E293B] hover:border-[#334155] transition-all">
            {icon}
        </button>
    );
}

// Category Badge Component
function CategoryBadge({ category }) {
    return (
        <span className="inline-block px-4 py-2 rounded-full bg-purple-600 text-slate-50 text-sm font-semibold">
      {category}
    </span>
    );
}

// Article Header Component
function ArticleHeader({ title, subtitle }) {
    return (
        <div className="mb-8">
            <h1 className="text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-slate-50 to-slate-300 bg-clip-text text-transparent">
                {title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
}

// Meta Info Component
function MetaInfo({ publishDate, readTime, views }) {
    return (
        <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
            <MetaItem icon={<Calendar size={16} />} text={publishDate} />
            <MetaItem icon={<Clock size={16} />} text={readTime} />
            <MetaItem icon={<Eye size={16} />} text={views} />
        </div>
    );
}

function MetaItem({ icon, text }) {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <span>{text}</span>
        </div>
    );
}

// Author Info Component
function AuthorInfo({ author }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#AC6AFF] to-[#858DFF] flex items-center justify-center font-bold text-lg">
                {author.avatar}
            </div>
            <div>
                <div className="font-semibold text-slate-50">{author.name}</div>
                <div className="text-sm text-slate-500">{author.role}</div>
            </div>
        </div>
    );
}

// Featured Image Component
function FeaturedImage({ src, alt }) {
    return (
        <div className="mb-12 rounded-xl overflow-hidden border border-[#1E293B]">
            <img src={src} alt={alt} className="w-full h-auto" />
        </div>
    );
}

// Content Paragraph Component
function ContentParagraph({ text }) {
    return <p className="mb-6 text-lg leading-relaxed text-slate-300">{text}</p>;
}

// Content Heading Component
function ContentHeading({ text }) {
    return <h2 className="text-3xl font-bold text-slate-50 mt-12 mb-6">{text}</h2>;
}

// Quote Component
function ContentQuote({ text }) {
    return (
        <blockquote className="border-l-4 border-purple-600 pl-6 my-8 italic text-xl text-slate-400">
            {text}
        </blockquote>
    );
}

// Bullet List Component
function BulletList({ title, items }) {
    return (
        <div className="my-8">
            {title && <h3 className="text-xl font-semibold text-slate-50 mb-4">{title}</h3>}
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0F1629] border border-[#334155] flex items-center justify-center mt-0.5">
              <Check size={14} className="text-[#7ADB78]" />
            </span>
                        <span className="flex-1 leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Numbered List Component
function NumberedList({ title, items }) {
    return (
        <div className="my-8">
            {title && <h3 className="text-xl font-semibold text-slate-50 mb-4">{title}</h3>}
            <ol className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#AC6AFF] to-[#858DFF] flex items-center justify-center text-xs font-bold text-slate-50 mt-0.5">
              {index + 1}
            </span>
                        <span className="flex-1 leading-relaxed">{item}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

// Tags Component
function TagsList({ tags }) {
    return (
        <div className="mt-12 pt-8 border-t border-[#1E293B]">
            <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 rounded-lg bg-[#0F1629] border border-[#1E293B] text-slate-400 text-sm hover:bg-[#1E293B] hover:border-purple-600 hover:text-slate-50 transition-all cursor-pointer"
                    >
            #{tag}
          </span>
                ))}
            </div>
        </div>
    );
}

// Author Card Component
function AuthorCard({ author }) {
    return (
        <div className="mt-12 p-8 rounded-xl bg-[#0A0F1E] border border-[#1E293B]">
            <div className="flex gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#AC6AFF] to-[#858DFF] flex items-center justify-center font-bold text-3xl flex-shrink-0">
                    {author.avatar}
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-50">{author.name}</h3>
                    <p className="text-slate-500 mb-3">{author.role}</p>
                    <p className="text-slate-400 leading-relaxed">{author.bio}</p>
                </div>
            </div>
        </div>
    );
}

// Related Post Card Component
function RelatedPostCard({ post }) {
    return (
        <div className="bg-[#0A0F1E] rounded-xl overflow-hidden border border-[#1E293B] hover:border-[#334155] hover:-translate-y-1 transition-all cursor-pointer group">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-[#030718]"
                    style={{ backgroundColor: post.color }}
                >
                    {post.category}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-50 group-hover:text-purple-400 transition-colors">
                    {post.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock size={14} />
                    {post.readTime}
                </div>
            </div>
        </div>
    );
}

// Related Posts Section Component
function RelatedPosts({ posts }) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[#1E293B]">
            <h2 className="text-3xl font-bold mb-8 text-slate-50">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <RelatedPostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}

// Article Content Component
function ArticleContent({ content }) {
    return (
        <article className="text-lg leading-relaxed text-slate-300">
            {content.map((section, index) => {
                switch (section.type) {
                    case 'paragraph':
                        return <ContentParagraph key={index} text={section.text} />;
                    case 'heading':
                        return <ContentHeading key={index} text={section.text} />;
                    case 'quote':
                        return <ContentQuote key={index} text={section.text} />;
                    case 'list':
                        return <BulletList key={index} title={section.title} items={section.items} />;
                    case 'numbered-list':
                        return <NumberedList key={index} title={section.title} items={section.items} />;
                    default:
                        return null;
                }
            })}
        </article>
    );
}

// Main Blog Post Page Component
export default function BlogPostPage({ params }) {
    console.log(blogs)
     const { postSlug } = params
    const blog = blogs.find((b) => slugify(b.title) === postSlug);
    console.log(blog, "data")
    return (
        <div className="bg-[#030718] mt-28 lg:mt-32 text-slate-50">
            <Navigation />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-6">
                    <CategoryBadge category={blog.category} />
                </div>

                <ArticleHeader title={blog.title} subtitle={blog.subtitle} />

                <div className="flex flex-wrap gap-6 items-center pb-8 border-b border-[#1E293B] mb-8">
                    <AuthorInfo author={blog.author} />
                    <MetaInfo
                        publishDate={blog.publishDate}
                        readTime={blog.readTime}
                        views={blog.views}
                    />
                </div>

                <FeaturedImage src={blog.featuredImage} alt={blog.title} />

                <ArticleContent content={blog.content} />

                <TagsList tags={blog.tags} />

                <AuthorCard author={blog.author} />
            </main>

            <RelatedPosts posts={relatedPosts} />
        </div>
    );
}