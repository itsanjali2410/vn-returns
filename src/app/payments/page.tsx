import Image from 'next/image';
import { FaUniversity, FaQrcode } from 'react-icons/fa';

export const metadata = {
  title: 'Payments & Billing | TripStars',
  description:
    'Learn how to make secure payments for your TripStars bookings. We support multiple payment methods for your convenience.',
  keyword:
    'TripStars payments, travel billing, secure payment, online booking, credit card, UPI, travel payment options',
};

export default function PaymentPoliciesPage() {
  const cancellationData = [
    ['30 days or more', '25% of total cost'],
    ['29 - 20 days', '50% of total cost'],
    ['19 days or less', '100% of total cost'],
  ];

  return (
    <div className="w-[95%] sm:w-[90%] max-w-6xl mx-auto my-6 sm:my-8 bg-gradient-to-b from-[#f5f4f3] to-[#B8860B] p-4 sm:p-6 md:p-10 rounded-lg text-black">
      {/* Title */}
      <div className="text-lg font-bold bg-gradient-to-b from-[#FFD700] to-[#B8860B] text-black px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-6 shadow-sm">
        <FaUniversity /> Pay Us At
      </div>

      {/* Payment Methods: Stack on Mobile, Row on Desktop */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-8">
        {/* Bank Transfer */}
        <div className="bg-[#f9f9f9] p-5 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow flex-1">
          <div className="text-lg font-bold bg-gradient-to-b from-[#FFD700] to-[#B8860B] text-black px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-4">
            <FaUniversity /> Bank Transfer
          </div>
          <p>
            <b>A/C No:</b> 036105003255
          </p>
          <p>
            <b>A/C Name:</b> ICICI Bank
          </p>
          <p>
            <b>IFSC Code:</b> ICIC0000361
          </p>
        </div>

        {/* UPI Payment */}
        <div className="bg-[#f9f9f9] p-5 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow flex-1">
          <div className="text-lg font-bold bg-gradient-to-b from-[#FFD700] to-[#B8860B] text-black px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-4">
            <FaQrcode /> UPI Payment
          </div>
          <p>
            <b>UPI ID (Google Pay/BHIM/PhonePe):</b> eazypay.0000055947@icici
          </p>
          <p className="mt-3 font-semibold">Scan & Pay:</p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <Image
              src="/contact/UPI.webp"
              alt="UPI QR Code"
              title="UPI QR Code"
              width={150}
              height={150}
              className="rounded-lg border border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="text-lg font-bold bg-gradient-to-b from-[#FFD700] to-[#B8860B] text-black px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-4 shadow-sm">
        TERMS & CONDITIONS
      </div>

      <div className="bg-[#f9f9f9] p-5 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow text-black">
        <p>All payments should be cleared at least 30 days prior to departure.</p>
        <p className="mt-3">
          In case a client wishes to prepone/postpone travel dates, kindly reach us 15 days prior to
          the journey date via e-mail or message. Charges may apply as per service provider
          policies.
        </p>
        <p className="mt-3">
          All International quotes are provided in INR based on the USD exchange rate at the time of
          booking. Any increase in the ROE at the time of payment will be borne by the client.
        </p>

        <h3 className="text-lg font-semibold mt-5 mb-3">If you Cancel your Holiday</h3>

        {/* Responsive Table */}
        <div className="overflow-hidden">
          <table className="w-full table-auto border-collapse border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-gray-100 p-2 sm:p-3 border border-gray-300 text-left">
                  Cancellation Period
                </th>
                <th className="bg-gray-100 p-2 sm:p-3 border border-gray-300 text-left">
                  Cancellation Charges
                </th>
              </tr>
            </thead>
            <tbody>
              {cancellationData.map(([period, charge], index) => (
                <tr
                  key={`cancellation-row-${index}`}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="border border-gray-300 p-2 sm:p-3 break-words">{period}</td>
                  <td className="border border-gray-300 p-2 sm:p-3 break-words">{charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Airfare cancellation policy is subject to the airline and may be non-refundable.
        </p>
      </div>
    </div>
  );
}
