import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PackageDetailWrapper from '@/components/clientWrapper/PackageDetailWrapper';

// Import package data from new locations
import package1 from '@/data/packages/ha-noi-da-nang-phu-quoc-9d8n.json';
import package2 from '@/data/packages/phu-quoc-4-night-standard.json';
import package3 from '@/data/packages/vietnam-6n7d-day-cruise.json';
import package4 from '@/data/packages/vietnam-7n8d-standard.json';

interface PackagePageProps {
  params: {
    slug: string;
  };
}

// Helper function to create slug from package ID
function createSlug(id: string): string {
  return id.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// Helper function to get package by slug
function getPackageBySlug(slug: string) {
  const packages = [package1, package2, package3, package4];

  return packages.find((pkg) => {
    const slugifiedId = createSlug(pkg.id);
    return slugifiedId === slug;
  });
}

// Export function for generating static params
export function createPackageSlug(id: string): string {
  return createSlug(id);
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const packageData = getPackageBySlug(slug);

  if (!packageData) {
    return {
      title: 'Package Not Found',
    };
  }

  return {
    title: `${packageData.packageName} | Vietnam DMC`,
    description: packageData.summaryItinerary?.[0] || `Explore ${packageData.packageName} with Vietnam DMC`,
    keywords: `Vietnam travel, ${packageData.packageName}, Vietnam packages, Vietnam tours, Vietnam DMC`,
  };
}

export async function generateStaticParams() {
  return [
    { slug: createPackageSlug(package1.id) },
    { slug: createPackageSlug(package2.id) },
    { slug: createPackageSlug(package3.id) },
    { slug: createPackageSlug(package4.id) },
  ];
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const packageData = getPackageBySlug(slug);

  if (!packageData) {
    notFound();
  }

  // Create schema data inline
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
