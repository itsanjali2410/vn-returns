'use client';

import { useState } from 'react';
import axios from 'axios';
import { API_URL, BEARER_TOKEN } from '@/constant';
import { useCaptureUTM } from '@/hooks/useCaptureUTM';
import { sanitizeData } from '@/utils/sanitizeData';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const inquiryTypes = [
  'Partnership Opportunity',
  'Quote Request',
  'Custom Itinerary',
  'Group Booking',
  'Other',
];

interface FormState {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  inquiryType: string;
  message: string;
}

const initialState: FormState = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  country: '',
  inquiryType: '',
  message: '',
};

const B2BInquiryForm: React.FC = () => {
  const { firstUTM, lastUTM } = useCaptureUTM();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const isValid =
    form.companyName.trim() &&
    form.contactPerson.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.inquiryType;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting) return;

    setSubmitting(true);
    setError('');

    const payload = sanitizeData({
      // CRM-expected fields (mapped from B2B fields)
      guestName: form.contactPerson,
      guestMobile: form.phone,
      guestEmail: form.email,
      destinations: 'Vietnam',
      adults: 1,
      plannedTravelDate: '',
      // B2B-specific fields (stored as custom fields / notes)
      companyName: form.companyName,
      country: form.country,
      inquiryType: form.inquiryType,
      message: form.message,
      notes: `B2B Inquiry — Company: ${form.companyName} | Country: ${form.country || 'N/A'} | Type: ${form.inquiryType} | Message: ${form.message || 'N/A'}`,
      source: 'B2B_Homepage_Form',
      source_domain: typeof window !== 'undefined' ? window.location.hostname : '',
      ...firstUTM,
      ...lastUTM,
    });

    try {
      await axios.post(API_URL, payload, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'b2bInquirySubmitted',
          formData: payload,
        });
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or email sales@vndmc.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f8faf9] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        <div className="text-center mb-8">
          <p className="text-[#376941] font-semibold text-sm uppercase tracking-widest mb-2">
            Partner with VNDMC
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Request a Partnership Quote
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            We work with travel agents, tour operators and corporate partners worldwide.
            Share a few details and our team will respond within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-10">
            <div className="mx-auto w-14 h-14 rounded-full bg-[#376941]/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#376941]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-gray-600 mb-6">
              Your enquiry has been received. Our partnerships team will be in touch shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[#376941] font-semibold hover:underline text-sm"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Company / Agency Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#376941] focus:ring-1 focus:ring-[#376941] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Contact Person <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactPerson"
                value={form.contactPerson}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#376941] focus:ring-1 focus:ring-[#376941] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#376941] focus:ring-1 focus:ring-[#376941] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone (with country code) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#376941] focus:ring-1 focus:ring-[#376941] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="India"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#376941] focus:ring-1 focus:ring-[#376941] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                name="inquiryType"
                value={form.inquiryType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#376941] focus:ring-1 focus:ring-[#376941] outline-none text-sm bg-white"
              >
                <option value="">Select an option</option>
                {inquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message / Requirements
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your group size, preferred destinations, travel dates, or any specific requirements."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#376941] focus:ring-1 focus:ring-[#376941] outline-none text-sm resize-none"
              />
            </div>

            {error && (
              <div className="sm:col-span-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                {error}
              </div>
            )}

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                disabled={!isValid || submitting}
                className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-sm transition-all ${
                  !isValid || submitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#376941] text-white hover:bg-[#2a5032] shadow-md hover:shadow-lg'
                }`}
              >
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              <p className="text-xs text-gray-500 mt-3">
                By submitting, you agree to be contacted by our partnerships team.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default B2BInquiryForm;
