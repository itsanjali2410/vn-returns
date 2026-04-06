'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  questions: FAQItem[];
}

export default function FAQContent({ faqData }: { faqData: FAQSection[] }) {
  const [activeSection, setActiveSection] = useState(0);
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know about traveling in Vietnam with us
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Section tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {faqData.map((section, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSection(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === idx
                  ? 'bg-[#ffc42d] text-gray-900'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#ffc42d] hover:text-gray-900'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-3">
          {faqData[activeSection].questions.map((item, index) => {
            const currentIndex = `${activeSection}-${index}`;
            const isOpen = openIndex === currentIndex;

            return (
              <div
                key={currentIndex}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(currentIndex)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-[#ffc42d] text-gray-900 rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Our travel experts are ready to help you plan the perfect Vietnam trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-[#ffc42d] hover:bg-[#e6b028] text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/packages"
              className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
