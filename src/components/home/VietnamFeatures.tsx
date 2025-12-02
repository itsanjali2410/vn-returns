'use client';

export default function VietnamFeatures() {
  const features = [
    {
      title: 'Authentic Experiences',
      description: 'Connect with real Vietnam through local communities.',
      icon: '🌏',
    },
    {
      title: 'Personalized Service',
      description: 'Tailored itineraries for your interests and style.',
      icon: '✨',
    },
    {
      title: 'Sustainable Tourism',
      description: 'Responsible travel benefiting local communities.',
      icon: '🌱',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


