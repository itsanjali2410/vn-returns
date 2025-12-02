'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
type DataItem = {
  imageUrl: string;
  title?: string;
};

const data: DataItem[] = [
  { imageUrl: '/images/WhyTripstars/Google Rating.webp', title: 'Google Rating' },
  { imageUrl: '/images/WhyTripstars/15k Customers.webp', title: '15k Customers Served' },
  { imageUrl: '/images/WhyTripstars/Award.webp', title: 'Award Winners' },
  { imageUrl: '/images/WhyTripstars/Customer service.webp', title: 'Customer Service' },
  { imageUrl: '/images/WhyTripstars/Experience.webp', title: '16 Years of Experience' },
];

export default function WhyTripstars() {
  return (
    <div className=" px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8">
      {/* Section Title */}
      <div className="flex justify-between items-center pt-4 md:pt-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
          <span>Why </span>
          <span className="font-cursive bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent">
            Tripstars?
          </span>
        </h2>
      </div>

      {/* Cards Wrapper */}
      <div className="w-full">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 15 },
            1080: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center py-2">
                {/* Use Next.js Image for optimization */}
                <Image
                  src={item.imageUrl}
                  width={230}
                  height={100}
                  alt={item.title || ''}
                  title={item.title || ''}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
