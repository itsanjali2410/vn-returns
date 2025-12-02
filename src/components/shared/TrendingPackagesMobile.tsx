'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
          className="relative cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01]"
        >
          <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded text-sm z-10">
            {card.pricing}
          </div>
          <Image
            src={card.image}
            alt={card.title}
            title={card.title}
            height={320}
            className="w-full h-[360px] object-cover"
          />
          <div className="absolute bottom-8 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white">
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <div className="flex justify-between gap-6 flex-wrap">
              {card.info.map((item, i) => (
                <div key={`info-item-${i}`} className="flex items-center text-xs gap-1">
                  <span
                    className="inline-block h-[18px] w-[18px] bg-contain bg-no-repeat brightness-0 invert"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openFormModal(card.title, 'tripTrendingPackageInquiryFormOpen');
            }}
            className="absolute bottom-0 left-0 right-0 w-full bg-yellow-400 text-black font-semibold py-2 text-sm rounded-b-xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            Inquire Now
          </button>
        </article>
      ))}
    </div>
  );
};

export default TrendingPackagesMobile;
