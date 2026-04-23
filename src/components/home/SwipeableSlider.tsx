'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

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
  { image: '/swipeable_slider/hanoi.webp', slug: '/packages/ha-noi-da-nang-phu-quoc-with-day-cruise', name: 'Coastal Journey', tagline: 'Hanoi, Da Nang & Phu Quoc — 7N/8D' },
  { image: '/swipeable_slider/da-nang.webp', slug: '/packages/ha-noi-phu-quoc-da-nang-day-cruise', name: 'Tropical Discovery', tagline: 'Hanoi, Phu Quoc & Da Nang — 8N/9D' },
  { image: '/swipeable_slider/hoi-an.webp', slug: '/packages/ha-noi-da-nang-ho-chi-minh-day-with-day-cruise', name: 'Classic Discovery', tagline: 'Hanoi, Da Nang & Ho Chi Minh — 7N/8D' },
  { image: '/swipeable_slider/phu-quoc.webp', slug: '/packages/phu-quoc-fully-loaded', name: 'Fully Loaded', tagline: 'Phu Quoc Island — 5N/6D' },
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
              <div className="relative w-full aspect-[16/9]">
                <ImgWithPlaceholder
                  src={slide.image}
                  alt={slide.name}
                  title={slide.name}
                  className="object-cover rounded-xl"
                  sizes="100vw"
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
