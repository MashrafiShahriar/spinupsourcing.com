import { 
  FactoryIcon, 
  UsersIcon, 
  ShieldIcon, 
  GlobeIcon, 
  BarChart2Icon,
  ArrowRightIcon,
  CheckCircleIcon
} from "lucide-react";
import Image from "next/image";
import SupplyChainMap from "@/components/SupplyChainMap";

export default function ESGSupplyChain() {
  const initiatives = [
    {
      icon: <UsersIcon className="w-6 h-6 text-emerald-500" />,
      title: "Fair Wages Initiative",
      stats: "100% living wage compliance",
      description: "Ensuring all workers earn above local living wage benchmarks"
    },
    {
      icon: <ShieldIcon className="w-6 h-6 text-emerald-500" />,
      title: "Safety First Program",
      stats: "72% reduction in incidents",
      description: "Comprehensive safety training across all supplier facilities"
    },
    {
      icon: <FactoryIcon className="w-6 h-6 text-emerald-500" />,
      title: "Supplier Academy",
      stats: "240+ partners trained",
      description: "Capacity building for ethical and sustainable operations"
    }
  ];

  const progressData = [
    { year: "2020", compliance: 65, partners: 120 },
    { year: "2021", compliance: 78, partners: 180 },
    { year: "2022", compliance: 85, partners: 210 },
    { year: "2023", compliance: 92, partners: 260 },
    { year: "2024", compliance: 97, partners: 310 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Interactive Globe */}
      <section className="relative bg-gradient-to-b from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-28 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
                <GlobeIcon className="w-5 h-5 text-white" />
              </div>
              <span className="uppercase tracking-wider text-emerald-200 font-medium">
                ESG Strategy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empowering People Across Our Supply Chain
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
              We're building ethical, resilient supply networks that uplift workers and communities worldwide.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full opacity-20">
          <Image 
            src="/images/global-network.png" 
            alt="Global network" 
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </section>

      {/* Interactive Supply Chain Map */}
      <section className="py-6 px-6 sm:px-8 lg:px-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart2Icon className="w-5 h-5 text-emerald-500" />
              Our Supply Chain Network
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 relative">
              <SupplyChainMap />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs">Direct Suppliers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-xs">Raw Material Sources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human-Centric Approach */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Putting People First in Global Operations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Human Rights Policy extends beyond our direct employees to every tier of our supply chain. We conduct regular audits, provide training, and work collaboratively to improve working conditions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Zero tolerance</strong> for forced or child labor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Gender equality</strong> programs across 12 countries
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Worker voice</strong> channels in all major facilities
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 aspect-square rounded-xl overflow-hidden">
                <Image 
                  src="/esg/worker-training.jpg" 
                  alt="Worker training" 
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-emerald-50 aspect-square rounded-xl overflow-hidden">
                <Image 
                  src="/esg/factory-visit.jpg" 
                  alt="Factory visit" 
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-emerald-50 aspect-square rounded-xl overflow-hidden col-span-2">
                <Image 
                  src="/esg/community-meeting.jpg" 
                  alt="Community meeting" 
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Supply Chain Initiatives
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <div 
                  key={index} 
                  className="group border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {initiative.title}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm mb-3">
                    {initiative.stats}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {initiative.description}
                  </p>
                  <button className="flex items-center text-sm text-emerald-600 font-medium group-hover:text-emerald-700">
                    Learn more
                    <ArrowRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Progress Over Time
            </h2>
            <div className="relative">
              {/* Horizontal timeline */}
              <div className="flex overflow-x-auto pb-8 -mx-4 px-4">
                <div className="flex gap-8 min-w-max">
                  {progressData.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-200 w-64">
                        <h4 className="font-bold text-gray-900 mb-3">{item.year}</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Compliance</span>
                              <span className="font-medium">{item.compliance}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-emerald-500 h-2 rounded-full" 
                                style={{ width: `${item.compliance}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Partners</span>
                              <span className="font-medium">{item.partners}+</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-amber-500 h-2 rounded-full" 
                                style={{ width: `${(item.partners/350)*100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < progressData.length - 1 && (
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-16 h-0.5 bg-gray-300"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-emerald-900 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Responsible Supply Chain
          </h2>
          <p className="text-emerald-100 mb-8 text-xl">
            Suppliers who share our values can apply to join our network of ethical partners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-emerald-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Supplier Requirements
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}