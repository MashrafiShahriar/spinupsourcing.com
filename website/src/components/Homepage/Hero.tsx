'use client'

import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster="/video-poster.jpg" // Fallback image
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
        <source src="/supply-chain-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Video overlay */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
    </div>
  
    {/* Content Overlay */}
    <div className="relative z-10 bg-black/60 text-white p-8 rounded-none backdrop-blur-sm max-w-4xl mx-4 transition-all hover:bg-black/70">
      <div className="text-center space-y-6">
        <h2 className="text-xl md:text-5xl font-bold mb-4 leading-tight">
          Connecting Global Supply Chains
          <span className="block mt-4 text-base md:text-3xl font-light">Across Continents & Markets</span>
        </h2>
        <p className="text-sm md:text-xl text-gray-200 max-w-2xl mx-auto">
          Pioneering digital transformation and sustainable solutions in global sourcing, 
          logistics, and supply chain management.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            className="text-zinc-950 hover:bg-blue-700 bg-white px-8 py-4 text-lg 
            rounded-none transform hover:scale-105 transition-all duration-300"
          >
            Explore Solutions
          </Button>
      
        </div>
      </div>
    </div>
  
    {/* Scrolling indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <ChevronDownIcon className="h-8 w-8 text-white" />
    </div>
  </section>
  )
}
