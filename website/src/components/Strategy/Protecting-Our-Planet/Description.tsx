import Image from "next/image";
import Link from "next/link";

const ESGPage = () => {
  const commitments = [
    {
      title: "Climate Action & Energy Efficiency",
      description: "Reducing emissions through renewable energy adoption and operational efficiency",
      icon: "/assets/picture-20.png",
      stats: "1,400+ factories reporting emissions"
    },
    {
      title: "Water Stewardship",
      description: "Implementing water recycling and reduction across our supply chain",
      icon: "/assets/water-1.png",
      stats: "30% reduction target by 2025"
    },
    {
      title: "Sustainable Materials",
      description: "Transitioning to circular materials and responsible sourcing",
      icon: "/assets/materials-3.png",
      stats: "100% sustainable packaging by 2025"
    }
  ];

  const initiatives = [
    {
      title: "Supply Chain Decarbonization Program",
      image: "/assets/decarbonization.jpg",
      content: [
        "Implemented across 54 strategic factories with 89% achieving targets",
        "AI-powered energy monitoring systems reducing consumption by 18%",
        "Supplier scorecards driving continuous improvement"
      ]
    },
    {
      title: "Water Conservation Framework",
      image: "/assets/water-conservation.jpg",
      content: [
        "Closed-loop water systems in high-impact facilities",
        "Partnerships with WWF on watershed protection",
        "Digital monitoring reducing freshwater intake by 22%"
      ]
    },
    {
      title: "Circular Materials Innovation",
      image: "/assets/materials-innovation.jpg",
      content: [
        "FSC-certified packaging adoption across 78% of product lines",
        "Textile Exchange partnership for certified materials database",
        "R&D lab developing bio-based alternatives"
      ]
    }
  ];

  const partners = [
    { name: "SAC", logo: "/assets/logos/cascale.svg", url: "https://apparelcoalition.org/" },
    { name: "Textile Exchange", logo: "/assets/logos/textileexchange.svg", url: "https://textileexchange.org/" },
    { name: "SBTi", logo: "/assets/logos/sbti.png", url: "https://sciencebasedtargets.org/" },
    { name: "WWF", logo: "/assets/logos/wwf.jpg", url: "https://www.worldwildlife.org/" },
    { name: "Ellen MacArthur", logo: "/assets/logos/emf.svg", url: "https://ellenmacarthurfoundation.org/" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Responsible Environmental Stewardship
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Minimizing our ecological footprint through innovation, collaboration, and measurable action
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/sustainability/policy" className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
              View Our Policy
            </Link>
            <Link href="/sustainability/report" className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition">
              2023 Impact Report
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Environmental Commitments</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            We've established ambitious, science-based targets aligned with the UN Sustainable Development Goals to drive meaningful change across our operations and supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src={commitment.icon} alt="" className="w-full h-full rounded-full" width={124} height={124} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{commitment.title}</h3>
              <p className="text-gray-600 mb-4">{commitment.description}</p>
              <p className="text-blue-600 font-medium">{commitment.stats}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/assets/sdg.png"
                alt="UN Sustainable Development Goals"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Aligning with Global Goals</h2>
              <p className="text-gray-700 mb-6">
                Our environmental strategy directly contributes to SDG 12 (Responsible Consumption and Production) and SDG 13 (Climate Action), while supporting progress across 6 other SDGs through our comprehensive approach.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SDG 6: Clean Water and Sanitation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SDG 7: Affordable and Clean Energy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SDG 9: Industry, Innovation and Infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Environmental Initiatives</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Through targeted programs and cross-sector collaboration, we're implementing practical solutions that deliver measurable environmental benefits.
          </p>
        </div>

        <div className="space-y-20">
          {initiatives.map((initiative, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="md:w-1/2">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <ul className="space-y-4">
                  {initiative.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
                {index === 0 && (
                  <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">2023 Achievement</h4>
                    <p className="text-blue-700">Reduced Scope 1 & 2 emissions by 28% against 2019 baseline</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Partnerships</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations to amplify our impact and drive industry-wide transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <Link key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Building a Sustainable Future</h2>
          <p className="text-xl mb-8">
            Whether you're a supplier, customer, or partner, together we can create meaningful environmental change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition">
              Get in Touch
            </Link>
            <Link href="/careers" className="border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition">
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESGPage;