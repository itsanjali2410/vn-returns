import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { citiesData, getCityBySlug } from '@/data/cities';

interface CityPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return citiesData.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: 'City Not Found' };
  return {
    title: `${city.name} - Things to Do & Travel Guide | Vietnam DMC`,
    description: city.description,
    keywords: `${city.name}, Vietnam travel, ${city.name} things to do, ${city.name} guide, Vietnam DMC`,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
        <Image src={city.image} alt={city.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-16 text-white">
          <p className="text-sm sm:text-base text-[#ffc42d] font-medium mb-1">{city.region}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{city.name}</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">{city.tagline}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            About {city.name}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            {city.description}
          </p>
        </section>

        {/* Things to Do */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Things to Do in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.thingsToDo.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#ffc42d]/20 text-[#e6b028] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialities */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            What Makes {city.name} Special
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.specialities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
              >
                <span className="w-2 h-2 rounded-full bg-[#ffc42d] mt-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Explore {city.name}?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Browse our curated packages that include {city.name} or plan a custom trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Plan Custom Trip
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
