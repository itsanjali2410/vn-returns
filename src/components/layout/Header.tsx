'use client';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] font-[Montserrat] shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#376941] text-white text-xs sm:text-sm">
        <div className="w-full px-4 sm:px-6 md:px-8 flex items-center justify-between h-8 md:h-9">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+840325765379"
              className="flex items-center gap-1.5 hover:text-[#ffc42d] transition"
            >
              <Phone size={14} />
              <span>+84 0325765379</span>
            </a>
            <a
              href="mailto:sales@vndmc.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#ffc42d] transition"
            >
              <Mail size={14} />
              <span>sales@vndmc.com</span>
            </a>
          </div>
          <div className="hidden md:block font-medium">
            Your Gateway to Authentic Vietnam
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white text-gray-900 border-b border-gray-100 w-full px-4 sm:px-6 md:px-8 flex items-center justify-between h-[60px] md:h-[72px] relative z-[101]">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.webp"
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
            className="text-gray-900"
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
          openSubmenu={openSubmenu}
          toggleSubmenu={toggleSubmenu}
        />
      </div>
    </header>
  );
};

export default Header;
