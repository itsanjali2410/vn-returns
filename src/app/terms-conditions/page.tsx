import PolicyPage from '@/components/policy/PolicyPage';

export const metadata = {
  title: 'Terms & Conditions | TripStars',
  description: 'Read TripStars Terms & Conditions.',
};

export default function TermsConditionsPage() {
  const content = [
    'These are the terms and conditions of using TripStars services.',
    'By accessing this website, you agree to be bound by these terms and conditions.',
    'TripStars reserves the right to modify or terminate the service at any time.',
    'Please review our privacy policy for further details.',
    'These terms govern your use of the TripStars platform, including booking services, refunds, and more.',
  ];

  return <PolicyPage title="Terms & Conditions" content={content} />;
}
