'use client';

export default function VietnamServices() {
  const services = [
    { name: 'Tour Planning', description: 'Custom itineraries with local expertise', icon: '📋' },
    { name: 'Group Tours', description: 'Tailored for any group size', icon: '👥' },
    {
      name: 'Transportation',
      description: 'Luxury vehicles & reliable transfers',
      icon: '🚗',
    },
    { name: 'Accommodation', description: 'Hotels, resorts & homestays', icon: '🏨' },
    { name: 'Culinary Tours', description: 'Food tours & cooking classes', icon: '🍜' },
    {
      name: 'Cultural Experiences',
      description: 'Local communities & traditions',
      icon: '🎭',
    },
    { name: 'Flight Booking', description: 'Domestic & international flights', icon: '✈️' },
    { name: 'Events', description: 'Corporate & special occasions', icon: '🎉' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Our Premium Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Comprehensive travel solutions that exceed expectations
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


