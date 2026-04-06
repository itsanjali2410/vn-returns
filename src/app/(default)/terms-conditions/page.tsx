import PolicyPage from '@/components/policy/PolicyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Vietnam DMC',
  description: 'Read Vietnam DMC Terms & Conditions for travel bookings and services.',
  keywords: 'terms and conditions, travel terms, booking terms, Vietnam DMC terms',
};

export default function TermsConditionsPage() {
  const content = [
    'These are the Terms & Conditions of using Vietnam DMC services.',
    'By accessing this website and booking our services, you agree to be bound by these terms and conditions.',
    'Vietnam DMC reserves the right to modify or terminate service at any time with notice.',
    'All bookings are subject to availability and confirmation at the time of booking.',
    'Vietnam DMC may modify itineraries in cases of weather, safety concerns, or force majeure events.',
    'Customers are responsible for ensuring valid passports and visas for international travel.',
    'Travel insurance is compulsory and recommended for all bookings.',
    'All prices quoted are subject to confirmation and availability.',
    'Payment terms: 50% deposit upon booking, 50% balance due 10 days before arrival.',
    'Cancellations and refunds are subject to the Cancellation Policy.',
    'Vietnam DMC is not responsible for losses, delays, or damages due to force majeure.',
    'Please review our Privacy Policy, Cancellation Policy, and detailed booking terms before confirming your booking.',
  ];

  return <PolicyPage title="Terms & Conditions" content={content} />;
}
