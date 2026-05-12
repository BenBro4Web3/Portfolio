import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, type TranslationKey } from './translations';

export type Lang = 'fr' | 'en';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'site-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === 'fr' || stored === 'en') return stored;
  const nav = navigator.language?.toLowerCase() ?? '';
  return nav.startsWith('fr') ? 'fr' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (key: TranslationKey) => translations[lang][key] ?? translations.fr[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
