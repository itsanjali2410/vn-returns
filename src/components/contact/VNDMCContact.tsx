'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaComments, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactMethods = [
  {
    icon: <FaPhone className="text-2xl" />,
    title: 'Call Now',
    value: '+84 0325765379',
    link: 'tel:+840325765379',
    subtitle: 'Available 24/7',
  },
  {
    icon: <FaComments className="text-2xl" />,
    title: 'Live Chat',
    value: 'Available 24/7',
    link: '#',
    subtitle: 'Available 24/7',
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
    link: '#',
    subtitle: 'Free Consultation',
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl" />,
    title: 'Visit Our Office',
    value: '5th Floor, 26 Duong Khue',
    link: '#',
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Here you would typically send the form data to your API
    // For now, just show success message
    setTimeout(() => {
      toast.success('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hanoi-9D8N/goldenbridge.png"
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
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-gray-50 hover:bg-green-50 p-6 rounded-lg transition-colors text-center border border-gray-200 hover:border-[#198754]"
              >
                <div className="flex justify-center text-[#198754] mb-3">{method.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-gray-700 text-sm mb-1">{method.value}</p>
                <p className="text-gray-500 text-xs">{method.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#198754] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      5th Floor, 26 Duong Khue, My An, Ngu Hanh Son, Da Nang, Viet Nam
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
                <a
                  href="tel:+840325765379"
                  className="text-[#198754] hover:text-[#147048] text-lg block mb-2"
                >
                  +84 0325765379
                </a>
                <a
                  href="tel:+84987654321"
                  className="text-[#198754] hover:text-[#147048] text-lg block"
                >
                  +84 987654321
                </a>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
                <a
                  href="mailto:sales@vndmc.com"
                  className="text-[#198754] hover:text-[#147048] text-lg"
                >
                  sales@vndmc.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Vietnam Adventure</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#198754] focus:border-[#198754]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#198754] focus:border-[#198754]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Your phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#198754] focus:border-[#198754]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Dream Trip <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your travel preferences, interests, special requirements, or any specific destinations you'd like to visit..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#198754] focus:border-[#198754]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#198754] hover:bg-[#147048] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

