'use client';

import { FC } from 'react';
import TourIncludes from './TourIncludes';
import WhyChooseUs from './WhyChooseUs';

interface PackageIncludesProps {
  includes?: { name: string; icon: string }[];
  highlights?: string[];
}

const PackageIncludes: FC<PackageIncludesProps> = ({ includes, highlights }) => {
  return (
    <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      <TourIncludes includes={includes} />
      <WhyChooseUs highlights={highlights} />
    </div>
  );
};

export default PackageIncludes;
