import { Metadata } from 'next';
import Image from 'next/image';

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
    icon: '📋',
    features: ['Custom itineraries', 'Local expertise', 'Budget optimization', 'Multi-destination planning'],
    image: '/hanoi-9D8N/temple.jpg',
  },
  {
    name: 'Group Tours & Packages',
    description:
      'Whether you\'re traveling with family, friends, or a corporate group, we offer tailored group tour packages designed for any group size with competitive pricing.',
    icon: '👥',
    features: ['Small & large groups', 'Private tours', 'Corporate travel', 'Specialty tours'],
    image: '/hanoi-9D8N/halongbay.jpg',
  },
  {
    name: 'Transportation Services',
    description:
      'Reliable and comfortable transportation options throughout Vietnam. From airport transfers to long-distance travel, we ensure safe and convenient journeys.',
    icon: '🚗',
    features: ['Airport transfers', 'Private vehicles', 'Luxury cars', 'Coach buses'],
    image: '/hanoi-9D8N/danang.jpg',
  },
  {
    name: 'Accommodation Booking',
    description:
      'Access to the best hotels, resorts, and homestays across Vietnam. From luxury 5-star properties to authentic local experiences, we find the perfect stay.',
    icon: '🏨',
    features: ['Hotels & resorts', 'Boutique properties', 'Homestays', 'Best rates guaranteed'],
    image: '/hanoi-9D8N/goldenbridge.png',
  },
  {
    name: 'Culinary Tours & Experiences',
    description:
      'Discover Vietnam\'s rich culinary heritage through food tours, cooking classes, and dining experiences that take you from street food to fine dining.',
    icon: '🍜',
    features: ['Food tours', 'Cooking classes', 'Market visits', 'Fine dining'],
    image: '/hanoi-9D8N/boat-ride.jpg',
  },
  {
    name: 'Cultural & Heritage Tours',
    description:
      'Immerse yourself in Vietnamese culture through authentic experiences. Visit local communities, learn traditional crafts, and discover the country\'s rich heritage.',
    icon: '🎭',
    features: ['Local communities', 'Traditional crafts', 'Historical sites', 'Cultural performances'],
    image: '/hanoi-9D8N/cablecar.jpg',
  },
  {
    name: 'Flight & Travel Arrangements',
    description:
      'We handle all your flight bookings, both domestic and international. Our partnerships with major airlines ensure the best rates and convenient schedules.',
    icon: '✈️',
    features: ['Domestic flights', 'International flights', 'Best prices', 'Flexible schedules'],
    image: '/hanoi-9D8N/chu-chi tunnel.jpg',
  },
  {
    name: 'Events & MICE Services',
    description:
      'Professional event planning and MICE (Meetings, Incentives, Conferences, Exhibitions) services. From corporate meetings to special celebrations, we make it memorable.',
    icon: '🎉',
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From planning to execution, we provide end-to-end travel services that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <span className="text-[#ffc42d] mr-2">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#198754] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Plan Your Vietnam Adventure?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Contact our travel experts today and let us create the perfect itinerary for you
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

