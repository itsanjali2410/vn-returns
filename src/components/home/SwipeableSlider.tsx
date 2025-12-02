'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  image: string;
  route: string;
  name: string;
}

const slides: Slide[] = [
  { image: '/advertisebanner/banner-5.webp', route: 'bali', name: 'Bali' },
  { image: '/advertisebanner/banner-3.webp', route: 'vietnam', name: 'Vietnam' },
  { image: '/advertisebanner/banner-1.webp', route: 'turkey', name: 'Turkey' },
  { image: '/advertisebanner/banner-2.webp', route: 'europe', name: 'Europe' },
  { image: '/advertisebanner/banner-4.webp', route: 'baku', name: 'Baku' },
];

export default function SwipeableSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

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
    <div className="w-full flex flex-col items-center my-5 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      {/* Slider Container */}
      <div {...handlers} className="relative overflow-hidden w-full rounded-xl mx-auto">
        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Link
              key={index}
              href={`/international/${slide.route}`}
              className="relative w-full flex-shrink-0 cursor-pointer rounded-xl overflow-hidden shadow-lg"
              title={slide.name}
            >
              <div
                className="
                  w-full h-[150px]       // mobile
                  sm:h-[200px]           // small tablets
                  md:h-[300px]           // medium tablets
                  lg:h-[400px]           // large screens
                  xl:h-[450px]           // desktop
                  relative
                "
              >
                <Image
                  src={slide.image}
                  alt={slide.name}
                  title={slide.name}
                  fill
                  className="rounded-xl "
                  priority={index === 0}
                  sizes="(max-width: 640px) 360px, 100vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Dots Below Slider */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-black w-2 h-2' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
