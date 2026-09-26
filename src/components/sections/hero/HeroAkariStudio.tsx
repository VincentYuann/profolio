import React from 'react';
import { ArrowRight, FileText, Code2, Cpu, Sparkles, FolderGit2, Briefcase, Mail } from 'lucide-react';
import { HankoStamp } from '../../common/HankoStamp';
import { useSiteData } from '../../../context/SiteDataContext';

interface HeroAkariStudioProps {
  onNavigate?: (view: 'home' | 'projects' | 'resume', sectionId?: string) => void;
}

export const HeroAkariStudio: React.FC<HeroAkariStudioProps> = ({ onNavigate }) => {
  const { profile } = useSiteData();

  const headline = profile?.headline || 'Systems unfold. Built with craft.';
  const tagline = profile?.tagline || 'Full-Stack Software Engineer with concentrations in Systems Architecture & AI based in Philadelphia, PA.';
  const displayName = profile?.name || 'Vincent Yuan';
  const displayRole = profile?.role || 'Software & AI Engineer';

  return (
    <section id="home" className="relative w-full min-h-[90vh] lg:min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 flex flex-col justify-between">
      {/* 
        FIXED PINNED HERO BACKDROP (The Division Effect)
        Remains pinned in place as the user scrolls.
      */}
      <div className="fixed inset-0 top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden select-none">
        {/* Layer 1: Akari Workshop Craft Atmosphere with Soft Faded Edge Vignette */}
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-85 dark:opacity-20 mix-blend-multiply dark:mix-blend-luminosity dark:filter dark:brightness-70 dark:contrast-115 transition-opacity duration-700">
          <img
            src="./images/akari-commerce.jpg"
            alt="Akari craft workshop atmosphere"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              maskImage: 'radial-gradient(ellipse 90% 85% at 65% 45%, black 30%, transparent 88%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 65% 45%, black 30%, transparent 88%)',
            }}
          />
        </div>

        {/* Layer 2: Subtle Sumi-e Mountains in Background */}
        <div className="absolute left-0 bottom-0 w-full lg:w-1/2 h-2/3 opacity-30 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
          <img
            src="./images/hero-sumie-landscape.png"
            alt="Sumi-e mountain background"
            className="w-full h-full object-contain object-bottom-left"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Layer 3: Atmospheric Wash Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-light-canvas via-light-canvas/75 to-transparent dark:from-[#1F1E1D] dark:via-[#1F1E1D]/85 dark:to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-light-canvas dark:from-[#1F1E1D] to-transparent pointer-events-none" />
      </div>

      {/* Main Studio Frame Layout (Sidebar + Hero Content) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 flex-1 flex flex-col justify-between relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start h-full">
          {/* 
            LEFT PERSISTENT EDITORIAL SPINE (Direct Akari Reference)
            Framed with delicate hairline joinery, brand seal, and vertical typography
          */}
          <aside className="lg:col-span-4 xl:col-span-3 border-b lg:border-b-0 lg:border-r border-light-border dark:border-dark-border pb-6 lg:pb-0 pr-0 lg:pr-8 flex flex-col justify-between gap-8 h-full">
            {/* Brand Header */}
            <div>
              <div className="flex items-center gap-3">
                <HankoStamp char="原" className="w-12 h-12 shrink-0" />
                <div>
                  <h2 className="font-serif text-2xl font-medium tracking-tight text-light-ink dark:text-dark-ink">
                    {displayName}
                  </h2>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-medium">
                    {displayRole}
                  </p>
                </div>
              </div>

              {/* Editorial Japanese Tategaki Marginalia */}
              <div className="hidden lg:block mt-8 pt-6 border-t border-light-border/60 dark:border-dark-border/60">
                <p className="font-sans text-[11px] font-semibold text-light-ink-subtle dark:text-dark-ink-subtle uppercase tracking-widest leading-loose">
                  HANDMADE SYSTEMS INSPIRED BY TRADITION. DESIGNED TO SCALE.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="writing-vertical-rl font-vertical text-xs tracking-[0.25em] text-light-ink-muted dark:text-dark-ink-muted select-none opacity-80">
                    間と余白の美学
                  </div>
                  <div className="writing-vertical-rl font-vertical text-xs tracking-[0.25em] text-light-ink-muted dark:text-dark-ink-muted select-none opacity-80">
                    職人の精緻な組手
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Index Navigation (Akari Shop / Journal / About Style) */}
            <nav className="hidden lg:flex flex-col gap-2.5 pt-6 border-t border-light-border/60 dark:border-dark-border/60">
              <a
                href="#featured-works"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'featured-works');
                  }
                }}
                className="group flex items-center gap-2.5 text-xs uppercase tracking-widest font-mono text-light-ink-muted dark:text-dark-ink-muted hover:text-terracotta transition-colors"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-light-ink-subtle group-hover:text-terracotta transition-colors" />
                <span>Selected Works · 作品</span>
              </a>

              <a
                href="#experience"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'experience');
                  }
                }}
                className="group flex items-center gap-2.5 text-xs uppercase tracking-widest font-mono text-light-ink-muted dark:text-dark-ink-muted hover:text-terracotta transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5 text-light-ink-subtle group-hover:text-terracotta transition-colors" />
                <span>Career Milestones · 職歴</span>
              </a>

              <a
                href="#resume"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('resume');
                  }
                }}
                className="group flex items-center gap-2.5 text-xs uppercase tracking-widest font-mono text-light-ink-muted dark:text-dark-ink-muted hover:text-terracotta transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-light-ink-subtle group-hover:text-terracotta transition-colors" />
                <span>Curriculum Vitae · 経歴</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'contact');
                  }
                }}
                className="group flex items-center gap-2.5 text-xs uppercase tracking-widest font-mono text-light-ink-muted dark:text-dark-ink-muted hover:text-terracotta transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-light-ink-subtle group-hover:text-terracotta transition-colors" />
                <span>Dialogue & Contact · 対話</span>
              </a>
            </nav>

            {/* Status Consultation Badge */}
            <div className="hidden lg:flex items-center gap-3 pt-6 border-t border-light-border/60 dark:border-dark-border/60">
              <div className="relative w-8 h-8 rounded-full bg-light-surface-card dark:bg-[#2D2B29] border border-light-border dark:border-[#3E3B37] flex items-center justify-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500/90 dark:bg-emerald-400/90 animate-pulse" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-light-ink-subtle dark:text-dark-ink-subtle">
                  STATUS
                </p>
                <p className="font-sans text-xs font-medium text-light-ink dark:text-dark-ink">
                  Open to Full-Stack & AI Roles
                </p>
              </div>
            </div>
          </aside>

          {/* 
            MAIN STUDIO CANVAS (Right Column)
            Large serif headline, narrative, CTA buttons, and 3 value proposition pillars
          */}
          <main className="lg:col-span-8 xl:col-span-9 flex flex-col justify-between gap-12 lg:gap-16 pt-2 lg:pt-6">
            <div className="max-w-3xl flex flex-col gap-6">
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-light-ink-subtle/80 dark:bg-[#787368]" />
                <span className="font-mono text-xs uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle">
                  STUDIO PERSPECTIVE · 空間と調和
                </span>
              </div>

              {/* Bold Serif Editorial Display Headline (Canela / Tiempos / Noto Serif) */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal text-light-ink dark:text-dark-ink leading-[1.08] tracking-tight text-balance">
                {headline}
              </h1>

              {/* Subtitle Paragraph */}
              <p className="font-sans text-base sm:text-lg text-light-ink-muted dark:text-dark-ink-muted max-w-2xl leading-relaxed font-normal">
                {tagline}
              </p>

              {/* Button Pair */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#featured-works"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home', 'featured-works');
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-light-button-dark dark:bg-dark-button-light text-light-on-dark dark:text-dark-on-light font-sans text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:opacity-90 transition-all cursor-pointer"
                >
                  <span>Explore Selected Works</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#resume"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('resume');
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-light-surface-card dark:bg-[#2D2B29] border border-light-border dark:border-[#3E3B37] hover:border-light-border-strong dark:hover:border-[#4E525D] text-light-ink dark:text-dark-ink font-sans text-xs sm:text-sm font-medium rounded-lg shadow-2xs transition-all cursor-pointer"
                >
                  <span>Technical CV</span>
                  <FileText className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* 
              3 VALUE PROPOSITION FEATURE CARDS (Matching Akari Reference Bottom Row)
              "FLAT TO PRODUCTION" · "SHOKUNIN JOINERY" · "WARM HUMAN INTERFACES"
            */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-light-border/60 dark:border-dark-border/60">
              {/* Feature 1 */}
              <div className="flex flex-col gap-1.5 p-4 rounded-lg bg-light-surface-card dark:bg-[#2D2B29] craft-card border border-light-border dark:border-[#3E3B37]">
                <div className="flex items-center gap-2 text-light-ink dark:text-dark-ink">
                  <Cpu className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    DISTRIBUTED SCALE
                  </span>
                </div>
                <p className="font-sans text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed">
                  Resilient cloud architectures, PostgreSQL schemas, and low-latency API contracts.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-1.5 p-4 rounded-lg bg-light-surface-card dark:bg-[#2D2B29] craft-card border border-light-border dark:border-[#3E3B37]">
                <div className="flex items-center gap-2 text-light-ink dark:text-dark-ink">
                  <Code2 className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    SHOKUNIN JOINERY
                  </span>
                </div>
                <p className="font-sans text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed">
                  Rigorous TypeScript type-safety, clean modular abstractions, and zero technical bloat.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-1.5 p-4 rounded-lg bg-light-surface-card dark:bg-[#2D2B29] craft-card border border-light-border dark:border-[#3E3B37]">
                <div className="flex items-center gap-2 text-light-ink dark:text-dark-ink">
                  <Sparkles className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    WARM SURFACES
                  </span>
                </div>
                <p className="font-sans text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed">
                  Calm interfaces rooted in Ma (negative space), intuitive clarity, and tactile elegance.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
