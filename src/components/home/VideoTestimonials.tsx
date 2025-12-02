'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const testimonials = [
  { videoUrl: '/Videos/testimonial-gif/2.gif', title: "Roma's Bali Vacation" },
  { videoUrl: '/Videos/testimonial-gif/3.gif', title: "Sandip's Dubai Vacation" },
  { videoUrl: '/Videos/testimonial-gif/4.gif', title: "Mayur's Australia Vacation" },
  { videoUrl: '/Videos/testimonial-gif/5.gif', title: "Binieka's Dubai Vacation" },
  { videoUrl: '/Videos/testimonial-gif/6.gif', title: 'Nidhi Mundra Bali Trip' },
  { videoUrl: '/Videos/testimonial-gif/7.gif', title: 'Prathamesh Dubai Trip' },
  { videoUrl: '/Videos/testimonial-gif/8.gif', title: 'Mrs. Arjal Patel' },
  { videoUrl: '/Videos/testimonial-gif/1.gif', title: 'Bonani Chatterjee' },
];

export default function VideoTestimonials() {
  return (
    <div
      className="mt-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/backgrounds/Videotestimonials-bg.webp')",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center w-full gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-white font-cursive">
            Tripstars Diaries 📖✈️
          </h2>
          <p className="text-white text-base sm:text-lg mt-2">
            – Real stories, real travelers, real adventures ❤️
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center text-white">
                  <a href={`/video?index=${index}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                      <Image
                        src={item.videoUrl}
                        alt={item.title}
                        title={item.title}
                        width={400}
                        height={300}
                        unoptimized
                        className="w-full h-auto"
                      />
                    </div>
                  </a>
                  <p className="mt-6 text-2xl font-semibold">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
