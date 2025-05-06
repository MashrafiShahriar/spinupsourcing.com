export default function Footer() {
    return (
      <footer className="bg-gray-600 text-gray-800 border-t border-gray-300 px-8 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold uppercase mb-4 tracking-wide">
              Spinup Sourcing
            </h4>
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
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 tracking-wider border-b border-gray-200 pb-2">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>540 Madison Ave, 29th Floor</li>
              <li>New York, NY 10022</li>
              <li>Email: contact@spinupsourcing.com</li>
              <li>Phone: +1 (212) 555-1234</li>
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
  