'use client'

import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0 z-0">
      <Image
      width={1920}
        height={1080}
      className="w-full h-full object-cover"
      alt="Windmill"
     src={"/assets/windmill.jpg"}
      >
    
      </Image>
      {/* Video overlay */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
    </div>
  
    {/* Content Overlay */}
    <div className="relative z-10 bg-transparent text-white p-8 rounded-none  max-w-4xl mx-4 transition-all hover:bg-black/70">
      <div className="text-leftß space-y-6">
        <h2 className="text-3xl md:text-3xl font-bold mb-4 leading-tight">
          <span className="block mt-4 text-xl md:text-2xl font-light">Our Strategy</span>
    
        Protecting our planet
        </h2>
    
      </div>
    </div>
  
    {/* Scrolling indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <ChevronDownIcon className="h-8 w-8 text-white" />
    </div>
  </section>
  )
}
