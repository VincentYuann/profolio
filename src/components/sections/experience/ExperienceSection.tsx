import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Calendar,
  Layers,
  ListChecks,
} from 'lucide-react';
import { CornerBrackets } from '../../common/CornerBrackets';
import { useSiteData } from '../../../context/SiteDataContext';
import { TechTag } from '../../common/TechTag';
import { Badge } from '../../ui/badge';
import { SectionHeading } from '../../common/SectionHeading';
import { StatusBadge } from '../../common/StatusBadge';
import { handleImageError } from '../../../lib/constants';

interface ExperienceSectionProps {
  onNavigate?: (view: 'home' | 'projects' | 'resume', sectionId?: string) => void;
}

interface MilestoneTheme {
  primary: string;
  textClass: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  emblemBorder: string;
  emblemShadow: string;
  cardActiveBorder: string;
  cardActiveRing: string;
  cardActiveGlow: string;
  nodeActiveBg: string;
  nodeActiveBorder: string;
  nodeActiveShadow: string;
  bulletOrdinalClass: string;
}

// Quiet architectural milestone theme strictly adhering to editorial discipline
const CANONICAL_MILESTONE_THEME: MilestoneTheme = {
  primary: '#B5482E',
  textClass: 'text-light-ink dark:text-dark-ink',
  badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
  badgeBorder: 'border-emerald-600/25 dark:border-emerald-400/25',
  badgeText: 'text-emerald-800 dark:text-emerald-400',
  emblemBorder: 'border-light-border dark:border-[#3E3B37]',
  emblemShadow: 'shadow-2xs',
  cardActiveBorder: 'border-light-border-strong dark:border-[#4E525D]',
  cardActiveRing: '',
  cardActiveGlow: 'shadow-sm',
  nodeActiveBg: 'bg-emerald-600 dark:bg-emerald-400',
  nodeActiveBorder: 'border-emerald-600 dark:border-emerald-400',
  nodeActiveShadow: '',
  bulletOrdinalClass: 'text-light-ink-muted dark:text-dark-ink-muted bg-light-surface dark:bg-[#1F1E1D] border-light-border dark:border-[#3E3B37]',
};

const getMilestoneTheme = (_idx: number): MilestoneTheme => {
  return CANONICAL_MILESTONE_THEME;
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onNavigate }) => {
  const { experiences } = useSiteData();
  const list = Array.isArray(experiences) ? experiences : [];

  // Track expanded cards for progressive disclosure
  const [expandedCards, setExpandedCards] = useState<Record<string | number, boolean>>(() => {
    // Top active card starts expanded for immediate impact
    return list.length > 0 ? { [list[0].id || 0]: true } : {};
  });

  // Track active/selected milestone for scroll-spy and interaction
  const [activeCardId, setActiveCardId] = useState<string | number | null>(() => {
    return list.length > 0 ? (list[0].id || 0) : null;
  });

  const cardRefs = useRef<Record<string | number, HTMLElement | null>>({});

  // Scroll spy: auto-light up milestone when user scrolls down
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || list.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-milestone-id');
            if (id) {
              setActiveCardId(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.15,
      }
    );

    list.forEach((exp, idx) => {
      const key = exp.id || idx;
      const el = cardRefs.current[key];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [list]);

  const toggleExpand = (id: string | number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAll = () => {
    const allOpen = list.every((exp, idx) => expandedCards[exp.id || idx]);
    if (allOpen) {
      setExpandedCards({});
    } else {
      const next: Record<string | number, boolean> = {};
      list.forEach((exp, idx) => {
        next[exp.id || idx] = true;
      });
      setExpandedCards(next);
    }
  };

  if (list.length === 0) return null;

  const allOpen = list.every((exp, idx) => expandedCards[exp.id || idx]);

  return (
    <section id="experience" className="relative w-full py-16 lg:py-24 scroll-mt-20">
      {/* Architectural Background Chamber for Experience */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-canvas via-light-surface/40 to-light-canvas dark:from-dark-canvas dark:via-[#262523]/40 dark:to-dark-canvas pointer-events-none z-0 border-y border-light-border/40 dark:border-dark-border/40" />
      {/* Subtle Japanese Joinery Axis Ambient Glow */}
      <div className="absolute left-0 sm:left-24 top-1/4 w-96 h-96 bg-radial-[at_center] from-ochre/[0.04] dark:from-ochre/[0.025] to-transparent pointer-events-none z-0" />
      {/* Subtle Sumi-e Bamboo Silhouette Watermark in Background */}
      <div className="absolute right-0 top-12 bottom-12 w-64 lg:w-96 pointer-events-none z-0 overflow-hidden select-none opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-luminosity">
        <img
          src="./images/sumie-tall-vertical-bamboo.jpg"
          alt="Bamboo backdrop"
          className="w-full h-full object-cover object-left opacity-60 dark:opacity-30 dark:filter dark:brightness-75"
          loading="lazy"
          decoding="async"
          style={{
            maskImage: 'linear-gradient(to left, black 20%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 90%)',
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Classical Wabi-Sabi Numerals & Standardized Layout */}
        <SectionHeading
          numeral="02 //"
          categoryTag="CAREER TRAJECTORY · 職歴"
          title="Work & Milestones"
          kanjiSubtitle="職歴"
          description="A chronology of software engineering roles, full-stack systems development, and real-world impact."
          actions={
            <>
              {/* Global Expand All / Collapse All */}
              <button
                type="button"
                onClick={toggleAll}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-light-surface-card dark:bg-[#262523] border border-light-border dark:border-[#3E3B37] hover:border-light-border-strong dark:hover:border-[#4E525D] text-light-ink dark:text-dark-ink font-sans text-xs uppercase tracking-widest shadow-xs transition-all duration-200 cursor-pointer"
                title="Expand or collapse all career milestone details"
              >
                <Layers className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted" />
                <span>{allOpen ? 'Collapse All' : 'Expand All'}</span>
              </button>

              {/* Resume Link */}
              <a
                href="#resume"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('resume');
                  }
                }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-light-surface-card dark:bg-[#262523] border border-light-border dark:border-[#3E3B37] hover:border-light-border-strong dark:hover:border-[#4E525D] text-light-ink dark:text-dark-ink font-sans text-xs uppercase tracking-widest shadow-xs transition-all duration-200"
              >
                <Briefcase className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted" />
                <span className="hidden sm:inline">Curriculum Vitae</span>
                <span className="sm:hidden">CV</span>
                <ArrowRight className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </>
          }
        />

        {/* Timeline Container */}
        <div className="relative timeline-container">
          {/* Vertical Joinery Axis Line: Subtle, quiet hairline */}
          <div className="absolute left-3.5 sm:left-5 top-8 bottom-10 w-px bg-light-border/60 dark:bg-dark-border/40 -translate-x-1/2 pointer-events-none z-0" />

          {/* Milestone Cards Stack */}
          <div className="flex flex-col gap-8 sm:gap-12">
            {list.map((exp, idx) => {
              const cardKey = exp.id || idx;
              const isCardActive = String(activeCardId) === String(cardKey);
              const isExpanded = !!expandedCards[cardKey];
              const isCurrent = typeof exp.isActive === 'boolean' ? exp.isActive : idx === 0;
              const theme = getMilestoneTheme(idx);

              // Extract bullet points
              const bullets = Array.isArray(exp.bullets) && exp.bullets.length > 0
                ? exp.bullets
                : exp.description
                ? exp.description
                    .split(/(?<=[.!?])\s+/)
                    .map((p) => p.trim())
                    .filter((p) => p.length > 0)
                : [];

              const overviewText = exp.overview || exp.description;

              return (
                <article
                  key={cardKey}
                  ref={(el) => { cardRefs.current[cardKey] = el; }}
                  data-milestone-id={String(cardKey)}
                  onMouseEnter={() => setActiveCardId(cardKey)}
                  onClick={() => setActiveCardId(cardKey)}
                  className={`milestone-card relative pl-8 sm:pl-14 group cursor-pointer transition-all duration-300 ${
                    isCardActive ? 'is-active opacity-100' : 'opacity-85 hover:opacity-100'
                  }`}
                  id={`milestone-${idx + 1}`}
                >
                  {/* Editorial Timeline Marker: Exact 8px marker without ring or orbit */}
                  <button
                    type="button"
                    aria-label={`Jump to ${exp.company} milestone`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCardId(cardKey);
                    }}
                    className={`timeline-node absolute left-3.5 sm:left-5 top-7 sm:top-8 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 cursor-pointer ${
                      isCardActive
                        ? 'bg-terracotta border border-terracotta'
                        : 'border border-light-ink-muted/50 dark:border-[#787368] bg-light-canvas dark:bg-[#1F1E1D] hover:border-terracotta'
                    }`}
                  />

                  {/* Milestone Card Frame */}
                  <div
                    className={`relative rounded-xl sm:rounded-2xl border p-5 sm:p-8 overflow-visible transition-all duration-200 classical-card-frame bg-light-surface-card dark:bg-[#2D2B29] craft-card ${
                      isCardActive
                        ? 'border-light-border-strong dark:border-[#4E525D] shadow-sm'
                        : 'border-light-border dark:border-[#3E3B37] hover:border-light-border-strong dark:hover:border-[#4E525D]'
                    }`}
                  >
                    {/* Corner Hairline Brackets (Subtle) */}
                    <CornerBrackets size="sm" />

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      {/* Left: Clean Square Emblem (Custom Logo Image or Default Japanese Hanko Seal) */}
                      <div className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl border ${isCardActive ? theme.emblemBorder : 'border-light-border dark:border-dark-border'} bg-light-surface dark:bg-dark-surface-raised ${theme.emblemShadow} flex items-center justify-center overflow-hidden shrink-0 mx-auto sm:mx-0 transition-shadow duration-300`}>
                        {exp.logoUrl ? (
                          <img
                            src={exp.logoUrl}
                            alt={`${exp.company} emblem`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            onError={handleImageError}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-1 select-none bg-light-surface/40 dark:bg-dark-surface-card/40">
                            <span className={`font-serif font-black ${isCardActive ? theme.textClass : 'text-light-ink dark:text-dark-ink'} text-2xl sm:text-3xl leading-none tracking-normal`}>
                              {exp.kanji || (idx === 0 ? '木' : idx === 1 ? '墨' : idx === 2 ? '明' : '原')}
                            </span>
                            <span className={`text-[11px] font-mono tracking-wider ${isCardActive ? theme.textClass : 'text-light-ink-subtle dark:text-dark-ink-subtle'} uppercase font-bold leading-none mt-1 opacity-90`}>
                              {exp.kanjiSubtitle || (idx === 0 ? 'AI' : idx === 1 ? 'SUMI' : idx === 2 ? 'CRAFT' : 'SYS')}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Right: Role Header & Progressive Disclosure Body */}
                      <div className="flex-1 min-w-0 w-full pr-0 sm:pr-8">
                        {/* Metadata Strip: Dates + High-Contrast Active/Completed Pill */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                          {/* Order index */}
                          <Badge variant="outline" className="font-mono text-[11px] sm:text-xs px-1.5 sm:px-2 py-0.5 border-light-border dark:border-dark-border text-light-ink-muted dark:text-dark-ink-muted">
                            #{String(idx + 1).padStart(2, '0')}
                          </Badge>

                          {/* Date Range with Domain Color */}
                          <span className={`font-mono text-xs ${isCardActive ? theme.textClass : 'text-light-ink-muted dark:text-dark-ink-muted'} font-medium tracking-wider uppercase flex items-center gap-1.5`}>
                            <Calendar className="w-3.5 h-3.5 opacity-70" />
                            {exp.startDate} - {exp.endDate || 'Present'}
                          </span>

                          {/* High-Contrast Themed Status Badge */}
                          <StatusBadge
                            isActive={isCurrent}
                            activeLabel="ACTIVE / 現職"
                            completedLabel="歴任 / COMPLETED"
                            activeBgClass={theme.badgeBg}
                            activeBorderClass={theme.badgeBorder}
                            activeTextClass={theme.badgeText}
                            activeDotBgClass={theme.nodeActiveBg}
                          />
                        </div>

                        {/* Title & Company */}
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-light-ink dark:text-dark-ink group-hover:text-terracotta transition-colors leading-snug">
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium mt-1">
                          <span className={`font-serif ${isCardActive ? theme.textClass : 'text-light-ink-muted dark:text-dark-ink-muted'}`}>{exp.company}</span>
                          {exp.location && (
                            <>
                              <span className="text-light-ink-subtle">·</span>
                              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-light-ink-muted dark:text-dark-ink-muted font-sans">
                                <MapPin className="w-3 h-3 text-light-ink-subtle" />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>

                        {/* High-Level Narrative Overview (Always visible) */}
                        {overviewText && (
                          <p className="font-sans text-xs sm:text-sm text-light-ink dark:text-dark-ink leading-relaxed font-normal mt-3 max-w-xl">
                            {overviewText}
                          </p>
                        )}

                        {/* Inspect / Collapse Button */}
                        {bullets.length > 0 && (
                          <div className="pt-3.5">
                            <button
                              type="button"
                              onClick={(e) => toggleExpand(cardKey, e)}
                              className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 border cursor-pointer ${
                                isExpanded
                                  ? 'bg-light-surface dark:bg-[#25272D] text-light-ink dark:text-dark-ink border-light-border-strong dark:border-[#4E525D] font-medium'
                                  : 'bg-light-surface/60 dark:bg-[#25272D]/60 text-light-ink-muted dark:text-dark-ink-muted border-light-border dark:border-[#3A3D44] hover:text-light-ink dark:hover:text-dark-ink hover:border-light-border-strong dark:hover:border-[#4E525D]'
                              }`}
                            >
                              <Layers className="w-3.5 h-3.5 text-light-ink-subtle dark:text-dark-ink-subtle" />
                              <span>
                                {isExpanded
                                  ? 'Collapse Details ↑'
                                  : `Inspect Impact & Stack (${bullets.length} Points) ↓`}
                              </span>
                            </button>
                          </div>
                        )}

                        {/* Expanded Progressive Disclosure Drawer */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-light-border/60 dark:border-[#3A3D44]/60 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            {/* Engineering Impact Bullets */}
                            {bullets.length > 0 && (
                              <div>
                                <div className="text-xs sm:text-[13px] font-mono tracking-wide text-light-ink dark:text-dark-ink font-semibold mb-2.5 flex items-center gap-1.5">
                                  <ListChecks className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted" />
                                  Engineering Contributions &amp; Quantified Impact
                                </div>
                                <ul className="space-y-2.5">
                                  {bullets.map((pt, pIdx) => (
                                    <li
                                      key={pIdx}
                                      className="p-3 sm:p-3.5 rounded-lg border border-light-border/70 dark:border-[#3A3D44]/70 bg-light-surface/50 dark:bg-[#25272D]/50 hover:border-light-border-strong dark:hover:border-[#4E525D] transition-all duration-200 flex items-start gap-3 shadow-2xs group/bullet"
                                    >
                                      <span className="font-mono text-[11px] sm:text-xs font-medium text-light-ink-muted dark:text-dark-ink-muted bg-light-surface-raised dark:bg-[#292B31] border border-light-border/80 dark:border-[#3A3D44] rounded px-1.5 py-0.5 shrink-0 select-none mt-0.5">
                                        #{String(pIdx + 1).padStart(2, '0')}
                                      </span>
                                      <span className="font-sans text-xs sm:text-sm text-light-ink dark:text-dark-ink leading-relaxed font-normal">
                                        {pt}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Tech Stack & Substrates */}
                            {exp.tags && exp.tags.length > 0 && (
                              <div className="pt-1">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-light-ink-muted dark:text-dark-ink-muted font-semibold mb-2">
                                  Substrates &amp; Core Tech Stack
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {exp.tags.map((tag) => (
                                    <TechTag key={tag} tag={tag} size="sm" />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
