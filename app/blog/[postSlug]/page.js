import React from "react";
import { Share2, Bookmark, ChevronLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import blogs from "@/lib/data.json";
import { FadeIn, BlurIn } from "@/app/components/animations";
import {
  ActionButton,
  CategoryBadge,
  MetaInfo,
  AuthorInfo,
  AuthorCard,
} from "@/app/components/blog/BlogPostComponents";

// Main Blog Post Page Component
export default function BlogPostPage({ params }) {
  const ReactParams = React.use(params);
  const { postSlug } = ReactParams;
  const blog = blogs.find((b) => b.slug.toLowerCase() === postSlug);

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center h3">
        Post not found
      </div>
    );

  return (
    <div className="relative min-h-screen bg-white dark:bg-n-8 pt-32 pb-20 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <Link href="/blog">
            <button className="group flex items-center gap-2 text-n-4 hover:text-color-1 transition-colors font-semibold">
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
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
                <h1 className="h1 mb-6 text-n-1 dark:text-n-2 leading-[1.15]">
                  {blog.title}
                </h1>
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
              <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-n-1 dark:prose-headings:text-n-2 prose-p:text-n-3 dark:prose-p:text-n-4 prose-li:text-n-3 dark:prose-li:text-n-4">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
              </article>

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
