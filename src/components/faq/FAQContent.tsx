'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FAQContent({ faqData }: { faqData: any[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Banner Section */}
      <div className="relative w-screen max-w-full text-center overflow-hidden">
        <Image
          src="https://don16obqbay2c.cloudfront.net/wp-content/uploads/FAQ-1496222256.png"
          alt="FAQ Banner"
          title="FAQ Banner"
          width={1920}
          height={400}
          className="w-screen max-h-[400px] object-cover"
          priority
        />
      </div>

      {/* FAQ Sections */}
      <div className="flex flex-wrap gap-6 mt-8 w-full px-[10%] max-md:flex-col max-md:px-[5%]">
        {faqData.map((section, sectionIndex) => (
          <div
            key={`faq-section-${sectionIndex}`}
            className="flex-1 bg-white rounded-lg shadow-sm p-4"
          >
            <div className="text-[22px] font-bold text-[#007399] border-l-4 border-[#007399] pl-3 mb-5">
              {section.title}
            </div>

            {section.questions.map((item: Record<string, string>, index: number) => {
              const currentIndex = `${sectionIndex}-${index}`;
              const isOpen = openIndex === currentIndex;

              return (
                <div
                  key={`faq-item-${currentIndex}`}
                  onClick={() => toggleFAQ(currentIndex)}
                  className={`border border-[#00a3cc] rounded-lg mb-3 p-4 cursor-pointer transition-all duration-300 ${
                    isOpen ? 'bg-[#e6f7ff]' : 'bg-[#f9f9f9]'
                  }`}
                >
                  <div className="flex justify-between items-center font-semibold text-[#007399] text-[18px]">
                    {item.question}
                    <span>{isOpen ? '▲' : '▼'}</span>
                  </div>

                  <div
                    className={`text-[#555] text-[16px] leading-relaxed transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'max-h-[300px] opacity-100 mt-3 border-t border-gray-300 pt-3'
                        : 'max-h-0 opacity-0 mt-0 pt-0'
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
