import { 
  CpuIcon,
  GlobeIcon,
  NetworkIcon,
  BoxIcon,
  ClockIcon,
  BarChart2Icon,
  ArrowRightIcon,
  CheckCircleIcon,
  LeafIcon
} from "lucide-react";
import Image from "next/image";
import SupplyChainNetwork from "@/components/SupplyChainNetwork";
import InnovationShowcase from "@/components/InnovationShowcase";

export default function SupplyChainInnovation() {
  const innovations = [
    {
      icon: <CpuIcon className="w-6 h-6 text-emerald-500" />,
      title: "AI-Powered Forecasting",
      description: "Machine learning models that predict demand with 98% accuracy",
      impact: "Reduced overstock by 32%"
    },
    {
      icon: <NetworkIcon className="w-6 h-6 text-emerald-500" />,
      title: "Blockchain Traceability",
      description: "End-to-end visibility from raw materials to end customer",
      impact: "100% supply chain transparency"
    },
    {
      icon: <BoxIcon className="w-6 h-6 text-emerald-500" />,
      title: "Autonomous Warehousing",
      description: "Robotics and IoT systems for 24/7 operations",
      impact: "60% faster order processing"
    }
  ];

  const stats = [
    { value: "48%", label: "Carbon reduction", icon: <LeafIcon className="w-5 h-5" /> },
    { value: "99.2%", label: "On-time delivery", icon: <ClockIcon className="w-5 h-5" /> },
    { value: "76+", label: "Markets served", icon: <GlobeIcon className="w-5 h-5" /> },
    { value: "3.2M", label: "Daily shipments", icon: <BoxIcon className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-emerald-600">
      {/* Hero with Tech Background */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-28 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
                <NetworkIcon className="w-5 h-5 text-white" />
              </div>
              <span className="uppercase tracking-wider text-emerald-200 font-medium">
                Supply Chain Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reinventing Global Supply Chains
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              We combine cutting-edge technology with sustainable practices to build resilient, efficient supply networks for the future.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/tech-grid.png" 
            alt="Technology grid" 
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Interactive Network Visualization */}
      <section className="py-16 px-6 sm:px-8 lg:px-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart2Icon className="w-5 h-5 text-emerald-500" />
              Our Intelligent Supply Network
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 relative">
              <SupplyChainNetwork />
            </div>
          </div>
        </div>
      </section>

      {/* Core Innovations */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage emerging technologies to solve complex supply chain challenges while reducing environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {innovations.map((innovation, index) => (
              <div 
                key={index} 
                className="group border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all h-full"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  {innovation.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {innovation.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-emerald-600">
                    <span className="font-bold">Impact:</span> {innovation.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Innovation Showcase */}
          <InnovationShowcase />

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Sustainable Practices */}
          <div className="grid md:grid-cols-2 gap-16 items-center bg-gray-50 rounded-2xl p-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sustainable by Design
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our circular supply chain model reduces waste and emissions at every stage. We've redesigned processes to prioritize renewable energy, recycled materials, and carbon-neutral logistics.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>100% renewable energy</strong> in our distribution centers by 2025
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Zero-waste packaging</strong> initiatives across all product lines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Carbon-negative</strong> last-mile delivery options
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image 
                src="/supply-chain/sustainable-warehouse.jpg" 
                alt="Sustainable warehouse" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xs">
                <p className="text-sm font-medium text-gray-700">Our flagship eco-distribution center in Rotterdam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-emerald-900 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Supply Chain
          </h2>
          <p className="text-emerald-100 mb-8 text-xl">
            Partner with us to build a smarter, more sustainable supply network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-emerald-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Business Solutions
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Technology Partnerships
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}