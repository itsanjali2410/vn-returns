'use client';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center px-5 py-16 md:py-24 text-center text-white relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">🎉 Thank You!</h1>

        <p className="text-lg md:text-xl max-w-xl mb-6 relative z-10 text-gray-200">
          Your message has been successfully sent to our team. We’ll get back to you shortly!
        </p>

        <Link
          href="/"
          className="relative z-10 px-6 py-3 text-white border border-yellow-400 rounded-full font-medium transition hover:bg-yellow-400"
          title="Back to Home"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
