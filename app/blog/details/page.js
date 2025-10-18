"use client"
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Twitter, Linkedin, Facebook, Link2, Check } from 'lucide-react';
import Link from "next/link";

const BlogPostPage = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const relatedPosts = [
        {
            id: 1,
            title: 'Understanding Kubernetes Architecture',
            category: 'Cloud',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80'
        },
        {
            id: 2,
            title: 'Docker Best Practices for Production',
            category: 'DevOps',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80'
        },
        {
            id: 3,
            title: 'Service Mesh: A Comprehensive Guide',
            category: 'Cloud',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80'
        }
    ];

    return (
        <div className="py-28 lg:py-32" style={{ backgroundColor: '#030718', color: '#F8FAFC' }}>
            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Back Button */}
                <Link href={"/blog"} className={"cursor-pointer"}>
                <button
                    className="flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-white"
                    style={{ color: '#94A3B8' }}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </button>
                </Link>

                {/* Article Header */}
                <article>
                    <div className="mb-6">
            <span
                className="inline-block px-3 py-1 rounded-md text-xs font-semibold mb-4"
                style={{
                    backgroundColor: '#0F1629',
                    color: '#06B6D4'
                }}
            >
              Cloud Computing
            </span>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Building Scalable Microservices with Kubernetes
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-sm mb-8" style={{ color: '#94A3B8' }}>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Sarah Johnson</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>October 15, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                        </div>

                        {/* Social Actions */}
                        <div className="flex items-center gap-4 pb-8 mb-8" style={{ borderBottom: '1px solid #1E293B' }}>
                            <button
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                                style={{
                                    backgroundColor: isBookmarked ? '#3B82F6' : '#0A0F1E',
                                    border: `1px solid ${isBookmarked ? '#3B82F6' : '#1E293B'}`,
                                    color: isBookmarked ? '#F8FAFC' : '#CBD5E1'
                                }}
                            >
                                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                                {isBookmarked ? 'Saved' : 'Save'}
                            </button>

                            <div className="flex items-center gap-2">
                                <button
                                    className="p-2 rounded-lg transition-colors"
                                    style={{ backgroundColor: '#0A0F1E', border: '1px solid #1E293B' }}
                                    title="Share on Twitter"
                                >
                                    <Twitter className="w-4 h-4" style={{ color: '#CBD5E1' }} />
                                </button>
                                <button
                                    className="p-2 rounded-lg transition-colors"
                                    style={{ backgroundColor: '#0A0F1E', border: '1px solid #1E293B' }}
                                    title="Share on LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" style={{ color: '#CBD5E1' }} />
                                </button>
                                <button
                                    className="p-2 rounded-lg transition-colors"
                                    style={{ backgroundColor: '#0A0F1E', border: '1px solid #1E293B' }}
                                    title="Share on Facebook"
                                >
                                    <Facebook className="w-4 h-4" style={{ color: '#CBD5E1' }} />
                                </button>
                                <button
                                    onClick={handleCopyLink}
                                    className="p-2 rounded-lg transition-colors relative"
                                    style={{ backgroundColor: '#0A0F1E', border: '1px solid #1E293B' }}
                                    title="Copy link"
                                >
                                    {copied ? (
                                        <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                                    ) : (
                                        <Link2 className="w-4 h-4" style={{ color: '#CBD5E1' }} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-12 rounded-xl overflow-hidden" style={{ backgroundColor: '#0F1629' }}>
                        <img
                            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80"
                            alt="Kubernetes Architecture"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            In today's rapidly evolving digital landscape, building scalable and resilient microservices has become essential for modern software architecture. Kubernetes has emerged as the de facto standard for orchestrating containerized applications, providing powerful tools for deployment, scaling, and management.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Understanding Microservices Architecture</h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            Microservices architecture breaks down applications into smaller, independent services that can be developed, deployed, and scaled independently. This approach offers numerous benefits including improved scalability, easier maintenance, and faster deployment cycles.
                        </p>

                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            Each microservice focuses on a specific business capability and communicates with other services through well-defined APIs. This modularity allows teams to work independently and choose the best technology stack for each service.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Why Kubernetes?</h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            Kubernetes provides a robust platform for managing containerized workloads and services. It automates deployment, scaling, and management of containerized applications, making it ideal for microservices architectures.
                        </p>

                        <div className="p-6 rounded-xl my-8" style={{ backgroundColor: '#0A0F1E', border: '1px solid #1E293B' }}>
                            <h3 className="text-lg font-semibold mb-3" style={{ color: '#3B82F6' }}>Key Benefits of Kubernetes</h3>
                            <ul className="space-y-2 text-sm" style={{ color: '#CBD5E1' }}>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Automatic scaling based on traffic and resource utilization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Self-healing capabilities with automatic restarts and replacements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Declarative configuration and version control</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Rolling updates and rollbacks with zero downtime</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Core Kubernetes Concepts</h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            To effectively build microservices with Kubernetes, you need to understand several core concepts:
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#8B5CF6' }}>Pods</h3>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            Pods are the smallest deployable units in Kubernetes. A pod represents a single instance of a running process and can contain one or more containers. Containers within a pod share the same network namespace and can communicate via localhost.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#8B5CF6' }}>Services</h3>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            Services provide a stable endpoint for accessing a set of pods. They enable load balancing and service discovery, making it easy for microservices to communicate with each other regardless of where they're running in the cluster.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#8B5CF6' }}>Deployments</h3>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            Deployments manage the desired state of your application. They handle rolling updates, rollbacks, and scaling operations, ensuring your application runs smoothly with minimal downtime.
                        </p>

                        <div className="p-6 rounded-xl my-8" style={{ backgroundColor: '#0F1629', border: '1px solid #334155' }}>
              <pre className="text-sm overflow-x-auto" style={{ color: '#CBD5E1' }}>
                <code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: microservice-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: microservice
  template:
    metadata:
      labels:
        app: microservice
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080`}</code>
              </pre>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Best Practices</h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            When building microservices with Kubernetes, following best practices ensures reliability, security, and maintainability:
                        </p>

                        <ol className="space-y-4 mb-8" style={{ color: '#CBD5E1' }}>
                            <li className="flex gap-3">
                                <span className="font-semibold" style={{ color: '#3B82F6' }}>1.</span>
                                <div>
                                    <strong>Implement Health Checks:</strong> Use liveness and readiness probes to ensure Kubernetes can monitor and manage your services effectively.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold" style={{ color: '#3B82F6' }}>2.</span>
                                <div>
                                    <strong>Resource Limits:</strong> Always define resource requests and limits to prevent services from consuming excessive resources.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold" style={{ color: '#3B82F6' }}>3.</span>
                                <div>
                                    <strong>Use ConfigMaps and Secrets:</strong> Externalize configuration and sensitive data to make your applications more portable and secure.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold" style={{ color: '#3B82F6' }}>4.</span>
                                <div>
                                    <strong>Implement Logging and Monitoring:</strong> Use centralized logging and monitoring solutions to gain visibility into your microservices.
                                </div>
                            </li>
                        </ol>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            Kubernetes provides a powerful platform for building and managing scalable microservices. By understanding its core concepts and following best practices, you can create robust, resilient applications that can handle the demands of modern software development.
                        </p>

                        <p className="leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
                            As you continue your Kubernetes journey, remember that the key to success lies in starting small, iterating quickly, and continuously learning from your deployments. The ecosystem is vast and constantly evolving, offering new tools and patterns to improve your microservices architecture.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: '1px solid #1E293B' }}>
                        {['Kubernetes', 'Microservices', 'Docker', 'DevOps', 'Cloud Native'].map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-md text-xs font-medium"
                                style={{
                                    backgroundColor: '#0A0F1E',
                                    border: '1px solid #1E293B',
                                    color: '#94A3B8'
                                }}
                            >
                #{tag}
              </span>
                        ))}
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 p-6 rounded-xl" style={{ backgroundColor: '#0A0F1E', border: '1px solid #1E293B' }}>
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}>
                                <User className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Sarah Johnson</h3>
                                <p className="text-sm mb-3" style={{ color: '#94A3B8' }}>Senior Cloud Architect</p>
                                <p className="text-sm leading-relaxed" style={{ color: '#CBD5E1' }}>
                                    Sarah is a cloud architecture expert with over 10 years of experience in building scalable distributed systems. She specializes in Kubernetes, microservices, and cloud-native technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map(post => (
                            <article
                                key={post.id}
                                className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                                style={{
                                    backgroundColor: '#0A0F1E',
                                    border: '1px solid #1E293B'
                                }}
                            >
                                <div className="h-40 overflow-hidden" style={{ backgroundColor: '#0F1629' }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-3 text-xs" style={{ color: '#94A3B8' }}>
                    <span
                        className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0F1629', color: '#8B5CF6' }}
                    >
                      {post.category}
                    </span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="font-semibold text-sm leading-tight">{post.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BlogPostPage;