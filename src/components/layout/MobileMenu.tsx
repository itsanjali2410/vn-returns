'use client';

import Link from 'next/link';

export const MobileMenu = ({
  pathname,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  pathname: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) => {
  const isActive = (href: string) =>
    pathname === href ? 'text-[#ffc42d] font-semibold' : 'text-white';

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100vh] bg-gray-800 text-white transition-all duration-300 overflow-auto ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <Link
        href="/"
        className={`block transition ${isActive('/')} py-5 px-8 border-b border-white/10`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="Home"
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`block transition ${isActive('/about')} py-5 px-8 border-b border-white/10`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="About"
      >
        About
      </Link>

      <Link
        href="/services"
        className={`block transition ${isActive('/services')} py-5 px-8 border-b border-white/10`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="Services"
      >
        Services
      </Link>

      <Link
        href="/packages"
        className={`block transition ${isActive('/packages')} py-5 px-8 border-b border-white/10`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="Packages"
      >
        Packages
      </Link>

      <Link
        href="/contact"
        className={`block transition py-5 px-8 border-b border-white/10 ${isActive('/contact')}`}
        onClick={() => setIsMobileMenuOpen(false)}
        title="Contact"
      >
        Contact
      </Link>
    </div>
  );
};
