'use client';

import { FC } from 'react';

interface TourIncludesProps {
  includes?: { name: string; icon: string }[];
}

// Map icon names to emojis
const iconMap: { [key: string]: string } = {
  Hotel: '🏨',
  Car: '🚗',
  Plane: '✈️',
  Utensils: '🍽️',
  MapPin: '📍',
  Calendar: '📅',
  Users: '👥',
  Camera: '📷',
  Map: '🗺️',
  Clock: '⏰',
  Star: '⭐',
  Heart: '❤️',
  default: '✓',
};

const TourIncludes: FC<TourIncludesProps> = ({ includes }) => {
  return (
    <div className="w-full max-sm:text-center">
      <h5 className="mb-6 text-2xl font-bold text-gray-900">Tour Includes</h5>

      <div className="grid grid-cols-3 sm:grid-cols-5 justify-items-center items-center gap-4 sm:gap-6 w-full">
        {includes?.map((item, index) => {
          const emoji = iconMap[item.icon] || iconMap.default;

          return (
            <div
              key={`tourincludes-${index}`}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-[#ffc42d] bg-[#fef3c7] hover:bg-[#ffc42d] transition-all duration-200 text-2xl sm:text-3xl">
                {emoji}
              </div>
              <span className="text-xs sm:text-sm font-medium text-center">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TourIncludes;
