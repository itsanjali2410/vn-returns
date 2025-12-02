import { Metadata } from 'next';
import VNDMCContact from '@/components/contact/VNDMCContact';

export const metadata: Metadata = {
  title: 'Contact Us | VNDMC Vietnam Destination Management',
  description:
    'Get in touch with VNDMC! Contact us for travel planning, destination queries, and trip bookings. Available 24/7 to help plan your perfect Vietnam adventure.',
  keywords:
    'contact VNDMC, Vietnam travel contact, book Vietnam trip, Vietnam travel inquiry, VNDMC contact',
};

export default function ContactPage() {
  return <VNDMCContact />;
}
