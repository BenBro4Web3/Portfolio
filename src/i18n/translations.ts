export const translations = {
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.experience': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    // Hero
    'hero.iLove': "J'aime",
    'hero.cta.contact': 'Me contacter',
    'hero.scroll': 'Descendre',

    // Projects
    'projects.kicker': 'Réalisations',
    'projects.title': 'Projets publics',
    'projects.internal.title': 'Projets internes',
    'projects.internal.subtitle':
      'Outils et automatisations développés en interne. Non publiables (données clients, propriété intellectuelle).',
    'projects.github.tagline':
      'Une vue directe sur mon profil GitHub pour parcourir mes dépôts publics, mes prototypes et mes expérimentations.',
    'projects.github.viewProfile': 'Voir le profil',

    // Experience
    'experience.kicker': 'Parcours',
    'experience.title': 'Expériences clés',

    // Skills
    'skills.kicker': 'Expertise',
    'skills.title': 'Compétences & outils',

    // Contact
    'contact.kicker': 'Contact',
    'contact.title': 'Travaillons ensemble',
    'contact.invite':
      "N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.",

    // Footer
    'footer.rights': 'Tous droits réservés.',

    // Lightbox
    'lightbox.close': 'Fermer',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.iLove': 'I love to',
    'hero.cta.contact': 'Get in touch',
    'hero.scroll': 'Scroll down',

    // Projects
    'projects.kicker': 'Work',
    'projects.title': 'Public projects',
    'projects.internal.title': 'Internal projects',
    'projects.internal.subtitle':
      'Tools and automations built in-house. Not publishable (client data, IP).',
    'projects.github.tagline':
      'A direct view of my GitHub profile to browse my public repositories, prototypes and experiments.',
    'projects.github.viewProfile': 'View profile',

    // Experience
    'experience.kicker': 'Career',
    'experience.title': 'Key experiences',

    // Skills
    'skills.kicker': 'Expertise',
    'skills.title': 'Skills & tools',

    // Contact
    'contact.kicker': 'Contact',
    'contact.title': "Let's work together",
    'contact.invite':
      'Feel free to reach out to discuss your projects or opportunities.',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Lightbox
    'lightbox.close': 'Close',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['fr'];
