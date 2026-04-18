'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'; // ✅ Correct import

type Destination = {
  name: string;
  imgUrl: string;
  slug: string;
};

const popularDestinationsData: Destination[] = [
  { name: 'Hanoi', imgUrl: '/popular_cities/Hanoi.webp', slug: 'hanoi' },
  { name: 'Ha Long Bay', imgUrl: '/popular_cities/Halong Bay.webp', slug: 'ha-long-bay' },
  { name: 'Da Nang', imgUrl: '/popular_cities/Da Nang.webp', slug: 'da-nang' },
  { name: 'Hoi An', imgUrl: '/popular_cities/Hoi An.webp', slug: 'hoi-an' },
  { name: 'Phu Quoc', imgUrl: '/popular_cities/Phu Quoc.webp', slug: 'phu-quoc' },
  { name: 'Ho Chi Minh City', imgUrl: '/popular_cities/Ho Chi Minh City.webp', slug: 'ho-chi-minh-city' },
  { name: 'Ninh Binh', imgUrl: '/destinations/Ninh_Binh.webp', slug: 'ninh-binh' },
  { name: 'Mekong Delta', imgUrl: '/destinations/Mekong_Delta.webp', slug: 'mekong-delta' },
];

export default function PopularDestinations() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-3 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-[#376941]">
          Popular{' '}
          <span className="font-cursive">
            Cities
          </span>
        </h2>
      </div>

      {/* Swiper Cards */}
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1.5}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 2.5, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 3.5, spaceBetween: 16 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {popularDestinationsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/cities/${item.slug}`}
                className="cursor-pointer"
                title={item.name}
              >
                <div className="relative rounded-md overflow-hidden shadow-lg aspect-[3/2]">
                  <ImgWithPlaceholder
                    src={item.imgUrl}
                    alt={item.name}
                    title={item.name}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="object-cover rounded-md"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* City Name on image */}
                  <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-gradient-to-t from-black/60 to-transparent rounded-b-md">
                    <p className="text-sm sm:text-base font-semibold text-white drop-shadow-md">{item.name}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
