// components/InnovationShowcase.tsx
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

export default function InnovationShowcase() {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden mb-20">
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Case Study: Autonomous Logistics</h3>
          <p className="text-gray-300 mb-6">
            Our AI-driven routing system reduced delivery times by 28% while cutting fuel consumption by 15% across our European network.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Self-optimizing delivery routes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Real-time traffic and weather adaptation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Dynamic load balancing</span>
            </li>
          </ul>
          <button className="flex items-center text-emerald-400 font-medium group">
            Read full case study
            <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="relative aspect-video md:aspect-auto md:h-full bg-gray-800">
          <Image 
            src="/supply-chain/autonomous-truck.jpg" 
            alt="Autonomous truck" 
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-xs">
            <p className="text-xs font-medium text-gray-900">Autonomous electric vehicle in Hamburg, Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
}