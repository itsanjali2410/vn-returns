'use client';

import { useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/navigation';

interface PackageOverviewProps {
  title: string;
  cards: {
    title: string;
    slug: string;
    image: string;
    pricing: string;
    info: { icon: string; text?: string }[];
  }[];
}

export default function PackageOverview({ title, cards }: PackageOverviewProps) {
  const router = useRouter();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleCardClick = (slug: string) => {
    router.push(slug.toLowerCase());
  };

  const memoizedSlides = useMemo(
    () =>
      cards.map((card, index) => (
        <SwiperSlide key={`package-card-${index}`}>
          <div
            className="relative rounded-xl overflow-hidden shadow-sm cursor-pointer group"
            onClick={() => handleCardClick(card.slug)}
          >
            {/* Full image - no crop */}
            <img
              src={card.image}
              alt={card.title}
              title={card.title}
              className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Price badge */}
            <div className="absolute top-3 right-3 bg-[#ffc42d] text-gray-900 font-bold px-3 py-1 rounded-full text-xs sm:text-sm shadow-md z-10">
              {card.pricing}
            </div>

            {/* Text overlay on image */}
            <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-gradient-to-t from-black/75 via-black/40 to-transparent rounded-b-xl">
              <h3 className="font-bold text-sm sm:text-base text-white mb-1 drop-shadow-md line-clamp-2">
                {card.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {card.info.map((item, idx) => (
                  <div key={idx} className="flex items-center text-[10px] sm:text-xs text-white/90 gap-1">
                    <span
                      className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 bg-no-repeat bg-contain brightness-0 invert"
                      style={{ backgroundImage: `url(${item.icon})` }}
                    />
                    {item.text && <span className="font-medium">{item.text}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      )),
    [cards]
  );

  const [firstWord, secondWord] = useMemo(() => title.split(' '), [title]);

  return (
    <div className="relative overflow-hidden px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      <div className="flex justify-between items-center mb-3 sm:mb-6">
        <h2 className="flex flex-row items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase gap-x-2">
          <span>{firstWord}</span>
          <span className="font-cursive bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent">
            {secondWord}
          </span>
        </h2>
      </div>

      <Swiper
        className="trending-offers-slider"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={12}
        slidesPerView={1.3}
        breakpoints={{
          480: { slidesPerView: 1.8, spaceBetween: 12 },
          640: { slidesPerView: 2.2, spaceBetween: 14 },
          768: { slidesPerView: 2.8, spaceBetween: 16 },
          1024: { slidesPerView: 3.2, spaceBetween: 16 },
          1280: { slidesPerView: 3.5, spaceBetween: 16 },
        }}
      >
        {memoizedSlides}
      </Swiper>
    </div>
  );
}
