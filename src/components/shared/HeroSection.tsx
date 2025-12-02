'use client';
import React from 'react';
import Image from 'next/image';
import MarqueeBar from '@/components/shared/MarqueeBar';

type HeroSectionProps = {
  image: string;
  destination: string;
  onInquireClick?: () => void; // 🔹 Add this
};

const HeroSection: React.FC<HeroSectionProps> = ({ image, destination, onInquireClick }) => {
  return (
    <>
      <div className="relative">
        {/* Image Section */}
        <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={destination}
            title={destination}
            width={1920}
            height={350}
            priority
            className="w-full h-[350px] object-cover brightness-75"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

          {/* Text Overlay */}
          <div className="absolute text-center text-white px-8 py-4 rounded-lg z-10">
            <h1>
              <span className="text-4xl font-dancing m-0 drop-shadow-md block">Escape to</span>
              <span className="text-5xl font-bold font-[Poppins] m-3 drop-shadow-lg block">
                {destination}
              </span>
            </h1>

            {/* Inline Button */}
            <div className="text-center mt-8">
              <button
                onClick={onInquireClick}
                className="px-8 py-3 rounded-full text-white font-medium border-2 border-white bg-black/60 backdrop-blur-sm transition-all duration-300 hover:bg-[#ffc42d] hover:text-white hover:border-transparent"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Bar */}
      <MarqueeBar />
    </>
  );
};

export default HeroSection;
