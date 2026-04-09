'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TripFormModal from '@/components/modals/TripFormModal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PackageDetailWrapperProps { packageData: any }

const packageImages: Record<string, string> = {
  'ha-noi-da-nang-phu-quoc-9d8n': '/package/Hanoi_Danang_Phuquoc.webp',
  'phu-quoc-4-night-standard': '/package/Phuqoc_Standard_Package.webp',
  'vietnam-6n7d-day-cruise': '/package/Vietnam_Standard_Package_daycruise.webp',
  'vietnam-7n8d-standard': '/package/Vietnam_Standard_Package.webp',
  'phu-quoc-short-break': '/destinations/Phu_Quoc_Island.webp',
  'phu-quoc-fully-loaded': '/popular_cities/Phu Quoc.webp',
  'phu-quoc-with-1-day-leisure': '/destinations/Monkey_Mountain.webp',
  'ha-noi-da-nang-ho-chi-minh-day-with-day-cruise': '/destinations/Ho_Chi_Minh_City.webp',
  'ha-noi-da-nang-ho-chi-minh-with-over-night-cruise': '/destinations/Halong_Bay.webp',
  'ha-noi-da-nang-phu-quoc-with-day-cruise': '/destinations/Da_Nang_City_Tour.webp',
  'ha-noi-da-nang-phu-quoc-with-over-night-cruise': '/destinations/Ba_Na_Hills_Golden_Bridge.webp',
  'ha-noi-phu-quoc-da-nang-day-cruise': '/destinations/Hoi_An_Ancient_Town.webp',
  'ha-noi-da-nang-short-break': '/destinations/Hanoi.webp',
};

export default function PackageDetailWrapper({ packageData: pkg }: PackageDetailWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  const image = packageImages[pkg.id] || '/destinations/Halong_Bay.webp';
  const days = pkg.days || pkg.summaryItinerary?.length || 0;
  const nights = pkg.nights || Math.max(0, days - 1);
  const includes = pkg.includes || [];
  const excludes = pkg.excludes || [];
  const itinerary = pkg.detailedItinerary || [];
  const notes = pkg.notes || pkg.policy?.notes || [];
  const cancellation = pkg.cancellation || pkg.policy?.cancellation || [];
  const depositTerms = pkg.depositTerms || pkg.policy?.deposit || [];

  return (
    <>
      <TripFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={pkg.packageName}
      />

      {/* Hero */}
      <section className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <Image src={image} alt={pkg.packageName} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#ffc42d] text-gray-900 font-bold px-3 py-1 rounded-full text-xs">{nights}N / {days}D</span>
            {pkg.places?.map((place: string, i: number) => (
              <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">{place}</span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">{pkg.packageName}</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Summary Itinerary */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Summary</h2>
              <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
                {pkg.summaryItinerary?.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 px-5 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#ffc42d]/10 text-[#e6b028] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Itinerary */}
            {itinerary.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Itinerary</h2>
                <div className="space-y-3">
                  {itinerary.map((day: { day: string; title: string; details: string[] }, idx: number) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#ffc42d] text-gray-900 text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-semibold text-gray-900 text-sm">{day.title || day.day}</span>
                        </div>
                        <svg className={`w-5 h-5 text-gray-400 transition-transform ${expandedDay === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedDay === idx && (
                        <div className="px-5 pb-5 pt-1">
                          <ul className="space-y-2">
                            {day.details.map((detail: string, di: number) => (
                              <li key={di} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffc42d] mt-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Includes / Excludes */}
            <div className="grid sm:grid-cols-2 gap-6">
              {includes.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Includes</h2>
                  <ul className="space-y-2 bg-white rounded-xl border border-gray-100 p-5">
                    {includes.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {excludes.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Excludes</h2>
                  <ul className="space-y-2 bg-white rounded-xl border border-gray-100 p-5">
                    {excludes.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Notes */}
            {notes.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Important Notes</h2>
                <ul className="space-y-2 bg-amber-50 rounded-xl border border-amber-100 p-5">
                  {notes.map((note: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-amber-500 mt-0.5 flex-shrink-0">*</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">Starting from</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {(() => {
                    const pr = pkg.pricing?.[0];
                    if (!pr) return pkg.note || 'Custom Quote';
                    const firstPrice = pr.prices?.[0];
                    if (firstPrice) {
                      const match = firstPrice.match?.(/(\d+)\s*USD/);
                      return match ? `${match[1]} USD` : firstPrice;
                    }
                    const tierMatch = pr.tier?.match?.(/(\d+)\s*USD/);
                    return tierMatch ? `${tierMatch[1]} USD` : pkg.note || 'Custom Quote';
                  })()}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-bold py-3 rounded-lg transition-colors text-sm"
                >
                  Inquire Now
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">No payment required. Get a custom quote.</p>
              </div>

              {/* Pricing tiers */}
              {pkg.pricing?.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Pricing Options</h3>
                  <div className="space-y-3">
                    {pkg.pricing.map((tier: { tier: string; prices?: string[]; adultPrice?: string; hotels?: { city: string; hotel: string; room: string }[] }, i: number) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3">
                        <p className="font-semibold text-xs text-gray-900 mb-1">{tier.tier}</p>
                        {tier.adultPrice && <p className="text-xs text-[#e6b028] font-medium">{tier.adultPrice}</p>}
                        {tier.prices?.map((p: string, pi: number) => (
                          <p key={pi} className="text-xs text-gray-500">{p}</p>
                        ))}
                        {tier.hotels?.map((h: { city: string; hotel: string; room: string }, hi: number) => (
                          <p key={hi} className="text-[11px] text-gray-400 mt-1">{h.city}: {h.hotel}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Policies */}
              {(depositTerms.length > 0 || cancellation.length > 0) && (
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Policies</h3>
                  {depositTerms.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Deposit</p>
                      {depositTerms.map((term: string, i: number) => (
                        <p key={i} className="text-xs text-gray-500">{term}</p>
                      ))}
                    </div>
                  )}
                  {cancellation.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-1">Cancellation</p>
                      {cancellation.map((term: string, i: number) => (
                        <p key={i} className="text-xs text-gray-500">{term}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <Link href="/packages" className="block text-center text-sm text-[#e6b028] font-semibold hover:underline">
                &larr; View All Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
