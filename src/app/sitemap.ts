import { MetadataRoute } from 'next'
import { TOOLS, CATEGORIES } from '@/data/toolsRegistry'
import { GEO_PAGES } from '@/data/geoPages'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolmansion.com';

export default function sitemap(): MetadataRoute.Sitemap {
    // Static Routes
    const routes = [
        '',
        '/tools',
        '/privacy',
        '/terms',
        '/about',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }));

    // Tool Routes (Live only)
    const toolRoutes = TOOLS.filter(t => t.status === 'Live').map((tool) => ({
        url: `${BASE_URL}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Category Routes
    const categoryRoutes = CATEGORIES.map((cat) => ({
        url: `${BASE_URL}/category/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // GEO Routes (only explicitly defined pages)
    const geoRoutes = GEO_PAGES.map((page) => ({
        url: `${BASE_URL}/tools/${page.toolSlug}/${page.countrySlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...toolRoutes, ...categoryRoutes, ...geoRoutes];
}
