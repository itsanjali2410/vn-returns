'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import PriceCard from '@/components/package/PriceCard';
import HelpCard from '@/components/package/HelpCard';
import Overview from '@/components/package/Overview';
import Tourdetails from '@/components/package/TourDetails';
import Itinerary from '@/components/package/Itinerary';
import InclusionsExclusions from '@/components/package/InclusionsExclusions';
import TermsAndConditions from '@/components/package/TermsAndConditions';
import TripFormModal from '../modals/TripFormModal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PackageDetailWrapperProps { packageData: any }

const packageImages: Record<string, string> = {
  'ha-noi-da-nang-phu-quoc-9d8n': '/package/Hanoi_Danang_Phuquoc.webp',
  'phu-quoc-4-night-standard': '/package/Phuqoc_Standard_Package.webp',
  'vietnam-6n7d-day-cruise': '/package/Vietnam_Standard_Package_daycruise.webp',
  'vietnam-7n8d-standard': '/package/Vietnam_Standard_Package.webp',
  'phu-quoc-short-break': '/destinations/Phu_Quoc_Island.webp',
  'phu-quoc-fully-loaded': '/popular_cities/Phu Quoc.webp',
  'phu-quoc-with-1-day-leisure': '/destinations/Monkey_Mountain.webp',
  'ha-noi-da-nang-ho-chi-minh-day-with-day-cruise': '/destinations/Ho_Chi_Minh_City.webp',
  'ha-noi-da-nang-ho-chi-minh-with-over-night-cruise': '/destinations/Halong_Bay.webp',
  'ha-noi-da-nang-phu-quoc-with-day-cruise': '/destinations/Da_Nang_City_Tour.webp',
  'ha-noi-da-nang-phu-quoc-with-over-night-cruise': '/destinations/Ba_Na_Hills_Golden_Bridge.webp',
  'ha-noi-phu-quoc-da-nang-day-cruise': '/destinations/Hoi_An_Ancient_Town.webp',
  'ha-noi-da-nang-short-break': '/destinations/Hanoi.webp',
};

const flightCosts: Record<string, number> = {
  'phu-quoc-short-break': 0,
  'phu-quoc-fully-loaded': 0,
  'phu-quoc-with-1-day-leisure': 0,
  'phu-quoc-4-night-standard': 0,
  'ha-noi-da-nang-short-break': 60,
  'vietnam-6n7d-day-cruise': 60,
  'ha-noi-da-nang-ho-chi-minh-day-with-day-cruise': 120,
  'ha-noi-da-nang-ho-chi-minh-with-over-night-cruise': 120,
  'vietnam-7n8d-standard': 120,
  'ha-noi-da-nang-phu-quoc-with-day-cruise': 120,
  'ha-noi-da-nang-phu-quoc-with-over-night-cruise': 120,
  'ha-noi-da-nang-phu-quoc-9d8n': 120,
  'ha-noi-phu-quoc-da-nang-day-cruise': 120,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getBasePrice(pkg: any): number {
  for (const tier of pkg.pricing || []) {
    const combined = `${tier.tier || ''} ${(tier.prices || []).join(' ')}`.toLowerCase();
    if (combined.includes('3-star') || combined.includes('3 star') || combined.includes('option 1')) {
      const full = `${tier.tier || ''} ${(tier.prices || []).join(' ')}`;
      const m = full.match(/(\d+)\s*USD/i);
      if (m) return parseInt(m[1]);
    }
  }
  for (const tier of pkg.pricing || []) {
    const full = `${tier.tier || ''} ${(tier.prices || []).join(' ')}`;
    const m = full.match(/(\d+)\s*USD/i);
    if (m) return parseInt(m[1]);
  }
  return 0;
}

export default function PackageDetailWrapper({ packageData: pkg }: PackageDetailWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState('');

  const handleOpenModal = (packageName: string = '') => {
    setSelectedPackageName(packageName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackageName('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpenModal(pkg.packageName);
    }, 5000);
    return () => clearTimeout(timer);
  }, [pkg.packageName]);

  const image = packageImages[pkg.id] || '/destinations/Halong_Bay.webp';
  const days = pkg.days || pkg.summaryItinerary?.length || 0;
  const nights = pkg.nights || Math.max(0, days - 1);
  const places = pkg.places || [];
  const destinationCovered = places.join(' -- ') || pkg.packageName;

  // Build itinerary in the format TourDetails expects: [{ "Day 1": ["activity1", ...] }]
  const itinerary = (pkg.detailedItinerary || []).map(
    (day: { day: string; title: string; details: string[] }) => ({
      [day.day || day.title]: day.details,
    })
  );

  // Calculate total price: 3-star base + flights + $20
  const base = getBasePrice(pkg);
  const flight = flightCosts[pkg.id] ?? 0;
  const totalPrice = base + flight + 20;
  const priceLabel = totalPrice > 20 ? `USD ${totalPrice} /-` : '';

  // Overview text from summary
  const overviewContent = pkg.summaryItinerary
    ? pkg.summaryItinerary.slice(0, 3).join('. ') + '.'
    : '';

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 px-4 lg:py-10 py-5 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="lg:w-2/3 w-full space-y-6">
        <h1 className="text-3xl font-bold text-[#ffc42d] m-0">{pkg.packageName}</h1>

        <Image
          src={image}
          alt={pkg.packageName}
          title={pkg.packageName}
          width={900}
          height={500}
          className="rounded-2xl shadow-lg object-cover w-full m-0"
        />

        {/* Package Overview */}
        <Overview title="Package Overview" content={overviewContent} />

        {/* Tour Details with Itinerary */}
        <Tourdetails
          nights={nights}
          days={days}
          destinationCovered={destinationCovered}
          country="Vietnam"
          theme="Sightseeing"
          totalPackagePrice={priceLabel}
          itinerary={itinerary}
        />

        {/* Inclusions / Exclusions */}
        <InclusionsExclusions
          inclusions={pkg.includes || []}
          exclusions={pkg.excludes || []}
        />

        {/* Terms & Conditions */}
        <TermsAndConditions />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full space-y-6">
        <PriceCard
          emiPrice={0}
          emiLink=""
          totalPackagePrice={totalPrice}
          totalPackagePriceLabel={priceLabel}
          nights={nights}
          pricePerAdult={0}
          packageName={pkg.packageName}
          handleOpenModal={handleOpenModal}
        />
        <HelpCard />
      </div>

      {/* Modal */}
      <TripFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        packageName={selectedPackageName}
      />
    </div>
  );
}
