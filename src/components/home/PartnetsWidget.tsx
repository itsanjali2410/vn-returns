'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

interface LogoItem {
  name: string;
  imgUrl: any; // Next.js static imports are typed as StaticImageData
}

const logosData: LogoItem[] = [
  { name: 'Singapore', imgUrl: '/images/logo/brandLogos/Singapore.webp' },
  {
    name: 'Partner 2',
    imgUrl: '/images/logo/brandLogos/Untitled design (14).webp',
  },
  {
    name: 'Partner 3',
    imgUrl: '/images/logo/brandLogos/Untitled design (16).webp',
  },
  {
    name: 'Partner 4',
    imgUrl: '/images/logo/brandLogos/Untitled design (17).webp',
  },
  {
    name: 'Partner 5',
    imgUrl: '/images/logo/brandLogos/Untitled design (18).webp',
  },
  {
    name: 'Partner 6',
    imgUrl: '/images/logo/brandLogos/Untitled design (19).webp',
  },
  {
    name: 'Partner 7',
    imgUrl: '/images/logo/brandLogos/Untitled design (20).webp',
  },
  {
    name: 'Partner 8',
    imgUrl: '/images/logo/brandLogos/Untitled design (21).webp',
  },
];

export default function PartnersWidget() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 max-[1340px]:px-[5rem] max-[1080px]:px-[3rem] max-[768px]:px-[1rem] mt-4 sm:mt-2">
      {/* Section Title */}
      <div className="flex justify-between items-center py-4 sm:py-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase flex flex-row items-center gap-x-2">
          <span>Tourism</span>
          <span className="font-cursive bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent">
            Board Partners
          </span>
        </h2>
      </div>

      {/* Logo Carousel */}
      <div className="my-8 sm:my-4">
        <Swiper
          loop
          speed={1200}
          autoplay={{ delay: 1800 }}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1080: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
          }}
        >
          {logosData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={item.imgUrl}
                    alt={item.name || `Partner ${index + 1}`}
                    title={item.name || `Partner ${index + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 50vw, 
           (max-width: 1200px) 33vw, 
           120px"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
