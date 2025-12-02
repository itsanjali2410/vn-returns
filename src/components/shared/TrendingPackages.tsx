'use client';

import React, { useEffect, useState } from 'react';
import TripFormModal from '@/components/modals/TripFormModal';
import TrendingPackagesDesktop from './TrendingPackagesDesktop';
import TrendingPackagesMobile from './TrendingPackagesMobile';

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

interface TrendingPackagesProps {
  title: string;
  packages: CardItem[];
  basePath?: string;
  // 🔹 Optional external modal control props
  isModalOpen?: boolean;
  onOpenModal?: (pkgName?: string, eventName?: string) => void;
  onCloseModal?: () => void;
}

const TrendingPackages: React.FC<TrendingPackagesProps> = ({
  title,
  packages,
  basePath,
  isModalOpen: externalModalOpen,
  onOpenModal,
  onCloseModal,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const [packageName, setPackageName] = useState('');

  const isModalOpen = externalModalOpen ?? internalModalOpen;

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => setLoading(false), 200);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  // ✅ Handle modal open (both internal/external)
  const openFormModal = (name: string) => {
    setPackageName(name);
    if (onOpenModal) onOpenModal(name, name);
    else setInternalModalOpen(true);
  };

  // ✅ Handle modal close
  const closeFormModal = () => {
    if (onCloseModal) onCloseModal();
    else setInternalModalOpen(false);
  };

  return (
    <section
      className="relative overflow-hidden px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 container mx-auto"
      aria-label={`${title} - Trending Travel Packages`}
    >
      {/* Header */}
      <header className="lg:pt-16 sm:pt-8 pb-4 flex justify-between items-center md:pt-8 md:pb-4">
        <h2 className="relative text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">
          {title}
        </h2>
      </header>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {Array.from({ length: isMobile ? 2 : 4 }).map((_, idx) => (
            <div
              key={`skeleton-${idx}`}
              className="h-[380px] bg-gray-200 animate-pulse rounded-xl lg:h-[320px] md:h-[240px] sm:h-[320px]"
            />
          ))}
        </div>
      ) : isMobile ? (
        <TrendingPackagesMobile
          packages={packages}
          openFormModal={openFormModal}
          basePath={basePath}
        />
      ) : (
        <TrendingPackagesDesktop
          packages={packages}
          openFormModal={openFormModal}
          basePath={basePath}
        />
      )}

      {/* 🔹 Modal Rendering */}
      {/* {isModalOpen && (
        <TripFormModal isOpen={isModalOpen} onClose={closeFormModal} packageName={packageName} />
      )} */}
    </section>
  );
};

export default TrendingPackages;
