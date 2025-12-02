'use client';

import { FC, useState } from 'react';

interface InclusionsExclusionsProps {
  inclusions: string[];
  exclusions: string[];
  nights?: number;
  days?: number;
  destinationCovered?: string;
}

const InclusionsExclusions: FC<InclusionsExclusionsProps> = ({ inclusions, exclusions }) => {
  const [activeTab, setActiveTab] = useState<'inclusions' | 'exclusions'>('inclusions');

  const boxes = [
    {
      title: 'Inclusions',
      items: inclusions,
      bgColor: 'bg-[#fef3c7]',
      icon: '✓',
      iconColor: 'text-[#198754]',
      hiddenOnMobile: activeTab !== 'inclusions',
    },
    {
      title: 'Exclusions',
      items: exclusions,
      bgColor: 'bg-[#fef3c7]',
      icon: '✗',
      iconColor: 'text-red-600',
      hiddenOnMobile: activeTab !== 'exclusions',
    },
  ];

  return (
    <div className="max-w-[1200px] w-full mx-auto p-4">
      {/* Mobile Tabs */}
      <div className="flex justify-center gap-2 mb-4 md:hidden">
        <button
          role="tab"
          id="tab-inclusions"
          aria-selected={activeTab === 'inclusions'}
          aria-controls="panel-inclusions"
          tabIndex={activeTab === 'inclusions' ? 0 : -1}
          aria-label="Show inclusions section"
          onClick={() => setActiveTab('inclusions')}
          className={`px-6 py-4 rounded-md border transition ${
            activeTab === 'inclusions'
              ? 'bg-white text-[#ffc42d] font-bold border-gray-300'
              : 'bg-gray-100 text-gray-700 border-gray-300'
          } hover:bg-[#fef3c7]`}
        >
          Inclusions
        </button>
        <button
          role="tab"
          id="tab-exclusions"
          aria-selected={activeTab === 'exclusions'}
          aria-controls="panel-exclusions"
          tabIndex={activeTab === 'exclusions' ? 0 : -1}
          aria-label="Show exclusions section"
          onClick={() => setActiveTab('exclusions')}
          className={`px-6 py-4 rounded-md border transition ${
            activeTab === 'exclusions'
              ? 'bg-white text-[#ffc42d] font-bold border-gray-300'
              : 'bg-gray-100 text-gray-700 border-gray-300'
          } hover:bg-[#fef3c7]`}
        >
          Exclusions
        </button>
      </div>

      {/* Desktop / Mobile Boxes */}
      <div className="flex flex-col md:flex-row gap-4">
        {boxes.map(({ title, items, bgColor, icon, iconColor, hiddenOnMobile }, idx) => (
          <div
            key={`inex-box-${idx}`}
            className={`${bgColor} p-5 rounded-lg shadow-md w-full md:flex-1 ${
              hiddenOnMobile ? 'hidden md:block' : 'block'
            }`}
          >
            <h3 className="flex items-center text-lg font-semibold mb-4 text-gray-800">
              <span className={`mr-2 text-2xl font-bold ${iconColor}`}>{icon}</span>
              {title}
            </h3>
            <ul className="space-y-2">
              {items &&
                items.map((item, i) => (
                  <li
                    key={`inex-item-${idx}-${i}`}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <span className={`mr-2 text-lg font-bold ${title === 'Inclusions' ? 'text-[#198754]' : 'text-red-600'}`}>
                      {title === 'Inclusions' ? '✓' : '✗'}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InclusionsExclusions;
