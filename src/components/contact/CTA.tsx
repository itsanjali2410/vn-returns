'use client';

import React from 'react';

const MobileCTAButton: React.FC = () => {
  return (
    <a
      href="tel:+911258965321"
      className="
        fixed bottom-0 left-0 w-full bg-yellow-400 text-black font-bold text-lg py-3 rounded-t-lg z-50
        sm:block sm:text-base sm:py-2 sm:w-[57%]
        text-center
        transition-all duration-300
        hover:bg-yellow-500
      "
    >
      Call Now
    </a>
  );
};

export default MobileCTAButton;
