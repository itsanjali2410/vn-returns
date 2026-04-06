'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

import React, { memo, useCallback, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSlider } from '@/hooks/useSlider';

const HeroSliderDesktop = memo(() => {
  const desktopImages = useMemo(
    () => [
      '/hero/VietnamDayCruise.webp',
      '/hero/VietnamOverNightCruise.webp',
      '/hero/VietnamWithPuQuoc.webp',
      '/hero/VietnamWithPuQuoc 2.webp',
      '/hero/phu_quoc.webp',
    ],
    []
  );

  const { index, setIndex } = useSlider(desktopImages.length);

  const handleSwipeLeft = useCallback(() => {
    setIndex((i) => (i + 1) % desktopImages.length);
  }, [setIndex, desktopImages.length]);

  const handleSwipeRight = useCallback(() => {
    setIndex((i) => (i - 1 + desktopImages.length) % desktopImages.length);
  }, [setIndex, desktopImages.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  return (
    <section
      {...swipeHandlers}
      className="relative hidden md:block w-full overflow-hidden"
    >
      {desktopImages.map((src, i) => (
        <div
          key={src}
          className={`${i === 0 ? 'relative' : 'absolute inset-0'} w-full transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ImgWithPlaceholder
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-auto"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </section>
  );
});

HeroSliderDesktop.displayName = 'HeroSliderDesktop';

export default HeroSliderDesktop;
