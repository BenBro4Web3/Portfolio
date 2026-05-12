import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useLanguage, useT } from '@/i18n/LanguageContext';

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useT();
  const { lang, setLang } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.projects'), href: '#projets' },
    { name: t('nav.experience'), href: '#parcours' },
    { name: t('nav.skills'), href: '#competences' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const LanguageToggle = ({ className }: { className?: string }) => (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur p-0.5 text-xs font-medium',
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(['fr', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            'px-2.5 py-1 rounded-full transition-colors uppercase tracking-wider',
            lang === l
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            B<span className="text-primary">.</span>B
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle className="hidden md:inline-flex" />
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <LanguageToggle className="self-start mt-2" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
