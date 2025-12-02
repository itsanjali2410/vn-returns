// Desktop Menu Component
import Link from 'next/link';

export const DesktopMenu = ({ pathname }: { pathname: string }) => {
  const isActive = (href: string) =>
    pathname === href ? 'text-[#ffc42d] font-semibold' : 'text-white';

  return (
    <nav className="hidden md:flex items-center space-x-8 text-base relative">
      <Link href="/" className={`${isActive('/')} hover:text-[#ffc42d] transition`}>
        Home
      </Link>
      <Link
        href="/about"
        className={`${isActive('/about')} hover:text-[#ffc42d] transition`}
      >
        About
      </Link>
      <Link
        href="/services"
        className={`${isActive('/services')} hover:text-[#ffc42d] transition`}
      >
        Services
      </Link>
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
