'use client';
import ImgWithPlaceholder from '@/components/shared/ImgWithPlaceholder';

import React from 'react';
import { useRouter } from 'next/navigation';

interface InfoItem {
  icon: string;
  text: string;
}

interface CardItem {
  title: string;
  image: string;
  pricing: string;
  info: InfoItem[];
  slug?: string;
}

interface Props {
  packages: CardItem[];
  openFormModal: (name: string, eventName: string) => void;
  basePath?: string;
}

const TrendingPackagesMobile: React.FC<Props> = ({ packages, openFormModal, basePath }) => {
  const router = useRouter();

  const handleCardClick = (card: CardItem) => {
    if (basePath && card.slug) {
      router.push(`${basePath}/${card.slug}`);
      return;
    }
    const lowerTitle = card.title.toLowerCase();
    const destinations = ['bali', 'vietnam', 'dubai', 'singapore', 'thailand', 'baku', 'turkey'];
    const matchedDestination = destinations.find((d) => lowerTitle.includes(d));

    if (matchedDestination) {
      const packageSlug = card.title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/gi, '')
        .trim()
        .replace(/\s+/g, '-');
      router.push(`/international/${matchedDestination}/${packageSlug}`);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {packages.map((card, index) => (
        <article
          key={`mobile-card-${index}`}
          onClick={() => handleCardClick(card)}
          className="cursor-pointer rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01] bg-white"
        >
          <div className="relative w-full">
            <img
              src={card.image}
              alt={card.title}
              title={card.title}
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1.5 rounded-full shadow-md text-sm z-10">
              {card.pricing}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <div className="flex flex-wrap gap-4 mb-3">
              {card.info.map((item, i) => (
                <div key={`info-item-${i}`} className="flex items-center text-xs text-gray-600 gap-1">
                  <span
                    className="inline-block h-4 w-4 bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openFormModal(card.title, 'tripTrendingPackageInquiryFormOpen');
            }}
            className="w-full bg-yellow-400 text-black font-semibold py-2 text-sm hover:bg-yellow-300 transition-all flex items-center justify-center gap-2"
          >
            Inquire Now
          </button>
        </article>
      ))}
    </div>
  );
};

export default TrendingPackagesMobile;
