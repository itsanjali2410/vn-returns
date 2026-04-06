import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <div className="mb-8">
        <Link href="/">
          <Image src="/logo.png" alt="Vietnam DMC" width={150} height={59} className="mx-auto" />
        </Link>
      </div>

      {/* 404 Heading */}
      <h1 className="text-8xl md:text-9xl font-bold text-[#ffc42d] mb-4">404</h1>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Page Not Found</h2>

      {/* Description */}
      <p className="text-lg text-gray-600 max-w-md mb-8 text-center leading-relaxed">
        The page you're looking for doesn't exist or has been moved. Let us help you find your way back to Vietnam.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="/"
          className="inline-block bg-[#198754] hover:bg-[#145941] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 text-center"
        >
          Back to Home
        </Link>
        <Link
          href="/packages"
          className="inline-block bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 text-center"
        >
          Explore Packages
        </Link>
      </div>

      {/* Additional Help Links */}
      <div className="border-t border-gray-200 pt-8 w-full max-w-2xl">
        <p className="text-gray-600 mb-6 text-center">Popular Pages:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Link href="/about-us" className="text-[#ffc42d] hover:text-[#e6b028] font-medium transition-colors">
            About Us
          </Link>
          <Link href="/packages" className="text-[#ffc42d] hover:text-[#e6b028] font-medium transition-colors">
            Packages
          </Link>
          <Link href="/contact" className="text-[#ffc42d] hover:text-[#e6b028] font-medium transition-colors">
            Contact
          </Link>
          <Link href="/faqs" className="text-[#ffc42d] hover:text-[#e6b028] font-medium transition-colors">
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}
