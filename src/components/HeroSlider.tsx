'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
// import SearchBar from "./SearchBar";
// import RatingBar from "./RatingBar";

const HeroSlider: React.FC = () => {
  // ✅ Desktop images from /public/banner
  const desktopImages = useMemo(
    () => [
      '/banner/bali.webp',
      '/banner/vietnam.webp',
      '/banner/dubai.webp',
      '/banner/maldives.webp',
      '/banner/singapore.webp',
      '/banner/europe.webp',
      '/banner/thailand.webp',
    ],
    []
  );

  // ✅ Mobile images from /public/banner/Mobile banner
  const mobileImages = useMemo(
    () => [
      '/banner/Mobile banner/bali.webp',
      '/banner/Mobile banner/vietnam.webp',
      '/banner/Mobile banner/vietnam.webp',
      '/banner/Mobile banner/dubai.webp',
      '/banner/Mobile banner/maldives.webp',
      '/banner/Mobile banner/singapore.webp',
      '/banner/Mobile banner/thailand.webp',
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState(desktopImages);

  // ✅ Detect mobile / desktop & set images accordingly
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setImages(mobile ? mobileImages : desktopImages);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [desktopImages, mobileImages]);

  // ✅ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 10,
  });

  return (
    <section
      {...swipeHandlers}
      className="relative w-full h-[250px] sm:h-[400px] md:h-[550px] overflow-hidden"
    >
      {/* Slide Wrapper */}
      <div className="absolute inset-0 w-full h-[250px] sm:h-[400px] md:h-[550px]">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-[250px] sm:h-[400px] md:h-[550px] transition-opacity duration-700 ease-in-out ${
              i === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Search Bar + Text */}
      <div className="absolute top-1/2 left-1/2 z-30 w-[90%] -translate-x-1/2 -translate-y-1/2 text-center md:top-[60%]">
        {/* Optional Heading */}
        {/* <h1 className="text-2xl text-white drop-shadow-md mb-5 md:text-xl md:mb-4">
          Find Your Dream Destination
        </h1>
        <SearchBar />
        <RatingBar /> */}
      </div>
    </section>
  );
};

export default HeroSlider;
