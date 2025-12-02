'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

interface FormPopupProps {
  onClose: () => void;
}

export default function FormPopup({ onClose }: FormPopupProps) {
  const router = useRouter();
  const pathname = usePathname();

  const destinationMap: Record<string, string> = {
    maldives: 'Maldives',
    bali: 'Bali',
    dubai: 'Dubai',
    thailand: 'Thailand',
    singapore: 'Singapore',
    malaysia: 'Malaysia',
    hongkong: 'Hong Kong',
    europe: 'Europe',
    vietnam: 'Vietnam',
    australia: 'Australia',
    ladakh: 'Ladakh',
    srilanka: 'Sri Lanka',
    nepal: 'Nepal',
    kashmir: 'Kashmir',
    goa: 'Goa',
    mauritius: 'Mauritius',
    bhutan: 'Bhutan',
    himachal: 'Himachal',
    kerala: 'Kerala',
    bangkok: 'Bangkok',
    baku: 'Baku',
    turkey: 'Turkey',
  };

  const segments = pathname.split('/').filter(Boolean);
  const destinationSlug =
    destinationMap[segments[0]?.toLowerCase()] || destinationMap[segments[1]?.toLowerCase()] || '';

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [pax, setPax] = useState(1);
  const [child, setChild] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    destination: destinationSlug || '',
    departureCity: '',
    bookingTime: '',
    sourceDomain: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      sourceDomain: window.location.href,
    }));
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (confirm('Are you sure you want to close the form?')) onClose();
    }
  };

  const handleCloseClick = () => {
    if (confirm('Are you sure you want to close the form?')) onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'contact' && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const { name, contact, email, departureCity, bookingTime } = formData;
    if (!name || !contact || !email || !departureCity || !bookingTime || !startDate) {
      alert('Please fill all required fields');
      return;
    }

    router.push(
      `/trip-details-followup?name=${name}&contact=${contact}&email=${email}&destination=${
        formData.destination
      }&departureCity=${departureCity}&bookingTime=${bookingTime}&travel_date=${
        startDate.toISOString().split('T')[0]
      }&pax=${pax}&child=${child}`
    );
    onClose();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
    >
      <div className="bg-white rounded-2xl shadow-2xl flex max-w-5xl w-[90%] max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-9 h-9 text-xl flex items-center justify-center z-10"
        >
          ×
        </button>

        {/* Left Panel */}
        <div className="hidden md:flex flex-col items-center justify-center bg-black text-white p-6 flex-1">
          <div className="m-8">
            <Image src="/images/logo/logo.webp" alt="Main Logo" width={250} height={100} />
          </div>
          <div className="flex gap-3 mb-4">
            <Image src="/popup/Customers.png" alt="Customers" width={120} height={50} />
            <Image src="/popup/Awardwinners.png" alt="Award" width={120} height={50} />
            <Image src="/popup/Customerservice.png" alt="Service" width={120} height={50} />
          </div>
          <ul className="space-y-3 text-lg m-4">
            <li className="flex items-center gap-2">
              <FaCheckCircle /> 100% Customised Trips
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle /> 95% Visa Success Rate
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle /> 24x7 Concierge
            </li>
          </ul>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Plan Your Dream Vacation
          </h3>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc42d]"
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              maxLength={10}
              placeholder="Contact Number"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc42d]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc42d]"
            />

            <div className="flex flex-col md:flex-row gap-3">
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                disabled={!!destinationSlug}
                required
                className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              >
                {destinationSlug ? (
                  <option value={destinationSlug}>{destinationSlug}</option>
                ) : (
                  <>
                    <option value="">Select a destination</option>
                    {Object.values(destinationMap).map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                    <option value="Other">Any other place?</option>
                  </>
                )}
              </select>

              <input
                type="text"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                placeholder="Departure City"
                required
                className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <select
              name="bookingTime"
              value={formData.bookingTime}
              onChange={handleChange}
              required
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            >
              <option value="">When are you looking to Book?</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="Just Inquiry">Just Inquiry</option>
            </select>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="Pick your travel date"
              className="w-full p-3 border rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              required
            />

            {/* Pax Counters */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center">
                <label className="text-sm mb-1">Adults</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPax((p) => Math.max(1, p - 1))}
                    className="px-3 py-1 bg-black text-white rounded-md"
                  >
                    -
                  </button>
                  <span>{pax}</span>
                  <button
                    type="button"
                    onClick={() => setPax((p) => p + 1)}
                    className="px-3 py-1 bg-black text-white rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <label className="text-sm mb-1">Children</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChild((c) => Math.max(0, c - 1))}
                    className="px-3 py-1 bg-black text-white rounded-md"
                  >
                    -
                  </button>
                  <span>{child}</span>
                  <button
                    type="button"
                    onClick={() => setChild((c) => c + 1)}
                    className="px-3 py-1 bg-black text-white rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-[#ffc42d] hover:text-white transition"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
