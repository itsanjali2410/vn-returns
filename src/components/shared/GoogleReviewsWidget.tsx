'use client';

import { useEffect, useRef } from 'react';

// Extend Window type to include Trustindex
declare global {
  interface Window {
    Trustindex?: {
      load: () => void;
    };
  }
}

const GoogleReviewsWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Tripstars - Best Travel Experience';

    if (!document.getElementById('trustindex-script')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?660bbe64210158756b963b23487';
      script.async = true;
      script.defer = true;
      script.id = 'trustindex-script';

      containerRef.current?.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Google <span className="text-[#ffc42d]">Reviews</span>
          </h3>
          <p className="text-lg text-gray-600">
            Their love keeps us growing
          </p>
        </div>

        {/* Reviews Widget Container */}
        <div ref={containerRef} className="w-full">
          <div className="trustindex-widget w-full min-h-[400px]">
            {/* Trustindex widget will render reviews here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;
