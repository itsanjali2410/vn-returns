'use client';

import React, { memo, useCallback, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSlider } from '@/hooks/useSlider';

const HeroSliderMobile = memo(() => {
  const mobileImages = useMemo(
    () => [
      '/mobile_banner/VietnamDayCruise.webp',
      '/mobile_banner/VietnamOverNightCruise.webp',
      '/mobile_banner/VietnamWithPuQuoc.webp',
      '/mobile_banner/VietnamWithPuQuoc 2.webp',
      '/mobile_banner/PhuQuoc.webp',
    ],
    []
  );

  const { index, setIndex } = useSlider(mobileImages.length);

  const handleSwipeLeft = useCallback(() => {
    setIndex((i) => (i + 1) % mobileImages.length);
  }, [setIndex, mobileImages.length]);

  const handleSwipeRight = useCallback(() => {
    setIndex((i) => (i - 1 + mobileImages.length) % mobileImages.length);
  }, [setIndex, mobileImages.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  return (
    <section
      {...swipeHandlers}
      className="relative md:hidden w-full overflow-hidden aspect-[16/10]"
    >
      {mobileImages.map((src, i) => (
        <div
          key={src}
          className={`${i === 0 ? 'relative' : 'absolute inset-0'} w-full h-full transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`Mobile Slide ${i + 1}`}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}
    </section>
  );
});

HeroSliderMobile.displayName = 'HeroSliderMobile';

export default HeroSliderMobile;
