'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import PriceCard from '@/components/package/PriceCard';
import HelpCard from '@/components/package/HelpCard';
import Itinerary from '@/components/package/Itinerary';
import InclusionsExclusions from '@/components/package/InclusionsExclusions';
import TermsAndConditions from '@/components/package/TermsAndConditions';
import TripFormModal from '../modals/TripFormModal';
import { Calendar, MapPin, ChevronDown, ChevronUp, Plane, Building2, Bus, Hotel, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

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
  const [showItinerary, setShowItinerary] = useState(false);

  const handleOpenModal = (packageName: string = '') => {
    setSelectedPackageName(packageName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackageName('');
  };

  const toggleItinerary = () => {
    setShowItinerary(!showItinerary);
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

  // Extract destinations from summaryItinerary
  const extractDestinations = () => {
    const destinations = new Set<string>();
    packageData.summaryItinerary?.forEach((item: string) => {
      const locations = item.match(/(Ha Noi|Da Nang|Phu Quoc|Hanoi|Hoi An|Ha Long|Hue|Sapa)/gi);
      if (locations) {
        locations.forEach((loc: string) => destinations.add(loc));
      }
    });
    return Array.from(destinations).join(' • ') || 'Vietnam';
  };

  const destinations = extractDestinations();

  // Check what's included based on package data
  const hasFlights = packageData.includes?.some((inc: string) => 
    inc.toLowerCase().includes('flight') || inc.toLowerCase().includes('airfare')
  );
  const hasSightseeing = packageData.includes?.some((inc: string) => 
    inc.toLowerCase().includes('sightseeing') || inc.toLowerCase().includes('tour')
  );
  const hasTransport = packageData.includes?.some((inc: string) => 
    inc.toLowerCase().includes('transport') || inc.toLowerCase().includes('transfer') || inc.toLowerCase().includes('vehicle')
  );
  const hasHotel = packageData.includes?.some((inc: string) => 
    inc.toLowerCase().includes('hotel') || inc.toLowerCase().includes('accommodation')
  );
  const hasBreakfast = packageData.includes?.some((inc: string) => 
    inc.toLowerCase().includes('breakfast') || inc.toLowerCase().includes('meal')
  );

  // Why Travel with Us benefits
  const benefits = [
    packageData.includes?.some((inc: string) => inc.toLowerCase().includes('breakfast')) 
      ? 'Breakfast included in tour price' 
      : null,
    'English Speaking certified drivers',
    'Daily curated itineraries for a stress-free experience',
    'Seamless airport transfers for hassle-free travel',
  ].filter(Boolean);

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

         

          {/* Package Overview Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-900">
                  <Calendar className="w-5 h-5 text-[#ffc42d]" strokeWidth={2} />
                  <span className="font-medium">{nights} Nights, {days} Days</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <MapPin className="w-5 h-5 text-[#ffc42d]" strokeWidth={2} />
                  <span className="font-medium">{destinations}</span>
                </div>
              </div>
              {itineraryData.length > 0 && (
                <button
                  onClick={toggleItinerary}
                  className="inline-flex items-center gap-2 text-[#ffc42d] font-semibold hover:text-[#e6b028] transition-colors self-start sm:self-center"
                >
                  {showItinerary ? 'Hide Itinerary' : 'See Itinerary'}
                  {showItinerary ? (
                    <ChevronUp className="w-4 h-4" strokeWidth={2} />
                  ) : (
                    <ChevronDown className="w-4 h-4" strokeWidth={2} />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Tour Includes & Why Travel with Us */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tour Includes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Includes</h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {hasFlights && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-[#ffc42d] flex items-center justify-center">
                      <Plane className="w-6 h-6 text-[#ffc42d]" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Flights</span>
                  </div>
                )}
                {hasSightseeing && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-[#ffc42d] flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#ffc42d]" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Sightseeing</span>
                  </div>
                )}
                {hasTransport && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-[#ffc42d] flex items-center justify-center">
                      <Bus className="w-6 h-6 text-[#ffc42d]" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Transport</span>
                  </div>
                )}
                {hasHotel && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-[#ffc42d] flex items-center justify-center">
                      <Hotel className="w-6 h-6 text-[#ffc42d]" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Hotel</span>
                  </div>
                )}
                {hasBreakfast && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-[#ffc42d] flex items-center justify-center">
                      <UtensilsCrossed className="w-6 h-6 text-[#ffc42d]" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Breakfast</span>
                  </div>
                )}
              </div>
              
            </div>

            {/* Why Travel with Us */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Travel with Us</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#198754] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* Itinerary */}
        {itineraryData.length > 0 && showItinerary && <Itinerary itinerary={itineraryData} />}

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

