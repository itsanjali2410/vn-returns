'use client';

import { useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface PackageOverviewProps {
  title: string;
  cards: {
    title: string;
    slug: string;
    image: string;
    pricing: string;
    info: { icon: string; text: string }[];
  }[];
}

export default function PackageOverview({ title, cards }: PackageOverviewProps) {
  const router = useRouter();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleCardClick = (slug: string) => {
    const destination = slug.toLowerCase();
    router.push(`${destination}`);
  };

  // ✅ Memoize the Swiper slides to prevent unnecessary re-renders
  const memoizedSlides = useMemo(
    () =>
      cards.map((card, index) => (
        <SwiperSlide key={`package-card-${index}`}>
          <div
            className="relative flex-1 h-[360px] rounded-lg overflow-hidden shadow-md bg-white cursor-pointer max-[768px]:h-[300]"
            onClick={() => handleCardClick(card.slug)}
          >
            {/* Pricing Tag */}
            <div className="absolute top-4 right-2 bg-yellow-400 text-black font-bold px-2 py-2 rounded z-10 text-sm max-[768px]:text-xs max-[400px]:text-[0.7rem]">
              {card.pricing}
            </div>

            {/* Card Image */}
            <Image
              src={card.image}
              alt={card.title}
              title={card.title}
              width={190}
              height={360}
              className="w-full h-[360px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-5 bg-[linear-gradient(rgba(0,0,0,0)_1%,rgb(0,0,0)_76.21%)] text-white max-[768px]:p-3">
              <div className="font-bold text-lg max-[768px]:text-lg mb-2">{card.title}</div>
              <div className="flex flex-wrap justify-between mb-2">
                {card.info.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-[0.8rem] max-[768px]:text-[0.8rem] gap-1"
                  >
                    <span
                      className="inline-block w-5 h-5 bg-no-repeat bg-contain transform rotate-[-90deg]"
                      style={{
                        backgroundImage: `url(${item.icon})`,
                        filter: 'brightness(0) invert(1)',
                      }}
                    />
                    {item.text === 'Flight' ? (
                      <div className="flex flex-col items-start leading-[1.1]">
                        <span className="text-[0.8rem] max-[768px]:text-[0.8rem]">with</span>
                        <span className="text-[0.8rem] font-bold max-[768px]:text-[0.7rem]">
                          Flight
                        </span>
                      </div>
                    ) : (
                      <span>
                        <strong>{item.text}</strong>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      )),
    [cards] // ✅ Recompute only if cards change
  );

  // ✅ Split title once and memoize
  const [firstWord, secondWord] = useMemo(() => title.split(' '), [title]);

  return (
    <div className="relative overflow-hidden max-[1340px]:px-[5rem] max-[1080px]:px-[3rem] max-[768px]:px-[1rem] mb-5 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      {/* Section Title */}
      <div className="flex justify-between items-center lg:py-4 sm:py-2">
        <h2 className="flex flex-row items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase gap-x-2">
          <span>{firstWord}</span>
          <span className="font-cursive bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent">
            {secondWord}
          </span>
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        className="trending-offers-slider"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          1080: { slidesPerView: 4 },
          768: { slidesPerView: 4 },
          400: { slidesPerView: 2 },
          300: { slidesPerView: 2 },
        }}
      >
        {memoizedSlides}
      </Swiper>
    </div>
  );
}
