import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, Check } from 'lucide-react';
import Link from "next/link";
import blogs from "@/lib/data.json"


export async function generateStaticParams() {
  return blogs.map((blog) => ({
    postSlug: blog.slug.toLowerCase()
  }))
}
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
export default async function BlogPostPage({ params }) {
    const { postSlug } = await params
    const blog = blogs.find((b) => b.slug.toLowerCase() === postSlug);
    console.log(blog.category)
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
        </div>
    );
}