'use client';

import Image from 'next/image';

// Premium item type
type PremiumItem = {
  imgUrl: string;
  alt: string;
  label: string;
};

// Premium items data
const premiumData: PremiumItem[] = [
  {
    imgUrl: '/aboutus/premium/16-years-of-experience.webp',
    alt: '16 years of experience',
    label: '16+ Years Experience',
  },
  {
    imgUrl: '/aboutus/premium/20k-customers.webp',
    alt: '20k+ customers',
    label: '20K+ Customers',
  },
  {
    imgUrl: '/aboutus/premium/destination-guide.webp',
    alt: 'Destination guide',
    label: 'Destination Guide',
  },
  {
    imgUrl: '/aboutus/premium/customer-service.webp',
    alt: 'Customer service',
    label: 'Customer Service',
  },
  {
    imgUrl: '/aboutus/premium/indian-meals.webp',
    alt: 'Indian meals',
    label: 'Indian Meals',
  },
  {
    imgUrl: '/aboutus/premium/managed-hnis-vcelebrities.webp',
    alt: 'Managed HNIs & celebrities',
    label: 'Managed HNIs',
  },
];

export default function Premium() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
        {premiumData.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-sm flex flex-col items-center"
          >
            <div className="relative w-16 h-16 mb-2">
              <Image
                src={item.imgUrl}
                alt={item.alt}
                title={item.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
