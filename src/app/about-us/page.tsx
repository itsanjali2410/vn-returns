import { Metadata } from 'next';
import VNDMCAbout from '@/components/aboutus/VNDMCAbout';
import TeamSection from '@/components/aboutus/TeamSection';

export const metadata: Metadata = {
  title: 'About VNDMC – Vietnam Destination Management Company',
  description:
    'VNDMC Vietnam Destination Management. With you on every trip. Crafting bold Vietnamese journeys with a dedicated team committed to providing exceptional travel experiences.',
  keywords:
    'VNDMC, Vietnam Destination Management, about VNDMC, Vietnam travel company, Da Nang travel agency, Vietnam tours, travel team',
};

export default function About() {
  return (
    <>
      <VNDMCAbout />
      <TeamSection />
    </>
  );
}
