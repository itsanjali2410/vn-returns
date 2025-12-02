'use client';

export default function ImpressiveFigure() {
  return (
    <div className="px-6 py-8 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">
        Impressive <span className="text-[#ffc42d]">Figures</span>
      </h1>

      <div className="flex flex-wrap justify-center items-stretch border-t border-gray-300 md:border-t-0">
        {/* Figure 1 */}
        <div className="flex-1 min-w-[200px] p-6 border-b border-gray-300 md:border-b-0 md:border-r last:border-r-0 last:border-b-0">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">16+</p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Years of Experience</p>
        </div>

        {/* Figure 2 */}
        <div className="flex-1 min-w-[200px] p-6 border-b border-gray-300 md:border-b-0 md:border-r last:border-r-0 last:border-b-0">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">24/7</p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Personal Concierge</p>
        </div>

        {/* Figure 3 */}
        <div className="flex-1 min-w-[200px] p-6 border-b border-gray-300 md:border-b-0 md:border-r last:border-r-0 last:border-b-0">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">20000+</p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Customers Service par excellence
          </p>
        </div>

        {/* Figure 4 */}
        <div className="flex-1 min-w-[200px] p-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">100%</p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">On Ground Support</p>
        </div>
      </div>
    </div>
  );
}
