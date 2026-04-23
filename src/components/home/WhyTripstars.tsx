import Image from 'next/image';

const data = [
  { alt: 'Vietnam Based Headquarters', icon: '/USPS/USPS/Vietnam_Headquarters.png' },
  { alt: '20k+ Customers Served', icon: '/USPS/USPS/20K_customers.webp' },
  { alt: '6+ Years Of Experience', icon: '/USPS/USPS/6_Years.webp' },
  { alt: '24/7 Customer Service', icon: '/USPS/USPS/Customer_Service.webp' },
];

export default function WhyVietnamDMC() {
  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 sm:py-6">
      {/* Section Title */}
      <div className="flex justify-between items-center pt-4 md:pt-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-[#376941]">
          <span>Why </span>
          <span className="font-cursive">
            Partner with us?
          </span>
        </h2>
      </div>

      {/* Horizontal Trust Strip */}
      <div className="flex overflow-x-auto sm:overflow-x-visible sm:flex-wrap sm:justify-between items-center gap-x-6 sm:gap-x-4 gap-y-5 mt-4 sm:mt-6 py-4 sm:py-5 px-4 sm:px-6 bg-white rounded-xl border border-gray-100 shadow-sm scrollbar-hide">
        {data.map((item, index) => (
          <Image
            key={index}
            src={item.icon}
            alt={item.alt}
            width={200}
            height={60}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
