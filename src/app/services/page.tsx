import { Metadata } from 'next';
import Image from 'next/image';
import {
  ClipboardList,
  Users,
  Car,
  Hotel,
  UtensilsCrossed,
  Theater,
  Plane,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Vietnam DMC',
  description:
    'Comprehensive travel services in Vietnam including tour planning, transportation, accommodation, cultural experiences, and more. Your trusted destination management partner.',
  keywords:
    'Vietnam travel services, tour planning, destination management, transportation, accommodation, cultural tours Vietnam',
};

const services = [
  {
    name: 'Tour Planning & Itinerary Design',
    description:
      'We create bespoke travel itineraries tailored to your interests, budget, and timeline. Our experienced team designs unique journeys that showcase the best of Vietnam.',
    icon: ClipboardList,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    features: ['Custom itineraries', 'Local expertise', 'Budget optimization', 'Multi-destination planning'],
    image: '/hanoi-9D8N/temple.jpg',
  },
  {
    name: 'Group Tours & Packages',
    description:
      'Whether you\'re traveling with family, friends, or a corporate group, we offer tailored group tour packages designed for any group size with competitive pricing.',
    icon: Users,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    features: ['Small & large groups', 'Private tours', 'Corporate travel', 'Specialty tours'],
    image: '/hanoi-9D8N/halongbay.jpg',
  },
  {
    name: 'Transportation Services',
    description:
      'Reliable and comfortable transportation options throughout Vietnam. From airport transfers to long-distance travel, we ensure safe and convenient journeys.',
    icon: Car,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    features: ['Airport transfers', 'Private vehicles', 'Luxury cars', 'Coach buses'],
    image: '/hanoi-9D8N/danang.jpg',
  },
  {
    name: 'Accommodation Booking',
    description:
      'Access to the best hotels, resorts, and homestays across Vietnam. From luxury 5-star properties to authentic local experiences, we find the perfect stay.',
    icon: Hotel,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    features: ['Hotels & resorts', 'Boutique properties', 'Homestays', 'Best rates guaranteed'],
    image: '/hanoi-9D8N/goldenbridge.png',
  },
  {
    name: 'Culinary Tours & Experiences',
    description:
      'Discover Vietnam\'s rich culinary heritage through food tours, cooking classes, and dining experiences that take you from street food to fine dining.',
    icon: UtensilsCrossed,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    features: ['Food tours', 'Cooking classes', 'Market visits', 'Fine dining'],
    image: '/hanoi-9D8N/boat-ride.jpg',
  },
  {
    name: 'Cultural & Heritage Tours',
    description:
      'Immerse yourself in Vietnamese culture through authentic experiences. Visit local communities, learn traditional crafts, and discover the country\'s rich heritage.',
    icon: Theater,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    features: ['Local communities', 'Traditional crafts', 'Historical sites', 'Cultural performances'],
    image: '/hanoi-9D8N/cablecar.jpg',
  },
  {
    name: 'Flight & Travel Arrangements',
    description:
      'We handle all your flight bookings, both domestic and international. Our partnerships with major airlines ensure the best rates and convenient schedules.',
    icon: Plane,
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
    features: ['Domestic flights', 'International flights', 'Best prices', 'Flexible schedules'],
    image: '/hanoi-9D8N/chu-chi tunnel.jpg',
  },
  {
    name: 'Events & MICE Services',
    description:
      'Professional event planning and MICE (Meetings, Incentives, Conferences, Exhibitions) services. From corporate meetings to special celebrations, we make it memorable.',
    icon: Calendar,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    features: ['Corporate events', 'Conferences', 'Team building', 'Special celebrations'],
    image: '/hanoi-9D8N/winwonders.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hanoi-9D8N/halongbay.jpg"
            alt="Vietnam Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Comprehensive travel solutions designed to make your Vietnam journey unforgettable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to execution, we provide end-to-end travel services that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#198754] transform hover:-translate-y-1"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className={`${service.iconBg} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className={`${service.iconColor} w-7 h-7`} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#198754] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm sm:text-base text-gray-700">
                          <CheckCircle2 className="text-[#198754] mr-2 w-5 h-5 flex-shrink-0" strokeWidth={2} />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#198754] to-[#147048] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Plan Your Vietnam Adventure?
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact our travel experts today and let us create the perfect itinerary for you
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

