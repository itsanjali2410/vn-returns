'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function VietnamTestimonials() {
  const testimonials = [
    {
      rating: 5.0,
      text: 'I booked the Vietnam Private Tour (family of 3) for 9 Nights 10 Days with VNDMC Vietnam Destination Management. Exceptional service by Ms. Linh (Lynn). Hassle-free, proactive, with English-speaking guides, and top-notch private vehicles. Highly recommended!',
      author: 'Nandita Mishra',
    },
    {
      rating: 5.0,
      text: 'My recent trip to Vietnam with VNDMC Vietnam Destination Management was unforgettable! The team was professional, friendly, and ensured we enjoyed the beauty of Vietnam. Highly recommended!',
      author: 'Nihar',
    },
    {
      rating: 5.0,
      text: 'Exceptional experience from start to finish! Helpful staff, professional tour guides, and comfortable accommodations. Highly recommend VNDMC Vietnam Destination Management!',
      author: 'Le Hang',
    },
    {
      rating: 5.0,
      text: 'Exceeded all my expectations! Well-planned itinerary, knowledgeable guide, and top-notch accommodations. A seamless and enjoyable experience.',
      author: 'Shah',
    },
    {
      rating: 5.0,
      text: 'Unforgettable vacation with VNDMC Vietnam Destination Management. Perfectly planned itinerary, luxury accommodations, and amazing service. Truly seamless journey!',
      author: 'Nguyen Minh Quan',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Trusted by travelers worldwide for exceptional Vietnam experiences
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-[#ffc42d]">{testimonial.rating}</span>
                  <span className="text-[#ffc42d] ml-1">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


