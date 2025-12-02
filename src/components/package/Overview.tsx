'use client'; // if using Next.js 13 app directory

import React from 'react';

interface PackageOverviewProps {
  title: string;
  content: string;
}

const PackageOverview: React.FC<PackageOverviewProps> = ({ title, content }) => {
  return (
    <div className="pt-5 xs:pt-0 rounded-lg bg-white px-1 sm:px-6 md:px-1">
      <h2 className="text-xl font-bold text-gray-900 mb-2 sm:text-xl md:text-2xl">{title}</h2>
      <p className="text-gray-700 text-base leading-relaxed sm:text-base md:text-lg">{content}</p>
    </div>
  );
};

export default PackageOverview;
