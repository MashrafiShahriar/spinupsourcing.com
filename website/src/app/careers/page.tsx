import AboutSection from "@/components/Homepage/About";
import HeroSection from "@/components/Homepage/Hero";
import InnovationSection from "@/components/Homepage/Innovation";
import StrategySection from "@/components/Homepage/Strategy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  ChevronDownIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon, Globe2Icon, CpuIcon, RocketIcon, LeafIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
     

  
  
      
   
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
            Career <span className="text-sm">With</span> 
          </h2>
          <h2 className="text-[2.25rem] leading-tight font-semibold uppercase tracking-wider text-emerald-500">
            Spinup Sourcing
          </h2>
        </div>
        <div className="mt-6 border-t border-gray-300 w-16" />
        <p className="mt-6 text-sm text-gray-600 leading-relaxed pr-4">
         Grow your career with us. We are a global team of innovators, thinkers, and doers. Join us in our mission to transform the supply chain industry.
        </p>

      </div>

      <div className="md:col-span-8 space-y-10">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Join Our Team</CardTitle>
            <p className="text-sm text-gray-500">We are always looking for talented individuals to join our team. If you are interested in a career with Spinup Sourcing, please fill out the form below.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" required />     
              </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" required />
                </div>
                <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                    <input type="file" id="resume" name="resume" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" required />
                </div>
                <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                    <textarea id="coverLetter" name="coverLetter" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500" rows={4} required></textarea>
                </div>
                <div>
                    <Button type="submit" className="w-full bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md shadow-sm">
                        Submit Application
                    </Button>
                    </div>
                    </form>
</CardContent>
</Card>
    </div>
    </div>
  </section>

    </div>
  );
}
