'use client';

import {
  ClipboardList,
  Users,
  Car,
  Hotel,
  UtensilsCrossed,
  Theater,
  Plane,
  Calendar,
} from 'lucide-react';

export default function VietnamServices() {
  const services = [
    {
      name: 'Tour Planning',
      description: 'Custom itineraries with local expertise',
      icon: ClipboardList,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Group Tours',
      description: 'Tailored for any group size',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Transportation',
      description: 'Luxury vehicles & reliable transfers',
      icon: Car,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Accommodation',
      description: 'Hotels, resorts & homestays',
      icon: Hotel,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'Culinary Tours',
      description: 'Food tours & cooking classes',
      icon: UtensilsCrossed,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      name: 'Cultural Experiences',
      description: 'Local communities & traditions',
      icon: Theater,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      name: 'Flight Booking',
      description: 'Domestic & international flights',
      icon: Plane,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      name: 'Events',
      description: 'Corporate & special occasions',
      icon: Calendar,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Our Premium Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive travel solutions that exceed expectations
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 hover:border-[#198754] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${service.bgColor} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`${service.color} w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8`} strokeWidth={2} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#198754] transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#198754] to-[#ffc42d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


