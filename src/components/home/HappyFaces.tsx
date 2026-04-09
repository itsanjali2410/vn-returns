'use client';

import Image from 'next/image';

const images = [
  '/happy_faces/IMG_8125.webp',
  '/happy_faces/IMG_8137.webp',
  '/happy_faces/_MG_0124.webp',
  '/happy_faces/_MG_0178.webp',
  '/happy_faces/3.webp',
];

export default function HappyFaces() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase flex flex-row items-center gap-x-2 mb-8">
        <span>Happy</span>
        <span className="font-cursive bg-gradient-to-r from-[#ffc42d]/90 to-[#e6b028] bg-clip-text text-transparent">
          Travelers
        </span>
      </h2>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {/* First large image spanning 2 rows */}
        <div className="relative row-span-2 rounded-xl overflow-hidden aspect-[2/3]">
          <Image
            src={images[0]}
            alt="Happy traveler"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Remaining images */}
        {images.slice(1).map((src, idx) => (
          <div key={idx} className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src={src}
              alt="Happy traveler"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
