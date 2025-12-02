'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ItineraryItem {
  day: string;
  activities: string[];
}

interface ItineraryProps {
  itinerary: ItineraryItem[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (day: string) => {
    setExpanded(expanded === day ? null : day);
  };

  return (
    <div id="itinerary" className="w-full px-2 sm:px-4">
      {/* Section Title */}
      <h5 className="text-lg sm:text-2xl font-semibold text-[#ffc42d] my-4 sm:my-5 px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-[#ffc42d] bg-[#fef3c7] rounded-md sm:rounded-lg">
        Day-wise Itinerary
      </h5>

      {/* Accordion Items */}
      {itinerary.map((item, index) => (
        <div
          key={`itinerary-item-${index}`}
          className={`border border-gray-300 rounded-md sm:rounded-lg mb-3 overflow-hidden transition-all duration-200 ${
            expanded === item.day ? 'bg-gray-50' : 'bg-white'
          }`}
        >
          {/* Accordion Header */}
          <button
            onClick={() => handleToggle(item.day)}
            className="w-full flex justify-between items-center px-3 sm:px-5 py-2 sm:py-3 text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ffc42d] focus:ring-offset-1"
            area-expanded={expanded === item.day}
            area-controls={`itinerary-panel-${index}`}
            area-labelledby={`itinerary-header-${index}`}
            area-describedby={`itinerary-desc-${index}`}
            area-keyshortcuts="Enter Space"
            area-role="button"
          >
            <span className="text-sm sm:text-base font-bold">{item.day}</span>
            {expanded === item.day ? (
              <ChevronUp className="text-[#ffc42d] w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronDown className="text-[#ffc42d] w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>

          {/* Accordion Details */}
          {expanded === item.day && (
            <div className="bg-white px-3 sm:px-5 py-2 sm:py-3 border-t border-gray-200">
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                {item.activities.map((activity, i) => (
                  <li key={`${item.day}-activity-${i}`} className="leading-relaxed break-words">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
