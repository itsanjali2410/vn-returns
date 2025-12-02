'use client';

import React from 'react';
import Image from 'next/image';

const ThemeBanner: React.FC = () => {
  return (
    <section
      className="relative w-full h-[400px] md:h-[400px] sm:h-[300px] bg-cover bg-center flex flex-col items-center justify-end text-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.wanderon.in/category/honeymoon-cover?updatedAt=1692268658108")',
      }}
    >
      {/* Overlay */}
      <div className="absolute bottom-0 w-full h-[160px] md:h-[160px] sm:h-[120px] bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pb-[100px] sm:pb-[60px]">
        <h2 className="font-dancing text-white text-[30px] sm:text-[25px] drop-shadow-md mb-2">
          Romantic Escapes Await 💕
        </h2>
        <button
          aria-label="Book this package now"
          className="bg-yellow-400 text-black font-bold text-[18px] sm:text-[16px] px-6 py-3 sm:px-5 sm:py-2 rounded-full mb-5 hover:bg-yellow-300 transition"
        >
          Book Now
        </button>
      </div>

      {/* Ratings */}
      <div className="absolute bottom-3 w-full flex justify-center gap-10 sm:gap-5 z-20">
        {/* Google */}
        <div className="flex flex-col items-center text-white sm:scale-90">
          <Image
            src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/google.png"
            alt="Google"
            title="Google"
            width={30}
            height={30}
          />
          <div className="text-gold text-[22px] sm:text-[18px] font-bold">⭐ 4.9</div>
          <div className="text-xs opacity-80">(Excellent reviews)</div>
        </div>

        {/* TripAdvisor */}
        <div className="flex flex-col items-center text-white sm:scale-90">
          <Image
            src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/tripadvisor.png"
            alt="TripAdvisor"
            title="TripAdvisor"
            width={30}
            height={30}
          />
          <div className="text-gold text-[22px] sm:text-[18px] font-bold">⭐ 5.0</div>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center text-white sm:scale-90">
          <Image
            src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/facebook.png"
            alt="Facebook"
            title="Facebook"
            width={30}
            height={30}
          />
          <div className="text-gold text-[22px] sm:text-[18px] font-bold">⭐ 4.9</div>
        </div>
      </div>
    </section>
  );
};

export default ThemeBanner;
