export const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vietnam DMC',
  description: 'Destination Management Company specializing in authentic Vietnam travel experiences',
  url: 'https://www.vndmc.com/about-us',
  logo: 'https://www.vndmc.com/logo.webp',
  foundingDate: '2010',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th Floor, 26 Duong Khue, My An, Ngu Hanh Son',
    addressLocality: 'Da Nang',
    addressCountry: 'VN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+84 325 765 379',
    email: 'sales@vndmc.com',
  },
};
