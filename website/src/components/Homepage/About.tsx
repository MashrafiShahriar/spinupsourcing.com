"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Globe2, TargetIcon, ShieldCheckIcon, Globe2Icon } from "lucide-react";

const items = [
  {
    title: "Our Purpose",
    description: `We put purpose at the core of everything we do—driving meaningful impact through collaboration, sustainability, and positive change in the global supply chain.`,
    icon: <TargetIcon className="w-12 h-12 text-red-600" />,
  },
  {
    title: "Our Governance",
    description: `With strong governance and compliance standards, we ensure integrity, transparency, and accountability across all of our operations and global partnerships.`,
    icon: <ShieldCheckIcon className="w-12 h-12 text-red-600" />,
  },
  {
    title: "Our Reach",
    description: `Spanning continents and cultures, our network of partners enables us to deliver agile, tailored logistics and supply chain solutions across diverse markets.`,
    icon: <Globe2Icon className="w-12 h-12 text-red-600" />,
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gray-50 text-gray-800 px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            About Spinup Sourcing
          </h2>
          <p className="text-lg max-w-4xl leading-relaxed">
            We aspire to deliver value in global supply chains by living our values around people, partners and planet.
            At Spinup Sourcing, value has tangible meaning. For over 115 years, we've grown from humble beginnings to a multinational enterprise,
            connecting thousands of suppliers with leading brands to meet ever-evolving consumer demands.
            <br /><br />
            As the industry transforms, we lead with innovation, flexibility, and scale — delivering tomorrow's supply chain today.
          </p>
        </div>

        {/* Enterprise Grid - All content visible by default */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-300">
          {items.map((item, index) => (
            <motion.div 
              key={item.title}
              className="relative group"
              initial={{ borderBottom: "1px solid #e5e7eb" }}
              whileHover={{ 
                borderBottom: "1px solid #1d4ed8",
                backgroundColor: "rgba(249, 250, 251, 1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-12 px-8 h-full flex flex-col">
                {/* Static Content */}
                <div className="mb-8">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* Always visible content */}
                <div className="flex-1">
                  <p className="text-gray-600 pb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Interactive element - subtle hover effect */}
                <motion.div 
                  className="flex items-center border-t border-gray-200 pt-6"
                  whileHover={{ 
                    borderColor: "#1d4ed8",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-sm font-medium text-blue-700 mr-2">
                    Learn more
                  </span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <svg
                      className="w-4 h-4 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover Indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-0.5 bg-blue-700"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}