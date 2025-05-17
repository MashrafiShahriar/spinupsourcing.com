import { UsersIcon, GlobeIcon, AwardIcon, LeafIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { value: "12+", label: "Years in Business" },
    { value: "150+", label: "Team Members" },
    { value: "40+", label: "Countries Served" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: <LeafIcon className="w-6 h-6 text-emerald-500" />,
      title: "Sustainability",
      description: "We prioritize eco-friendly solutions in all our projects and operations."
    },
    {
      icon: <UsersIcon className="w-6 h-6 text-emerald-500" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to drive innovation."
    },
    {
      icon: <GlobeIcon className="w-6 h-6 text-emerald-500" />,
      title: "Global Impact",
      description: "Our solutions are designed to create positive change worldwide."
    },
    {
      icon: <AwardIcon className="w-6 h-6 text-emerald-500" />,
      title: "Excellence",
      description: "We're committed to delivering the highest quality in everything we do."
    }
  ];

  const team = [
    { name: "Ekram Munsi", role: "CEO & Founder", image: "/team/ceo.jpg" },
    { name: "Ananya", role: "CTO", image: "/team/cto.jpg" },
    { name: "Injam", role: "Head of Sustainability", image: "/team/sustainability.jpg" },
    { name: "Julius", role: "Head of Operations", image: "/team/operations.jpg" },
    { name: "Nazmul", role: "Head of Sales", image: "/team/operations.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-28 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Pioneering sustainable solutions since 2012, we're committed to building a better future through innovation and responsible business practices.
            </p>
            <button className="flex items-center px-6 py-3 bg-white text-emerald-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Our Mission & Vision
              <ChevronRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 z-0" />
      </section>

      {/* About Content */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2012, we began as a small team of environmental engineers with a shared vision. Today, we've grown into a global leader in sustainable technology solutions, serving clients across six continents.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering commitment to our core values. We measure our success not just by profits, but by the positive impact we create.
              </p>
              <button className="inline-flex items-center text-emerald-600 font-medium group">
                Read our full history
                <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/about/office.jpg" 
                alt="Our headquarters" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                <p className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-emerald-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to partner with us?</h2>
          <p className="text-gray-600 mb-8 text-xl">
            Whether you're looking for sustainable solutions or want to join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Contact Us
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Careers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}