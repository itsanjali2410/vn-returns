'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const destinations = [
  { id: 'hanoi', name: 'Hanoi', region: 'Northern Vietnam', description: 'Ancient architecture and vibrant street life', image: '/destinations/Hanoi.webp' },
  { id: 'ha-long-bay', name: 'Ha Long Bay', region: 'Northern Coast', description: 'Emerald waters and limestone islands', image: '/destinations/Halong_Bay.webp' },
  { id: 'ninh-binh', name: 'Ninh Binh', region: 'Red River Delta', description: 'Stunning karst landscapes and ancient temples', image: '/destinations/Ninh_Binh.webp' },
  { id: 'da-nang', name: 'Da Nang', region: 'Central Vietnam', description: 'Beautiful beaches and the iconic Golden Bridge', image: '/destinations/Da_Nang_City_Tour.webp' },
  { id: 'hoi-an', name: 'Hoi An', region: 'Central Coast', description: 'UNESCO ancient town with iconic lanterns', image: '/destinations/Hoi_An_Ancient_Town.webp' },
  { id: 'ba-na-hills', name: 'Ba Na Hills', region: 'Da Nang Area', description: 'Golden Bridge and mountain resort paradise', image: '/destinations/Ba_Na_Hills_Golden_Bridge.webp' },
  { id: 'ho-chi-minh-city', name: 'Ho Chi Minh City', region: 'Southern Vietnam', description: 'Vibrant metropolis with rich war history', image: '/destinations/Ho_Chi_Minh_City.webp' },
  { id: 'phu-quoc', name: 'Phu Quoc', region: 'Southern Islands', description: 'Tropical island with pristine beaches', image: '/destinations/Phu_Quoc_Island.webp' },
  { id: 'cu-chi-tunnels', name: 'Cu Chi Tunnels', region: 'Ho Chi Minh Area', description: 'Vietnam War underground tunnel network', image: '/destinations/Cu_Chi_Tunnels.webp' },
  { id: 'mekong-delta', name: 'Mekong Delta', region: 'Southern Vietnam', description: 'Floating markets and coconut-lined waterways', image: '/destinations/Mekong_Delta.webp' },
  { id: 'marble-mountain', name: 'Marble Mountains', region: 'Da Nang Area', description: 'Five elemental hills with caves and temples', image: '/destinations/Marble_Mountain.webp' },
  { id: 'monkey-mountain', name: 'Monkey Mountain', region: 'Da Nang Area', description: 'Lush peninsula with wildlife and ocean views', image: '/destinations/Monkey_Mountain.webp' },
];

export default function ExploreCities() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase flex flex-row items-center gap-x-2 text-[#376941]">
          <span>Explore</span>
          <span className="font-cursive">
            Cities
          </span>
        </h2>
        <a href="/cities/hanoi" className="text-sm text-[#ffc42d] hover:underline font-medium hidden sm:block">
          View All →
        </a>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1.2}
          onSwiper={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {destinations.map((dest, index) => (
            <SwiperSlide key={index}>
              <a
                href={`/cities/${dest.id}`}
                className="block relative rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image with overlay */}
                <div className="relative aspect-[4/3]">
                  <ImgWithPlaceholder
                    src={dest.image}
                    alt={dest.name}
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-xl" />

                  {/* Region badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                    {dest.region}
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-white font-bold text-base sm:text-lg drop-shadow-md mb-0.5">
                      {dest.name}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm line-clamp-1 drop-shadow-sm">
                      {dest.description}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white shadow-lg rounded-full hidden md:flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Previous"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white shadow-lg rounded-full hidden md:flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Next"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
