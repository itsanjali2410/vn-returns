'use client';

import Image from 'next/image';

export default function AboutHistory() {
  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-stretch">
        {/* Image Section */}
        <div className="md:w-1/2 w-full p-3 flex justify-center md:justify-start">
          <div className="relative w-full  h-[300px] md:h-[400px]">
            <Image
              src="/aboutus/Tripstarsahemdabad.webp"
              alt="About History"
              title="About History"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full p-3 flex flex-col justify-center ">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">A Little About Us</h1>
          <p className="text-gray-700 mb-2">
            Welcome to Tripstars! We are a leading travel website dedicated to helping you plan the
            perfect vacation. Our team is passionate about travel and is here to help you every step
            of the way.
          </p>
          <p className="text-gray-700 mb-2">
            With a wide variety of destinations to choose from and top-notch customer service, we
            make it easy for you to book your dream trip.
          </p>
          <p className="text-gray-700 mb-2">
            Whether you’re looking for a beach getaway, a cultural adventure, or a romantic escape,
            we have something that will fit the bill.
          </p>
          <p className="text-gray-700 mb-2">
            At Tripstars, we are committed to providing the best possible travel experience for our
            customers.
          </p>
        </div>
      </div>
    </div>
  );
}
