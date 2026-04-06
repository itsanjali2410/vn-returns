export const faqsSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Frequently Asked Questions - Vietnam DMC',
  url: 'https://www.vndmc.com/faqs',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time to visit Vietnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vietnam can be visited year-round. November to April is ideal for central and southern Vietnam. May to October suits northern Vietnam with fewer crowds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need to see Vietnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend a minimum of 7 nights to cover the key highlights. For a comprehensive experience across north, central, and south, 10-14 nights is ideal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa to visit Vietnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most nationalities can obtain a visa on arrival or apply for an e-visa online. We recommend checking the latest requirements for your nationality at least 30 days before travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Vietnam DMC include in packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our packages typically include accommodation, daily breakfast, airport and inter-city transfers, and guided sightseeing tours. Flight inclusions vary by package.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize my itinerary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We specialize in bespoke itineraries. Contact our team and we will design a journey that matches your interests, group size, and budget.',
      },
    },
  ],
};
