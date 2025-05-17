import { NewspaperIcon, ChevronRightIcon, ClockIcon } from "lucide-react";
import Image from "next/image";

export default function News() {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Company Announces Breakthrough in Sustainable Technology",
      excerpt: "Our research team has developed a revolutionary approach to renewable energy storage solutions.",
      date: "May 15, 2024",
      category: "Innovation",
      image: "/images/news-1.jpg"
    },
    {
      id: 2,
      title: "Annual Sustainability Report Now Available",
      excerpt: "We're proud to share our progress toward environmental goals in our latest report.",
      date: "April 28, 2024",
      category: "Sustainability",
      image: "/images/news-2.jpg"
    },
    {
      id: 3,
      title: "Partnership with Global Environmental Organization",
      excerpt: "New collaboration will accelerate clean energy initiatives worldwide.",
      date: "March 10, 2024",
      category: "Partnerships",
      image: "/images/news-3.jpg"
    },
    {
      id: 4,
      title: "CEO Named Industry Leader of the Year",
      excerpt: "Recognized for visionary leadership in sustainable technology development.",
      date: "February 22, 2024",
      category: "Awards",
      image: "/images/news-4.jpg"
    },
    {
      id: 5,
      title: "New Facility Opens in Silicon Valley",
      excerpt: "State-of-the-art research center will focus on AI-driven sustainability solutions.",
      date: "January 18, 2024",
      category: "Expansion",
      image: "/images/news-5.jpg"
    },
    {
      id: 6,
      title: "Groundbreaking Study Published in Nature Journal",
      excerpt: "Our scientists' findings could transform industrial waste management practices.",
      date: "December 5, 2023",
      category: "Research",
      image: "/images/news-6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* News Page Header */}
      <section className="bg-white px-6 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <NewspaperIcon className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">News & Updates</h1>
              </div>
              <p className="text-gray-600 max-w-2xl">
                Stay informed about our latest achievements, partnerships, and innovations in sustainable technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium">
                All News
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                Innovations
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                Sustainability
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                Partnerships
              </button>
            </div>
          </div>

          {/* Featured News Item */}
          <div className="mb-16 group">
            <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden">
              <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden">
                <Image 
                  src="/images/news-featured.jpg" 
                  alt="Featured News" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                  Featured Story
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Revolutionizing Clean Energy: Our $50M Investment in Future Technologies
                </h2>
                <p className="text-gray-600 mb-6">
                  We're proud to announce our largest-ever investment in clean energy R&D, with five new projects launching this quarter that could transform how we power our world.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  <span>May 10, 2024</span>
                </div>
                <button className="flex items-center text-emerald-600 font-medium group">
                  Read full story
                  <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium">
                      {item.category}
                    </span>
                    <time className="text-gray-400 text-xs flex items-center">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {item.date}
                    </time>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <button className="flex items-center text-sm text-emerald-600 font-medium group">
                    Read more
                    <ChevronRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-emerald-500 text-white rounded-lg font-medium">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}