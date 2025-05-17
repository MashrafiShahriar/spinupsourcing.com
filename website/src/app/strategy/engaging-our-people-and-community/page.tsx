import { 
  UsersIcon, 
  HandshakeIcon, 
  GraduationCapIcon, 
  HeartPulseIcon,
  GlobeIcon,
  ArrowRightIcon,
  CalendarIcon,
  AwardIcon,
  LeafIcon
} from "lucide-react";
import Image from "next/image";
import EmployeeTestimonial from "@/components/EmployeeTestimonial";
import CommunityImpactCard from "@/components/CommunityImpactCard";

export default function PeopleAndCommunity() {
  const initiatives = [
    {
      icon: <GraduationCapIcon className="w-6 h-6 text-emerald-500" />,
      title: "Learning & Development",
      stats: "120+ training programs",
      description: "Annual training hours per employee increased by 40% since 2020"
    },
    {
      icon: <HandshakeIcon className="w-6 h-6 text-emerald-500" />,
      title: "Community Partnerships",
      stats: "45 local organizations",
      description: "Strategic partnerships creating measurable social impact"
    },
    {
      icon: <HeartPulseIcon className="w-6 h-6 text-emerald-500" />,
      title: "Health & Wellbeing",
      stats: "94% participation",
      description: "Comprehensive programs supporting physical and mental health"
    }
  ];

  const events = [
    {
      title: "Annual Volunteer Day",
      date: "June 12, 2024",
      location: "Global Offices",
      spots: "200+ participants"
    },
    {
      title: "Youth STEM Workshop",
      date: "July 8-12, 2024",
      location: "Community Center",
      spots: "50 students"
    },
    {
      title: "Sustainability Fair",
      date: "August 3, 2024",
      location: "Headquarters Campus",
      spots: "Open to public"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-28 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
                <UsersIcon className="w-5 h-5 text-white" />
              </div>
              <span className="uppercase tracking-wider text-emerald-200 font-medium">
                Our Commitment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Engaging Our People & Communities
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
              We invest in our employees' growth and empower communities through meaningful partnerships and volunteer initiatives.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full opacity-10">
          <Image 
            src="/images/community-hero-pattern.svg" 
            alt="Pattern" 
            fill
            className="object-cover object-right-bottom"
          />
        </div>
      </section>

      {/* Employee Experience */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Our People First Culture
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We foster an inclusive environment where every employee can thrive. Our workplace practices prioritize professional development, work-life balance, and meaningful recognition.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-emerald-600 mb-1">4.8★</p>
                  <p className="text-sm text-gray-600">Employee satisfaction</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-emerald-600 mb-1">82%</p>
                  <p className="text-sm text-gray-600">Promotion rate</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 aspect-square rounded-xl overflow-hidden">
                <Image 
                  src="/people/team-meeting.jpg" 
                  alt="Team meeting" 
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-emerald-50 aspect-square rounded-xl overflow-hidden">
                <Image 
                  src="/people/employee-training.jpg" 
                  alt="Employee training" 
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-emerald-50 aspect-square rounded-xl overflow-hidden col-span-2">
                <Image 
                  src="/people/office-celebration.jpg" 
                  alt="Office celebration" 
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
              Employee & Community Initiatives
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

          {/* Employee Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Voices From Our Team
            </h2>
            <EmployeeTestimonial />
          </div>

          {/* Community Impact */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Making a Difference
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CommunityImpactCard 
                title="Education Access"
                metric="5,000+ students reached"
                description="STEM programs in underserved communities"
                icon={<GraduationCapIcon className="w-5 h-5" />}
              />
              <CommunityImpactCard 
                title="Environmental Projects"
                metric="120 tons waste diverted"
                description="Community cleanups and recycling initiatives"
                icon={<LeafIcon className="w-5 h-5" />}
              />
              <CommunityImpactCard 
                title="Economic Empowerment"
                metric="300+ small businesses"
                description="Supported through mentorship and grants"
                icon={<HandshakeIcon className="w-5 h-5" />}
              />
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Upcoming Community Events
            </h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 flex items-start gap-4 hover:shadow-sm transition-shadow">
                  <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                    <CalendarIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <GlobeIcon className="w-3 h-3" />
                        {event.location}
                      </span>
                      <span>{event.spots}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-emerald-900 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Making an Impact
          </h2>
          <p className="text-emerald-100 mb-8 text-xl">
            Whether you're looking to join our team or partner on community initiatives, we'd love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-emerald-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Career Opportunities
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Community Partnerships
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}