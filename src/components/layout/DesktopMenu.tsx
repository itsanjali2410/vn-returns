'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { VIETNAM_CITIES } from '@/constant';

export const DesktopMenu = ({ pathname }: { pathname: string }) => {
  const [isDestOpen, setIsDestOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href ? 'text-[#ffc42d] font-semibold' : 'text-white';

  return (
    <nav className="hidden md:flex items-center space-x-8 text-base relative">
      <Link href="/" className={`${isActive('/')} hover:text-[#ffc42d] transition`}>
        Home
      </Link>
      <Link
        href="/about-us"
        className={`${isActive('/about-us')} hover:text-[#ffc42d] transition`}
      >
        About Us
      </Link>

      {/* Cities Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => setIsDestOpen(true)}
        onMouseLeave={() => setIsDestOpen(false)}
      >
        <button className="flex items-center gap-1 text-white hover:text-[#ffc42d] transition">
          Cities <ChevronDown size={16} />
        </button>
        {isDestOpen && (
          <div className="absolute top-full left-0 mt-2 w-[300px] bg-black/95 border border-white/10 rounded-lg shadow-2xl p-4 grid grid-cols-2 gap-3 z-[200]">
            {VIETNAM_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="text-gray-300 hover:text-[#ffc42d] text-sm py-2 px-3 rounded hover:bg-white/5 transition"
              >
                {city.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/packages"
        className={`${isActive('/packages')} hover:text-[#ffc42d] transition`}
      >
        Packages
      </Link>
      <Link href="/contact" className={`${isActive('/contact')} hover:text-[#ffc42d] transition`}>
        Contact
      </Link>
    </nav>
  );
};
