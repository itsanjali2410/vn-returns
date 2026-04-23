import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PackageDetailWrapper from '@/components/clientWrapper/PackageDetailWrapper';

import pkg1 from '@/data/packages/phu-quoc-short-break.json';
import pkg2 from '@/data/packages/phu-quoc-fully-loaded.json';
import pkg3 from '@/data/packages/phu-quoc-with-1-day-leisure.json';
import pkg4 from '@/data/packages/ha-noi-da-nang-ho-chi-minh-day-with-day-cruise.json';
import pkg5 from '@/data/packages/ha-noi-da-nang-ho-chi-minh-with-over-night-cruise.json';
import pkg6 from '@/data/packages/ha-noi-da-nang-phu-quoc-with-day-cruise.json';
import pkg7 from '@/data/packages/ha-noi-da-nang-phu-quoc-with-over-night-cruise.json';
import pkg8 from '@/data/packages/ha-noi-phu-quoc-da-nang-day-cruise.json';
import pkg9 from '@/data/packages/ha-noi-da-nang-short-break.json';

const allPackages = [pkg1, pkg2, pkg3, pkg4, pkg5, pkg6, pkg7, pkg8, pkg9];

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

function createSlug(id: string): string {
  return id.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function getPackageBySlug(slug: string) {
  return allPackages.find((pkg) => createSlug(pkg.id) === slug || pkg.id === slug);
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const packageData = getPackageBySlug(slug);
  if (!packageData) return { title: 'Package Not Found' };
  return {
    title: `${packageData.packageName} | Vietnam DMC`,
    description: packageData.summaryItinerary?.[0] || `Explore ${packageData.packageName} with Vietnam DMC`,
  };
}

export async function generateStaticParams() {
  return allPackages.map((pkg) => ({ slug: createSlug(pkg.id) }));
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const packageData = getPackageBySlug(slug);
  if (!packageData) notFound();

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: packageData.packageName,
    description: packageData.summaryItinerary?.[0] || '',
    url: `https://www.vndmc.com/packages/${slug}`,
    offers: {
      '@type': 'Offer',
      price: packageData.pricing?.[0]?.prices?.[0] || '0',
      priceCurrency: 'USD',
    },
    duration: `${packageData.summaryItinerary?.length || 0} days`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <PackageDetailWrapper packageData={packageData} />
    </>
  );
}
