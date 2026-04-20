'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { VIETNAM_CITIES } from '@/constant';

const GREEN = '#376941';

export const DesktopMenu = ({ pathname }: { pathname: string }) => {
  const [isDestOpen, setIsDestOpen] = useState(false);

  const linkClass = (href: string) => {
    const active = pathname === href;
    return [
      'relative pb-1 transition-colors',
      active ? 'text-[#376941] font-semibold' : 'text-gray-800 hover:text-[#376941]',
      active
        ? 'after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-[#376941]'
        : '',
    ].join(' ');
  };

  const citiesActive = pathname.startsWith('/cities');

  return (
    <nav className="hidden md:flex items-center space-x-8 text-base relative">
      <Link href="/" className={linkClass('/')}>
        Home
      </Link>
      <Link href="/about-us" className={linkClass('/about-us')}>
        About Us
      </Link>

      {/* Cities Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsDestOpen(true)}
        onMouseLeave={() => setIsDestOpen(false)}
      >
        <button
          className={`flex items-center gap-1 relative pb-1 transition-colors ${
            citiesActive
              ? 'text-[#376941] font-semibold after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-[#376941]'
              : 'text-gray-800 hover:text-[#376941]'
          }`}
        >
          Cities <ChevronDown size={16} />
        </button>
        {isDestOpen && (
          <div className="absolute top-full left-0 pt-2 z-[200]">
            <div
              className="w-[300px] bg-white border border-gray-100 rounded-lg shadow-xl p-4 grid grid-cols-2 gap-2"
              style={{ borderTopColor: GREEN, borderTopWidth: 2 }}
            >
              {VIETNAM_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="text-gray-700 hover:text-[#376941] hover:bg-gray-50 text-sm py-2 px-3 rounded transition"
                >
                  {city.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link href="/packages" className={linkClass('/packages')}>
        Packages
      </Link>
      <Link href="/contact" className={linkClass('/contact')}>
        Contact
      </Link>
    </nav>
  );
};
