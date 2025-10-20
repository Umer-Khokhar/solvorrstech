import React from 'react';
import blogData from "@/lib/data.json"
import Link from "next/link";
const BlogGrid = () => {
    const slugify = (title) => title.toLowerCase().replace(/\s+/g, "-");

    return (
        <section className={"py-12"}>
            <div className={"container overflow-hidden"}>
                <h2 className="h2">Latest Articles</h2>
                <article className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"}>
                    {blogData.map((data) => (
                        <Link key={data.id} href={`/blog/${slugify(data.title)}`}>
                        <div
                            className="group break-inside-avoid max-w-sm relative transition-all duration-300 rounded-2xl shadow hover:shadow-lg overflow-hidden"
                        >
                            {/* Image section */}
                            <div className="relative">
                                <img
                                    src={data.featuredImage}
                                    alt="Blog thumbnail"
                                    className="w-full h-52 object-cover group-hover:scale-110 group-transition opacity-80"
                                />
                                {/* Date badges */}
                                <div className="absolute top-3 right-3 bg-n-6/30 backdrop-blur-2xl border border-n-4/20 text-slate-100 text-center rounded-md shadow px-2 py-2">
                                    <p className="text-xs font-semibold leading-tight">{data.publishDate}</p>
                                </div>
                                <div className="absolute top-3 left-3 bg-n-6/30 backdrop-blur-2xl border border-n-4/20 text-slate-100 text-center rounded-md shadow px-2 py-2">
                                    <p className="text-xs font-semibold leading-tight">{data.readTime}</p>
                                </div>
                            </div>

                            {/* 🔥 Background blur — sits behind the content section */}
                            <div className="absolute inset-0 top-[60%] flex items-center justify-center -z-10">
                                <div className="blur-3xl w-40 h-40 bg-blue-100/20 opacity-60"></div>
                            </div>

                            {/* Content section */}
                            <div className="-mt-5 border border-n-4/10 bg-n-7/10 backdrop-blur-xl min-h-[220px] rounded-2xl p-5 relative z-10">
                                {/* Author info */}
                                <div className="flex items-center gap-2 mb-3">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/68.jpg"
                                        alt="Author"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div className="text-sm text-n-3">
                                        <span className="font-medium">Jacquline Palmer</span>{" "}
                                        <span className="mx-1 text-color-3">|</span>
                                        <span>UI/UX Design</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                                    {data.title}
                                </h3>

                                {/* Description */}
                                <p className="text-n-4 text-sm leading-relaxed">{data.subtitle}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </article>
            </div>
        </section>
    );
};

export default BlogGrid;