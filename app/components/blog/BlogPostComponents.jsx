import React from "react";
import { Calendar, Clock, Eye } from "lucide-react";

// Action Button Component
export function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-white/50 dark:bg-n-8/50 backdrop-blur-md border border-n-4/20 text-n-3 dark:text-n-4 hover:border-color-1 hover:text-color-1 transition-all shadow-sm group">
      {icon}
      {label && (
        <span className="text-xs font-bold uppercase tracking-wider">
          {label}
        </span>
      )}
    </button>
  );
}

// Category Badge Component
export function CategoryBadge({ category }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full bg-color-1/10 text-color-1 text-xs font-bold uppercase tracking-widest border border-color-1/20">
      {category}
    </span>
  );
}

// Meta Info Component
export function MetaInfo({ publishDate, readTime, views }) {
  return (
    <div className="flex flex-wrap gap-6 text-n-4 text-sm font-medium">
      {publishDate && (
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-color-1" />
          <span>{publishDate}</span>
        </div>
      )}
      {readTime && (
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-color-1" />
          <span>{readTime}</span>
        </div>
      )}
      {views !== undefined && (
        <div className="flex items-center gap-2">
          <Eye size={16} className="text-color-1" />
          <span>{views} views</span>
        </div>
      )}
    </div>
  );
}

// Author Info Component
export function AuthorInfo({ author }) {
  if (!author) return null;
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-color-1 to-color-2 flex items-center justify-center font-bold text-lg text-white ring-4 ring-white dark:ring-n-8 shadow-lg">
        {author.avatar || "?"}
      </div>
      <div>
        <div className="font-bold text-n-1 dark:text-n-2 leading-tight">
          {author.name || "Anonymous"}
        </div>
        <div className="text-xs text-n-4 font-medium">
          {author.role || "Author"}
        </div>
      </div>
    </div>
  );
}

// Author Card Component
export function AuthorCard({ author }) {
  if (!author) return null;
  return (
    <div className="mt-20 p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-n-8/50 backdrop-blur-md border border-n-4/20 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-color-1 to-color-2 flex items-center justify-center font-bold text-3xl text-white flex-shrink-0 ring-4 ring-white dark:ring-n-8 shadow-xl">
        {author.avatar || "S"}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2 text-n-1 dark:text-n-2">
          {author.name || "Solvorr Team"}
        </h3>
        <p className="text-color-1 font-semibold mb-4 text-sm uppercase tracking-wider">
          {author.role || "Innovators"}
        </p>
        <p className="text-n-3 dark:text-n-4 leading-relaxed">
          {author.bio ||
            "Expert insights on business automation and digital systems."}
        </p>
      </div>
    </div>
  );
}
