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

    // Add custom styles for Google Reviews widget
    const style = document.createElement('style');
    style.textContent = `
      /* Google Reviews Widget Styling */
      .trustindex-widget {
        font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* Review Cards */
      .ti-widget-container .ti-review-item,
      .ti-widget-container .ti-review,
      .ti-widget-container [class*="review-item"],
      .ti-widget-container [class*="review"] {
        background: #ffffff !important;
        border: 1px solid #e0e0e0 !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin-bottom: 16px !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
        transition: box-shadow 0.2s ease !important;
        min-height: 180px !important;
        display: flex !important;
        flex-direction: column !important;
      }
      
      .ti-widget-container .ti-review-item:hover,
      .ti-widget-container .ti-review:hover,
      .ti-widget-container [class*="review-item"]:hover,
      .ti-widget-container [class*="review"]:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
      }
      
      /* Review Header */
      .ti-widget-container .ti-review-header,
      .ti-widget-container [class*="review-header"] {
        display: flex !important;
        align-items: center !important;
        margin-bottom: 12px !important;
        gap: 12px !important;
      }
      
      /* Profile Image */
      .ti-widget-container .ti-review-header img,
      .ti-widget-container [class*="review-header"] img {
        width: 40px !important;
        height: 40px !important;
        border-radius: 50% !important;
        object-fit: cover !important;
      }
      
      /* Reviewer Name */
      .ti-widget-container .ti-review-author,
      .ti-widget-container [class*="review-author"],
      .ti-widget-container [class*="author-name"] {
        font-weight: 500 !important;
        font-size: 14px !important;
        color: #202124 !important;
        margin: 0 !important;
      }
      
      /* Star Rating */
      .ti-widget-container .ti-star,
      .ti-widget-container [class*="star"] {
        color: #fbbc04 !important;
        font-size: 18px !important;
      }
      
      .ti-widget-container .ti-star.f,
      .ti-widget-container [class*="star"][class*="empty"] {
        color: #dadce0 !important;
      }
      
      /* Review Date */
      .ti-widget-container .ti-review-date,
      .ti-widget-container [class*="review-date"] {
        font-size: 12px !important;
        color: #5f6368 !important;
        margin-top: 4px !important;
      }
      
      /* Review Text */
      .ti-widget-container .ti-review-content,
      .ti-widget-container [class*="review-content"],
      .ti-widget-container [class*="review-text"] {
        font-size: 14px !important;
        line-height: 1.5 !important;
        color: #3c4043 !important;
        margin-top: 8px !important;
        flex-grow: 1 !important;
        overflow: hidden !important;
      }
      
      /* Review Grid */
      .ti-widget-container .ti-reviews-container,
      .ti-widget-container [class*="reviews-container"],
      .ti-widget-container [class*="reviews-grid"] {
        display: grid !important;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
        gap: 16px !important;
      }
      
      @media (max-width: 768px) {
        .ti-widget-container .ti-reviews-container,
        .ti-widget-container [class*="reviews-container"],
        .ti-widget-container [class*="reviews-grid"] {
          grid-template-columns: 1fr !important;
        }
      }
      
      /* Google Logo/Branding */
      .ti-widget-container .ti-widget-header,
      .ti-widget-container [class*="widget-header"] {
        margin-bottom: 24px !important;
        text-align: center !important;
      }
      
      /* Ensure consistent card heights */
      .ti-widget-container .ti-review-item,
      .ti-widget-container .ti-review,
      .ti-widget-container [class*="review-item"],
      .ti-widget-container [class*="review"] {
        height: 100% !important;
      }
      
      /* Rating Display */
      .ti-widget-container .ti-rating,
      .ti-widget-container [class*="rating"] {
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
        margin-bottom: 8px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup: remove style on unmount
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Google <span className="text-[#4285F4]">Reviews</span>
            </h3>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their experiences with us
          </p>
        </div>

        {/* Reviews Widget Container */}
        <div ref={containerRef} className="w-full">
          <div className="trustindex-widget w-full min-h-[500px] bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Trustindex widget will render reviews here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;
