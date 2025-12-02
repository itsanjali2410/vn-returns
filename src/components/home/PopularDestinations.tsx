'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'; // ✅ Correct import

type Destination = {
  name: string;
  imgUrl: string;
};

const popularDestinationsData: Destination[] = [
  { name: 'Dubai', imgUrl: '/PopularDestination/Dubai.webp' },
  { name: 'Thailand', imgUrl: '/PopularDestination/Thailand.webp' },
  { name: 'Singapore', imgUrl: '/PopularDestination/Singapore.webp' },
  { name: 'Malaysia', imgUrl: '/PopularDestination/Malaysia.webp' },
  { name: 'Bali', imgUrl: '/PopularDestination/Bali.webp' },
  { name: 'Hong Kong', imgUrl: '/PopularDestination/Hong kong.webp' },
  { name: 'Europe', imgUrl: '/PopularDestination/Europe.webp' },
  { name: 'Vietnam', imgUrl: '/PopularDestination/Vietnam.webp' },
  { name: 'Australia', imgUrl: '/PopularDestination/Australia.webp' },
];

export default function PopularDestinations() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  const handleClick = (destination: string) => {
    router.push(`/${destination.toLowerCase()}`);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      {/* Section Title */}
      <div className="flex justify-between items-center mt-8 pb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
          Popular{' '}
          <span className="font-cursive bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent">
            Destinations
          </span>
        </h2>
      </div>

      {/* Swiper Cards */}
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={2} // ✅ show two thumbnails on mobile
          breakpoints={{
            480: { slidesPerView: 2.5 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
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
                href={`/international/${item.name.toLowerCase()}`}
                className="cursor-pointer rounded-md overflow-hidden shadow-lg"
                title={item.name}
              >
                {/* Responsive Image */}
                <div className="relative w-full h-[142px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[280px]">
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    title={item.name}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 480px) 174px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 300px"
                    priority={index === 0}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
