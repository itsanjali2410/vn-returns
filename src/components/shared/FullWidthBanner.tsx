'use client';

import Image from 'next/image';
import React from 'react';

const FullWidthBanner: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="https://wanderon.in/assets/images/honeymoon-banner.svg"
        alt="Honeymoon Banner"
        title="Honeymoon Banner"
        width={1920}
        height={600}
        priority
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default FullWidthBanner;
