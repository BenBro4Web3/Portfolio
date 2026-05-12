import type { Lang } from './LanguageContext';

// Slug pairs in order: home, projects, experience, skills, contact
const SLUG_PAIRS: Array<[string, string]> = [
  ['accueil', 'home'],
  ['projets', 'projects'],
  ['parcours', 'experience'],
  ['competences', 'skills'],
  ['contact', 'contact'],
];

export function translateHash(hash: string, toLang: Lang): string {
  if (!hash || hash === '#') return '';
  const raw = hash.startsWith('#') ? hash.slice(1) : hash;
  for (const [fr, en] of SLUG_PAIRS) {
    if (raw === fr || raw === en) {
      return '#' + (toLang === 'fr' ? fr : en);
    }
  }
  return '#' + raw;
}

export function isKnownSlug(slug: string): boolean {
  return SLUG_PAIRS.some(([fr, en]) => fr === slug || en === slug);
}
