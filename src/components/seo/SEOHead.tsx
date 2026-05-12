import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProfileData } from '@/data/profile';
import { useLanguage } from '@/i18n/LanguageContext';

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
  type = 'website'
}: SEOHeadProps) {
  const location = useLocation();
  const { profile } = useProfileData();
  const { lang } = useLanguage();

  const fullTitle = title
    ? `${title} | ${profile.name}`
    : `${profile.name} — ${profile.subtitle}`;

  const fullDescription = description || profile.description;

  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    updateMetaTag('description', fullDescription);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', fullDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullUrl, true);
    if (image) updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', profile.name, true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', fullDescription);
    if (image) updateMetaTag('twitter:image', image);
    updateMetaTag('author', profile.name);
    updateMetaTag('keywords', `IoT, gestion de projet, ${profile.name}, automatisation, SaaS, B2B`);
  }, [fullTitle, fullDescription, fullUrl, image, type]);

  return null;
}
