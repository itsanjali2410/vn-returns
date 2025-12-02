'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Itinerary from './Itinerary';

interface TourDetails {
  nights: number;
  days: number;
  theme: string;
  destinationCovered: string;
  totalPackagePrice: string;
  country: string;
  itinerary: [];
}

const TourCard: React.FC<TourDetails> = ({
  nights,
  days,
  destinationCovered,
  country,
  itinerary,
}) => {
  const [showItinerary, setShowItinerary] = useState(true);

  return (
    <div className="border border-gray-300 rounded-2xl p-5 bg-white shadow-md w-full  mb-10">
      {/* Duration and Itinerary */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center text-gray-800 text-base">
          <span className="text-[#ffc42d] text-xl mr-2">📅</span>
          <span className="font-medium">
            {nights} Nights, {days} Days
          </span>
        </div>

        <button
          onClick={() => setShowItinerary(!showItinerary)}
          className="text-[#ffc42d] text-xs font-medium flex items-center hover:underline"
          aria-expanded={showItinerary ? 'true' : 'false'}
          aria-controls="itinerary"
          aria-label={showItinerary ? 'Hide Itinerary' : 'Show Itinerary'}
        >
          {showItinerary ? 'Hide Itinerary' : 'See Itinerary'}
          {showItinerary ? (
            <ChevronUp className="ml-1 w-4 h-4" />
          ) : (
            <ChevronDown className="ml-1 w-4 h-4" />
          )}
        </button>
      </div>

      {/* Destination */}
      <div className="flex items-center text-gray-800 mb-3">
        <span className="text-[#ffc42d] text-xl mr-2">📍</span>
        <span
          className={`font-medium break-words ${
            destinationCovered.length > 25 ? 'text-sm' : 'text-base'
          }`}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: destinationCovered.replaceAll(
                '--',
                '<span style="font-weight:800;font-size:22px; padding:0 3px;">&#8226; </span>'
              ),
            }}
          />
        </span>
      </div>

      {/* Country */}
      {/* <div className="flex items-center text-gray-800 mb-2">
        <span className="font-medium">{country}</span>
      </div> */}

      {/* Itinerary Section */}
      {showItinerary && (
        <div id="itinerary" className="mt-3">
          <Itinerary
            itinerary={itinerary.map((item: any) => {
              const dayKey = Object.keys(item)[0];
              return { day: dayKey, activities: item[dayKey] };
            })}
          />
        </div>
      )}
    </div>
  );
};

export default TourCard;
