import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ExternalLink,
  Mail,
  Linkedin,
  ArrowDown,
  Lock,
  ChevronRight,
  Github,
  ZoomIn,
  X,
} from 'lucide-react';
import { useProfileData } from '@/data/profile';
import { SEOHead } from '@/components/seo/SEOHead';
import { useT } from '@/i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Home() {
  const t = useT();
  const {
    profile,
    experiences,
    skillCategories,
    publicProjects,
    internalProjects,
    rotatingWords,
  } = useProfileData();

  const githubUsername =
    profile.github.split('/').filter(Boolean).pop() ?? 'BenBro4Web3';
  const githubHeatmapUrl = `https://gh-heat.anishroy.com/api/${githubUsername}/svg?theme=green&darkMode=true&transparent=true&showLegend=true&showDayLabels=true&showMonthLabels=true`;
  const [wordIndex, setWordIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);
  return (
    <main className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="site-gradient-field" />
      <SEOHead />

      {/* ===== HERO ===== */}
      <section
        id={t('slug.home')}
        className="section-ambient ambient-violet min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 hero-glow" />

        <div className="relative z-10">
          <motion.p
            className="text-sm text-primary font-mono tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.name}
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {t('hero.iLove')}{' '}
            <span className="gradient-text inline-block min-w-[280px] md:min-w-[400px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            className="mt-4 text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {profile.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={`#${t('slug.contact')}`}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t('hero.cta.contact')}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href={`#${t('slug.projects')}`} aria-label={t('hero.scroll')}>
            <ArrowDown className="size-5 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* ===== PROJETS ===== */}
      <section
        id={t('slug.projects')}
        className="section-ambient ambient-cyan py-24 px-6 border-t border-border"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            {t('projects.kicker')}
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            {t('projects.title')}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {publicProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="group bg-card rounded-xl border border-border hover:border-primary/30 transition-all overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                {/* Screenshot — clickable: lightbox if no url, new tab if url */}
                <div
                  className="aspect-[16/9] relative overflow-hidden cursor-pointer"
                  onClick={() =>
                    project.url
                      ? window.open(project.url, '_blank', 'noopener,noreferrer')
                      : project.image && setLightboxImage({ src: project.image, alt: project.title })
                  }
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{ background: project.gradient }}
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    {project.url ? (
                      <ExternalLink className="size-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <ZoomIn className="size-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground font-light mt-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.cta && (
                    <a
                      href={project.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      {project.cta.label}
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Internal Projects */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mt-24 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            {t('projects.internal.title')}
          </motion.h3>
          <motion.p
            className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            {t('projects.internal.subtitle')}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {internalProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="bg-card rounded-xl border border-border overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                {/* Mini gradient accent */}
                <div
                  className="h-1.5"
                  style={{ background: project.gradient }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="size-3.5 text-muted-foreground" />
                    <h4 className="text-base font-semibold">{project.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground font-light mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 block overflow-hidden rounded-[2rem] border border-border/70 bg-card/95 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)] transition-transform duration-300 hover:-translate-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={internalProjects.length + 3}
            variants={fadeUp}
          >
            <div className="relative overflow-hidden rounded-[calc(2rem-1px)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.14),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.14),transparent_44%)]" />
              <div className="relative p-6 md:p-8">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
                    <Github className="size-3.5" />
                    GitHub
                  </span>
                  <h4 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
                    BenBro4Web3
                  </h4>
                  <p className="mt-2 max-w-xl text-sm font-light leading-6 text-muted-foreground md:text-base">
                    {t('projects.github.tagline')}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['@BenBro4Web3', t('projects.github.badge.public'), t('projects.github.badge.prototypes'), 'Web3'].map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/60 pt-5">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground/80">
                      github.com/{githubUsername}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      {t('projects.github.viewProfile')}
                      <ExternalLink className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                <div className="relative mt-6 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-[#0d1117] p-4 shadow-[0_24px_60px_-35px_rgba(2,12,27,0.88)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_38%)]" />
                  <img
                    src={githubHeatmapUrl}
                    alt={t('projects.github.heatmapAlt')}
                    loading="lazy"
                    decoding="async"
                    className="relative block h-auto min-w-[680px] max-w-none opacity-95"
                  />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ===== PARCOURS ===== */}
      <section
        id={t('slug.experience')}
        className="section-ambient ambient-indigo py-24 px-6 border-t border-border"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            {t('experience.kicker')}
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            {t('experience.title')}
          </motion.h3>

          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                {/* Dot */}
                <div className="absolute left-0 top-3 w-[15px] h-[15px] rounded-full bg-primary/20 border-2 border-primary" />

                {/* Card */}
                <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-xs text-primary font-mono bg-primary/10 px-2.5 py-1 rounded">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-semibold mt-3">{exp.company}</h4>
                  <p className="text-sm text-primary/80">{exp.role}</p>
                  <p className="text-sm text-muted-foreground font-light mt-3">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <ChevronRight className="size-3 text-primary shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPETENCES ===== */}
      <section
        id={t('slug.skills')}
        className="section-ambient ambient-emerald py-24 px-6 border-t border-border"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary text-center mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            {t('skills.kicker')}
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            {t('skills.title')}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h4 className="font-semibold">{cat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id={t('slug.contact')}
        className="section-ambient ambient-rose py-24 px-6 border-t border-border"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-sm tracking-widest uppercase text-primary mb-2 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            {t('contact.kicker')}
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            {t('contact.title')}
          </motion.h3>
          <motion.p
            className="text-muted-foreground font-light mb-2 max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            {profile.objective}
          </motion.p>
          <motion.p
            className="text-muted-foreground text-sm mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
          >
            {t('contact.invite')}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label={t('lightbox.close')}
            >
              <X className="size-6" />
            </button>
            <motion.img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
