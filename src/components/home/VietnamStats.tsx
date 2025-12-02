'use client';

import Image from 'next/image';

export default function VietnamStats() {
  const stats = [
    { value: '4.9★', label: 'Customer Rating' },
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hanoi-9D8N/danang.jpg"
          alt="Vietnam Destination"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Destinations</h2>
        <p className="text-center text-xl mb-12 text-gray-200">Click to explore</p> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#ffc42d]">
                {stat.value}
              </div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

