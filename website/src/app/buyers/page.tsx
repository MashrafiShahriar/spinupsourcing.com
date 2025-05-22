import AboutSection from "@/components/Homepage/About";
import HeroSection from "@/components/Homepage/Hero";
import InnovationSection from "@/components/Homepage/Innovation";
import StrategySection from "@/components/Homepage/Strategy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  ChevronDownIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon, Globe2Icon, CpuIcon, RocketIcon, LeafIcon } from "lucide-react"

export default function Suppliers() {
  return (
    <div className="min-h-screen bg-gray-50">
     {/* {Supplier Page} */}
        <section className="bg-neutral-50 border-t border-gray-200 px-6 sm:px-12 lg:px-32 py-28 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
            <div className="absolute w-[800px] h-[800px] -top-48 -right-48 bg-[radial-gradient(circle,#000_20%,transparent_20%)] bg-[length:20px_20px]" />
            </div>
    
            <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20 items-start relative z-10">
            {/* Section Title */}
            <div className="md:col-span-4">
                <div className="border-l-4 border-black pl-4 relative">
                <div className="absolute -left-[19px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Globe2Icon className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-[2.25rem] leading-tight font-semibold uppercase tracking-wider text-gray-900">
                    Buyers
                </h2>
                </div>
                <div className="mt-6 border-t border-gray-300 w-16" />
                <p className="mt-6 text-sm text-gray-600 leading-relaxed pr-4">
                Join us in our mission to transform the supply chain industry.
                </p>
            </div>
    
            {/* Supplier Content Blocks */}
            <div className="md:col-span-8 space-y-10">
                {/* Supplier logo grid here */}
                <div className="grid grid-cols-2 gap-4">
                {['matalan', 'home-bargains', 'morrisons', 'next', 'boohoo', 'tesco' , 'walmart', 'whsmith', 'bestandless'].map((_, index) => (
                    <div key={index} className="p-3 bg-white border border-gray-200 flex items-center justify-center">
                    <Image src={`/vendors/${_}.png`} alt={`${_} logo`} width={100} height={100} />
                    </div>
                ))}
                </div>
                
                
            </div>
            </div>
        </section>
    </div>
  );
}
