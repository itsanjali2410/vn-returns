'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '84325765379';
const MESSAGE = 'Hi, I would like to enquire about a Vietnam travel package.';

const FloatingContactButton: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[1000] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25d366] shadow-lg hover:bg-[#1eb954] hover:scale-105 transition-all"
    >
      <FaWhatsapp className="text-white w-8 h-8 md:w-9 md:h-9" />
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-60 -z-10" />
    </a>
  );
};

export default FloatingContactButton;
