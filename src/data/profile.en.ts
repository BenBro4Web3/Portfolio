import {
  hubspotDemoUrl,
  profileBase,
  type Experience,
  type LocalizedDataset,
  type ProfileLocalized,
  type ProjectItem,
  type SkillCategory,
  type Stat,
} from './profile.shared';

const profile: ProfileLocalized = {
  ...profileBase,
  title: 'Curious, open-minded &',
  titleHighlight: 'all-rounder',
  subtitle: 'Project management · Automation · Product building',
  description:
    'I love understanding, building and connecting things. IoT, SaaS, automation, reporting — what drives me is solving real-world problems.',
  objective:
    'Open to full-time roles or freelance missions in project management, delivery, automation and reporting.',
};

const stats: Stat[] = [
  { value: '200+', label: 'sensors deployed' },
  { value: '12', label: 'languages (ResTranslate)' },
  { value: '3+', label: 'years leading IoT' },
  { value: '7', label: 'shipped projects' },
];

const experiences: Experience[] = [
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

const skillCategories: SkillCategory[] = [
  { category: 'Project management', icon: '🎯', items: ['Scoping', 'Steering', 'Acceptance', 'Planning', 'Coordination'] },
  { category: 'IoT & Networks', icon: '📡', items: ['LoRaWAN', 'Sigfox', 'NB-IoT', 'Sensors', 'IoT Platforms'] },
  { category: 'Automation', icon: '⚡', items: ['Google Sheets', 'Apps Script', 'Zapier', 'Make', 'OCR'] },
  { category: 'Reporting & Data', icon: '📊', items: ['Looker Studio', 'Dashboards', 'KPIs', 'QGIS'] },
  { category: 'Sales & CRM', icon: '💼', items: ['Salesforce', 'HubSpot', 'Pipedrive', 'B2B prospecting'] },
  { category: 'Design & Tools', icon: '🎨', items: ['Figma', 'Canva', 'Webflow', 'Pennylane'] },
];

const publicProjects: ProjectItem[] = [
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
    id: 'biencible',
    title: 'Biencible',
    subtitle: 'SaaS — Property/client matching for real estate agents',
    description:
      'Real estate prospecting platform: aggregates new listings, automatically matches them against client criteria, competitive monitoring and map view. Fast screener (1 click per listing) with continuously refreshed data.',
    cta: { label: 'Request a demo', url: hubspotDemoUrl },
    tags: ['SaaS', 'Real estate', 'Matching', 'Prospecting'],
    gradient: 'linear-gradient(135deg, #0f3d3e, #14b8a6)',
    image: '/images/projects/biencible.jpg',
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

const internalProjects: ProjectItem[] = [
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

const rotatingWords = ['imagine', 'learn', 'design', 'sell', 'deploy'];

export const profileEN: LocalizedDataset = {
  profile,
  stats,
  experiences,
  skillCategories,
  publicProjects,
  internalProjects,
  rotatingWords,
};
