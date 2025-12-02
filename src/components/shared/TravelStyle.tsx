'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type Destination = {
  name: string;
  imgUrl: string;
  icon: string;
};

const popularDestinationsData: Destination[] = [
  { name: 'Family', imgUrl: '/travelstyle/family 1.jpg', icon: '/icons/family.svg' },
  { name: 'Group', imgUrl: '/travelstyle/group.webp', icon: '/icons/group.svg' },
  { name: 'Honeymoon', imgUrl: '/travelstyle/honeymoon.webp', icon: '/icons/honeymoon.svg' },
  { name: 'Adventure', imgUrl: '/travelstyle/adventure.webp', icon: '/icons/adventure.svg' },
  { name: 'Beach', imgUrl: '/travelstyle/beach.webp', icon: '/icons/beach.svg' },
  { name: 'Couple', imgUrl: '/travelstyle/couple.webp', icon: '/icons/couple.svg' },
];

export default function TravelStyle() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const handleCardClick = (name: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Trigger Swiper to re-render pagination once container is mounted
    setSwiperReady(true);
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 max-[768px]:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 mt-5 text-left">
        Choose Your{' '}
        <span className="font-cursive bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent">
          Travel Style
        </span>
      </h2>

      {swiperReady && (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            400: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1080: { slidesPerView: 4.5 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{
            clickable: true,
            el: paginationRef.current, // ✅ assign ref here
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="pb-2"
        >
          {popularDestinationsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => handleCardClick(item.name)}
                className="relative cursor-pointer overflow-hidden h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] transition-transform duration-300 hover:scale-105 rounded-2xl"
              >
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-b-2xl">
                  <div className="relative lg:w-25 lg:h-25 md:w-25 md:h-25 w-18 h-18 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="object-contain"
                      width={64}
                      height={64}
                    />
                  </div>
                  <span className="text-white font-dancing  text-3xl flex items-center">
                    {item.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Pagination Container */}
      <div
        ref={paginationRef}
        className="custom-pagination flex justify-center mt-4 md:hidden"
      ></div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #facc15 !important; /* yellow-400 */
          opacity: 1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
