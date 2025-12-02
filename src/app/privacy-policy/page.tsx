import PolicyPage from '@/components/policy/PolicyPage';

export const metadata = {
  title: 'Privacy Policy | TripStars',
  description:
    'Read the TripStars Privacy Policy to learn how we protect your personal data and ensure secure travel bookings online.',
  keywords:
    'TripStars privacy policy, data protection, travel privacy, personal data, secure booking',
};

export default function PrivacyPolicyPage() {
  const content = [
    '1 January 2025',
    'Welcome to TRIPSTARS TRAVELS LLP. Your privacy is extremely important to us. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you engage with our services.',
    '1. Who We Are',
    'TRIPSTARS TRAVELS LLP is a travel services provider offering custom travel packages, bookings, visa assistance, and more.',
    '2. Information We Collect',
    'a) Personal Information — Full Name, Contact Number, Email Address, Date of Birth, Gender, Address, Passport and Visa Details, Travel Preferences, and Payment Information.',
    'b) Technical Information — IP Address, Device Type, Browser Information, Cookies, and Usage Data.',
    '3. How We Use Your Information — To process bookings, improve services, and comply with legal obligations.',
    '4. Data Security — We use encryption, secure servers, and restricted access to protect your data.',
    '5. Contact Us — Email: Info@tripstars.in | Phone: +91 9875097169 | Website: tripstarsholidays.com',
  ];

  return <PolicyPage title="Privacy Policy" content={content} />;
}
