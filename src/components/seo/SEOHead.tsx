import { useEffect } from 'react';
import { useProfileData } from '@/data/profile';
import { useLanguage, useT } from '@/i18n/LanguageContext';
import { SITE_URL } from '@/config/site';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
}

export function SEOHead({
  title,
  description,
  image = '',
  type = 'website',
}: SEOHeadProps) {
  const { profile } = useProfileData();
  const { lang } = useLanguage();
  const t = useT();

  const fullTitle = title ? `${title} | ${profile.name}` : t('seo.title');
  const fullDescription = description || t('seo.description');

  const pathFr = '/';
  const pathEn = '/en';
  const currentPath = lang === 'fr' ? pathFr : pathEn;
  const canonical = `${SITE_URL}${currentPath}`;
  const altFr = `${SITE_URL}${pathFr}`;
  const altEn = `${SITE_URL}${pathEn}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (
      rel: string,
      href: string,
      attrs: Record<string, string> = {}
    ) => {
      const selectorParts = [`link[rel="${rel}"]`];
      Object.entries(attrs).forEach(([k, v]) => selectorParts.push(`[${k}="${v}"]`));
      const selector = selectorParts.join('');
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', fullDescription);
    setMeta('keywords', t('seo.keywords'));
    setMeta('author', profile.name);

    setMeta('og:title', fullTitle, true);
    setMeta('og:description', fullDescription, true);
    setMeta('og:type', type, true);
    setMeta('og:url', canonical, true);
    setMeta('og:locale', lang === 'fr' ? 'fr_FR' : 'en_US', true);
    setMeta('og:locale:alternate', lang === 'fr' ? 'en_US' : 'fr_FR', true);
    setMeta('og:site_name', profile.name, true);
    if (image) setMeta('og:image', image, true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', fullDescription);
    if (image) setMeta('twitter:image', image);

    setLink('canonical', canonical);
    setLink('alternate', altFr, { hreflang: 'fr' });
    setLink('alternate', altEn, { hreflang: 'en' });
    setLink('alternate', altFr, { hreflang: 'x-default' });

    document.documentElement.lang = lang;

    // JSON-LD Person
    const ldId = 'ld-person';
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: canonical,
      jobTitle:
        lang === 'fr'
          ? 'Chef de projet IoT — Freelance'
          : 'IoT Project Manager — Freelance',
      email: `mailto:${profile.email}`,
      sameAs: [profile.linkedin, profile.github],
      address: {
        '@type': 'PostalAddress',
        addressCountry: profile.location,
      },
    });
  }, [
    fullTitle,
    fullDescription,
    canonical,
    altFr,
    altEn,
    image,
    type,
    lang,
    profile.name,
    profile.email,
    profile.linkedin,
    profile.github,
    profile.location,
    t,
  ]);

  return null;
}
