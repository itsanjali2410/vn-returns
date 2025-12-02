'use client';

import React from 'react';

interface PriceCardProps {
  totalPackagePrice: number;
  totalPackagePriceLabel?: string;
  pricePerAdult?: number;
  nights: number;
  emiPrice: number;
  emiLink: string;
  handleOpenModal: (packageName: string) => void;
  packageName: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  totalPackagePrice,
  totalPackagePriceLabel,
  pricePerAdult,
  nights,
  emiPrice,
  emiLink,
  handleOpenModal,
  packageName,
}) => {
  return (
    <div
      className="flex flex-col items-center bg-black text-center rounded-2xl 
      shadow-lg w-full py-8 my-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Heading */}
      <div className="text-lg text-white mb-2 font-semibold">Starting from</div>

      {/* Total Package Price */}
      <div className="text-2xl text-white font-bold">
        {totalPackagePriceLabel && totalPackagePriceLabel.trim().length > 0
          ? totalPackagePriceLabel
          : `₹${totalPackagePrice.toLocaleString()}`}
        <span className="block text-sm text-gray-400 font-normal">Per Person</span>
      </div>

      {/* Optional Price Per Adult */}
      {pricePerAdult && pricePerAdult !== 0 && (
        <div className="text-2xl text-white font-bold mt-2">
          ₹{pricePerAdult.toLocaleString()}
          <span className="block text-sm text-gray-400 font-normal">Per Person</span>
        </div>
      )}

      {/* Nights Info */}
      <p className="text-white text-base mt-3">{nights} Nights Stay</p>

      {/* EMI Section (optional) */}
      {emiPrice > 0 && emiLink && (
        <a
          href={emiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#ffc42d] underline mt-2"
          title="EMI Available"
        >
          EMI Available @ ₹{emiPrice.toLocaleString()}
        </a>
      )}

      {/* Submit Button */}
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="query-modal"
        aria-label="Submit your travel query"
        className="mt-5 bg-[#ffc42d] hover:bg-[#d97706]
    text-white font-bold text-base md:text-lg py-3 px-8 rounded-lg 
    shadow-md transition-transform duration-300 hover:scale-105 active:scale-100 
    focus:outline-none focus:ring-2 focus:ring-[#ffc42d]"
        onClick={() => handleOpenModal(packageName)}
      >
        SUBMIT YOUR QUERY
      </button>
    </div>
  );
};

export default PriceCard;
