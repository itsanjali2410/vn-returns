'use client';

import { FC } from 'react';
import { Star } from 'lucide-react';

interface TableRow {
  city?: string;
  star4?: string;
  star5?: string;
}

interface TableData {
  tab1: TableRow[];
}

interface TabbedContentProps {
  tableData: TableData;
}

const TabbedContent: FC<TabbedContentProps> = ({ tableData }) => {
  const filteredHotels = tableData.tab1.filter(
    (row) =>
      row.city &&
      (row.city.toLowerCase().includes('kuta') || row.city.toLowerCase().includes('bali'))
  );

  return (
    <div className="flex flex-col items-start w-full max-w-[1200px] mt-10">
      {filteredHotels.map((row, index) => (
        <div
          key={`hotel-row-${index}`}
          className="w-full bg-white rounded-xl shadow-md border-l-[6px] border-[#f4c430] p-5 mb-4"
        >
          {row.star4 && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#222] flex items-center gap-2 mb-3">
                <Star size={18} fill="#ffc42d" className="text-[#ffc42d]" />
                4-Star Hotels
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {row.star4.split('\\').map((hotel, i) => (
                  <div
                    key={`hotel-4star-${index}-${i}`}
                    className="bg-[#f9f6ee] border border-[#e0d6c2] text-[#444] text-sm rounded-md px-3 py-2"
                  >
                    {hotel}
                  </div>
                ))}
              </div>
            </div>
          )}

          {row.star5 && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#222] flex items-center gap-2 mb-3">
                <Star size={18} fill="#ffc42d" className="text-[#ffc42d]" />
                5-Star Hotels
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {row.star5.split('\\').map((hotel, i) => (
                  <div
                    key={`hotel-5star-${index}-${i}`}
                    className="bg-[#f9f6ee] border border-[#e0d6c2] text-[#444] text-sm rounded-md px-3 py-2"
                  >
                    {hotel}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabbedContent;
