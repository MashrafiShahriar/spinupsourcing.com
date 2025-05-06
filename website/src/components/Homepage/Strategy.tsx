'use client'

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckIcon, Globe2Icon, CpuIcon, RocketIcon, LeafIcon } from "lucide-react"

export default function StrategySection() {
  return (
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
            Global Strategy
          </h2>
        </div>
        <div className="mt-6 border-t border-gray-300 w-16" />
        <p className="mt-6 text-sm text-gray-600 leading-relaxed pr-4">
          Supply chain transformation isn’t just about logistics — it’s about reshaping how value is created, delivered, and experienced across the globe.
        </p>
        
        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { value: '95%', label: 'Efficiency Score' },
            { value: '40+', label: 'Countries' },
            { value: '1.2M', label: 'Daily Shipments' },
            { value: '100%', label: 'Compliance' },
          ].map((stat, index) => (
            <div key={index} className="p-3 bg-white border border-gray-200">
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategy Content Blocks */}
      <div className="md:col-span-8 space-y-10">
        {[
          {
            icon: CpuIcon,
            title: "Digital Core",
            content:
              "Our strategy starts with a digital foundation: proprietary platforms that optimize supplier management, data analytics, and end-to-end transparency.",
            features: ["Real-time tracking", "AI-powered analytics", "Blockchain security"]
          },
          {
            icon: RocketIcon,
            title: "Strategic Agility",
            content:
              "Market volatility demands speed. Our agile supply chain architecture allows fast shifts in sourcing, production, and delivery.",
            features: ["24h crisis response", "Modular network", "Dynamic routing"]
          },
          {
            icon: LeafIcon,
            title: "Sustainability-Driven",
            content:
              "Every transformation initiative is embedded with ESG goals — from ethical sourcing to emission-reducing logistics models.",
            features: ["Carbon neutral 2030", "Ethical sourcing", "Circular economy"]
          },
        ].map((item, index) => (
          <div key={index} className="group transition-all duration-300 border-b border-gray-200 pb-6 hover:border-black relative">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <item.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {item.content}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center bg-emerald-50 px-3 py-1 rounded-full">
                      <CheckIcon className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-xs font-medium text-emerald-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-6 flex flex-col sm:flex-row gap-4 items-start">
          <Button
            variant="outline"
            className="border rounded-none border-black text-black text-sm uppercase tracking-wide px-6 py-3 hover:bg-black hover:text-white transition-all group"
          >
            Read Full Strategy
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex items-center text-sm text-gray-500">
            <Globe2Icon className="w-4 h-4 mr-2" />
            <span>Currently operating in 40+ countries worldwide</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
