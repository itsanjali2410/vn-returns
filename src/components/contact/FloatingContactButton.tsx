'use client';

import { useState } from 'react';
import Image from 'next/image';
const FloatingContactButton: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed bottom-5 right-5 bg-[#25d366] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg z-[1000] transition-colors hover:bg-[#1eb954] md:bottom-5 md:right-5 sm:bottom-[45px] sm:right-0"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/ffffff/chat.png"
          alt="Plan your trip"
          width={40}
          height={40}
        />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="fixed bottom-24 right-5 bg-white shadow-lg rounded-lg p-2 flex flex-col z-[1001] sm:right-4 sm:bottom-20">
          {/* WhatsApp Option */}
          <a
            href="https://wa.me/7710827169"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 rounded-md hover:bg-gray-100 text-black text-base"
          >
            <Image
              src="https://img.icons8.com/color/48/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            Chat on WhatsApp
          </a>

          {/* Call Option */}
          <a
            href="tel:+919875097169"
            className="flex items-center p-2 rounded-md hover:bg-gray-100 text-black text-base"
          >
            <Image
              src="https://img.icons8.com/color/48/phone.png"
              alt="Call"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            Call +91 98750 97169
          </a>
          <a
            href="tel:+919106639179"
            className="flex items-center p-2 rounded-md hover:bg-gray-100 text-black text-base"
          >
            <Image
              src="https://img.icons8.com/color/48/phone.png"
              alt="Call"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            Call +91 91066 39179
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingContactButton;
