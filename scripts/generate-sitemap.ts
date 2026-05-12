// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://brochardbenjamin.com';

interface LocalizedEntry {
  pathFr: string;
  pathEn: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

const entries: LocalizedEntry[] = [
  { pathFr: '/', pathEn: '/en', changefreq: 'weekly', priority: '1.0' },
];

function buildUrl(loc: string, alternates: Array<[string, string]>, e: LocalizedEntry) {
  const lines = [
    '  <url>',
    `    <loc>${BASE_URL}${loc}</loc>`,
    ...alternates.map(
      ([hreflang, href]) =>
        `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${BASE_URL}${href}" />`
    ),
    e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
    e.priority ? `    <priority>${e.priority}</priority>` : null,
    '  </url>',
  ].filter(Boolean);
  return lines.join('\n');
}

function generateSitemap(entries: LocalizedEntry[]) {
  const urls: string[] = [];
  for (const e of entries) {
    const alternates: Array<[string, string]> = [
      ['fr', e.pathFr],
      ['en', e.pathEn],
      ['x-default', e.pathFr],
    ];
    urls.push(buildUrl(e.pathFr, alternates, e));
    urls.push(buildUrl(e.pathEn, alternates, e));
  }
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
  ].join('\n');
}

writeFileSync(resolve('public/sitemap.xml'), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length * 2} urls)`);
