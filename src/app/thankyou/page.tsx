import VideoTestimonials from '@/components/home/VideoTestimonials';
import VideoThumbnail from '@/components/home/VideoThumbnail';
import WhyTripstars from '@/components/home/WhyTripstars';
import ThankYou from '@/components/shared/Thankyou';

export const metadata = {
  title: 'Thank You | Tripsstars Holidays',
  description: 'Thank you! Your submission has been received successfully.',
  openGraph: {
    title: 'Thank You',
    description: 'Your message has been successfully sent.',
    url: 'https://tripstars.in/thankyou',
    type: 'website',
  },
};
export default function Page() {
  return (
    <>
      <ThankYou />
      <WhyTripstars />
      <VideoTestimonials />
      <VideoThumbnail />
    </>
  );
}
