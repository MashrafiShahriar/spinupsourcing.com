import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-white text-gray-800 border-t border-gray-300 px-8 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center">
                <Image src="/logo-full-chromo.png" alt="Logo" width={250} height={100} className='p-4 pl-0 md:p-0 w-3/4 md:w-full mb-4' />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Building the supply chain of the future. We connect brands and retailers with suppliers across the globe, delivering innovation and efficiency.
            </p>
          </div>
  
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 tracking-wider border-b border-gray-200 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Leadership</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 tracking-wider border-b border-gray-200 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:underline">Supply Chain</a></li>
              <li><a href="#" className="hover:underline">Digital Solutions</a></li>
              <li><a href="#" className="hover:underline">Logistics</a></li>
              <li><a href="#" className="hover:underline">Sourcing</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div  className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold uppercase mb-4 tracking-wider border-b border-gray-200 pb-2">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Mohakhali DOHS</li>
              <li>Dhaka-1205, Bangladesh</li>
              <li>Email: info@spinupsourcing.com</li>
              <li>Phone: +880 1725-502388</li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Spinup Sourcing. All rights reserved.
        </div>
      </footer>
    );
  }
  