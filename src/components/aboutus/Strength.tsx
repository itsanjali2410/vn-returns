'use client';

import Image from 'next/image';

export default function Strength() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="md:w-1/2 w-full p-3 flex justify-center md:justify-start">
          <div className="relative w-full  h-[300px] md:h-[400px]">
            <Image
              src="/aboutus/fullteam.webp"
              alt="Strength"
              title="Strength"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 text-center md:text-left p-3 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">About TripStars Holidays LLP</h1>
          <p className="text-gray-700 mb-2">
            TripStars Holidays LLP is a leading travel company in India, known for delivering
            exceptional travel experiences.
          </p>
          <p className="text-gray-700 mb-2">
            Offering customized tour packages with a focus on quality and customer satisfaction.
          </p>
          <p className="text-gray-700 mb-2">
            Expertly curated travel plans for both domestic and international destinations.
          </p>
          <p className="text-gray-700 mb-2">
            Committed to transparent pricing with no hidden costs and excellent customer support.
          </p>
          <p className="text-gray-700 mb-2">
            Driven by innovation and guided by a passion for travel.
          </p>
        </div>
      </div>
    </div>
  );
}
