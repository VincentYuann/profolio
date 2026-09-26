import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { BambooArt } from '../../common/BambooArt';
import { EnsoOrbital } from '../../common/EnsoOrbital';
import { HankoStamp } from '../../common/HankoStamp';
import { TechTag } from '../../common/TechTag';
import { useSiteData, parsePillarTags } from '../../../context/SiteDataContext';

interface HeroTokonomaProps {
  onNavigate?: (view: 'home' | 'projects' | 'resume', sectionId?: string) => void;
}

export const HeroTokonoma: React.FC<HeroTokonomaProps> = ({ onNavigate }) => {
  const { profile } = useSiteData();

  const headline = profile?.headline || 'Crafting Software Systems with Architectural Clarity & Wabi-Sabi Harmony';
  const tagline = profile?.tagline || 'Full-Stack Software Engineer with concentrations in Systems Architecture and AI based in Philadelphia, PA.';
  const displayName = profile?.name || 'Vincent Yuan';
  const displayRole = profile?.role || 'Software & AI Engineer';
  const capabilityPillars =
    Array.isArray(profile?.capability_pillars) && profile.capability_pillars.length > 0
      ? profile.capability_pillars
      : [];
  const hanko = profile?.hanko_card;
  const hankoLines = (hanko?.lines && Array.isArray(hanko.lines)) ? hanko.lines : [];

  return (
    <section id="home" className="relative w-full min-h-[85vh] lg:min-h-[88vh] pt-24 pb-20 lg:pt-32 lg:pb-24 flex items-center">
      {/* 
        FIXED / PINNED VIEWPORT BACKDROP (The Division Effect Foundation)
        Stays completely pinned and fixed in place while content scrolls past.
      */}
      <div className="fixed inset-0 top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden select-none">
        {/* Layer 1: Panoramic Sumi-e Landscape Backdrop */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="./images/hero-sumie-landscape-bamboo-banner.jpg"
            alt="Panoramic sumi-e landscape art"
            className="w-full h-full object-cover object-left sm:object-center opacity-80 dark:opacity-20 mix-blend-multiply dark:mix-blend-luminosity dark:filter dark:brightness-75 dark:contrast-110 transition-opacity duration-700"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              maskImage: 'radial-gradient(ellipse 95% 85% at 50% 45%, black 40%, transparent 92%)',
              WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 45%, black 40%, transparent 92%)',
            }}
          />
        </div>

        {/* Layer 2: Subtle Washi Paper Grain (participates in Day mode only) */}
        <div className="absolute inset-0 bg-transparent washi-pattern opacity-25 dark:opacity-0 pointer-events-none" />

        {/* Layer 3: Warm Ambient Gradients for Flawless Text Legibility */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 lg:w-3/5 bg-gradient-to-r from-light-canvas/80 via-light-canvas/40 to-transparent dark:from-[#1E1F24]/85 dark:via-[#1E1F24]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-light-canvas via-light-canvas/60 to-transparent dark:from-[#1E1F24] dark:via-[#1E1F24]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-light-canvas via-light-canvas/75 to-transparent dark:from-[#1E1F24] dark:via-[#1E1F24]/80 to-transparent pointer-events-none" />

        {/* Layer 4: Dedicated Japanese Pine Tree (Matsu 松) on the left margin */}
        <div className="absolute left-0 sm:left-4 lg:left-8 bottom-0 h-[78%] max-h-[720px] w-auto max-w-sm sm:max-w-md lg:max-w-lg pointer-events-none z-0">
          <img
            src="./images/sumie-pine-tree-left.jpg"
            alt="Sumi-e pine tree"
            className="w-full h-full object-contain object-bottom-left opacity-75 dark:opacity-25 mix-blend-multiply dark:mix-blend-luminosity dark:filter dark:brightness-80 dark:contrast-115 transition-all duration-500"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              maskImage: 'radial-gradient(ellipse 75% 85% at 20% 60%, black 30%, transparent 78%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 20% 60%, black 30%, transparent 78%)',
            }}
          />
        </div>
      </div>

      {/* Foreground Hero Stage */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Editorial Text Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6 pt-2">
            {/* Meta Eyebrow Ribbon */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span className="font-mono text-xs uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-medium">
                ENGINEERING PORTFOLIO · 職人の組手
              </span>
            </div>

            {/* Display Headline in Canela / Tiempos / Noto Serif Editorial Face */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-light-ink dark:text-dark-ink leading-[1.12] sm:leading-[1.1] tracking-tight select-text text-balance">
              {headline}
            </h1>

            {/* Narrative Tagline */}
            <p className="font-sans text-base sm:text-lg text-light-ink-muted dark:text-dark-ink-muted max-w-2xl leading-relaxed font-normal">
              {tagline}
            </p>

            {/* CTA Buttons Pair */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#featured-works"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'featured-works');
                  }
                }}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-light-button-dark dark:bg-dark-button-light text-light-on-dark dark:text-dark-on-light font-sans text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:opacity-90 transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#resume"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('resume');
                  }
                }}
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-light-surface-card dark:bg-dark-surface-card border border-light-border dark:border-dark-border hover:border-light-border-strong dark:hover:border-[#565A63] text-light-ink dark:text-dark-ink font-sans text-xs sm:text-sm font-medium rounded-lg shadow-2xs transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>Curriculum Vitae</span>
                <FileText className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Core Domains: Thin, Understated Monochrome Chips */}
            {capabilityPillars.length > 0 && (
              <div className="pt-3 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-light-border-strong dark:bg-[#4E525D]" />
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle">
                    CORE DOMAINS · 専門領域
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {capabilityPillars.map((pillar) => {
                    const tags = parsePillarTags(pillar);

                    return (
                      <div
                        key={pillar.label}
                        className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1 rounded-md bg-light-surface-card/90 dark:bg-dark-surface-card/90 border border-light-border/80 dark:border-dark-border text-xs"
                      >
                        <span className="font-mono text-[11px] font-semibold text-light-ink dark:text-dark-ink uppercase tracking-wider">
                          {pillar.label}
                        </span>
                        {tags.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1">
                            {tags.map((tag) => (
                              <TechTag
                                key={tag}
                                tag={tag}
                                size="sm"
                                className="border-light-border/50 dark:border-dark-border/50 bg-light-surface dark:bg-dark-surface-raised"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Restrained Hanko Showcase Box (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center pt-4 lg:pt-0 relative">
            {/* Subtle Sumi-e Bamboo Flank */}
            <div className="absolute -left-12 -top-10 hidden lg:block pointer-events-none -z-0 opacity-60">
              <BambooArt className="w-36 h-52" sway={true} opacity={0.6} />
            </div>

            <div className="relative z-10 w-full max-w-sm bg-light-surface-card/95 dark:bg-dark-surface-card/95 backdrop-blur-md border border-light-border dark:border-dark-border p-6 rounded-xl shadow-xs transition-all duration-300 group">
              {/* Celestial Ensō Orbital Circle: appears on hover */}
              <EnsoOrbital placement="top-left" size={120} interactive={true} />

              {/* Box Header */}
              <div className="w-full flex items-center justify-between pb-2 mb-4 border-b border-light-border/60 dark:border-dark-border/60 relative z-10">
                <span className="font-sans font-semibold text-light-ink-subtle dark:text-dark-ink-subtle uppercase text-[11px] tracking-wider">
                  {hanko?.headerLabel || 'SEAL / 認印'}
                </span>
                <span className="font-mono text-light-ink-subtle dark:text-dark-ink-subtle uppercase tracking-widest text-[11px]">
                  {hanko?.locationArchive || 'PHILADELPHIA, PA'}
                </span>
              </div>

              {/* Red Seal Mark: Authentic Hanko Stamp (The sole strong accent) */}
              <div className="relative p-2 flex flex-col items-center justify-center z-10">
                <HankoStamp
                  char={hanko?.stampCharacter || '原'}
                  className="w-16 h-16 sm:w-18 sm:h-18 transition-transform duration-300 group-hover:scale-105"
                />
                {hanko?.statusBadge && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-light-surface dark:bg-dark-surface-raised border border-light-border dark:border-dark-border text-[11px] font-mono font-medium text-terracotta tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span>{hanko.statusBadge}</span>
                  </div>
                )}
              </div>

              {/* Identity & Role */}
              <div className="mt-3 text-center relative z-10">
                <h2 className="font-serif text-xl font-normal text-light-ink dark:text-dark-ink">
                  {displayName}
                </h2>
                <p className="font-sans text-xs text-light-ink-muted dark:text-dark-ink-muted mt-0.5">
                  {displayRole}
                </p>
              </div>

              {/* Vertical Tategaki Japanese Prose: Quiet Editorial Calligraphy */}
              {hankoLines.length > 0 && (
                <div className="w-full mt-4 pt-4 border-t border-light-border/60 dark:border-dark-border/60 flex flex-col items-center justify-center relative z-10">
                  <div className="flex items-center justify-center gap-6 w-full">
                    {hankoLines.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        title={line.tooltip || line.label}
                        className={`writing-vertical-rl font-vertical text-xs tracking-[0.28em] min-h-[130px] leading-relaxed transition-all cursor-default whitespace-nowrap select-none ${
                          lIdx === 1
                            ? 'text-light-ink dark:text-dark-ink font-medium opacity-90'
                            : 'text-light-ink-muted dark:text-dark-ink-muted opacity-70'
                        }`}
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-light-border/40 dark:border-dark-border/40 w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle uppercase px-1">
                    {hankoLines.map((line, lIdx) => (
                      <span key={lIdx}>{line.label}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
