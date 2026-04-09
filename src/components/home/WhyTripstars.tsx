'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/swiper.css';

type DataItem = {
  title: string;
  icon: string;
};

const data: DataItem[] = [
  { title: 'With You on Every Trip', icon: '/USPS/Vndmc-icon-06.webp' },
  { title: 'Professional Team', icon: '/USPS/Vndmc-icon-07.webp' },
  { title: 'Comprehensive Services', icon: '/USPS/Vndmc-icon-09.webp' },
  { title: 'Custom Travel Packages', icon: '/USPS/Vndmc-icon-10.webp' },
  { title: 'Tailored Experiences', icon: '/USPS/Vndmc-icon-08.webp' },
];

export default function WhyVietnamDMC() {
  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      {/* Section Title */}
      <div className="flex justify-between items-center pt-4 md:pt-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
          <span>Why </span>
          <span className="font-cursive bg-gradient-to-r from-[#ffc42d]/90 to-[#e6b028] bg-clip-text text-transparent">
            Vietnam DMC?
          </span>
        </h2>
      </div>

      {/* Cards Wrapper */}
      <div className="w-full">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            1000: { slidesPerView: 4, spaceBetween: 15 },
            1080: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center py-1 text-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    title={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1000px) 100px, 100px"
                  />
                </div>
                <h3 className="text-xs md:text-sm font-light text-gray-900 px-1">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
