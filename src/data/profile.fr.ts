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
  title: 'Curieux, ouvert &',
  titleHighlight: 'touche-à-tout',
  subtitle: 'Gestion de projet · Automatisation · Création de produits',
  description:
    "J'aime comprendre, construire et connecter les choses. IoT, SaaS, automatisation, reporting — ce qui m'anime, c'est de résoudre des problèmes concrets.",
  objective:
    'Ouvert aux opportunités CDI ou missions freelance en pilotage de projets, delivery, automatisation et reporting.',
};

const stats: Stat[] = [
  { value: '200+', label: 'capteurs déployés' },
  { value: '12', label: 'langues (ResTranslate)' },
  { value: '3+', label: 'ans pilotage IoT' },
  { value: '7', label: 'projets publiés' },
];

const experiences: Experience[] = [
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

const skillCategories: SkillCategory[] = [
  { category: 'Gestion de projet', icon: '🎯', items: ['Cadrage', 'Pilotage', 'Recette', 'Planning', 'Coordination'] },
  { category: 'IoT & Réseaux', icon: '📡', items: ['LoRaWAN', 'Sigfox', 'NB-IoT', 'Capteurs', 'Plateformes IoT'] },
  { category: 'Automatisation', icon: '⚡', items: ['Google Sheets', 'Apps Script', 'Zapier', 'Make', 'OCR'] },
  { category: 'Reporting & Data', icon: '📊', items: ['Looker Studio', 'Dashboards', 'KPIs', 'QGIS'] },
  { category: 'Commercial & CRM', icon: '💼', items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Prospection B2B'] },
  { category: 'Design & Outils', icon: '🎨', items: ['Figma', 'Canva', 'Webflow', 'Pennylane'] },
];

const publicProjects: ProjectItem[] = [
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
    id: 'biencible',
    title: 'Biencible',
    subtitle: 'SaaS — Matching biens/clients pour agents immobiliers',
    description:
      "Plateforme de prospection immobilière : agrégation des nouveaux biens, matching automatique avec les critères clients, veille concurrentielle et vue cartographique. Screener rapide (1 clic par bien) et données rafraîchies en continu.",
    cta: { label: 'Demander une démo', url: hubspotDemoUrl },
    tags: ['SaaS', 'Immobilier', 'Matching', 'Prospection'],
    gradient: 'linear-gradient(135deg, #0f3d3e, #14b8a6)',
    image: '/images/projects/biencible.jpg',
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

const internalProjects: ProjectItem[] = [
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

const rotatingWords = ['imaginer', 'apprendre', 'concevoir', 'vendre', 'déployer'];

export const profileFR: LocalizedDataset = {
  profile,
  stats,
  experiences,
  skillCategories,
  publicProjects,
  internalProjects,
  rotatingWords,
};
