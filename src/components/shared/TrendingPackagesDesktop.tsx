'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

interface InfoItem {
  icon: string;
  text: string;
}

interface CardItem {
  title: string;
  image: string;
  pricing: string;
  info: InfoItem[];
  slug?: string;
}

interface Props {
  packages: CardItem[];
  openFormModal: (name: string) => void;
  basePath?: string;
}

const TrendingPackagesDesktop: React.FC<Props> = ({ packages, openFormModal, basePath }) => {
  const router = useRouter();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSwiperReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (card: CardItem) => {
    if (basePath && card.slug) {
      router.push(`${basePath}/${card.slug}`);
      return;
    }
    const lowerTitle = card.title.toLowerCase();
    const destinations = ['bali', 'vietnam', 'dubai', 'singapore', 'thailand', 'baku', 'turkey'];
    const matchedDestination = destinations.find((d) => lowerTitle.includes(d));

    if (matchedDestination) {
      const packageSlug = card.title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/gi, '')
        .trim()
        .replace(/\s+/g, '-');
      router.push(`/international/${matchedDestination}/${packageSlug}`);
    }
  };

  return (
    <div className="relative">
      {swiperReady && (
        <Swiper
          className="trending-offers-slider"
          modules={[Navigation, Grid]}
          observer={true}
          observeParents={true}
          spaceBetween={20}
          slidesPerView={4}
          grid={{ rows: 1 }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
          }}
          onBeforeInit={(swiper) => {
            if (prevRef.current && nextRef.current) {
              if (typeof swiper.params.navigation === 'object') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {packages.map((card, index) => (
            <SwiperSlide key={index}>
              <article
                onClick={() => handleCardClick(card)}
                className="relative cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-transform "
              >
                <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded text-sm z-10">
                  {card.pricing}
                </div>
                <Image
                  src={card.image}
                  alt={card.title}
                  title={card.title}
                  width={348}
                  height={320}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute bottom-8 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <div className="flex justify-between gap-6 flex-wrap">
                    {card.info.map((item, i) => (
                      <div key={i} className="flex items-center text-xs gap-1">
                        <span
                          className="inline-block h-[18px] w-[18px] bg-contain bg-no-repeat brightness-0 invert"
                          style={{ backgroundImage: `url(${item.icon})` }}
                        />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openFormModal(card.title);
                  }}
                  className="absolute bottom-0 left-0 right-0 w-full bg-yellow-400 text-black font-semibold py-2 text-sm rounded-b-xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Inquire Now
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center pointer-events-none px-2 sm:px-4">
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="pointer-events-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold 
             w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg 
             hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 
             focus:ring-yellow-300 focus:ring-offset-2"
        >
          ‹
        </button>

        <button
          ref={nextRef}
          aria-label="Next slide"
          className="pointer-events-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold 
             w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg 
             hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 
             focus:ring-yellow-300 focus:ring-offset-2"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TrendingPackagesDesktop;
