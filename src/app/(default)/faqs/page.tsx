import { Metadata } from 'next';
import FAQContent from '@/components/faq/FAQContent';
import { faqsSchema } from '@/data/schemas/faqs';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Vietnam DMC',
  description: 'Find answers to common questions about traveling in Vietnam with Vietnam DMC. Learn about visa, best time to visit, package inclusions, and more.',
  keywords: 'Vietnam travel FAQ, Vietnam DMC questions, Vietnam travel tips, visa information',
};

const faqData = [
  {
    title: 'Planning Your Trip',
    questions: [
      {
        question: 'What is the best time to visit Vietnam?',
        answer: 'Vietnam can be visited year-round. November to April is ideal for central and southern Vietnam with dry weather and pleasant temperatures. May to October suits northern Vietnam with fewer crowds, though it is the rainy season. Each season offers unique experiences.',
      },
      {
        question: 'How many days do I need to see Vietnam?',
        answer: 'We recommend a minimum of 7 nights to cover the key highlights (Ha Noi, Ha Long Bay, Da Nang, Hoi An). For a comprehensive experience across north, central, and south regions, 10-14 nights is ideal to fully immerse yourself in Vietnamese culture.',
      },
      {
        question: 'Do I need a visa to visit Vietnam?',
        answer: 'Most nationalities can obtain a visa on arrival or apply for an e-visa online before travel. Vietnam DMC can assist with e-visa applications. Check the latest requirements for your nationality at least 30 days before your travel date.',
      },
      {
        question: 'What documents do I need?',
        answer: 'You need a valid passport with at least 6 months validity beyond your intended return date. For visa purposes, you may also need proof of onward travel and accommodation bookings. We recommend travel insurance for comprehensive coverage.',
      },
    ],
  },
  {
    title: 'Our Services & Packages',
    questions: [
      {
        question: 'What does Vietnam DMC include in packages?',
        answer: 'Our packages typically include hotel accommodation with daily breakfast, airport and inter-city transfers by private or shared vehicle, guided sightseeing tours, entrance fees to attractions, and English-speaking guides. Flight inclusions vary by package - some are air-inclusive while others are land-only.',
      },
      {
        question: 'Can I customize my itinerary?',
        answer: 'Absolutely! We specialize in bespoke itineraries tailored to your interests, group size, and budget. Whether you prefer cultural tours, adventure activities, beach relaxation, or family experiences, we can design the perfect Vietnam journey for you.',
      },
      {
        question: 'What currencies do you accept?',
        answer: 'Our package prices are quoted in USD. Payments can be arranged in multiple currencies including USD, EUR, and GBP. We accept bank transfers, credit card payments (with 3.3% processing fee), and alternative payment methods like Western Union.',
      },
      {
        question: 'Do you offer group discounts?',
        answer: 'Yes! We offer competitive group rates for larger travel parties (8+ people). Discounts vary based on group size, travel season, and hotel selections. Contact our team for a customized group quote.',
      },
    ],
  },
  {
    title: 'Popular Destinations',
    questions: [
      {
        question: 'Is Ha Long Bay worth visiting?',
        answer: 'Absolutely! Ha Long Bay is one of Vietnam\'s most iconic destinations and a UNESCO World Heritage Site. An overnight cruise is the best way to experience the stunning limestone karsts, emerald waters, and local culture. Day cruises are also available for shorter itineraries.',
      },
      {
        question: 'What is special about Hoi An?',
        answer: 'Hoi An is a beautifully preserved ancient town known for its lantern-lit streets, well-preserved French colonial architecture, skilled tailors, and riverside charm. It\'s perfect for leisurely walks, shopping for custom clothes, and enjoying excellent Vietnamese cuisine.',
      },
      {
        question: 'What is Ba Na Hills and the Golden Bridge?',
        answer: 'Ba Na Hills is a mountain resort near Da Nang featuring scenic cable car rides, French colonial architecture, the iconic Golden Bridge (held up by giant stone hands), fantasy theme park, and panoramic views. It\'s one of Vietnam\'s most photographed landmarks.',
      },
      {
        question: 'Why should I visit Phu Quoc?',
        answer: 'Phu Quoc is Vietnam\'s largest island, famous for beautiful beaches, water sports, island hopping tours, Vinpearl Safari, VinWonders amusement park, and relaxation. Perfect for beach lovers and those seeking island adventures combined with cultural experiences.',
      },
    ],
  },
  {
    title: 'Practical Information',
    questions: [
      {
        question: 'What is the currency in Vietnam?',
        answer: 'The Vietnamese Dong (VND) is the local currency. Exchange rates are favorable, and Vietnam is very affordable. We recommend exchanging money at airports, banks, or ATMs rather than with street vendors.',
      },
      {
        question: 'What language is spoken in Vietnam?',
        answer: 'Vietnamese is the official language. English is spoken by younger generations and in tourist areas, but learning a few basic Vietnamese phrases is appreciated by locals. All our guides speak English fluently.',
      },
      {
        question: 'Is travel insurance necessary?',
        answer: 'While not mandatory, we strongly recommend travel insurance covering medical emergencies, trip cancellations, and lost baggage. Insurance is compulsory per our booking terms and provides peace of mind during your travels.',
      },
      {
        question: 'What should I pack for Vietnam?',
        answer: 'Pack light, breathable clothing, comfortable walking shoes, sun protection (sunscreen, hat, sunglasses), rain gear (umbrella or light jacket), and minimal jewelry. For beach destinations, bring swimwear. Dress modestly when visiting temples and religious sites.',
      },
    ],
  },
  {
    title: 'Booking & Payment',
    questions: [
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking 2-3 months in advance, especially during peak seasons (November-February). For off-season travel (May-October), 4-6 weeks notice is usually sufficient. Last-minute bookings may have limited availability.',
      },
      {
        question: 'What is your payment policy?',
        answer: 'A 50% deposit is required upon booking confirmation. The remaining 50% balance is due 10 days before your arrival date. Early payment discounts may be available - contact our team for details.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'Flights and visa fees are non-refundable. For the tour portion: 30+ days prior = 10% penalty, 15-29 days = 25%, 8-14 days = 50%, within 7 days = 100%. Holiday surcharges may apply. Full details are in your booking terms.',
      },
      {
        question: 'Do you offer travel insurance?',
        answer: 'Travel insurance is compulsory for all bookings and protects against flight cancellations, medical emergencies, and other unforeseen circumstances. We can arrange comprehensive travel insurance covering your Vietnam trip.',
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }}
      />
      <FAQContent faqData={faqData} />
    </>
  );
}
