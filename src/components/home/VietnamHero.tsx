'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function VietnamHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Vietnam Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover Vietnam
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Authentic journeys crafted with care. Your trusted Destination Management Company in Vietnam.
        </p>
        <Link
          href="/packages"
          className="inline-block bg-[#ffc42d] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Your Journey
        </Link>
      </div>
    </section>
  );
}


