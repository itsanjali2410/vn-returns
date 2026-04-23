'use client';

import { Suspense, useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import B2BInquiryForm from '@/components/home/B2BInquiryForm';

const contactMethods = [
  {
    icon: <FaPhone className="text-2xl" />,
    title: 'Call Now',
    value: '+84 0325765379',
    link: 'tel:+840325765379',
    subtitle: 'Available 24/7',
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    title: 'WhatsApp',
    value: '+84 0325765379',
    link: 'https://wa.me/84325765379?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20Vietnam%20travel%20package.',
    subtitle: 'Chat with us instantly',
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    title: 'Email Us',
    value: 'Quick Response',
    link: 'mailto:sales@vndmc.com',
    subtitle: 'Quick Response',
  },
  {
    icon: <FaCalendarAlt className="text-2xl" />,
    title: 'Book Meeting',
    value: 'Free Consultation',
    link: 'mailto:sales@vndmc.com?subject=Meeting%20Request%20-%20Free%20Consultation',
    subtitle: 'Free Consultation',
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl" />,
    title: 'Visit Our Office',
    value: '5th Floor, 26 Duong Khue',
    link: 'https://www.google.com/maps/search/?api=1&query=26+Duong+Khue+My+An+Ngu+Hanh+Son+Da+Nang+Vietnam',
    subtitle: 'Da Nang, Viet Nam',
  },
];

const faqs = [
  {
    question: 'How far in advance should I book my Vietnam trip?',
    answer:
      'We recommend booking at least 2-3 months in advance, especially for peak seasons (October-April). This ensures better availability and rates for accommodations and flights.',
  },
  {
    question: 'Do you provide visa assistance?',
    answer:
      "Yes, we provide comprehensive visa assistance including document preparation, application submission, and tracking. We'll guide you through the entire process.",
  },
  {
    question: "What's included in your tour packages?",
    answer:
      "Our packages typically include accommodations, transportation, guided tours, entrance fees, and some meals. Specific inclusions vary by package and will be clearly outlined in your itinerary.",
  },
  {
    question: 'Can you customize existing tour packages?',
    answer:
      'Absolutely! All our tours can be customized to match your preferences, budget, and schedule. We specialize in creating personalized experiences.',
  },
];

export default function VNDMCContact() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hanoi-9D8N/goldenbridge.webp"
            alt="Vietnam Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg sm:text-xl text-gray-100">
            Ready to start your Vietnamese adventure? Our travel experts are here to help you plan
            the perfect trip
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactMethods.map((method, index) => {
              const isExternal = method.link.startsWith('http');
              return (
              <a
                key={index}
                href={method.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="bg-gray-50 hover:bg-green-50 p-6 rounded-lg transition-colors text-center border border-gray-200 hover:border-[#198754]"
              >
                <div className="flex justify-center text-[#198754] mb-3">{method.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-gray-700 text-sm mb-1">{method.value}</p>
                <p className="text-gray-500 text-xs">{method.subtitle}</p>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form (shared with homepage) */}
      <Suspense fallback={<div className="py-16 text-center text-gray-500">Loading form...</div>}>
        <B2BInquiryForm />
      </Suspense>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className={`text-[#198754] transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

