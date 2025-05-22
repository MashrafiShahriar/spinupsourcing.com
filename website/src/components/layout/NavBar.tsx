'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ShoppingCart, Menu, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
const MegaMenu = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [user, setUser] = useState(false);
  const strategyAndInnovationMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (strategyAndInnovationMenuRef.current && !strategyAndInnovationMenuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mega Menu Content
  const strategyAndInnovationMenu = (
    <div 
      ref={strategyAndInnovationMenuRef}
      className={`absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out overflow-hidden ${
        activeMenu === 'strategy' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="grid grid-cols-3 gap-8 p-6">
        <div>
          <h3 className="font-semibold text-lg mb-3">ESG Strategy</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/strategy/protecting-our-planet" className="text-gray-600 hover:text-black transition-colors">
              Protecting our planet
              </Link>
            </li>
            <li>
              <Link href="/strategy/people-in-the-supply-chain" className="text-gray-600 hover:text-black transition-colors">
              People in the supply chain
              </Link>
            </li>
            <li>
              <Link href="/strategy/engaging-our-people-and-community" className="text-gray-600 hover:text-black transition-colors">
              Engaging our people and community
              </Link>
            </li>
         
            
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Supply Chain Innovation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/innovation/our-business" className="text-gray-600 hover:text-black transition-colors">
              Our business
              </Link>
            </li>
      
          </ul>
        </div>

      </div>
    </div>
  );

  // Mobile Menu Content (same as before)
  const mobileMenu = (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
      <div className="p-4 space-y-6">
        {/* ESG Strategy Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">ESG Strategy</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/strategy/protecting-our-planet" className="block text-gray-600 hover:text-black transition-colors">
                Protecting our planet
              </Link>
            </li>
            <li>
              <Link href="/strategy/people-in-the-supply-chain" className="block text-gray-600 hover:text-black transition-colors">
                People in the supply chain
              </Link>
            </li>
            <li>
              <Link href="/strategy/engaging-our-people-and-community" className="block text-gray-600 hover:text-black transition-colors">
                Engaging our people and community
              </Link>
            </li>
            <li>
              <Link href="/strategy/a-responsible-citizen" className="block text-gray-600 hover:text-black transition-colors">
                A responsible citizen
              </Link>
            </li>
            <li>
              <Link href="/strategy/whistleblowing-policy" className="block text-gray-600 hover:text-black transition-colors">
                Whistleblowing policy
              </Link>
            </li>
            <li>
              <Link href="/strategy/esg-news" className="block text-gray-600 hover:text-black transition-colors">
                ESG News
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Supply Chain Innovation Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Supply Chain Innovation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/innovation/our-business" className="block text-gray-600 hover:text-black transition-colors">
                Our business
              </Link>
            </li>
            <li>
              <Link href="/innovation/supply-chain-solutions" className="block text-gray-600 hover:text-black transition-colors">
                Supply chain solutions
              </Link>
            </li>
            <li>
              <Link href="/innovation/lf-jeanswear" className="block text-gray-600 hover:text-black transition-colors">
                LF Jeanswear
              </Link>
            </li>
            {['About us',  'Media', 'Buyers', "Careers", "Contact us"].map((item, index) => (
             <li>
                 <Link
                key={index}
                href="#"
                className="text-gray-600 hover:text-black transition-all pb-1"
              >
                {item}
              </Link>
             </li>
            ))}
          </ul>
        </div>
  
        {/* Add any other sections from your mega menu here */}
        
      </div>
    </div>
  );

  return (
    <div className="w-full text-sm font-medium relative">
      {/* Top Banner */}
      <div className="bg-neutral-800 text-white text-center py-2 px-4">
       Learn how Spinup Sourcing is changing the Logistics Industry for Years.
        <Link href="#" className="ml-2 underline font-semibold hover:text-gray-300">
          Discover now →
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="sticky top-0 z-50 bg-white">
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 relative">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
                <Image src="/logo-full-chromo.png" alt="Logo" width={250} height={100} className='p-4 mx-auto md:p-0 md:w-full' />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleMenu('strategy')}
                className={`flex items-center pb-1 hover:text-black transition-all ${
                  activeMenu === 'strategy' ? 'text-black after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-orange-500' : 'text-gray-600'
                }`}
              >
                Strategy & Innovation
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === 'strategy' ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
            </div>

            {/* Other Menu Items */}
            {['About us',  'Media', 'Buyers', "Careers", "Contact us"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-600 hover:text-black transition-all pb-1"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-black transition"
              >
                <span>EN</span>
                <ChevronDown size={16} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-8 bg-white border border-gray-200 shadow-md p-2 z-50">
                  <div className="cursor-pointer hover:bg-gray-100 px-3 py-1">EN</div>
                  <div className="cursor-pointer hover:bg-gray-100 px-3 py-1">FR</div>
                </div>
              )}
            </div>

            {/* User or Auth Buttons
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700"
                >
                  <User size={16} />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-10 bg-white border border-gray-200 shadow-md p-2 z-50 w-48">
                    <Link href="/dashboard" className="block px-3 py-2 hover:bg-gray-100">Dashboard</Link>
                    <button className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-100">
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="hidden md:block text-gray-600 hover:text-black">
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="hidden md:block bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )} */}
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && mobileMenu}
        </nav>
        
        {/* Products Mega Menu - positioned absolutely */}
        {strategyAndInnovationMenu}
      </div>
    </div>
  );
};

export default MegaMenu;