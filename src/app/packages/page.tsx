import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import package1 from '@/data/ha-noi-da-nang-phu-quoc-9d8n/package.json';
import package2 from '@/data/PhuQuoc4 _Night _Standard _Package/package.json';
import package3 from '@/data/Vietnam_Standard_Package_6N7D _with _DayCruise/package.json';
import package4 from '@/data/Vietnam - 7N8D - Standard Package/package.json';

export const metadata: Metadata = {
  title: 'Vietnam Travel Packages | Vietnam DMC',
  description:
    'Discover our handpicked Vietnam travel packages. Explore Hanoi, Da Nang, Phu Quoc, and more with our expertly crafted itineraries.',
  keywords: 'Vietnam packages, Vietnam tours, Vietnam travel, Vietnam holidays',
};

function createSlug(id: string): string {
  return id.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function PackagesPage() {
  const packages = [
    { ...package1, image: '/hanoi-9D8N/halongbay.jpg' },
    { ...package2, image: '/hanoi-9D8N/thom-island.jpg' },
    { ...package3, image: '/hanoi-9D8N/boat-ride.jpg' },
    { ...package4, image: '/hanoi-9D8N/danang.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hanoi-9D8N/halongbay.jpg"
            alt="Vietnam Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Vietnam Travel Packages
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Explore our curated selection of unforgettable Vietnam travel experiences
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const slug = createSlug(pkg.id);
            const arrival = pkg.summaryItinerary?.[0]?.split('–')[0]?.replace(/Day \d+:\s*/, '').trim() || '';
            const duration = pkg.summaryItinerary?.length || 0;

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Package Image */}
                {pkg.image && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.packageName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-[#ffc42d] text-black text-xs font-semibold px-3 py-2 rounded-lg inline-block">
                      {pkg.note}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{pkg.packageName}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pkg.option}</p>
                  <div className="border-t border-gray-200 my-4"></div>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      {duration} days
                      {pkg.paxGroups && pkg.paxGroups.length > 0 && (
                        <> • {pkg.paxGroups.join(' • ')}</>
                      )}
                    </p>
                    
                  </div>
                  <Link
                    href={`/packages/${slug}`}
                    className="block w-full text-center bg-[#198754] hover:bg-[#147048] text-white font-semibold px-4 py-3 rounded-lg transition-colors"
                  >
                    View Itinerary →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>
    </div>
  );
}

