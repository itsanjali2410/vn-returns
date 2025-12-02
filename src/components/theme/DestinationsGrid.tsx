'use client';

import Image from 'next/image';
import React from 'react';

interface Destination {
  name: string;
  img: string;
}

const destinations: Destination[] = [
  { name: 'Bali', img: 'https://ik.imagekit.io/workcations/bali_card' },
  { name: 'Maldives', img: 'https://ik.imagekit.io/workcations/maldives_card' },
  {
    name: 'Singapore',
    img: 'https://ik.imagekit.io/workcations/singapore_card',
  },
  { name: 'Thailand', img: 'https://ik.imagekit.io/workcations/thailand_card' },
  { name: 'Vietnam', img: 'https://ik.imagekit.io/workcations/vietnam_card' },
  { name: 'Kashmir', img: 'https://ik.imagekit.io/workcations/kashmir_card' },
  { name: 'Andaman', img: 'https://ik.imagekit.io/workcations/andaman_card' },
  { name: 'Kerala', img: 'https://ik.imagekit.io/workcations/kerala_card' },
];

const DestinationsGrid: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fffaf2] to-[#fde6e6] py-12 px-5 overflow-hidden text-center">
      {/* Title */}
      <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-10 font-dancing">
        Your Love Story, Our Destinations!
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 max-w-6xl mx-auto">
        {destinations.map((dest, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 shadow-md">
              <Image
                src={dest.img}
                alt={dest.name}
                title={dest.name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-lg md:text-xl font-semibold text-gray-800">{dest.name}</p>
          </div>
        ))}
      </div>

      {/* Decorative bottom-right image */}
      <Image
        src="https://wanderon.in/assets/svg/love-hands.svg"
        alt="Decorative Hands"
        title="Decorative Hands"
        width={200}
        height={200}
        className="absolute bottom-0 right-0 opacity-80 pointer-events-none w-36 md:w-52"
      />
    </section>
  );
};

export default DestinationsGrid;
