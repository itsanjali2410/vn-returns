import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vndmc.com';
  const lastModified = new Date();

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/about-us', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/packages', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/faqs', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/cancellation-policy', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/privacy-policy', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/terms-conditions', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/payments', priority: 0.5, changeFrequency: 'yearly' as const },
    { route: '/thankyou', priority: 0.5, changeFrequency: 'yearly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const packageRoutes = [
    'phu-quoc-short-break',
    'phu-quoc-fully-loaded',
    'phu-quoc-with-1-day-leisure',
    'ha-noi-da-nang-ho-chi-minh-day-with-day-cruise',
    'ha-noi-da-nang-ho-chi-minh-with-over-night-cruise',
    'ha-noi-da-nang-phu-quoc-with-day-cruise',
    'ha-noi-da-nang-phu-quoc-with-over-night-cruise',
    'ha-noi-phu-quoc-da-nang-day-cruise',
    'ha-noi-da-nang-short-break',
  ].map((slug) => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...packageRoutes];
}
