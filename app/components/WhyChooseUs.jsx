export default function WhyChooseUs() {
  const stats = [
    {
      number: "30+",
      label: "Happy Clients",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      number: "15+",
      label: "Your Growth Partner",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      number: "35+",
      label: "Happy Clients",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    {
      number: "18+",
      label: "Your Growth Partner",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="bg-n-8 text-n-1 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${stat.image})` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
              <div className="dark:bg-n-1/10 bg-n-8/10 p-3 backdrop-blur-2xl rounded-2xl">
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-white/80">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/50">
                  {stat.label}
                </div>
              </div>
              </div>

              {/* Heart Icon */}
              <div className="absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg 
                  className="w-5 h-5 text-red-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}