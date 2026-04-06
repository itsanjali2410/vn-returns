export const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Vietnam DMC',
  url: 'https://www.vndmc.com/contact',
  description: 'Get in touch with Vietnam DMC for custom travel packages',
  mainEntity: {
    '@type': 'Organization',
    name: 'Vietnam DMC',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+84 325 765 379',
      email: 'sales@vndmc.com',
      url: 'https://www.vndmc.com/contact',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5th Floor, 26 Duong Khue, My An, Ngu Hanh Son',
      addressLocality: 'Da Nang',
      addressCountry: 'VN',
    },
  },
};
