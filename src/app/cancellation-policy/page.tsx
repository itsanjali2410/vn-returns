import PolicyPage from '@/components/policy/PolicyPage';

export const metadata = {
  title: 'Cancellation Policy | TripStars',
  description: 'TripStars cancellation and refund terms for travel packages.',
};

export default function CancellationPolicyPage() {
  const content = [
    'The cancellation policy is effective for all vacations crafted by TripStars.',
    'Customers eligible for refunds will receive the refund within 90 working days from cancellation.',
    'Refunds are subject to international exchange rates and supplier payment status.',
    'Cancellations made more than 30 days before the trip are eligible for a full refund minus administrative fees.',
    'No refunds are given for cancellations made less than 30 days before the departure date.',
  ];

  return <PolicyPage title="Cancellation Policy" content={content} />;
}
