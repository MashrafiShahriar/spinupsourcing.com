import { Globe2Icon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Media Gallery Page */}
      <section className="bg-white px-6 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
        {/* Background pattern - more subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50 z-0" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start relative z-10">
          {/* Section Title - More modern */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Globe2Icon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Media Gallery
              </h2>
            </div>
            
            <div className="border-t border-gray-200 w-24" />
            
            <p className="text-gray-600 leading-relaxed">
              Explore our collection of images showcasing our latest innovations, projects, and achievements.
            </p>
            
            <button className="flex items-center text-emerald-600 font-medium group">
              View all categories
              <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Media Content Blocks - Improved grid */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(5)].map((_, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <Image 
                      src={`/images/media-${index}.jpg`} 
                      alt={`Media ${index + 1}`} 
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Project {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load more button */}
            <div className="mt-12 flex justify-center">
              <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}