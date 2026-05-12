# Plan — i18n FR/EN end-to-end

Objectif : rendre la bascule de langue fiable et "SEO-proof", avec des ancres qui suivent la langue, un SEO entièrement localisé, un sitemap hreflang correct, et une source de données i18n unifiée.

## 1. Bascule EN/FR pilotée par l'URL

Aujourd'hui la langue vit uniquement dans `localStorage`. Conséquence : non partageable, non indexable, non détectable côté serveur/crawler.

- Ajouter un préfixe d'URL : `/` (FR par défaut) et `/en` (EN).
- Routing dans `src/App.tsx` :
  - `/` → Home FR
  - `/en` → Home EN
  - `*` → NotFound (avec préservation de la langue)
- Adapter `LanguageProvider` (`src/i18n/LanguageContext.tsx`) :
  - Lire la langue depuis `useLocation().pathname` (source de vérité).
  - `setLang(l)` fait un `navigate` vers `/` ou `/en` (en conservant le hash courant pour ne pas perdre la position de scroll).
  - Garder `localStorage` uniquement comme préférence de redirection initiale sur `/` racine si le navigateur est EN (optionnel, comportement à confirmer).
- Mettre à jour le toggle dans `Header.tsx` pour utiliser `setLang` (qui navigue) + traduire le hash courant via la table de slugs.

## 2. Ancres dynamiques cohérentes

Les `id` de section utilisent déjà `t('slug.*')`, mais quand on change de langue les anciennes URLs `#projets` deviennent caduques.

- Créer un util `translateHash(hash, fromLang, toLang)` dans `src/i18n/` qui mappe les slugs (table inverse).
- Lors de `setLang`, traduire `window.location.hash` avant la navigation.
- Au mount, si l'URL contient un hash dans la mauvaise langue, le réécrire silencieusement (`history.replaceState`) vers le slug de la langue active → garantit deep links partagés FR ↔ EN.
- Footer/Header/Hero CTA : tous les `href="#contact"` en dur dans `Home.tsx` (cf. CTA hero) doivent passer par `t('slug.contact')`.

## 3. SEO localisé complet

- `SEOHead.tsx` :
  - Calculer `baseUrl` à partir d'une constante `SITE_URL` (= `https://brochardbenjamin.com`) et non `window.location.origin` (évite les URLs de preview dans les balises).
  - Émettre un `<link rel="canonical">` dynamique correspondant à la version courante (`/` pour FR, `/en` pour EN).
  - Émettre les `<link rel="alternate" hreflang>` dynamiquement : `fr`, `en`, `x-default` → bonnes URLs `/` et `/en`.
  - Injecter une balise JSON-LD `Person` (nom, job title localisé, sameAs LinkedIn/GitHub, url).
- `index.html` :
  - Garder uniquement les valeurs FR par défaut (server-side fallback).
  - Corriger les `hreflang` actuellement tous identiques : `en` → `https://brochardbenjamin.com/en`.
  - `twitter:card` passer à `summary_large_image` (cohérent avec le runtime).

## 4. Sitemap + robots avec hreflang

- Créer `scripts/generate-sitemap.ts` (postbuild via `tsx`) qui émet `dist/sitemap.xml` avec **deux URLs** (`/` et `/en`) et des balises `xhtml:link rel="alternate" hreflang="..."` pour chacune.
- Ajouter `"postbuild": "tsx scripts/generate-sitemap.ts"` dans `package.json`, `bun add -D tsx`, étendre `tsconfig.node.json` (`scripts/**/*.ts`).
- Mettre à jour `public/robots.txt` pour ajouter `Sitemap: https://brochardbenjamin.com/sitemap.xml`.
- Supprimer le fichier statique `public/sitemap.xml` s'il existe (ce n'est pas le cas ici, à confirmer pendant l'impl).

## 5. Uniformisation des données i18n

`src/data/profile.ts` mélange aujourd'hui datasets FR/EN, hooks et exports rétro-compat.

- Restructurer en sous-fichiers : `src/data/profile.fr.ts` et `src/data/profile.en.ts`, exposant un même type `LocalizedProfile`.
- `src/data/profile.ts` devient un simple agrégateur : `getProfileData(lang)` + `useProfileData()` (inchangé en surface).
- Supprimer les exports rétro-compat (`profile`, `stats`, ...) après vérification qu'aucun composant ne les utilise (ripgrep).
- Centraliser les constantes partagées (URL HubSpot, base profile) dans `src/data/profile.shared.ts`.
- Idem côté UI : `translations.ts` reste plat mais on ajoute un type-check à la compilation pour garantir parité des clés FR/EN (test simple : `Object.keys(fr).every(k => k in en)` levé via un `as const satisfies`).

## 6. Vérifications finales

- Build OK + `dist/sitemap.xml` généré avec 2 URLs et hreflang.
- Toggle `FR ↔ EN` :
  - URL passe de `/#projets` à `/en#projects` sans rechargement.
  - Position de scroll préservée.
- Ouverture directe de `/en` charge la version anglaise (titre, méta, contenu, slug d'ancre).
- `<head>` contient canonical + 3 hreflang corrects, et le JSON-LD Person.
- Lighthouse SEO toujours ≥ 95.

## Détails techniques

- Aucune dépendance ajoutée hormis `tsx` (dev).
- Pas de SSR : la version « visible » par les crawlers reste `index.html` FR. Les crawlers modernes (Google) exécutent JS et liront la version EN sur `/en` ; la déclaration explicite via `hreflang` dans `index.html` + sitemap est ce qui garantit l'indexation des deux versions.
- `LanguageProvider` doit être **à l'intérieur** de `BrowserRouter` (actuellement à l'extérieur dans `App.tsx`) pour pouvoir utiliser `useLocation`/`useNavigate`. Petit refactor du JSX d'`App.tsx`.
