'use client';

import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { VIETNAM_CITIES } from '@/constant';

export const MobileMenu = ({
  pathname,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  openSubmenu,
  toggleSubmenu,
}: {
  pathname: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  openSubmenu: string | null;
  toggleSubmenu: (key: string) => void;
}) => {
  const isActive = (href: string) =>
    pathname === href ? 'text-[#376941] font-semibold' : 'text-gray-800';

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100vh] bg-white text-gray-800 transition-all duration-300 overflow-auto ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <Link
        href="/"
        className={`block transition ${isActive('/')} py-5 px-8 border-b border-gray-100 hover:text-[#376941]`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="Home"
      >
        Home
      </Link>

      <Link
        href="/about-us"
        className={`block transition ${isActive('/about-us')} py-5 px-8 border-b border-gray-100 hover:text-[#376941]`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="About"
      >
        About
      </Link>

      {/* Services Accordion (Cities) */}
      <div className="border-b border-gray-100">
        <button
          onClick={() => toggleSubmenu('cities')}
          className="flex justify-between items-center w-full py-5 px-8 text-gray-800 hover:text-[#376941] transition"
        >
          Services {openSubmenu === 'cities' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {openSubmenu === 'cities' && (
          <div className="bg-gray-50 px-8 pb-4">
            {VIETNAM_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="block text-gray-600 py-2 hover:text-[#376941] text-sm transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {city.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/packages"
        className={`block transition ${isActive('/packages')} py-5 px-8 border-b border-gray-100 hover:text-[#376941]`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="Packages"
      >
        Packages
      </Link>

      <Link
        href="/contact"
        className={`block transition py-5 px-8 border-b border-gray-100 ${isActive('/contact')} hover:text-[#376941]`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="Contact"
      >
        Contact
      </Link>
    </div>
  );
};
