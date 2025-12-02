'use client';

import Script from 'next/script';
import {
  organizationSchema,
  websiteSchema,
  homepageSchema,
  aboutPageSchema,
  contactPageSchema,
  faqSchema,
} from '@/data/schemas';

type SchemaType =
  | 'organizationSchema'
  | 'websiteSchema'
  | 'homepageSchema'
  | 'aboutPageSchema'
  | 'contactPageSchema'
  | 'faqSchema';

interface SchemaMarkupProps {
  schemaType: SchemaType | SchemaType[]; // allow multiple schemas
}

const schemaMap: Record<SchemaType, any> = {
  organizationSchema,
  websiteSchema,
  homepageSchema,
  aboutPageSchema,
  contactPageSchema,
  faqSchema,
};

export default function SchemaMarkup({ schemaType }: SchemaMarkupProps) {
  const schemaArray = Array.isArray(schemaType) ? schemaType : [schemaType];

  return (
    <>
      {schemaArray.map((type) => (
        <Script
          key={type}
          id={`${type}-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMap[type]),
          }}
        />
      ))}
    </>
  );
}
