'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Gallery Images
const galleryImages: string[] = [
  '/themes/honeymoon-pic-1.webp',
  '/themes/honeymoon-pic-4.webp',
  '/themes/honeymoon-pic-2.webp',
  '/themes/honeymoon-pic-3.webp',
  '/themes/honeymoon-pic-5.webp',
];

const Gallery: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-[#064663] mb-2">Gallery</h2>
      <p className="text-lg text-[#0288d1] font-medium mb-6">Best of our “Kodak” Moments!</p>
      <div className="w-12 h-1 bg-[#fdd835] mx-auto mb-10" />

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-4 max-w-5xl mx-auto items-center">
        <div className="col-span-2">
          <Image
            src={galleryImages[0]}
            alt="Main Gallery Image"
            title="Main Gallery Image"
            width={1200}
            height={800}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {galleryImages.slice(1).map((image, index) => (
            <Image
              key={`index-${index}`}
              src={image}
              alt={`Gallery ${index + 1}`}
              title={`Gallery ${index + 1}`}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          ))}
        </div>
      </div>

      {/* Mobile Swiper Slider */}
      <div className="block md:hidden mt-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          modules={[Navigation]}
          className="w-full"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={`index-gallery-${index}`}>
              <div className="flex justify-center items-center">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  title={`Gallery ${index + 1}`}
                  width={800}
                  height={500}
                  className="rounded-lg object-cover w-full aspect-[16/9]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
