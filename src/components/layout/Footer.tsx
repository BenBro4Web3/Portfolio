import { Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { useT } from '@/i18n/LanguageContext';

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
