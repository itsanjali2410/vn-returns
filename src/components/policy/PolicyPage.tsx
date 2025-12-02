'use client';

import { useEffect, useState } from 'react';

interface PolicyPageProps {
  title: string;
  content: string[];
}

export default function PolicyPage({ title, content }: PolicyPageProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="text-3xl font-semibold text-gray-700 mb-6">{title}</div>
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-[Montserrat] flex flex-col">
      {/* Header */}
      <header className="h-[140px] bg-gradient-to-br from-white to-gray-50 flex justify-center items-center text-gray-800 text-4xl font-semibold tracking-wide border-b border-gray-200 shadow-sm max-md:h-[120px] max-md:text-3xl max-sm:h-[100px] max-sm:text-2xl">
        {title}
      </header>

      {/* Main Section */}
      <section
        className="
          w-full
          flex
          justify-center
          px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
          py-10
        "
      >
        <div className="max-w-3xl w-full bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-md leading-relaxed">
          {content.map((text, i) => (
            <p
              key={`text-${i}`}
              className="text-gray-700 text-[1.05rem] mb-4 leading-8 text-justify"
            >
              {text}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
