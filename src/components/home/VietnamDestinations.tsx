'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VietnamDestinations() {
  const destinations = [
    {
      name: 'Hanoi',
      region: 'Northern',
      description: 'Capital city with rich history',
      image: '/hanoi-9D8N/temple.jpg',
    },
    {
      name: 'Ha Long Bay',
      region: 'Northern',
      description: 'UNESCO World Heritage site',
      image: '/hanoi-9D8N/halongbay.jpg',
    },
    {
      name: 'Da Nang',
      region: 'Central',
      description: 'Beaches and Golden Bridge',
      image: '/hanoi-9D8N/danang.jpg',
    },
    {
      name: 'Hoi An',
      region: 'Central',
      description: 'Ancient town with lanterns',
      image: '/hanoi-9D8N/goldenbridge.png',
    },
    {
      name: 'Ho Chi Minh City',
      region: 'Southern',
      description: 'Vibrant metropolis',
      image: '/hanoi-9D8N/chu-chi tunnel.jpg',
    },
    {
      name: 'Phu Quoc',
      region: 'Southern',
      description: 'Tropical island paradise',
      image: '/hanoi-9D8N/thom-island.jpg',
    },
    {
      name: 'Hue',
      region: 'Central',
      description: 'Imperial city and citadel',
      image: '/hanoi-9D8N/prison.jpg',
    },
    {
      name: 'Sapa',
      region: 'Northern',
      description: 'Mountain terraces and ethnic culture',
      image: '/hanoi-9D8N/cablecar.jpg',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Explore Vietnam
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Discover diverse regions and breathtaking destinations
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute top-2 left-2 z-20">
                  <span className="bg-[#198754] text-white text-xs px-2 py-1 rounded">
                    {destination.region}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm text-gray-200">{destination.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-block bg-[#198754] hover:bg-[#147048] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

