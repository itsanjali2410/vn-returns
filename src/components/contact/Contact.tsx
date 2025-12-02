'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCaptureUTM } from '@/hooks/useCaptureUTM';
import CTA from '@/components/contact/CTA';
import FloatingContactButton from '@/components/contact/FloatingContactButton';
import { sanitizeData } from '@/utils/sanitizeData';
import { API_URL, BEARER_TOKEN } from '@/constant';

const contactDetails = [
  { icon: <FaPhone />, label: '9875097169', link: 'tel:9875097169' },
  { icon: <FaPhone />, label: '9106639179', link: 'tel:9106639179' },
  { icon: <FaEnvelope />, label: 'Info@tripstars.in' },
  {
    icon: <FaMapMarkerAlt />,
    label: '1817/1818-B, Navratna Corporate Park, Iscon-Ambli Road, Ahmedabad - 380058',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: '105 Sai Arcade, Mulund W, Mumbai 400080',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: '601, 6th Flr, Bhairav Milestones, Wagle Estate, Road No. 16, Thane - 400604',
  },
];

const todayDate = new Date().toISOString().split('T')[0];

const Contact: React.FC = () => {
  const router = useRouter();
  const { firstUTM, lastUTM } = useCaptureUTM(); // ✅ Capture UTM params

  const [formData, setFormData] = useState({
    guestName: '',
    contact: '',
    destinations: '',
    travel_date: '',
    bookingTime: '',
    adults: 2,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'contact' && !/^\d{0,10}$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contactRegex = /^[6-9]\d{9}$/;
    if (!contactRegex.test(formData.contact)) {
      toast.error('Please enter a valid 10-digit contact number.');
      return;
    }

    setIsSubmitting(true);

    // ✅ Merge UTM + form data

    const payload = sanitizeData({
      ...formData,
      ...firstUTM,
      ...lastUTM,
      source_domain: typeof window !== 'undefined' ? window.location.hostname : '',
    });

    try {
      //   const response = await axios.post('https://stagingbackend.tripstars.in/submit-form', payload);
      const response = await axios.post(`${API_URL}`, payload, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });

      if (response.status === 201) {
        setFormData({
          guestName: '',
          contact: '',
          destinations: '',
          travel_date: '',
          bookingTime: '',
          adults: 2,
        });
        // router.refresh();
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'tripFollowUpSubmitted',
          source_domain: window.location.hostname,
          formData: payload,
        });
        router.push('/thankyou');
      } else {
        toast.error(response.data.message || 'Submission failed. Please try again.');
      }
    } catch (error: any) {
      console.error('API Error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-86 sm:pt-71">
      <ToastContainer />

      {/* Banner */}
      <div className="w-full overflow-hidden shadow-lg">
        <Image
          src="/contact/contactbanner.webp"
          alt="Contact Us"
          title="Contact Us"
          width={1920}
          height={1080}
          priority
        />
      </div>

      {/* Contact Section */}
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-[1200px] m-10 px-4">
        {/* Form */}
        <form
          className="flex flex-col w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Plan Your Trip</h2>

          <label htmlFor="guestName" className="font-medium mb-1">
            Name
          </label>
          <input
            id="guestName"
            type="text"
            name="guestName"
            placeholder="Name"
            value={formData.guestName}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="contact" className="font-medium mb-1">
            Contact Number
          </label>
          <input
            id="contact"
            type="tel"
            name="contact"
            placeholder="10-digit mobile number"
            value={formData.contact}
            onChange={handleChange}
            inputMode="numeric"
            required
            className="w-full p-3 mb-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="destination" className="font-medium mb-1">
            Destination
          </label>
          <input
            id="destinations"
            type="text"
            name="destinations"
            placeholder="Where do you want to go?"
            value={formData.destinations}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="travel_date" className="font-medium mb-1">
            Travel Date
          </label>
          <input
            id="travel_date"
            type="date"
            name="travel_date"
            min={todayDate}
            value={formData.travel_date}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="bookingTime" className="font-medium mb-1">
            Booking Time
          </label>
          <select
            id="bookingTime"
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">When are you looking to book?</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="Just Inquiry">Just Inquiry</option>
          </select>

          <button
            type="submit"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
            aria-busy={isSubmitting}
            aria-label={isSubmitting ? 'Sending inquiry' : 'Submit inquiry form'}
            className={`mt-2 py-3 rounded-md text-white font-bold transition-colors ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 max-w-xs p-6 bg-white rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          {contactDetails.map((detail, idx) => (
            <div
              key={`contact-detail-${idx}`}
              className="flex items-center gap-3 p-3 bg-gray-100 rounded-md text-gray-700"
            >
              {detail.icon}
              {detail.link ? (
                <a
                  href={detail.link}
                  title={detail.label}
                  className="text-gray-700 hover:underline"
                >
                  {detail.label}
                </a>
              ) : (
                <span>{detail.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
