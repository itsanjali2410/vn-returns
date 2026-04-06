'use client';

import HeroSliderDesktop from './HeroSliderDesktop';
import HeroSliderMobile from './HeroSliderMobile';

export default function VietnamHero() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSliderDesktop />
      <HeroSliderMobile />
    </div>
  );
}


