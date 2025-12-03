'use client';

import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Headphones } from 'lucide-react';

const NeedHelpCard: React.FC = () => {
  return (
    <div className="relative flex max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Golden vertical accent strip on the left */}
      <div className="w-1 bg-[#ffc42d] flex-shrink-0"></div>
      
      {/* Main content area */}
      <div className="flex-1 p-6">
        {/* Header with icon and title */}
        <div className="flex items-start gap-4 mb-6">
          {/* Headset icon in golden square */}
          <div className="w-12 h-12 bg-[#ffc42d] rounded-lg flex items-center justify-center flex-shrink-0">
            <Headphones className="w-6 h-6 text-gray-900" strokeWidth={2} />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mt-1">
            Need Assistance?
          </h3>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          {/* Phone 1 */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#ffc42d] flex-shrink-0" strokeWidth={2} />
            <a 
              href="tel:+840325765379" 
              className="text-gray-900 hover:text-[#198754] transition-colors font-medium"
            >
              +840325765379
            </a>
          </div>
          
          {/* Phone 2 */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#ffc42d] flex-shrink-0" strokeWidth={2} />
            <a 
              href="tel:+84987654321" 
              className="text-gray-900 hover:text-[#198754] transition-colors font-medium"
            >
              +84987654321
            </a>
          </div>
          
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#ffc42d] flex-shrink-0" strokeWidth={2} />
            <a 
              href="mailto:Info@tripstars.in" 
              className="text-gray-900 hover:text-[#198754] transition-colors font-medium"
            >
              Info@tripstars.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpCard;
