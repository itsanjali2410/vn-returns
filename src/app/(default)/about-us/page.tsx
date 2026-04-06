import { Metadata } from 'next';
import VNDMCAbout from '@/components/aboutus/VNDMCAbout';
import TeamSection from '@/components/aboutus/TeamSection';
import { aboutSchema } from '@/data/schemas/about';

export const metadata: Metadata = {
  title: 'About Vietnam DMC – Authentic Vietnam Travel Experiences',
  description:
    'Vietnam DMC is a trusted Destination Management Company. With over 15 years of expertise, we craft authentic Vietnamese journeys with a dedicated team committed to exceptional travel experiences.',
  keywords:
    'Vietnam DMC, destination management, about Vietnam DMC, Vietnam travel company, Da Nang travel agency, Vietnam tours, travel team',
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <VNDMCAbout />
      <TeamSection />
    </>
  );
}
