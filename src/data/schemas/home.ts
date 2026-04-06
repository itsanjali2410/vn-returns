export const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vietnam DMC',
  description: 'Your trusted Destination Management Company in Vietnam. Over 15 years crafting authentic Vietnamese travel experiences with personalized itineraries.',
  url: 'https://www.vndmc.com',
  telephone: '+84 325 765 379',
  email: 'sales@vndmc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th Floor, 26 Duong Khue, My An, Ngu Hanh Son',
    addressLocality: 'Da Nang',
    addressRegion: 'Da Nang',
    postalCode: '550000',
    addressCountry: 'VN',
  },
  priceRange: '$$$',
  image: 'https://www.vndmc.com/logo.webp',
  sameAs: [
    'https://www.facebook.com/vndmc',
    'https://www.instagram.com/vndmc',
  ],
};
