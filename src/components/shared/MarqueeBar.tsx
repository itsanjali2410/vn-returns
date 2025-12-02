'use client';
import React from 'react';
import { FaStar, FaCheckCircle, FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';

const features = [
  {
    icon: (
      <Image src="/icons/google.png" alt="Google" width={20} height={20} className="inline-block" />
    ),
    text: (
      <>
        <span className="font-bold text-lg">4.9</span>
        <span className="text-[#ffc42d] text-xl ml-1 flex items-center">
          <FaStar />
        </span>
        <span className="ml-1">Rated</span>
      </>
    ),
  },
  {
    icon: <FaUserFriends className="text-[#ffc42d] text-xl" />,
    text: <span>24x7 Assistance</span>,
  },
  {
    icon: <FaCheckCircle className="text-[#ffc42d] text-xl" />,
    text: <span>20k+ Travelers</span>,
  },
  {
    icon: <FaCheckCircle className="text-[#ffc42d] text-xl" />,
    text: <span>100% Customized Trips</span>,
  },
];

const MarqueeBar: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-black to-[#222] py-4 shadow-lg select-none">
      <div className="flex w-max animate-scroll">
        {/* Original Set */}
        <div className="flex gap-12 px-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-white text-lg whitespace-nowrap transition-transform duration-300 hover:-translate-y-1"
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>

        {/* Duplicate Set for seamless loop */}
        <div className="flex gap-12 px-8">
          {features.map((item, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex items-center gap-2 text-white text-lg whitespace-nowrap transition-transform duration-300 hover:-translate-y-1"
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;
