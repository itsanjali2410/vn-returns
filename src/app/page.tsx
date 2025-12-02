// app/page.tsx
import { Suspense } from 'react';
import { Metadata } from 'next';
// import { homepageSchema } from '@/data/schemas';
import VietnamHero from '@/components/home/VietnamHero';
import AboutVietnam from '@/components/home/AboutVietnam';
import VietnamFeatures from '@/components/home/VietnamFeatures';
import VietnamStats from '@/components/home/VietnamStats';
import VietnamDestinations from '@/components/home/VietnamDestinations';
import VietnamTestimonials from '@/components/home/VietnamTestimonials';
import VietnamServices from '@/components/home/VietnamServices';
import VietnamPackages from '@/components/home/VietnamPackages';
// import TripInquiryForm from '@/components/home/TripInquiryForm';

export const metadata: Metadata = {
  title: 'Vietnam DMC - Discover Vietnam - Authentic Travel Experiences',
  description:
    'Your trusted Destination Management Company in Vietnam. Crafting exceptional travel experiences for over 15 years with personalized, sustainable, and unforgettable journeys.',
  keywords:
    'Vietnam travel, Vietnam DMC, destination management, Vietnam tours, Vietnam packages, Vietnam travel company',
};

export default function Home() {
  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      /> */}
      <VietnamHero />
      <AboutVietnam />
      <VietnamFeatures />
      <VietnamStats />
      <VietnamDestinations />
      <VietnamTestimonials />
      <VietnamServices />
      <VietnamPackages />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <TripInquiryForm />
      </Suspense> */}
    </>
  );
}
