import Image from 'next/image';
import { FaUniversity, FaQrcode } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payments & Billing | Vietnam DMC',
  description: 'Learn how to make secure payments for your Vietnam DMC bookings. We support multiple payment methods for your convenience.',
  keywords: 'payments, travel billing, secure payment, online booking, payment methods',
};

export default function PaymentPoliciesPage() {
  const cancellationData = [
    ['30 days or more', '10% of total cost'],
    ['29 - 15 days', '25% of total cost'],
    ['14 - 8 days', '50% of total cost'],
    ['7 days or less', '100% of total cost'],
  ];

  return (
    <div className="w-[95%] sm:w-[90%] max-w-6xl mx-auto my-6 sm:my-8 bg-gradient-to-b from-[#f5f4f3] to-[#ffc42d] p-4 sm:p-6 md:p-10 rounded-lg text-black">
      {/* Title */}
      <div className="text-lg font-bold bg-gradient-to-b from-[#ffc42d] to-[#198754] text-white px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-6 shadow-sm">
        <FaUniversity /> Payment Methods
      </div>

      {/* Payment Methods: Stack on Mobile, Row on Desktop */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-8">
        {/* Bank Transfer */}
        <div className="bg-[#f9f9f9] p-5 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow flex-1">
          <div className="text-lg font-bold bg-gradient-to-b from-[#ffc42d] to-[#198754] text-white px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-4">
            💳 Bank Transfer
          </div>

          <div className="space-y-3 text-sm">
            <p>
              <strong>Bank Name:</strong> Viet Prosperity Bank (VPBank)
            </p>
            <p>
              <strong>Account Holder:</strong> Vietnam DMC Ltd
            </p>
            <p>
              <strong>Account Number:</strong> [Your Account Number]
            </p>
            <p>
              <strong>Swift Code:</strong> VPBKVNVX
            </p>
            <p>
              <strong>Branch:</strong> Da Nang, Vietnam
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Please include your booking reference number in the transfer description.
            </p>
          </div>
        </div>

        {/* Credit Card */}
        <div className="bg-[#f9f9f9] p-5 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow flex-1">
          <div className="text-lg font-bold bg-gradient-to-b from-[#ffc42d] to-[#198754] text-white px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-4">
            💰 Credit / Debit Card
          </div>

          <div className="space-y-3 text-sm">
            <p>Pay securely via credit or debit card using our online payment portal.</p>
            <p>
              <strong>Accepted Cards:</strong> Visa, Mastercard, American Express
            </p>
            <p>
              <strong>Processing Fee:</strong> 3.3% will be added to card payments
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Your payment details are processed through secure SSL encryption.
            </p>
          </div>
        </div>

        {/* Cryptocurrency (Optional) */}
        <div className="bg-[#f9f9f9] p-5 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow flex-1">
          <div className="text-lg font-bold bg-gradient-to-b from-[#ffc42d] to-[#198754] text-white px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-4">
            🔐 Crypto / Other
          </div>

          <div className="space-y-3 text-sm">
            <p>We accept additional payment methods for certain regions.</p>
            <p>
              <strong>Methods:</strong> Western Union, PayPal, Cryptocurrency
            </p>
            <p>Contact us for more details on alternative payment options.</p>
            <p>
              <strong>Email:</strong> sales@vndmc.com
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Additional fees may apply for international transfers.
            </p>
          </div>
        </div>
      </div>

      {/* Cancellation Table */}
      <div className="mt-8 md:mt-10">
        <div className="text-lg font-bold bg-gradient-to-b from-[#ffc42d] to-[#198754] text-white px-4 py-2 rounded-2xl inline-flex items-center gap-2 mb-4">
          ⏰ Cancellation Charges
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#ffc42d] to-[#198754] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Days Before Departure</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cancellation Charge</th>
              </tr>
            </thead>
            <tbody>
              {cancellationData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-3">{row[0]}</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-[#198754]">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-600 mt-4">
          *Flight and visa fees are non-refundable. Additional surcharges apply during peak seasons.
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-8 md:mt-10 p-4 md:p-6 bg-white border border-[#ffc42d] rounded-lg">
        <div className="text-lg font-bold mb-3">Questions About Payments?</div>
        <p className="text-sm mb-2">
          <strong>Email:</strong> sales@vndmc.com
        </p>
        <p className="text-sm mb-2">
          <strong>Phone:</strong> +84 325 765 379
        </p>
        <p className="text-sm">
          <strong>Address:</strong> 5th Floor, 26 Duong Khue, My An, Ngu Hanh Son, Da Nang, Vietnam
        </p>
      </div>
    </div>
  );
}
