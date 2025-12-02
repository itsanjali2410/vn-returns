'use client';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black text-white font-[Montserrat] shadow-lg">
      {/* Header Bar */}
      <div className="w-full px-4 sm:px-6 md:px-8 flex items-center justify-between h-[71px] md:h-[86px] relative z-[101]">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={59}
            className="md:w-[150px] md:h-[59px] w-[112px] h-[45px] object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <DesktopMenu pathname={pathname} />

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative z-[99]">
        <MobileMenu
          pathname={pathname}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
