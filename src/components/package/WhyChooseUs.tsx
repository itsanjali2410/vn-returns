'use client';

import { FC } from 'react';

interface WhyChooseUsProps {
  highlights?: string[];
}

const WhyChooseUs: FC<WhyChooseUsProps> = ({ highlights }) => {
  return (
    <div className="w-full max-sm:text-center ">
      <h5 className="mb-6 text-2xl font-bold text-gray-900">Why Travel with Us</h5>

      <ul className="flex flex-col  gap-2 text-lg text-gray-800 px-3">
        {highlights?.map((highlight, index) => (
          <li key={`whychooseus-${index}`} className="list-disc text-left">
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
