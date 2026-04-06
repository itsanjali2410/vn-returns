import PolicyPage from '@/components/policy/PolicyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation Policy | Vietnam DMC',
  description: 'Vietnam DMC cancellation and refund terms for travel packages and tours.',
  keywords: 'cancellation policy, Vietnam travel refund, package cancellation',
};

export default function CancellationPolicyPage() {
  const content = [
    'The cancellation policy is effective for all vacations crafted by Vietnam DMC.',
    'Customers eligible for refunds will receive the refund within 90 working days from cancellation.',
    'Refunds are subject to international exchange rates and supplier payment status.',
    'Cancellations made more than 30 days before the trip are eligible for a full refund minus administrative fees.',
    'No refunds are given for cancellations made less than 30 days before the departure date.',
    'Flight and visa fees are non-refundable in all cases.',
    'Special terms apply during peak holiday seasons. Please review detailed policy for peak season bookings.',
  ];

  return <PolicyPage title="Cancellation Policy" content={content} />;
}
