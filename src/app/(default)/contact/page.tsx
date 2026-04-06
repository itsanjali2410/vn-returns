import { Metadata } from 'next';
import VNDMCContact from '@/components/contact/VNDMCContact';
import { contactSchema } from '@/data/schemas/contact';

export const metadata: Metadata = {
  title: 'Contact Vietnam DMC | Travel Inquiry & Support',
  description:
    'Get in touch with Vietnam DMC! Contact us for travel planning, destination queries, and trip bookings. Available to help plan your perfect Vietnam adventure.',
  keywords:
    'contact Vietnam DMC, Vietnam travel contact, book Vietnam trip, Vietnam travel inquiry, Vietnam DMC contact',
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <VNDMCContact />
    </>
  );
}
