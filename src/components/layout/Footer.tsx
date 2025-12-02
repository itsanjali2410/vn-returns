'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

// Social media icons
const socialMediaLinks = [
  {
    href: '#',
    icon: <FaFacebook />,
    alt: 'Facebook',
    className: 'bg-[#1877f2]',
  },
  {
    href: '#',
    icon: <FaInstagram />,
    alt: 'Instagram',
    className: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]',
  },
  {
    href: '#',
    icon: <FaLinkedin />,
    alt: 'LinkedIn',
    className: 'bg-[#0a66c2]',
  },
  {
    href: '#',
    icon: <FaYoutube />,
    alt: 'YouTube',
    className: 'bg-[#ff0000]',
  },
];

// Footer sections
interface FooterLink {
  label: string;
  href: string;
}

const footerSections: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
      { label: 'Packages', href: '/packages' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const Footer = () => {
  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({});
  const [isMobile, setIsMobile] = useState(true);

  const toggleDropdown = (key: string) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-[#101820] text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Logo, Description, and Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-left">
            <Link href="/" className="block mb-4">
              <Image
                src="/logo.png"
                alt="Vietnam DMC Logo"
                width={200}
                height={80}
                className="h-auto w-auto max-w-[200px]"
                priority
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vietnam is your trusted destination management partner, dedicated to creating authentic
              and unforgettable experiences throughout Vietnam. With over 15 years of expertise, we
              specialize in personalized travel solutions that showcase the true essence of
              Vietnamese culture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:hidden">
            {footerSections.map((section) => (
              <div key={section.title} className="mb-4 text-left">
                <h3
                  onClick={() => toggleDropdown(section.title)}
                  className="flex justify-between items-center py-2 cursor-pointer font-semibold text-lg"
                >
                  {section.title}{' '}
                  <span
                    className={`transition-transform ${dropdowns[section.title] ? 'rotate-180' : ''}`}
                  >
                    ▼
                  </span>
                </h3>
                <ul className={`pl-2 mt-2 space-y-2 ${dropdowns[section.title] ? 'block' : 'hidden'}`}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[#ffc42d] text-sm hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <hr className="border-t border-gray-700 mt-2" />
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerSections[0].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#ffc42d] text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#ffc42d] mt-1">📍</span>
                <p className="text-gray-300">
                  5th Floor, 26 Duong Khue, My An, Ngu Hanh Son, Da Nang, Viet Nam
                </p>
              </div>
              <div className="flex items-center gap-2">
                <AiFillPhone className="text-[#ffc42d]" />
                <a href="tel:+840325765379" className="text-[#ffc42d] hover:underline">
                  +84 0325765379
                </a>
              </div>
              <div className="flex items-center gap-2">
                <AiFillPhone className="text-[#ffc42d]" />
                <a href="tel:+84987654321" className="text-[#ffc42d] hover:underline">
                  +84 987654321
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-[#ffc42d]" />
                <a href="mailto:sales@vndmc.com" className="text-[#ffc42d] hover:underline">
                  sales@vndmc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Quick Links */}
        <div className="md:hidden mb-6">
          <hr className="border-t border-gray-700 mb-4" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-6">
          {socialMediaLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
              className={`${link.className} text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col items-center text-xs text-gray-400">
          <p className="mb-2">© 2024 Vietnam DMC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#" className="hover:text-[#ffc42d] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#" className="hover:text-[#ffc42d] transition-colors">
              Terms of Service
            </Link>
            <Link href="/#" className="hover:text-[#ffc42d] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
