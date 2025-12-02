'use client';
import React from 'react';
import Image from 'next/image';

type Thing = {
  name: string;
  image: string;
};

type DestinationProps = {
  title: string;
  highlightWord: string;
  thingsToDo: Thing[];
};

const PackageFeatures: React.FC<DestinationProps> = ({ title, highlightWord, thingsToDo }) => {
  const handleThingClick = (thing: Thing) => {
    alert(`You clicked on: ${thing.name}`);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 container mx-auto">
      {/* Section Title */}
      <div className="pt-2 pb-4 flex justify-between items-center  max-[768px]:pt-0 max-[768px]:mt-0">
        <h2 className="text-xl sm:text-2xl font-semibold uppercase">
          {title} <span className="text-[#ffc42d] font-bold">{highlightWord}</span>
        </h2>
      </div>

      {/* Responsive Grid: 4 columns desktop, 2 columns tablet, 1 column mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {thingsToDo.map((item, index) => (
          <div
            key={index}
            onClick={() => handleThingClick(item)}
            className="flex flex-col cursor-pointer"
          >
            {/* Parent div must be relative for next/image fill */}
            <div className="w-full relative h-60 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-2 text-center text-sm font-semibold text-gray-800 capitalize">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageFeatures;
