'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  { author: 'Nandita Mishra', text: 'I have booked the Vietnam Private Tour (family of 3) for 9 Nights 10 Days. Exceptional and transparent service by Ms. Linh (Lynn). It is really hassle-free, pro-active. English speaking tour guides and drivers are very friendly and helpful. Private vehicles provided are of highest standard. I will rate 10 out of 10 for their exemplary service.' },
  { author: 'Nihar', text: 'My recent trip to Vietnam with Phu Minh Quang Travel was truly an unforgettable experience! The team was professional, friendly, and ensured we enjoyed the beauty of Vietnam, from vibrant cities to stunning landscapes. Highly recommended!' },
  { author: 'Le Hang', text: 'I recently had the pleasure of booking a trip through Phu Minh Quang Travel and it was an exceptional experience from start to finish! The tour guides were professional, friendly, and well-informed. The accommodations and transportation were comfortable and convenient.' },
  { author: 'Shah', text: 'The itinerary was well-planned, allowing us to explore the highlights while also having free time to relax. The guide was knowledgeable, friendly, and went above and beyond. I would highly recommend Phu Minh Quang Travel for a seamless and enjoyable travel experience!' },
  { author: 'Nguyen Minh Quan', text: 'I recently had the absolute pleasure of experiencing an unforgettable vacation, thanks to the exceptional services provided by Phu Minh Quang Travel. Every detail was meticulously planned, ensuring a seamless and enjoyable journey.' },
  { author: 'Duc Chi', text: 'Fantastic experience with Phu Minh Quang Travel! The team was professional and attentive, ensuring a smooth and enjoyable trip. Highly recommend for anyone visiting Vietnam.' },
  { author: 'Tram Anh', text: 'Booked a tour for summer and it was wonderful. The 4D3N itinerary covered all the hot spots in Da Nang like Ba Na, Linh Ung Pagoda, Coconut Forest, Hoi An. Hotel was clean and luxurious, guide was enthusiastic with deep knowledge.' },
  { author: 'Amandi', text: 'Recently traveled to Hanoi for 5 days and 4 nights. My first impression is the enthusiasm of the staff. They answered questions in the middle of the night very attentively, making me feel very secure.' },
  { author: 'Pankaj', text: 'I went on the Ha Long Bay tour a long time ago. I really liked the tour guide named Tien. The company booked a very clean hotel and the local specialties were quite delicious. Quality beyond expectations.' },
  { author: 'Helen', text: 'Dedicated and thoughtful from food, entertainment to hotels, friendly tour guides with very good travel knowledge.' },
  { author: 'Kezia', text: 'This is my first time going on a trip organized by the company. I felt the trip was fun because I went with my husband, family and made new friends on the same trip.' },
  { author: 'Salome', text: 'This is the first time our family has the opportunity to travel to Vietnam. Thanks to the tour guide\'s enthusiasm, everyone in the group was able to easily get to know each other and make friends.' },
  { author: 'Sapphire', text: 'My family had a memorable holiday in Phu Quoc - Vietnam. In my next trips, I will definitely continue to choose Vietnam, chose to go with Phu Minh Quang Travel.' },
  { author: 'Quinn', text: 'The staff is very enthusiastic and meets customers\' requests. Local guides are very enthusiastic, have a fairly standard level of knowledge, are fluent and always listen to serve customers better.' },
  { author: 'Anna', text: 'Phu Quoc beach is really beautiful. My friend and I had wonderful and memorable experiences. Staff is very attentive and enthusiastic. Quan-guides is cute and takes care of customers.' },
  { author: 'Naamah', text: 'The way their staff behave and co-operate to your smallest and even the weirdest queries, hats off to their dedication and mannerism!! Sarah, Alex and April are great people, very honest and humble giving best prices with top quality services.' },
  { author: 'Daisy Chow', text: 'Fortunately, we found your company through Facebook. Mr. Minh Nhat negotiated this trip with us. It was a pleasant process! The driver Hung was very friendly and the driving was very safe. Thank you very much!' },
  { author: 'Gwen', text: 'Good service, reasonable destination, hotel, meals in the program, everything is fine. Thank you Phu Minh Quang Travel!' },
  { author: 'Mint', text: 'Ha Long Bay, worthy of being named one of the 7 natural wonders of the world. I really like kayaking in Luon cave. Thank you very enthusiastic tour company and tour guide Hoang!' },
  { author: 'LuLuta', text: 'Enthusiastic tour guide, beautiful scenery, delicious food, I will come back. I will recommend my friends to come here.' },
  { author: 'Mayu', text: 'A very interesting tour, very professional tour guide (Mr. Quan), very good English, clear explanations. Very good!!' },
  { author: 'Rainbow', text: 'The tour guide is very enthusiastic and guides guests carefully. Lots of interesting places, right time. Good food.' },
  { author: 'Bernic', text: 'My family is very satisfied with the Ha Long trip. I wish you more and more success, thank you!' },
  { author: 'Gwyn', text: 'The detailed information about accommodations, itineraries, and inclusions gave me confidence in my choices. Any inquiries I had were promptly addressed by the responsive customer support team.' },
  { author: 'Randolph', text: 'The itinerary covered key destinations like Ho Chi Minh City and Hoi An, offering a mix of urban and cultural experiences. The company\'s service is very good, very valuable.' },
  { author: 'Alexander', text: 'The transportation arrangements were efficient and comfortable. The tour buses were well-maintained, and the drivers were skilled and professional.' },
  { author: 'Diego', text: 'My trip to Vietnam was absolutely fantastic! The tour service was very professional, from the dedicated tour guides to the quality of accommodations and unique culinary experiences.' },
  { author: 'Guinevere', text: 'The hotels selected for our stay were comfortable and well-located.' },
  { author: 'Christopher', text: 'I recently had the pleasure of experiencing a tour with Phu Minh Quang Travel, and I must say it was an unforgettable adventure.' },
  { author: 'Bellamy', text: 'Services of this company is among the best I\'ve experienced. They are always ready to assist and resolve any issues promptly, enhancing the overall value of the trip.' },
  { author: 'Alva', text: 'My trip to Vietnam was absolutely fantastic! The tour service was very professional, from the dedicated tour guides to the quality of accommodations and unique culinary experiences.' },
  { author: 'Abhay K', text: 'Wow and amazing hospitality by April (Nguyen Thi Loan). Thanks for planning my trip so well and taking care of our family at every step. Amazing service and highly recommended.' },
];

function getInitials(name: string) {
  return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);
}

const colors = ['bg-[#ffc42d]', 'bg-[#198754]', 'bg-[#3b82f6]', 'bg-[#ef4444]', 'bg-[#8b5cf6]', 'bg-[#ec4899]'];

export default function VietnamTestimonials() {
  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      <div className="flex justify-between items-center mb-3 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase flex flex-row items-center gap-x-2">
          <span>Customer</span>
          <span className="font-cursive bg-gradient-to-r from-[#ffc42d]/90 to-[#e6b028] bg-clip-text text-transparent">
            Reviews
          </span>
        </h2>
        <span className="text-sm text-gray-500">{testimonials.length}+ Reviews</span>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 h-full flex flex-col">
              {/* Stars */}
              <div className="text-[#ffc42d] text-sm mb-3">
                {'★'.repeat(5)}
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 flex-1 mb-4">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white text-xs font-bold`}>
                  {getInitials(item.author)}
                </div>
                <span className="font-semibold text-sm text-gray-900">{item.author}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
