'use client';
import { useEffect, useState } from 'react';
import PriceCard from '@/components/package/PriceCard';
import HelpCard from '@/components/package/HelpCard';
import Overview from '@/components/package/Overview';
import Tourdetails from '@/components/package/TourDetails';
import PackageInclude from '@/components/package/PackageIncludes';
import Itinerary from '@/components/package/Itinerary';
import TabbedTable from '@/components/package/TabbedTable';
import InclusionsExclusions from '@/components/package/InclusionsExclusions';
import TermsAndConditions from '@/components/package/TermsAndConditions';
import Image from 'next/image';
import TripFormModal from '../modals/TripFormModal';
import MobileCTAButton from '../contact/CTA';

export interface PackageType {
  slug?: string; // optional if not present
  packageId?: string;
  packageName: string;
  [key: string]: any; // For other optional fields
}
export default function SubCategoryClientWrapper({
  data,
  totalPackagePrice,
  subcategory,
}: {
  data: PackageType;
  totalPackagePrice: number;
  subcategory: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState('');

  // ✅ Open modal (optionally with name)
  const handleOpenModal = (packageName: string = '') => (
    setSelectedPackageName(packageName),
    setIsModalOpen(true)
  );

  // ✅ Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackageName('');
    // sessionStorage.setItem('tripFormModalShown', 'true');
  };

  useEffect(() => {
    // const hasShown = sessionStorage.getItem('tripFormModalShown');
    // if (!hasShown) {
    //   //modal open once per user session
    // }
    const timer = setTimeout(() => {
      handleOpenModal(data.packageName);
    }, 5000); // 3000ms = 3 seconds

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [data.packageName]);
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 px-4 lg:py-10 py-5 max-w-7xl mx-auto">
      {/* ✅ Left Section */}
      <div className="lg:w-2/3 w-full space-y-6">
        <h1 className="text-3xl font-bold text-[#ffc42d] m-0">{data.packageName}</h1>
        {data && data.packageImage && (
          <Image
            src={data.packageImage}
            alt={data.packageName}
            title={data.packageName}
            width={900}
            height={500}
            className="rounded-2xl shadow-lg object-cover w-full m-0"
          />
        )}

        {/* Package Overview */}
        {data.overviewData && (
          <Overview title={data.overviewData.title} content={data.overviewData.content} />
        )}

        {/* Tour Details */}
        <Tourdetails
          nights={data.nights}
          days={data.days}
          destinationCovered={data.destinationCovered}
          country={data.country}
          theme={data.theme}
          totalPackagePrice={data.price}
          itinerary={data.itinerary}
        />

        {/* Includes & Highlights */}
        {data.includes && data.highlights && (
          <PackageInclude
            includes={data.includes}
            highlights={Array.isArray(data.highlights) ? data.highlights : [data.highlights]}
          />
        )}

        {/* Itinerary */}
        {/* {data.itinerary && (
         
        )} */}

        {/* Table */}
        {data.tableData && <TabbedTable tableData={data.tableData} />}

        {/* Inclusions/Exclusions */}
        <InclusionsExclusions inclusions={data.inclusions} exclusions={data.exclusions} />

        {/* CTA */}
        {/* <Cta /> */}

        {/* Terms */}
        <TermsAndConditions />
      </div>
      {/* ✅ Right Section */}
      <div className="lg:w-1/3 w-full space-y-6">
        <PriceCard
          emiPrice={0}
          emiLink=""
          totalPackagePrice={totalPackagePrice}
          totalPackagePriceLabel={data.totalPackagePrice}
          nights={data.nights}
          pricePerAdult={
            data.pricePerAdult ? parseFloat(data.pricePerAdult.replace(/[^0-9.]/g, '')) : 0
          }
          packageName={data.packageName}
          handleOpenModal={handleOpenModal}
        />
        <HelpCard />
      </div>
      {/* ✅ Single Modal Controlled at Page Level */}
      <TripFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        packageName={selectedPackageName}
        defaultDestination={subcategory}
      />
      {/* <MobileCTAButton /> */}
      {/* ✅ Popup Form */}
      {/* {isPopupVisible && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 overflow-y-auto">
          <div className="relative bg-transparent w-full max-w-lg rounded-xl">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-3xl bg-[#ffc42d] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#d97706] transform hover:scale-110 transition"
            >
              ×
            </button>
            <div className="p-6">
              <TripInquiryForm />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
