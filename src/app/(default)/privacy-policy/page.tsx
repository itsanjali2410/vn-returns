import PolicyPage from '@/components/policy/PolicyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vietnam DMC',
  description: 'Read the Vietnam DMC Privacy Policy to learn how we protect your personal data and ensure secure travel bookings online.',
  keywords: 'privacy policy, data protection, travel privacy, personal data, secure booking',
};

export default function PrivacyPolicyPage() {
  const content = [
    '1 March 2026',
    'Welcome to Vietnam DMC. Your privacy is extremely important to us. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you engage with our services.',
    '1. Who We Are',
    'Vietnam DMC is a Destination Management Company offering custom Vietnam travel packages, guided tours, accommodation, airport transfers, visa assistance, and related travel services.',
    '2. Information We Collect',
    'a) Personal Information — Full Name, Contact Number, Email Address, Passport Details, Travel Preferences, Dietary Restrictions, and Payment Information.',
    'b) Technical Information — IP Address, Device Type, Browser Information, Cookies, and Usage Data.',
    '3. How We Use Your Information',
    'We use your information to process bookings, send travel itineraries, arrange accommodation and transfers, improve our services, communicate updates, and comply with legal obligations.',
    '4. Data Security',
    'We use encryption, secure servers, and restricted access to protect your personal data. Payment information is processed through secure payment gateways.',
    '5. Data Sharing',
    'Your information may be shared with hotels, airlines, tour guides, and other travel service providers only to fulfill your booking. We do not sell your data to third parties.',
    '6. Your Rights',
    'You have the right to access, update, or delete your personal information. Contact us at sales@vndmc.com to exercise these rights.',
    '7. Contact Us',
    'Email: sales@vndmc.com | Phone: +84 325 765 379 | Address: 5th Floor, 26 Duong Khue, My An, Ngu Hanh Son, Da Nang, Vietnam',
    '8. Policy Updates',
    'This policy is effective from 1 March 2026. We may update this policy periodically to reflect changes in our practices.',
  ];

  return <PolicyPage title="Privacy Policy" content={content} />;
}
