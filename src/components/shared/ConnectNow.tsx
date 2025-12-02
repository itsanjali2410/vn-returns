'use client';
import React, { useState } from 'react';
import FormPopup from '@/components/contact/FormPopup'; // adjust path if needed

const ConnectNow: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Section with background image */}
      <section
        className="relative w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://dailywildlifephoto.nathab.com/photography-guide/wp-content/uploads/2016/05/alaska-1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-center items-center py-24 px-4 sm:py-20">
          <div className="bg-[rgba(4,26,34,0.85)] rounded-3xl p-16 md:p-12 sm:p-8 text-center w-full max-w-3xl">
            {/* Title */}
            <h2 className="text-white text-5xl md:text-4xl sm:text-3xl font-bold mb-6 leading-tight">
              Didn’t find what you were looking for?
            </h2>

            {/* Subtitle */}
            <p className="text-white text-lg md:text-base sm:text-sm mb-10">
              Connect with our experts! Get the best itineraries and offers!
            </p>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="connect-popup"
              aria-label="Open Connect Now popup"
              className="bg-[#ffc42d] text-white font-bold text-xl md:text-lg sm:text-base py-4 px-14 md:px-10 sm:px-6 rounded-full sm:rounded-lg transition-all duration-300 hover:bg-[#d97706] focus:outline-none focus:ring-4 focus:ring-[#ffc42d] active:scale-95"
            >
              Connect Now
            </button>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && <FormPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default ConnectNow;
