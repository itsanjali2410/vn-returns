'use client';

import React from 'react';
import Image from 'next/image';

const NeedHelpCard: React.FC = () => {
  return (
    <div
      className="relative flex flex-col max-w-sm w-full bg-white
      border border-gray-200 rounded-xl shadow-lg 
      transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
    >
      {/* Header with image background */}
      <div className="relative h-32 w-full">
        <Image
          src="/hanoi-9D8N/goldenbridge.png"
          alt="Contact Support"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#198754]/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <strong className="text-lg font-semibold text-white tracking-tight">
            Need Assistance?
          </strong>
        </div>
      </div>

      {/* Contact Information */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-gray-700">
          <div className="w-8 h-8 rounded-full bg-[#ffc42d] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">📞</span>
          </div>
          <div>
            <a href="tel:+840325765379" className="hover:text-[#198754] transition-colors font-medium">
              +84 0325765379
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <div className="w-8 h-8 rounded-full bg-[#ffc42d] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">📞</span>
          </div>
          <div>
            <a href="tel:+84987654321" className="hover:text-[#198754] transition-colors font-medium">
              +84 987654321
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <div className="w-8 h-8 rounded-full bg-[#ffc42d] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">✉</span>
          </div>
          <div>
            <a href="mailto:sales@vndmc.com" className="hover:text-[#198754] transition-colors font-medium">
              sales@vndmc.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpCard;
