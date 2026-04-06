import { Metadata } from 'next';
import WhyVietnamDMC from '@/components/home/WhyTripstars';
import ThankYou from '@/components/shared/Thankyou';

export const metadata: Metadata = {
  title: 'Thank You | Vietnam DMC',
  description: 'Thank you! Your inquiry has been received successfully. Our team will contact you shortly.',
  openGraph: {
    title: 'Thank You',
    description: 'Your message has been successfully sent to Vietnam DMC.',
    url: 'https://www.vndmc.com/thankyou',
    type: 'website',
  },
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYou />
      <WhyVietnamDMC />
    </>
  );
}
