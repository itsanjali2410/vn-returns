'use client';

import { FC, useState } from 'react';

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: 'Payment Policy',
    content: 'All payments should be cleared at least 30 days prior to departure.',
  },
  {
    title: 'Date Change Policy (Prepone/Postpone)',
    content:
      'If a client wishes to prepone or postpone their travel dates, please notify us at least 15 days before the journey via email or message. Some service providers (Hotels, Transporters, etc.) may apply additional charges, which will be deducted from the advance amount.',
  },
  {
    title: 'Availability & Pricing on Date Change',
    content:
      'All prepone/postpone requests are subject to availability of hotels/transport and may vary depending on season or off-season pricing.',
  },
  {
    title: 'Changes Close to Travel Date',
    content:
      'No changes are accepted within 15 days of the departure date. In rare cases such as natural calamities or strikes, the package may be postponed with prior notice.',
  },
  {
    title: 'Cancellation Policy',
    content:
      '30 days or more before departure: 25% cancellation fee; 29–20 days: 50% cancellation fee; 19 days or less: 100% cancellation fee. Airfare is subject to airline policy and may be non-refundable. Actual cancellation amount may vary depending on airline, hotel, and local transport conditions.',
  },
];

const TermsAndConditions: FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6 border-b-4 border-[#ffc42d] pb-2">
        Terms & Conditions
      </h2>

      {sections.map((section, index) => {
        const isOpen = openSections.includes(index);
        return (
          <div key={index} className="mb-4 rounded-lg overflow-hidden border border-gray-200">
            <button
              role="button"
              id={`accordion-header-${index}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              aria-label={isOpen ? 'Collapse section' : 'Expand section'}
              onClick={() => toggleSection(index)}
              className={`w-full flex justify-between items-center px-5 py-4 font-semibold text-gray-800 transition-colors ${
                isOpen
                  ? 'bg-gradient-to-r from-[#fef3c7] to-[#fde68a]'
                  : 'bg-gray-100 hover:bg-[#fef3c7]'
              }`}
            >
              <span className="text-left">{section.title}</span>
              <span
                className={`text-[#ffc42d] text-lg transform transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div className="px-5 py-4 text-gray-600 bg-gray-50 border-t border-gray-200 animate-slideDown">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TermsAndConditions;
