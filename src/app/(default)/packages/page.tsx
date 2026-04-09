import { Metadata } from 'next';
import Link from 'next/link';
import pkg1 from '@/data/packages/ha-noi-da-nang-phu-quoc-9d8n.json';
import pkg2 from '@/data/packages/phu-quoc-4-night-standard.json';
import pkg3 from '@/data/packages/vietnam-6n7d-day-cruise.json';
import pkg4 from '@/data/packages/vietnam-7n8d-standard.json';

export const metadata: Metadata = {
  title: 'Vietnam Travel Packages | Vietnam DMC',
  description: 'Discover our handpicked Vietnam travel packages. Explore Hanoi, Da Nang, Phu Quoc, and more.',
  keywords: 'Vietnam packages, Vietnam tours, Vietnam travel, Vietnam holidays, Vietnam DMC packages',
};

function createSlug(id: string): string {
  return id.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const packageImages: Record<string, string> = {
  'ha-noi-da-nang-phu-quoc-9d8n': '/package/Hanoi_Danang_Phuquoc.webp',
  'phu-quoc-4-night-standard': '/package/Phuqoc_Standard_Package.webp',
  'vietnam-6n7d-day-cruise': '/package/Vietnam_Standard_Package_daycruise.webp',
  'vietnam-7n8d-standard': '/package/Vietnam_Standard_Package.webp',
};

export default function PackagesPage() {
  const packages = [pkg1, pkg2, pkg3, pkg4];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#ffc42d] font-medium text-sm uppercase tracking-widest mb-3">Curated Experiences</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Vietnam Travel Packages</h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Handpicked itineraries crafted by local experts for unforgettable journeys
          </p>
        </div>
      </section>

      {/* Featured Package */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {(() => {
          const pkg = packages[0];
          const image = packageImages[pkg.id] || '/destinations/Halong_Bay.webp';
          const days = pkg.summaryItinerary?.length || 0;
          const nights = days > 0 ? days - 1 : 0;
          return (
            <Link
              href={`/packages/${createSlug(pkg.id)}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 overflow-hidden">
                  <img src={image} alt={pkg.packageName} className="w-full h-auto md:h-full md:object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[#ffc42d] text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm shadow-md">Featured</div>
                </div>
                <div className="p-6 sm:p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{nights}N / {days}D</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{pkg.option}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#ffc42d] transition-colors">{pkg.packageName}</h2>
                  <p className="text-[#e6b028] font-medium text-sm mb-4">{pkg.travelWindow}</p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {pkg.summaryItinerary.slice(0, 4).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc42d] mt-2 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Starting from</p>
                      <p className="text-xl font-bold text-gray-900">{pkg.pricing?.[0]?.prices?.[0] || pkg.note || 'Custom Quote'}</p>
                    </div>
                    <span className="bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-lg text-sm group-hover:bg-[#ffc42d] group-hover:text-gray-900 transition-colors">View Details</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })()}
      </section>

      {/* Remaining Packages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.slice(1).map((pkg) => {
            const image = packageImages[pkg.id] || '/destinations/Halong_Bay.webp';
            const days = pkg.summaryItinerary?.length || 0;
            const nights = days > 0 ? days - 1 : 0;
            return (
              <Link key={pkg.id} href={`/packages/${createSlug(pkg.id)}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="relative w-full overflow-hidden">
                  <img src={image} alt={pkg.packageName} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                    {pkg.pricing?.[0]?.prices?.[0] || pkg.note || 'Custom'}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-[#e6b028] font-semibold">{nights}N / {days}D</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-xs text-gray-500">{pkg.option}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#ffc42d] transition-colors line-clamp-2">{pkg.packageName}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {pkg.summaryItinerary.slice(0, 3).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-[#ffc42d] mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{pkg.travelWindow}</span>
                    <span className="text-sm font-semibold text-[#ffc42d] group-hover:underline">Explore →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Can't find your perfect package?</h2>
            <p className="text-gray-400">We specialize in custom itineraries tailored to your interests and budget.</p>
          </div>
          <Link href="/contact" className="bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap flex-shrink-0">
            Plan Custom Trip
          </Link>
        </div>
      </section>
    </div>
  );
}
