import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "This product has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "Outstanding design and functionality. It's rare to find a tool that's both beautiful and practical.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "The customer support is exceptional. They went above and beyond to ensure our team was set up for success. We've seen incredible results in our campaign management and the analytics features are top-notch.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Freelance Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content: "I've tried dozens of similar tools, but this one stands out. The performance is lightning fast and the API documentation is comprehensive.",
    rating: 5
  },
  {
    name: "Jessica Williams",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    content: "Game changer for our workflow!",
    rating: 5
  },
  {
    name: "Alex Thompson",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content: "The ROI we've seen is incredible. Within just three months, we've streamlined our operations and reduced costs significantly. Highly recommend to any growing business.",
    rating: 5
  },
  {
    name: "Rachel Kim",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    content: "Perfect for our content team. The collaboration features make it easy to work together seamlessly.",
    rating: 5
  },
  {
    name: "James Mitchell",
    role: "CTO, DataFlow",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    content: "Robust, secure, and scalable. This is exactly what we needed for our enterprise solution.",
    rating: 5
  },
  {
    name: "James Mitchell",
    role: "CTO, DataFlow",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    content: "The customer support is exceptional. They went above and beyond to ensure our team was set up for success. We've seen incredible results in our campaign management and the analytics features are top-notch.",
    rating: 4
  }
];

export default function MasonryTestimonials() {
  return (
    <section className="py-20 px-4 bg-n-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2  font-bold mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-n-9/[0.22] border border-white/[0.06] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-n-2 mb-6 text-sm md:leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className='text-xs'>
                  <h4 className="font-semibold text-slate-500">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}