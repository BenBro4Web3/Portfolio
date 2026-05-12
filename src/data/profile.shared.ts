export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  cta?: { label: string; url: string };
  tags: string[];
  gradient: string;
  image?: string;
  isPublic: boolean;
}

export interface ProfileBase {
  name: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface ProfileLocalized extends ProfileBase {
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  objective: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface LocalizedDataset {
  profile: ProfileLocalized;
  stats: Stat[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
  publicProjects: ProjectItem[];
  internalProjects: ProjectItem[];
  rotatingWords: string[];
}

export const profileBase: ProfileBase = {
  name: 'Benjamin Brochard',
  email: 'benjamin.brochard@gmail.com',
  location: 'France',
  linkedin: 'https://linkedin.com/in/benjaminbrochard',
  github: 'https://github.com/BenBro4Web3',
};

export const hubspotDemoUrl =
  'https://meetings.hubspot.com/nfcfeedback-pro?uuid=759b55e5-c849-4ac3-be86-fbfb42d82a11';
