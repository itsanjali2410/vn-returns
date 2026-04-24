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

// Extract 3-star hotel tier price (in USD)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function get3StarPrice(pkg: any): number {
  for (const tier of pkg.pricing || []) {
    const combined = `${tier.tier || ''} ${(tier.prices || []).join(' ')}`.toLowerCase();
    if (combined.includes('3-star') || combined.includes('3 star') || combined.includes('option 1')) {
      const full = `${tier.tier || ''} ${(tier.prices || []).join(' ')}`;
      const m = full.match(/(\d+)\s*USD/i);
      if (m) return parseInt(m[1]);
    }
  }
  // Fallback: first tier that has a USD amount
  for (const tier of pkg.pricing || []) {
    const full = `${tier.tier || ''} ${(tier.prices || []).join(' ')}`;
    const m = full.match(/(\d+)\s*USD/i);
    if (m) return parseInt(m[1]);
  }
  return 0;
}

// Extract land price from bookingInfo.landPrice (in USD per person)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getLandPrice(pkg: any): number {
  const lp = pkg.bookingInfo?.landPrice || '';
  const m = String(lp).match(/(\d+)\s*USD/i);
  return m ? parseInt(m[1]) : 0;
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

  // Build itinerary — carry day, title, and details through to Itinerary component
  const itinerary = (pkg.detailedItinerary || []).map(
    (day: { day: string; title: string; details: string[] }) => ({
      day: day.day,
      title: day.title,
      activities: day.details,
    })
  );

  // Pricing formula: land price + 3-star hotel price + $20 markup
  const landPrice = getLandPrice(pkg);
  const hotelPrice = get3StarPrice(pkg);
  const totalPrice = landPrice + hotelPrice + 20;
  const priceLabel = totalPrice > 20 ? `USD ${totalPrice} /-` : '';

  // Overview: places + sightseeing extracted from detailed itinerary
  const sightseeingSet = new Set<string>();
  const sightPatterns = [
    /Grand World/gi, /Vinpearl Safari/gi, /Vin Wonders?/gi, /VinWonder/gi, /Hon Thom/gi,
    /Sunset Town/gi, /Kiss of the Sea/gi, /Ha Long Bay/gi, /Halong Bay/gi, /Ninh Binh/gi,
    /Ba Na Hills/gi, /Golden Bridge/gi, /Marble Mountains?/gi, /Hoi An/gi, /Hanoi Old Quarter/gi,
    /Cu Chi Tunnels/gi, /Mekong Delta/gi, /Notre Dame Cathedral/gi, /War Remnants Museum/gi,
    /Independence Palace/gi, /Dragon Bridge/gi, /Lady Buddha/gi, /My Son Sanctuary/gi,
    /Temple of Literature/gi, /Hoan Kiem Lake/gi, /Thien Mu Pagoda/gi, /Perfume River/gi,
    /Bai Tu Long/gi, /Lan Ha Bay/gi, /Tra Que Village/gi, /An Bang Beach/gi, /Cable Car/gi,
    /Pearl Farm/gi, /Mong Tay Island/gi, /May Rut Island/gi, /Coral Park/gi, /4 Islands/gi,
  ];
  const allDetailsText = (pkg.detailedItinerary || [])
    .flatMap((d: { details: string[] }) => d.details || [])
    .join(' ');
  for (const pattern of sightPatterns) {
    const matches = allDetailsText.match(pattern);
    if (matches) matches.forEach((m: string) => sightseeingSet.add(m.trim()));
  }
  const sightseeing = Array.from(sightseeingSet);
  const placesText = places.length > 0 ? `Covering ${places.join(', ')}.` : '';
  const sightsText =
    sightseeing.length > 0 ? ` Highlights include ${sightseeing.slice(0, 8).join(', ')}.` : '';
  const overviewContent = (placesText + sightsText).trim();

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
