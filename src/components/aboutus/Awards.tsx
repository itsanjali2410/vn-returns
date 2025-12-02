'use client';

import Image from 'next/image';

export default function Awards() {
  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 w-full mt-4 md:mt-0 text-center md:text-left p-3 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Why Choose TripStars Holidays</h1>
          <p className="text-gray-700 mb-2">
            Leading Travel Company in India known for delivering personalized and exceptional travel
            experiences.
          </p>
          <p className="text-gray-700 mb-2">
            Expertly curated domestic and international tour packages with transparent pricing and
            no hidden costs.
          </p>
          <p className="text-gray-700 mb-2">
            Driven by innovation, leveraging cutting-edge technology to enhance customer
            satisfaction.
          </p>
          <p className="text-gray-700 mb-2">
            Renowned for 24/7 customer support and a commitment to quality at every touchpoint.
          </p>
          <p className="text-gray-700 mb-2">
            A trusted partner for unforgettable journeys, with a passion for creating lifelong
            memories.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full p-3 flex justify-center md:justify-end items-center">
          <div className="relative w-full  h-[300px] md:h-[400px] self-center">
            <Image
              src="/aboutus/Team.webp"
              alt="Awards"
              title="Awards"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
