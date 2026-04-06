// app/(default)/page.tsx

import { Suspense } from 'react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400;

import VietnamHero from '@/components/home/VietnamHero';
import WhyVietnamDMC from '@/components/home/WhyTripstars';
import PopularDestinations from '@/components/home/PopularDestinations';
import SwipeableSlider from '@/components/home/SwipeableSlider';
import PackageOverview from '@/components/home/PackageOverview';
import PartnerHotels from '@/components/home/PartnerHotels';
import ExploreCities from '@/components/home/ExploreCities';
import VietnamTestimonials from '@/components/home/VietnamTestimonials';
import HappyFaces from '@/components/home/HappyFaces';
import TripInquiryForm from '@/components/home/TripInquiryForm';

import { trendingPackages } from '@/data/packagesList';
import { homeSchema } from '@/data/schemas/home';

export const metadata: Metadata = {
  title: 'Vietnam DMC - Discover Vietnam - Authentic Travel Experiences',
  description:
    'Your trusted Destination Management Company in Vietnam. Crafting exceptional travel experiences over 15 years with personalized, sustainable, and unforgettable journeys.',
  keywords:
    'Vietnam travel, Vietnam DMC, destination management, Vietnam tours, Vietnam packages, Vietnam travel company',
  openGraph: {
    title: 'Vietnam DMC - Discover Vietnam',
    description: 'Custom Vietnam travel packages and authentic experiences',
    url: 'https://www.vndmc.com',
    type: 'website',
    images: [
      {
        url: 'https://www.vndmc.com/logo.png',
        width: 150,
        height: 59,
        alt: 'Vietnam DMC',
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {/* Hero must be outside any 'container' div to be full width */}
      <VietnamHero />

      <WhyVietnamDMC />
      <PopularDestinations />
      <SwipeableSlider />

      <PackageOverview title="Trending Offers" cards={trendingPackages} />

      <ExploreCities />

      <PartnerHotels />

      <VietnamTestimonials />

      <HappyFaces />

      <Suspense fallback={<div>Loading form...</div>}>
        <TripInquiryForm />
      </Suspense>
    </>
  );
}
