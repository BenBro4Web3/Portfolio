import { createContext, useCallback, useContext, useEffect, useMemo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations, type TranslationKey } from './translations';
import { translateHash } from './hash';

export type Lang = 'fr' | 'en';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'site-lang';

function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(location.pathname);

  // Sync <html lang> + persist preference
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // Auto-redirect on first load if user landed on "/" but prefers EN
  useEffect(() => {
    if (location.pathname !== '/') return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    const prefersEn =
      stored === 'en' ||
      (stored === null && navigator.language?.toLowerCase().startsWith('en'));
    if (prefersEn) {
      navigate('/en' + location.search + location.hash, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback(
    (l: Lang) => {
      if (l === lang) return;
      const newHash = translateHash(location.hash, l);
      const newPath = l === 'fr' ? '/' : '/en';
      navigate(newPath + location.search + newHash);
    },
    [lang, location.hash, location.search, navigate]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (key: TranslationKey) =>
        translations[lang][key] ?? translations.fr[key] ?? key,
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
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
