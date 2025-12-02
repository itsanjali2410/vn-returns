'use client';

import { useState } from 'react';
import HeroSection from '@/components/shared/HeroSection';
import TrendingPackages from '@/components/shared/TrendingPackages';
import PackageFeatures from '@/components/shared/PackageFeatures';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import VideoThumbnail from '@/components/home/VideoThumbnail';
import WhyTripstars from '@/components/home/WhyTripstars';
import TravelStyle from '@/components/shared/TravelStyle';
import GoogleReviewsWidget from '@/components/shared/GoogleReviewsWidget';
import TripFormModal from '@/components/modals/TripFormModal';

interface PackagePageClientWrapperProps {
  pkg: any;
  category: string;
  subcategory: string;
}

export default function CategoryPageClientWrapper({
  pkg,
  category,
  subcategory,
}: PackagePageClientWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState('');

  // ✅ Open modal (optionally with name)
  const handleOpenModal = (packageName: string = '', eventName = '') => {
    (setSelectedPackageName(packageName), setIsModalOpen(true));
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: `${eventName}`,
      source_domain: window.location.hostname,
    });
  };

  // ✅ Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackageName('');
  };

  return (
    <>
      {/* Hero Section — can open modal */}
      <HeroSection
        image={pkg.featureImage}
        destination={subcategory}
        onInquireClick={() => handleOpenModal('', 'tripHeroInquiryFormOpen')} // open modal on button click
      />

      {/* Trending Packages — can also open modal */}
      {pkg.packages && pkg.packages.length > 0 && (
        <TrendingPackages
          title={`${pkg.name} Packages`}
          packages={pkg.packages}
          basePath={`/${category}/${subcategory}`}
          onOpenModal={(packageName) => handleOpenModal('', `tripPackageInquiryFormOpen`)} // open modal on button click
        />
      )}

      {/* Optional sections */}
      {pkg.thingsToDo && pkg.thingsToDo.length > 0 && (
        <PackageFeatures
          title="Things to Do"
          highlightWord={pkg.name}
          thingsToDo={pkg.thingsToDo}
        />
      )}

      <VideoTestimonials />
      <VideoThumbnail />
      <WhyTripstars />
      <TravelStyle />
      <GoogleReviewsWidget />

      {/* ✅ Single Modal Controlled at Page Level */}
      <TripFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        packageName={selectedPackageName}
        defaultDestination={subcategory}
      />
    </>
  );
}
