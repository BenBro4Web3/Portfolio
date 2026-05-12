import { useLanguage, type Lang } from '@/i18n/LanguageContext';
import { profileFR } from './profile.fr';
import { profileEN } from './profile.en';
import type { LocalizedDataset } from './profile.shared';

export type {
  Experience,
  SkillCategory,
  ProjectItem,
  ProfileLocalized,
  Stat,
  LocalizedDataset,
} from './profile.shared';

const dataset: Record<Lang, LocalizedDataset> = {
  fr: profileFR,
  en: profileEN,
};

export function getProfileData(lang: Lang): LocalizedDataset {
  return dataset[lang];
}

export function useProfileData(): LocalizedDataset {
  const { lang } = useLanguage();
  return dataset[lang];
}
