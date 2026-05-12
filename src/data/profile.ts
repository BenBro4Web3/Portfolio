import { useLanguage, type Lang } from '@/i18n/LanguageContext';

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

interface ProfileBase {
  name: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

interface ProfileLocalized extends ProfileBase {
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  objective: string;
}

const base: ProfileBase = {
  name: 'Benjamin Brochard',
  email: 'benjamin.brochard@gmail.com',
  location: 'France',
  linkedin: 'https://linkedin.com/in/benjaminbrochard',
  github: 'https://github.com/BenBro4Web3',
};

const hubspotDemoUrl =
  'https://meetings.hubspot.com/nfcfeedback-pro?uuid=759b55e5-c849-4ac3-be86-fbfb42d82a11';

// ===== FR =====
const profileFR: ProfileLocalized = {
  ...base,
  title: 'Curieux, ouvert &',
  titleHighlight: 'touche-à-tout',
  subtitle: 'Gestion de projet · Automatisation · Création de produits',
  description:
    "J'aime comprendre, construire et connecter les choses. IoT, SaaS, automatisation, reporting — ce qui m'anime, c'est de résoudre des problèmes concrets.",
  objective:
    'Ouvert aux opportunités CDI ou missions freelance en pilotage de projets, delivery, automatisation et reporting.',
};

const statsFR = [
  { value: '200+', label: 'capteurs déployés' },
  { value: '12', label: 'langues (ResTranslate)' },
  { value: '3+', label: 'ans pilotage IoT' },
  { value: '6', label: 'projets publiés' },
];

const experiencesFR: Experience[] = [
  {
    company: 'Heyliot',
    role: 'Chef de projet IoT (indépendant)',
    period: '2021 — 2024',
    description:
      'Pilotage end-to-end de déploiements IoT multi-clients (collectivités, industrie, tertiaire).',
    highlights: [
      '+200 capteurs déployés (LoRaWAN, Sigfox)',
      'Coordination équipes techniques & terrain',
      'Suivi projet, recette, mise en production',
      'Reporting clients via Looker Studio',
    ],
  },
  {
    company: 'Sensing Vision',
    role: 'Business Engineer IoT (CDI)',
    period: '2019 — 2021',
    description:
      'Développement commercial et technique sur le marché IoT B2B.',
    highlights: [
      'Prospection et qualification de leads B2B',
      'Réalisation de POC et démonstrations clients',
      'Déploiements capteurs et intégrations plateformes',
      "Réponses aux appels d'offres publics",
    ],
  },
  {
    company: 'ResTranslate',
    role: 'Fondateur',
    period: 'Depuis 2020',
    description:
      "Création et développement d'un SaaS B2B de menus digitaux multilingues pour la restauration.",
    highlights: [
      'Conception produit de A à Z',
      'Traduction automatique en 12 langues',
      'Diffusion multi-canaux (QR, Google, réseaux)',
      'Acquisition et gestion clients CHR',
    ],
  },
  {
    company: 'Enseignement',
    role: 'Vacataire IoT & Objets connectés',
    period: 'Ponctuel',
    description:
      "Interventions en école d'ingénieurs sur l'IoT et les réseaux LPWAN.",
    highlights: [
      'Cours sur les réseaux LPWAN (LoRa, Sigfox)',
      'Ateliers pratiques déploiement capteurs',
    ],
  },
];

const skillCategoriesFR: SkillCategory[] = [
  { category: 'Gestion de projet', icon: '🎯', items: ['Cadrage', 'Pilotage', 'Recette', 'Planning', 'Coordination'] },
  { category: 'IoT & Réseaux', icon: '📡', items: ['LoRaWAN', 'Sigfox', 'NB-IoT', 'Capteurs', 'Plateformes IoT'] },
  { category: 'Automatisation', icon: '⚡', items: ['Google Sheets', 'Apps Script', 'Zapier', 'Make', 'OCR'] },
  { category: 'Reporting & Data', icon: '📊', items: ['Looker Studio', 'Dashboards', 'KPIs', 'QGIS'] },
  { category: 'Commercial & CRM', icon: '💼', items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Prospection B2B'] },
  { category: 'Design & Outils', icon: '🎨', items: ['Figma', 'Canva', 'Webflow', 'Pennylane'] },
];

const publicProjectsFR: ProjectItem[] = [
  {
    id: 'restranslate',
    title: 'ResTranslate',
    subtitle: 'SaaS B2B — Menus digitaux multilingues',
    description:
      'Plateforme de menus digitaux traduits en 12 langues avec diffusion multi-canaux (QR Code, Google Business, réseaux sociaux). Dashboard Looker Studio intégré.',
    url: 'https://restranslate.com/',
    cta: { label: 'Démo', url: hubspotDemoUrl },
    tags: ['SaaS', 'Multi-langues', 'QR Code', 'Looker Studio'],
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    image: '/images/projects/restranslate.png',
    isPublic: true,
  },
  {
    id: 'resa-restranslate',
    title: 'ResTranslate Résa',
    subtitle: 'SaaS — Réservation en ligne pour restaurants',
    description:
      'Module de réservation en ligne intégrable en 2 minutes. Widget responsive, personnalisable (couleurs, logo, créneaux), disponible 24h/24, sans commission. 80 €/mois par restaurant.',
    cta: { label: 'Demander une démo', url: hubspotDemoUrl },
    tags: ['SaaS', 'Réservation', 'Widget', 'Restauration'],
    gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
    image: '/images/projects/resa-restranslate.jpg',
    isPublic: true,
  },
  {
    id: 'breizh-car-clean',
    title: 'Breizh Car Clean',
    subtitle: 'Site vitrine — Nettoyage auto à domicile',
    description:
      'Présence web + acquisition locale pour un service de nettoyage automobile à domicile. SEO local et parcours de prise de contact.',
    url: 'https://breizh-car-clean.fr/',
    cta: { label: 'Visiter le site de Maxime', url: 'https://breizh-car-clean.fr/' },
    tags: ['Site vitrine', 'SEO local', 'Acquisition'],
    gradient: 'linear-gradient(135deg, #10b981, #22c55e)',
    image: '/images/projects/breizh-car-clean.png',
    isPublic: true,
  },
  {
    id: 'generation-auto-passion',
    title: 'Génération Auto Passion',
    subtitle: "Véhicules d'exception — Achat, vente, import",
    description:
      "Vitrine premium + parcours de contact et estimation de reprise pour un négociant automobile haut de gamme.",
    url: 'https://generationautopassion.com/',
    cta: { label: 'Trouver votre véhicule sur le site de Rani', url: 'https://generationautopassion.com/' },
    tags: ['Site vitrine', 'Lead gen', 'Automobile'],
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    image: '/images/projects/generation-auto-passion.png',
    isPublic: true,
  },
  {
    id: 'backyard-valderuz',
    title: 'Backyard Ultra Val-de-Ruz',
    subtitle: 'Site événementiel — Course ultra-endurance',
    description:
      "Site vitrine et plateforme d'inscription pour un événement Backyard Ultra en Suisse. Gestion des places limitées (150 participants), parcours interactif avec téléchargement GPX, multilingue FR/DE/EN.",
    url: 'https://backyard-valderuz.ch',
    cta: { label: "S'inscrire à la course sur le site d'Eliot", url: 'https://backyard-valderuz.ch' },
    tags: ['Site événementiel', 'Sport', 'Multilingue'],
    gradient: 'linear-gradient(135deg, #16a34a, #22d3ee)',
    image: '/images/projects/backyard-valderuz.jpg',
    isPublic: true,
  },
  {
    id: 'bidsight',
    title: 'BidSight',
    subtitle: "SaaS — Veille & réponse aux appels d'offres par IA",
    description:
      "Plateforme de détection automatique des appels d'offres publics avec scoring de pertinence et assistance IA à la rédaction des réponses. Suivi complet du cycle : signaux, opportunités, soumissions.",
    cta: { label: 'Demander une démo', url: hubspotDemoUrl },
    tags: ['SaaS', 'IA', 'Marchés publics', 'Veille'],
    gradient: 'linear-gradient(135deg, #1e3a5f, #3b82f6)',
    image: '/images/projects/bidsight.png',
    isPublic: true,
  },
];

const internalProjectsFR: ProjectItem[] = [
  {
    id: 'ocr-menus',
    title: 'OCR semi-automatique',
    subtitle: 'Adaptation menus/cartes clients',
    description:
      'Pipeline OCR pour extraire et adapter automatiquement les menus et cartes des clients ResTranslate.',
    tags: ['OCR', 'Automatisation', 'Apps Script'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    isPublic: false,
  },
  {
    id: 'quittances-pennylane',
    title: 'Quittances & factures',
    subtitle: 'Intégration Pennylane',
    description:
      'Génération semi-automatique de quittances de loyers et factures avec synchronisation Pennylane.',
    tags: ['Pennylane', 'Facturation', 'Automatisation'],
    gradient: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
    isPublic: false,
  },
  {
    id: 'qgis-converter',
    title: 'Convertisseur QGIS',
    subtitle: 'Visualisation réseaux',
    description:
      "Outil de conversion et fusion de calques QGIS pour visualiser les réseaux sur une vue cartographique unique.",
    tags: ['QGIS', 'SIG', 'Data'],
    gradient: 'linear-gradient(135deg, #6366f1, #3b82f6)',
    isPublic: false,
  },
];

const rotatingWordsFR = ['imaginer', 'apprendre', 'concevoir', 'vendre', 'déployer'];

// ===== EN =====
const profileEN: ProfileLocalized = {
  ...base,
  title: 'Curious, open-minded &',
  titleHighlight: 'all-rounder',
  subtitle: 'Project management · Automation · Product building',
  description:
    'I love understanding, building and connecting things. IoT, SaaS, automation, reporting — what drives me is solving real-world problems.',
  objective:
    'Open to full-time roles or freelance missions in project management, delivery, automation and reporting.',
};

const statsEN = [
  { value: '200+', label: 'sensors deployed' },
  { value: '12', label: 'languages (ResTranslate)' },
  { value: '3+', label: 'years leading IoT' },
  { value: '6', label: 'shipped projects' },
];

const experiencesEN: Experience[] = [
  {
    company: 'Heyliot',
    role: 'IoT Project Manager (freelance)',
    period: '2021 — 2024',
    description:
      'End-to-end management of multi-client IoT deployments (local authorities, industry, commercial real estate).',
    highlights: [
      '200+ sensors deployed (LoRaWAN, Sigfox)',
      'Coordination of technical and field teams',
      'Project tracking, acceptance testing, go-live',
      'Client reporting via Looker Studio',
    ],
  },
  {
    company: 'Sensing Vision',
    role: 'IoT Business Engineer (full-time)',
    period: '2019 — 2021',
    description:
      'Sales and technical development on the B2B IoT market.',
    highlights: [
      'B2B lead prospecting and qualification',
      'POCs and live customer demonstrations',
      'Sensor deployments and platform integrations',
      'Public tender responses',
    ],
  },
  {
    company: 'ResTranslate',
    role: 'Founder',
    period: 'Since 2020',
    description:
      'Building a B2B SaaS of multilingual digital menus for the hospitality industry.',
    highlights: [
      'End-to-end product design',
      'Automatic translation in 12 languages',
      'Multi-channel distribution (QR, Google, social)',
      'Customer acquisition and account management',
    ],
  },
  {
    company: 'Teaching',
    role: 'IoT & Connected Objects lecturer',
    period: 'Occasional',
    description:
      'Engineering school lectures on IoT and LPWAN networks.',
    highlights: [
      'LPWAN networks (LoRa, Sigfox) lectures',
      'Hands-on sensor deployment workshops',
    ],
  },
];

const skillCategoriesEN: SkillCategory[] = [
  { category: 'Project management', icon: '🎯', items: ['Scoping', 'Steering', 'Acceptance', 'Planning', 'Coordination'] },
  { category: 'IoT & Networks', icon: '📡', items: ['LoRaWAN', 'Sigfox', 'NB-IoT', 'Sensors', 'IoT Platforms'] },
  { category: 'Automation', icon: '⚡', items: ['Google Sheets', 'Apps Script', 'Zapier', 'Make', 'OCR'] },
  { category: 'Reporting & Data', icon: '📊', items: ['Looker Studio', 'Dashboards', 'KPIs', 'QGIS'] },
  { category: 'Sales & CRM', icon: '💼', items: ['Salesforce', 'HubSpot', 'Pipedrive', 'B2B prospecting'] },
  { category: 'Design & Tools', icon: '🎨', items: ['Figma', 'Canva', 'Webflow', 'Pennylane'] },
];

const publicProjectsEN: ProjectItem[] = [
  {
    id: 'restranslate',
    title: 'ResTranslate',
    subtitle: 'B2B SaaS — Multilingual digital menus',
    description:
      'Digital menus translated into 12 languages with multi-channel distribution (QR code, Google Business, social media). Integrated Looker Studio dashboard.',
    url: 'https://restranslate.com/',
    cta: { label: 'Demo', url: hubspotDemoUrl },
    tags: ['SaaS', 'Multi-language', 'QR Code', 'Looker Studio'],
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    image: '/images/projects/restranslate.png',
    isPublic: true,
  },
  {
    id: 'resa-restranslate',
    title: 'ResTranslate Résa',
    subtitle: 'SaaS — Online booking for restaurants',
    description:
      'Online booking module embeddable in 2 minutes. Responsive widget, customizable (colors, logo, time slots), available 24/7, commission-free. €80/month per restaurant.',
    cta: { label: 'Request a demo', url: hubspotDemoUrl },
    tags: ['SaaS', 'Booking', 'Widget', 'Hospitality'],
    gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
    image: '/images/projects/resa-restranslate.jpg',
    isPublic: true,
  },
  {
    id: 'breizh-car-clean',
    title: 'Breizh Car Clean',
    subtitle: 'Showcase site — On-site car cleaning',
    description:
      'Web presence and local acquisition for a mobile car cleaning service. Local SEO and contact funnel.',
    url: 'https://breizh-car-clean.fr/',
    cta: { label: "Visit Maxime's website", url: 'https://breizh-car-clean.fr/' },
    tags: ['Showcase site', 'Local SEO', 'Lead gen'],
    gradient: 'linear-gradient(135deg, #10b981, #22c55e)',
    image: '/images/projects/breizh-car-clean.png',
    isPublic: true,
  },
  {
    id: 'generation-auto-passion',
    title: 'Génération Auto Passion',
    subtitle: 'Premium vehicles — Buy, sell, import',
    description:
      'Premium showcase plus contact and trade-in estimate funnel for a high-end car dealer.',
    url: 'https://generationautopassion.com/',
    cta: { label: "Find your car on Rani's website", url: 'https://generationautopassion.com/' },
    tags: ['Showcase site', 'Lead gen', 'Automotive'],
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    image: '/images/projects/generation-auto-passion.png',
    isPublic: true,
  },
  {
    id: 'backyard-valderuz',
    title: 'Backyard Ultra Val-de-Ruz',
    subtitle: 'Event site — Ultra-endurance race',
    description:
      'Showcase and registration platform for a Backyard Ultra event in Switzerland. Limited slots management (150 runners), interactive course with GPX download, multilingual FR/DE/EN.',
    url: 'https://backyard-valderuz.ch',
    cta: { label: "Register on Eliot's website", url: 'https://backyard-valderuz.ch' },
    tags: ['Event site', 'Sport', 'Multilingual'],
    gradient: 'linear-gradient(135deg, #16a34a, #22d3ee)',
    image: '/images/projects/backyard-valderuz.jpg',
    isPublic: true,
  },
  {
    id: 'bidsight',
    title: 'BidSight',
    subtitle: 'SaaS — AI-powered tender monitoring & response',
    description:
      'Platform that automatically detects public tenders with relevance scoring and AI-assisted response writing. Full cycle tracking: signals, opportunities, submissions.',
    cta: { label: 'Request a demo', url: hubspotDemoUrl },
    tags: ['SaaS', 'AI', 'Public tenders', 'Monitoring'],
    gradient: 'linear-gradient(135deg, #1e3a5f, #3b82f6)',
    image: '/images/projects/bidsight.png',
    isPublic: true,
  },
];

const internalProjectsEN: ProjectItem[] = [
  {
    id: 'ocr-menus',
    title: 'Semi-automatic OCR',
    subtitle: 'Adapting client menus',
    description:
      'OCR pipeline to automatically extract and adapt ResTranslate clients menus.',
    tags: ['OCR', 'Automation', 'Apps Script'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    isPublic: false,
  },
  {
    id: 'quittances-pennylane',
    title: 'Rent receipts & invoices',
    subtitle: 'Pennylane integration',
    description:
      'Semi-automatic generation of rent receipts and invoices, synced with Pennylane.',
    tags: ['Pennylane', 'Billing', 'Automation'],
    gradient: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
    isPublic: false,
  },
  {
    id: 'qgis-converter',
    title: 'QGIS converter',
    subtitle: 'Network visualization',
    description:
      'Tool to convert and merge QGIS layers to visualize networks on a single map view.',
    tags: ['QGIS', 'GIS', 'Data'],
    gradient: 'linear-gradient(135deg, #6366f1, #3b82f6)',
    isPublic: false,
  },
];

const rotatingWordsEN = ['imagine', 'learn', 'design', 'sell', 'deploy'];

const dataset = {
  fr: {
    profile: profileFR,
    stats: statsFR,
    experiences: experiencesFR,
    skillCategories: skillCategoriesFR,
    publicProjects: publicProjectsFR,
    internalProjects: internalProjectsFR,
    rotatingWords: rotatingWordsFR,
  },
  en: {
    profile: profileEN,
    stats: statsEN,
    experiences: experiencesEN,
    skillCategories: skillCategoriesEN,
    publicProjects: publicProjectsEN,
    internalProjects: internalProjectsEN,
    rotatingWords: rotatingWordsEN,
  },
} as const;

export function getProfileData(lang: Lang) {
  return dataset[lang];
}

export function useProfileData() {
  const { lang } = useLanguage();
  return dataset[lang];
}

// Backwards-compatible exports (FR defaults)
export const profile = profileFR;
export const stats = statsFR;
export const experiences = experiencesFR;
export const skillCategories = skillCategoriesFR;
export const publicProjects = publicProjectsFR;
export const internalProjects = internalProjectsFR;
