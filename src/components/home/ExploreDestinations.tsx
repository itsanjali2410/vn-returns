'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

interface Card {
  image: string;
  location: string;
  price: string;
  url: string;
}

const cards: Card[] = [
  {
    image: '/explore-destination/europe.webp',
    location: 'Europe',
    price: '₹ 2,74,999/-',
    url: '/international/europe',
  },
  {
    image: '/explore-destination/australia.webp',
    location: 'Australia',
    price: '₹ 2,48,999/-',
    url: '/international/australia',
  },
  {
    image: '/explore-destination/japan.webp',
    location: 'Japan',
    price: '₹ 3,28,999/-',
    url: '/international/japan',
  },
  {
    image: '/explore-destination/new-zealand.webp',
    location: 'New Zealand',
    price: '₹ 3,49,999/-',
    url: '',
  },
  {
    image: '/explore-destination/turkey.webp',
    location: 'Turkey',
    price: '₹ 1,39,999/-',
    url: '/international/turkey',
  },
  {
    image: '/explore-destination/south-africa.webp',
    location: 'South Africa',
    price: '₹ 2,79,999/-',
    url: '',
  },
];

export default function ExploreDestinations() {
  const router = useRouter();

  const handleCardClick = (url: string) => {
    if (url) router.push(url);
  };

  // ✅ Memoize desktop layout cards
  const desktopUpperRow = useMemo(
    () =>
      cards.slice(0, 2).map((card, index) => (
        <div
          key={index}
          className="relative w-full cursor-pointer group"
          onClick={() => handleCardClick(card.url)}
        >
          <Image
            src={card.image}
            alt={card.location}
            title={card.location}
            loading="lazy"
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full h-2/5 rounded-md bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-5 left-5 text-white font-bold text-xl drop-shadow-md">
            {card.location}
            <br />
            <span className="text-base">{card.price}</span>
          </div>
        </div>
      )),
    []
  );

  const desktopBottomRow = useMemo(
    () =>
      cards.slice(2).map((card, index) => (
        <div
          key={index}
          className="relative w-full cursor-pointer"
          onClick={() => handleCardClick(card.url)}
        >
          <Image
            src={card.image}
            alt={card.location}
            title={card.location}
            loading="lazy"
            width={400}
            height={300}
            className="w-full h-full rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full h-2/5 rounded-md bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-5 left-5 text-white font-bold text-xl drop-shadow-md">
            {card.location}
            <br />
            <span className="text-base">{card.price}</span>
          </div>
        </div>
      )),
    []
  );

  // ✅ Memoize mobile Swiper slides
  const mobileSlides = useMemo(
    () =>
      cards.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative cursor-pointer" onClick={() => handleCardClick(item.url)}>
            <Image
              src={item.image}
              alt={item.location}
              title={item.location}
              loading="lazy"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/5 rounded-md bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-5 left-3 text-white font-bold text-lg drop-shadow-md">
              {item.location}
              <br />
              <span className="text-sm">{item.price}</span>
            </div>
          </div>
        </SwiperSlide>
      )),
    []
  );

  return (
    <div className="py-10 max-[1340px]:px-[5rem] max-[1080px]:px-[3rem] max-[768px]:px-[1rem] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      {/* Title */}
      <div className="uppercase">
        <h2 className="flex flex-row items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase gap-x-2">
          <span>Explore</span>
          <span className="font-cursive bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent">
            Destinations
          </span>
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col w-full gap-2 mt-6">
        <div className="flex gap-2">{desktopUpperRow}</div>
        <div className="flex gap-2">{desktopBottomRow}</div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden mt-6">
        <Swiper slidesPerView={1} spaceBetween={20}>
          {mobileSlides}
        </Swiper>
      </div>
    </div>
  );
}
