'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

interface Hotel {
  name: string;
  city: string;
  description: string;
  rating: number;
  image: string;
}

const hotels: Hotel[] = [
  { name: 'Sofitel Legend Metropole', city: 'Hanoi', description: 'French colonial elegance with modern luxury', rating: 4.8, image: '/hotels/La_Siesta_Hotel_Spa.webp' },
  { name: 'Hilton Hanoi Opera', city: 'Hanoi', description: 'World-class dining and spa in central Hanoi', rating: 4.8, image: '/hotels/Hilton_Hanoi_Opera.webp' },
  { name: 'La Siesta Hotel & Spa', city: 'Hanoi', description: 'Charming boutique with traditional architecture', rating: 4.5, image: '/hotels/La_Siesta_Hotel_Spa.webp' },
  { name: 'Stellar of the Seas', city: 'Ha Long Bay', description: 'Ultra-luxury cruise through emerald waters', rating: 4.8, image: '/hotels/Stellar_of_the_Seas.webp' },
  { name: 'Tuan Chau Island Resort', city: 'Ha Long Bay', description: 'Beach resort with water sports and spa', rating: 4.5, image: '/hotels/Tuan_Chau_Island_Resort.webp' },
  { name: 'Topas Ecolodge', city: 'Sapa', description: 'Eco-luxury with panoramic mountain views', rating: 4.5, image: '/hotels/Topas_Ecolodge.webp' },
  { name: 'Victoria Sapa Resort', city: 'Sapa', description: 'French colonial elegance overlooking valley', rating: 4.5, image: '/hotels/Victoria_Sapa_Resort_Spa.webp' },
  { name: 'Sheraton Grand Da Nang', city: 'Da Nang', description: 'Beachfront luxury with golf course', rating: 4.8, image: '/hotels/Sheraton_Grand_DaNang_Resort.webp' },
  { name: 'Fusion Maia Da Nang', city: 'Da Nang', description: 'All-inclusive beachfront resort', rating: 4.8, image: '/hotels/Fusion_Maia_DaNang.webp' },
  { name: 'Anantara Hoi An', city: 'Hoi An', description: 'Riverside resort with lantern-inspired design', rating: 4.8, image: '/hotels/Anantara_HoiAn_Resort.webp' },
  { name: 'Huong Giang Resort', city: 'Hue', description: 'Riverside resort on the Perfume River', rating: 4.5, image: '/hotels/Huong_Giang_Hotel_Resort_Spa.webp' },
  { name: 'La Residence Hue', city: 'Hue', description: 'Historic colonial mansion turned hotel', rating: 4.8, image: '/hotels/La_Residence_Hue_Hotel_Spa.webp' },
  { name: 'Melia Phu Quoc', city: 'Phu Quoc', description: 'Beachfront all-inclusive paradise', rating: 4.8, image: '/hotels/Melia_PhuQuoc.webp' },
  { name: 'JW Marriott Phu Quoc', city: 'Phu Quoc', description: 'Ultra-luxury in scenic Emerald Bay', rating: 4.8, image: '/hotels/JW_Marriott_PhuQuoc_Emerald_Bay.webp' },
  { name: 'The Reverie Saigon', city: 'Ho Chi Minh', description: 'Ultra-luxury with Michelin-starred dining', rating: 4.8, image: '/hotels/The_Reverie_Saigon.webp' },
  { name: 'Caravelle Hotel', city: 'Ho Chi Minh', description: 'Historic hotel with legendary rooftop bar', rating: 4.8, image: '/hotels/Caravelle_Hotel.webp' },
  { name: 'Park Hyatt Saigon', city: 'Ho Chi Minh', description: 'French colonial charm with rooftop pool', rating: 4.8, image: '/hotels/Park_Hyatt_Saigon.webp' },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-[#ffc42d] text-xs">
      {'★'.repeat(full)}{half ? '½' : ''}
    </span>
  );
}

export default function PartnerHotels() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase flex flex-row items-center gap-x-2">
          <span>Partner</span>
          <span className="font-cursive bg-gradient-to-r from-[#ffc42d]/90 to-[#e6b028] bg-clip-text text-transparent">
            Hotels
          </span>
        </h2>
        <span className="text-sm text-gray-400 hidden sm:block">{hotels.length}+ Premium Partners</span>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          speed={800}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1.2}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
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
          {hotels.map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-all">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImgWithPlaceholder
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* City badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                    {hotel.city}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-1 group-hover:text-[#ffc42d] transition-colors">
                      {hotel.name}
                    </h3>
                    <Stars rating={hotel.rating} />
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {hotel.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white shadow-lg rounded-full hidden md:flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Previous hotel"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white shadow-lg rounded-full hidden md:flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Next hotel"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
