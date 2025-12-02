'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/JourneyInFrame/dubai.webp', alt: 'Dubai' },
  { src: '/JourneyInFrame/disneyland.webp', alt: 'Disneyland' },
  { src: '/JourneyInFrame/singapore.webp', alt: 'Singapore' },
  { src: '/JourneyInFrame/vietnam.webp', alt: 'Vietnam' },
  { src: '/JourneyInFrame/bali.webp', alt: 'Bali' },
  { src: '/JourneyInFrame/dubai2.webp', alt: 'Dubai' },
  { src: '/JourneyInFrame/ferrari-world.webp', alt: 'Ferrari World' },
  { src: '/JourneyInFrame/malaysia.webp', alt: 'Malaysia' },
  { src: '/JourneyInFrame/dubai1.webp', alt: 'Dubai' },
  { src: '/JourneyInFrame/kashmir.webp', alt: 'Kashmir' },
  { src: '/JourneyInFrame/paris.webp', alt: 'Paris' },
  { src: '/JourneyInFrame/vietnam1.webp', alt: 'Vietnam' },
  { src: '/JourneyInFrame/warner-bros.webp', alt: 'Warner Bros' },
];

export default function BendingSlider() {
  const [index, setIndex] = useState(0);
  const totalSlides = images.length;
  const slideWidth = 300;
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleNext = () => setIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  const handlePrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) handleNext();
    if (touchEndX - touchStartX > swipeThreshold) handlePrev();
  };

  return (
    <div className="flex flex-col items-center text-center w-full px-4 md:px-0 py-6">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-black">
        Journey In Frame
        <br />
        <span className="text-base font-normal">Pictures Perfect Moments</span>
      </h2>

      {/* Carousel */}
      <div className="relative w-[90%] overflow-hidden py-6 mx-4 md:mx-12 lg:mx-20">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-3 hover:bg-[#198754]"
        >
          &#10094;
        </button>

        {/* Wrapper */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${-index * slideWidth}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`relative min-w-[280px] h-[400px] mx-2 rounded-lg overflow-hidden`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                title={image.alt}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-md text-sm md:text-base ">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-3 hover:bg-[#198754]"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
