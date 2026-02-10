import fs from 'fs';
import path from 'path';
import { TOOLS, CATEGORIES } from '../src/data/toolsRegistry';
import { GEO_PAGES } from '../src/data/geoPages';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolmansion.com';

function generateSitemap() {
    const routes = [
        '',
        '/tools',
        '/privacy',
        '/terms',
        '/about',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 1.0,
    }));

    const toolRoutes = TOOLS.filter(t => t.status === 'Live').map((tool) => ({
        url: `${BASE_URL}/tools/${tool.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const categoryRoutes = CATEGORIES.map((cat) => ({
        url: `${BASE_URL}/category/${cat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const geoRoutes = GEO_PAGES.map((page) => ({
        url: `${BASE_URL}/tools/${page.toolSlug}/${page.countrySlug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const allRoutes = [...routes, ...toolRoutes, ...categoryRoutes, ...geoRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
            .map((route) => {
                return `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log(`✅ Sitemap generated at ${path.join(publicDir, 'sitemap.xml')} with ${allRoutes.length} URLs`);
}

generateSitemap();
