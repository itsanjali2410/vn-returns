'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import PriceCard from '@/components/package/PriceCard';
import HelpCard from '@/components/package/HelpCard';
import Itinerary from '@/components/package/Itinerary';
import InclusionsExclusions from '@/components/package/InclusionsExclusions';
import TermsAndConditions from '@/components/package/TermsAndConditions';
import TripFormModal from '../modals/TripFormModal';

interface PackageDetailWrapperProps {
  packageData: any;
}

// Map package IDs to images
function getPackageImage(packageId: string): string {
  const imageMap: { [key: string]: string } = {
    'ha-noi-da-nang-phu-quoc-9d8n': '/hanoi-9D8N/halongbay.jpg',
    'PhuQuoc4 _Night _Standard _Package': '/hanoi-9D8N/thom-island.jpg',
    'Vietnam_Standard_Package_6N7D _with _DayCruise': '/hanoi-9D8N/boat-ride.jpg',
    'Vietnam - 7N8D - Standard Package': '/hanoi-9D8N/danang.jpg',
  };
  return imageMap[packageId] || '/hanoi-9D8N/halongbay.jpg';
}

export default function PackageDetailWrapper({ packageData }: PackageDetailWrapperProps) {
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
      handleOpenModal(packageData.packageName);
    }, 5000);
    return () => clearTimeout(timer);
  }, [packageData.packageName]);

  // Transform detailed itinerary to component format
  const itineraryData = packageData.detailedItinerary?.map((item: any) => ({
    day: item.day,
    title: item.title,
    activities: item.details || [],
  })) || [];

  // Calculate nights (assuming days - 1)
  const days = packageData.summaryItinerary?.length || 0;
  const nights = days > 0 ? days - 1 : 0;

  // Get starting price
  const startingPrice = packageData.pricing?.[0]?.prices?.[0] || packageData.note || 'Custom quote';

  // Get package image
  const packageImage = getPackageImage(packageData.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full gap-6 px-4 lg:px-6 lg:py-10 py-8 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full space-y-6">
          {/* Package Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#ffc42d]">{packageData.packageName}</h1>

          {/* Package Image */}
          <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden">
            <Image
              src={packageImage}
              alt={packageData.packageName}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Package Option */}
          {packageData.option && (
            <p className="text-lg text-gray-700 font-medium">{packageData.option}</p>
          )}

          {/* Package Overview */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Package Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              {packageData.description || 
                `Experience an unforgettable journey through Vietnam with this carefully curated ${packageData.packageName} package. This comprehensive tour takes you through the most iconic destinations, offering a perfect blend of cultural immersion, natural beauty, and authentic experiences.`}
            </p>
          </div>

        {/* Itinerary */}
        {itineraryData.length > 0 && <Itinerary itinerary={itineraryData} />}

        {/* Pricing Table */}
        {packageData.pricing && packageData.pricing.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Package Tier</th>
                    {packageData.paxGroups.map((group: string, index: number) => (
                      <th key={index} className="border border-gray-300 px-4 py-2 text-center">
                        {group}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {packageData.pricing.map((tier: any, tierIndex: number) => (
                    <tr key={tierIndex} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        {tier.tier}
                      </td>
                      {tier.prices.map((price: string, priceIndex: number) => (
                        <td
                          key={priceIndex}
                          className="border border-gray-300 px-4 py-2 text-center"
                        >
                          {price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Inclusions/Exclusions */}
        <InclusionsExclusions
          inclusions={packageData.includes || []}
          exclusions={packageData.excludes || []}
          nights={nights}
          days={days}
        />

        {/* Terms */}
        <TermsAndConditions />
        </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full space-y-6">
        <PriceCard
          emiPrice={0}
          emiLink=""
          totalPackagePrice={0}
          totalPackagePriceLabel={startingPrice}
          nights={nights}
          pricePerAdult={0}
          packageName={packageData.packageName}
          handleOpenModal={handleOpenModal}
        />
        <HelpCard />
      </div>
      </div>

      {/* Modal */}
      <TripFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        packageName={selectedPackageName}
        defaultDestination="Vietnam"
      />
    </div>
  );
}

