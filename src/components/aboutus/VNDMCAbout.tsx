'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

import Link from 'next/link';

export default function VNDMCAbout() {
  const services = [
    { title: 'Custom Itineraries', description: 'Personalized travel plans designed around your interests, budget, and schedule.' },
    { title: 'Private Tours', description: 'Dedicated guides and private vehicles for an exclusive, comfortable experience.' },
    { title: 'Hotel Booking', description: 'Handpicked accommodations from boutique stays to luxury resorts across Vietnam.' },
    { title: 'Airport Transfers', description: 'Seamless pickup and drop-off with professional, English-speaking drivers.' },
    { title: 'Cruise Packages', description: 'Day and overnight cruises through Ha Long Bay and Mekong Delta waterways.' },
    { title: 'MICE & Events', description: 'Corporate meetings, incentives, conferences, and team-building events.' },
  ];

  const whyUs = [
    { title: 'Local Expertise', desc: '15+ years of deep knowledge across every region of Vietnam.' },
    { title: 'English-Speaking Guides', desc: 'Professional, certified guides who bring destinations to life.' },
    { title: 'Best Price Guarantee', desc: 'Direct partnerships with hotels and operators for the best rates.' },
    { title: '24/7 Support', desc: 'Round-the-clock assistance before, during, and after your trip.' },
    { title: 'Flexible Bookings', desc: 'Easy modifications and transparent cancellation policies.' },
    { title: 'Trusted by Thousands', desc: '20,000+ happy travelers with 5-star reviews worldwide.' },
  ];

  return (
    <>
      
      {/* Our Story */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <p className="text-[#ffc42d] font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                With You On<br />Every Trip
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Vietnam DMC (Phu Minh Quang Travel) is a leading Destination Management Company
                  based in Da Nang, Central Vietnam. Our active, energetic, and professionally trained
                  team is committed to delivering exceptional travel experiences.
                </p>
                <p>
                  We go beyond packaged tours — designing individual excursions based on each customer's
                  specifications, creating distinct and personalized journeys. From first-time visitors
                  to returning travelers, we ensure every trip is unique and memorable.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="bg-gray-50 rounded-xl px-5 py-3 border border-gray-100">
                  <p className="text-2xl font-bold text-[#ffc42d]">15+</p>
                  <p className="text-xs text-gray-500">Years in Business</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-5 py-3 border border-gray-100">
                  <p className="text-2xl font-bold text-[#ffc42d]">50+</p>
                  <p className="text-xs text-gray-500">Team Members</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-5 py-3 border border-gray-100">
                  <p className="text-2xl font-bold text-[#ffc42d]">5.0</p>
                  <p className="text-xs text-gray-500">Avg. Rating</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src='/happy_faces/3.webp'
                  alt="Da Nang City"
                  className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/destinations/Hoi_An_Ancient_Town.webp"
                    alt="Hoi An"
                    className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/destinations/Hanoi.webp"
                    alt="Hanoi"
                    className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 sm:py-12 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#ffc42d]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ffc42d]/10 group-hover:bg-[#ffc42d] flex items-center justify-center mb-5 transition-colors">
                  <span className="text-[#e6b028] group-hover:text-white font-bold text-base transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission - full width image background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/destinations/Ba_Na_Hills_Golden_Bridge.webp"
            alt="Golden Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-2xl">
            <p className="text-[#ffc42d] font-semibold text-sm uppercase tracking-wider mb-4">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Setting the Standard for Vietnam Travel
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We constantly strive to provide the highest level of customer satisfaction by leveraging
                our skills, experience, and guiding principles. Our goal is to be the top travel agency
                in Da Nang and the Central region of Vietnam.
              </p>
              <p>
                Beyond domestic tours, we also offer outbound travel packages to Thailand, Korea,
                Singapore, and more — always listening, understanding, and acting for our customers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ffc42d] font-semibold text-sm uppercase tracking-wider mb-3">Why Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Travel With Vietnam DMC
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We combine local expertise with world-class service to create journeys you'll never forget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#ffc42d]/30 hover:shadow-lg transition-all group"
              >
                <div className="absolute top-6 right-6 text-4xl font-bold text-gray-100 group-hover:text-[#ffc42d]/20 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 relative">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed relative">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
