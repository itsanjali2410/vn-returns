'use client';

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';

interface Slide {
  image: string;
  slug: string;
  name: string;
  tagline: string;
}

const slides: Slide[] = [
  { image: '/swipeable_slider/hanoi.jpg', slug: '/packages/ha-noi-da-nang-phu-quoc-9d8n', name: 'Hanoi - Da Nang - Phu Quoc', tagline: '9 Days 8 Nights Package' },
  { image: '/swipeable_slider/da-nang.jpg', slug: '/packages/vietnam-6n7d-day-cruise', name: 'Vietnam Day Cruise', tagline: '6 Nights 7 Days with Day Cruise' },
  { image: '/swipeable_slider/hoi-an.jpg', slug: '/packages/vietnam-7n8d-standard', name: 'Vietnam Hoi an', tagline: '7 Nights 8 Days Package' },
  { image: '/swipeable_slider/phu-quoc.jpg', slug: '/packages/phu-quoc-4-night-standard', name: 'Phu Quoc Island', tagline: '4 Nights Standard Package' },
];

export default function SwipeableSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className="w-full flex flex-col items-center px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      {/* Slider Container */}
      <div {...handlers} className="relative overflow-hidden w-full rounded-xl mx-auto">
        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Link
              key={index}
              href={slide.slug}
              className="relative w-full flex-shrink-0 cursor-pointer rounded-xl overflow-hidden shadow-lg"
              title={slide.name}
            >
              <div className="relative w-full">
                <img
                  src={slide.image}
                  alt={slide.name}
                  title={slide.name}
                  className="w-full h-auto rounded-xl"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {/* Light gradient only at bottom for text */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl" />

                {/* City name overlay */}
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 md:p-8">
                  <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                    {slide.name}
                  </h2>
                  <p className="text-[11px] sm:text-sm md:text-base text-gray-200 mt-0.5 drop-shadow-md">
                    {slide.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#ffc42d] w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
