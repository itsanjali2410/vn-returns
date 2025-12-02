import Link from 'next/link';
import Image from 'next/image';
import package1 from '@/data/ha-noi-da-nang-phu-quoc-9d8n/package.json';
import package2 from '@/data/PhuQuoc4 _Night _Standard _Package/package.json';
import package3 from '@/data/Vietnam_Standard_Package_6N7D _with _DayCruise/package.json';
import package4 from '@/data/Vietnam - 7N8D - Standard Package/package.json';

export default function VietnamPackages() {
  // Helper function to extract arrival location
  const extractArrival = (itineraryItem: string) => {
    if (!itineraryItem) return '';
    const match = itineraryItem.match(/Day \d+:\s*([^–]+)/);
    return match ? match[1].trim() : itineraryItem.split('–')[0]?.replace(/Day \d+:\s*/, '').trim() || '';
  };

  // Helper function to extract duration from package name or itinerary
  const extractDuration = (summaryItinerary: string[], packageName: string) => {
    // Try to extract from package name first (e.g., "9D8N", "4D3N", "6N7D")
    const durationMatch = packageName.match(/(\d+)[DN]\d*[DN]/);
    if (durationMatch) {
      const days = parseInt(durationMatch[1]);
      return `${days} days`;
    }
    // Fallback to itinerary length
    return `${summaryItinerary.length} days`;
  };

  // Map package data to component format
  const packages = [
    {
      id: package1.id,
      title: package1.packageName,
      pricing: package1.note,
      option: package1.option,
      duration: extractDuration(package1.summaryItinerary, package1.packageName),
      groupSizes: package1.paxGroups,
      arrival: extractArrival(package1.summaryItinerary[0]),
      highlights: package1.summaryItinerary.slice(0, 3),
      image: '/hanoi-9D8N/halongbay.jpg',
    },
    {
      id: package2.id,
      title: package2.packageName,
      pricing: package2.note,
      option: package2.option,
      duration: extractDuration(package2.summaryItinerary, package2.packageName),
      groupSizes: package2.paxGroups.length > 0 ? package2.paxGroups : ['Custom group sizes'],
      arrival: extractArrival(package2.summaryItinerary[0]),
      highlights: package2.summaryItinerary.slice(0, 3),
      image: '/hanoi-9D8N/thom-island.jpg',
    },
    {
      id: package3.id,
      title: package3.packageName,
      pricing: package3.note,
      option: package3.option,
      duration: extractDuration(package3.summaryItinerary, package3.packageName),
      groupSizes: package3.paxGroups,
      arrival: extractArrival(package3.summaryItinerary[0]),
      highlights: package3.summaryItinerary.slice(0, 3),
      image: '/hanoi-9D8N/boat-ride.jpg',
    },
    {
      id: package4.id,
      title: package4.packageName,
      pricing: package4.note,
      option: package4.option,
      duration: extractDuration(package4.summaryItinerary, package4.packageName),
      groupSizes: package4.paxGroups,
      arrival: extractArrival(package4.summaryItinerary[0]),
      highlights: package4.summaryItinerary.slice(0, 3),
      image: '/hanoi-9D8N/danang.jpg',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Featured Packages
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Handpicked Vietnam Journeys
        </p>
        <p className="text-center text-base text-gray-500 mb-8">
          Discover our curated selection of unforgettable travel experiences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Package Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-[#ffc42d] text-black text-xs font-semibold px-3 py-2 rounded-lg inline-block">
                    {pkg.pricing}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{pkg.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.option}</p>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {pkg.duration} • {pkg.groupSizes.join(' • ')}
                  </p>
                  {/* <p className="text-sm text-gray-600">{pkg.arrival}</p> */}
                </div>
                <Link
                  href={`/packages/${pkg.id.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  className="block w-full text-center bg-[#198754] hover:bg-[#147048] text-white font-semibold px-4 py-3 rounded-lg transition-colors"
                >
                  View Itinerary →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-block bg-[#198754] hover:bg-[#147048] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            See All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

