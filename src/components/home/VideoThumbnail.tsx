'use client';

import React, { useMemo, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

function VideoThumbnailComponent() {
  const videos = useMemo(
    () => [
      {
        thumbnail:
          'https://i.ytimg.com/vi/lrb93i4EUi4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDAlxvChgpICVVkOxVat_FQwNYD9g',
        link: 'https://youtu.be/lrb93i4EUi4?si=CTVW5Owqiry78BKb',
        text: "Bali Bliss : Aditya Gadhvi's Unforgettable Journey | Tripstars Holiday",
      },
      {
        thumbnail: '/thumbnil/1.webp',
        link: 'https://www.youtube.com/watch?v=LyfnbIjW5Q0',
        text: 'Happy Travellers Family Group | Vietnam Tours | With Tripstars Holidays',
      },
      {
        thumbnail: '/thumbnil/2.webp',
        link: 'https://www.youtube.com/watch?v=ybYvJyN5cv4',
        text: "Piyush Patel's Family Trip | Vietnam Tours | with Tripstars Holidays",
      },
      {
        thumbnail: '/thumbnil/3.webp',
        link: 'https://www.youtube.com/watch?v=myIKYrcJ7WY',
        text: "Akash Jain's Memorable Family Trip | to Vietnam with Tripstars.",
      },
      {
        thumbnail: '/thumbnil/4.webp',
        link: 'https://www.youtube.com/shorts/8QpandkwtYg',
        text: "Mr. Omkar Tambe's | Romantic Bali Honeymoon | Tripstars Holidays.",
      },
    ],
    []
  );

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-8">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center text-gray-800 mb-8">
        Unforgettable Journeys, Captured in Moments ❤️
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="block">
                {/* ✅ Fixed height issue on mobile */}
                <div className="relative w-full h-52 sm:h-48 md:h-40 lg:h-52">
                  <Image
                    src={video.thumbnail}
                    alt={video.text}
                    title={video.text}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* ✅ Always visible text on all screens */}
                <div className="p-3 text-xs sm:text-sm md:text-base font-medium text-gray-800 leading-snug bg-white">
                  <b>{video.text}</b>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(VideoThumbnailComponent);
