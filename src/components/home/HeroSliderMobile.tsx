'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

import React, { memo, useCallback, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSlider } from '@/hooks/useSlider';

const HeroSliderMobile = memo(() => {
  const mobileImages = useMemo(
    () => [
      '/hero/VietnamDayCruise.webp',
      '/hero/VietnamOverNightCruise.webp',
      '/hero/VietnamWithPuQuoc.webp',
      '/hero/VietnamWithPuQuoc 2.webp',
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
          className={`${i === 0 ? 'relative' : 'absolute inset-0'} w-full transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ImgWithPlaceholder
            src={src}
            alt={`Mobile Slide ${i + 1}`}
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
    </section>
  );
});

HeroSliderMobile.displayName = 'HeroSliderMobile';

export default HeroSliderMobile;
