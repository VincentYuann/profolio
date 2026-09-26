import React, { useState } from 'react';
import {
  ArrowRight,
  FileText,
  Code2,
  Cpu,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Compass,
  Terminal,
  Check,
  Copy,
} from 'lucide-react';
import { useSiteData } from '../../../context/SiteDataContext';

interface HeroAkariStudioProps {
  onNavigate?: (view: 'home' | 'projects' | 'resume', sectionId?: string) => void;
}

export const HeroAkariStudio: React.FC<HeroAkariStudioProps> = ({ onNavigate }) => {
  const { profile } = useSiteData();
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  const headline =
    profile?.headline || 'Crafting thoughtful digital experiences with algorithmic clarity.';
  const tagline =
    profile?.tagline ||
    'Full-Stack Software Engineer with concentrations in Systems Architecture & AI based in Philadelphia, PA.';
  const displayName = profile?.name || 'Vincent Yuan';
  const displayRole = profile?.role || 'Software & Generative AI Engineer';

  const terminalCmd = 'npx vincent-yuan';

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(terminalCmd);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2200);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] lg:min-h-screen pt-28 lg:pt-36 pb-16 lg:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* 
        FIXED PINNED HERO BACKDROP (The Division Effect)
        Distinct Hero Chamber: Akari workshop lantern glow + pine silhouette + sumi mountains
      */}
      <div className="fixed inset-0 top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden select-none">
        {/* Layer 1: Akari Workshop Craft Atmosphere with Soft Faded Edge Vignette */}
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-80 dark:opacity-18 mix-blend-multiply dark:mix-blend-luminosity dark:filter dark:brightness-65 dark:contrast-115 transition-opacity duration-700">
          <img
            src="./images/akari-commerce.jpg"
            alt="Akari craft workshop atmosphere"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              maskImage:
                'radial-gradient(ellipse 90% 85% at 65% 45%, black 25%, transparent 85%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 90% 85% at 65% 45%, black 25%, transparent 85%)',
            }}
          />
        </div>

        {/* Layer 2: Subtle Pine Tree Atmosphere on Left */}
        <div className="absolute left-0 top-1/4 w-72 lg:w-96 h-96 opacity-30 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
          <img
            src="./decorators/tree.jpg"
            alt="Sumi-e pine tree branch"
            className="w-full h-full object-contain object-left"
            loading="lazy"
            decoding="async"
            style={{
              maskImage:
                'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 80%)',
            }}
          />
        </div>

        {/* Layer 3: Subtle Sumi-e Landscape in Background */}
        <div className="absolute left-0 bottom-0 w-full lg:w-1/2 h-2/3 opacity-30 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
          <img
            src="./background/hero-sumie-landscape-banner.jpg"
            alt="Sumi-e mountain background"
            className="w-full h-full object-contain object-bottom-left"
            loading="lazy"
            decoding="async"
            style={{
              maskImage:
                'radial-gradient(ellipse 85% 80% at 35% 65%, black 25%, transparent 85%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 85% 80% at 35% 65%, black 25%, transparent 85%)',
            }}
          />
        </div>

        {/* Layer 4: Atmospheric Wash Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-light-canvas via-light-canvas/75 to-transparent dark:from-dark-canvas dark:via-dark-canvas/85 dark:to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-light-canvas dark:from-dark-canvas to-transparent pointer-events-none" />
      </div>

      {/* Main Studio Frame Layout (Sidebar + Hero Content) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 flex-1 flex flex-col justify-between relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start h-full">
          
          {/* 
            LEFT PERSISTENT EDITORIAL SPINE (Studio Colophon & Atelier Dossier)
            Addresses navbar duplication by:
            1. Omitting redundant second Hanko stamp (header has the canonical seal)
            2. Omitting redundant internal nav links (header already has them)
            3. Providing real curatorial telemetry, coordinates, external profiles, and CLI snippet
          */}
          <aside className="lg:col-span-4 xl:col-span-3 border-b lg:border-b-0 lg:border-r border-light-border dark:border-dark-border pb-6 lg:pb-0 pr-0 lg:pr-8 flex flex-col justify-between gap-6 h-full">
            
            {/* Atelier Identity Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-chakra uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-semibold">
                <span className="w-2 h-2 rounded-[1px] bg-terracotta inline-block" />
                <span>ATELIER DOSSIER · 工匠の記録</span>
              </div>

              <div>
                <h2 className="font-zen text-2xl lg:text-3xl font-medium tracking-tight text-light-ink dark:text-dark-ink">
                  {displayName}
                </h2>
                <p className="font-chakra text-xs uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-medium mt-1">
                  {displayRole}
                </p>
              </div>

              {/* Japanese Tategaki Marginalia */}
              <div className="pt-4 border-t border-light-border/60 dark:border-dark-border/60">
                <p className="font-sans text-[11px] font-semibold text-light-ink-subtle dark:text-dark-ink-subtle uppercase tracking-widest leading-relaxed">
                  HANDMADE SYSTEMS INSPIRED BY TRADITION. DESIGNED TO SCALE.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <div className="writing-vertical-rl font-zen text-xs tracking-[0.25em] text-light-ink-muted dark:text-dark-ink-muted select-none opacity-80">
                    間と余白の美学
                  </div>
                  <div className="writing-vertical-rl font-zen text-xs tracking-[0.25em] text-light-ink-muted dark:text-dark-ink-muted select-none opacity-80">
                    職人の精緻な組手
                  </div>
                </div>
              </div>
            </div>

            {/* Atelier Telemetry & Geolocation (Replaces redundant nav links) */}
            <div className="space-y-3 pt-5 border-t border-light-border/60 dark:border-dark-border/60 text-xs">
              <div className="flex items-center gap-2 text-light-ink-subtle dark:text-dark-ink-subtle">
                <Compass className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted shrink-0" />
                <span className="font-mono text-[11px] text-light-ink-muted dark:text-dark-ink-muted tracking-tight">
                  PHILLY, PA · 39.9526° N, 75.1652° W
                </span>
              </div>
              <div className="text-[11px] font-mono text-light-ink-subtle dark:text-dark-ink-subtle">
                EDUCATION // DREXEL UNIVERSITY (BS CS)
              </div>
              <div className="text-[11px] font-mono text-light-ink-subtle dark:text-dark-ink-subtle">
                TIMEZONE // EST (UTC-5) · ACTIVE ATELIER
              </div>
            </div>

            {/* External Channels & Developer CLI (Channels not in top navbar) */}
            <div className="space-y-3 pt-5 border-t border-light-border/60 dark:border-dark-border/60">
              <div className="text-2xs font-chakra uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-semibold">
                DIRECT CHANNELS &amp; REPOSITORIES
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/VincentYuann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-terracotta/60 text-light-ink dark:text-dark-ink text-xs font-mono transition-colors shadow-2xs"
                  title="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vincent-yuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-terracotta/60 text-light-ink dark:text-dark-ink text-xs font-mono transition-colors shadow-2xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:vincentyuan1020@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-terracotta/60 text-light-ink dark:text-dark-ink text-xs font-mono transition-colors shadow-2xs"
                  title="Send Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>

              {/* Developer CLI Terminal Snippet */}
              <button
                type="button"
                onClick={handleCopyCmd}
                title="Copy developer CLI command"
                className="w-full flex items-center justify-between px-3 py-2 rounded-[2px] bg-light-surface/80 dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-light-border-strong dark:hover:border-dark-border-strong font-mono text-[11px] text-light-ink dark:text-dark-ink transition-all cursor-pointer group shadow-2xs"
              >
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted group-hover:text-terracotta transition-colors" />
                  <span className="text-light-ink-subtle select-none">$</span>
                  <span className="font-medium tracking-tight">{terminalCmd}</span>
                </div>
                {copiedTerminal ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-light-ink-subtle opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>

            {/* Status Consultation Badge */}
            <div className="flex items-center gap-3 pt-5 border-t border-light-border/60 dark:border-dark-border/60">
              <div className="relative w-6 h-6 rounded-[2px] bg-light-surface-card dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500/90 dark:bg-emerald-400/90 animate-pulse" />
              </div>
              <div>
                <p className="font-chakra text-2xs uppercase tracking-wider text-light-ink-subtle dark:text-dark-ink-subtle">
                  CURRENT AVAILABILITY
                </p>
                <p className="font-sans text-xs font-medium text-emerald-800 dark:text-emerald-400">
                  Open to Full-Stack &amp; AI Roles
                </p>
              </div>
            </div>
          </aside>

          {/* 
            RIGHT MAIN WORKSPACE (Akari Canvas)
            Display headline in Zen Old Mincho, body copy in Mulish, and the 3 Core Tech Stacks
          */}
          <main className="lg:col-span-8 xl:col-span-9 flex flex-col justify-between gap-8 h-full">
            <div className="space-y-6 max-w-4xl">
              {/* Category Eyebrow with quiet neutral dot */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-light-ink-subtle/80 dark:bg-[#787368]" />
                <span className="font-chakra text-xs uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-semibold">
                  STUDIO PERSPECTIVE · 空間と調和
                </span>
              </div>

              {/* Bold Serif Editorial Display Headline in Zen Old Mincho */}
              <h1 className="font-zen text-4xl sm:text-5xl md:text-6xl lg:text-display-lg font-normal text-light-ink dark:text-dark-ink leading-[1.08] tracking-tight text-balance">
                {headline}
              </h1>

              {/* Subtitle Paragraph in Mulish */}
              <p className="font-mulish text-base sm:text-lg text-light-ink-muted dark:text-dark-ink-muted max-w-2xl leading-relaxed font-light">
                {tagline}
              </p>

              {/* Action Buttons with 2px corners */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#featured-works"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home', 'featured-works');
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-light-button-dark dark:bg-dark-button-light text-light-on-dark dark:text-dark-on-light font-mulish text-xs sm:text-sm font-semibold rounded-[2px] shadow-2xs hover:opacity-95 transition-all cursor-pointer"
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
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-light-surface-card dark:bg-dark-surface-card border border-light-border dark:border-dark-border hover:border-light-border-strong dark:hover:border-dark-border-strong text-light-ink dark:text-dark-ink font-mulish text-xs sm:text-sm font-medium rounded-[2px] shadow-2xs transition-all cursor-pointer"
                >
                  <span>Technical CV</span>
                  <FileText className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* 
              3 TECH STACK CORE PILLARS (Replaces generic distributed scale / shokunin journey)
              Presents concrete engineering capabilities:
              1. Systems & Backend Runtimes
              2. Frontend & Interaction Craft
              3. Agentic AI & Data Pipelines
            */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-light-border/60 dark:border-dark-border/60">
              
              {/* Stack 1: Systems & Backend */}
              <div className="flex flex-col gap-2 p-4.5 rounded-[2px] bg-light-surface-card dark:bg-dark-surface-card craft-card border border-light-border dark:border-dark-border">
                <div className="flex items-center justify-between text-light-ink dark:text-dark-ink">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted" />
                    <span className="font-chakra text-xs uppercase tracking-wider font-semibold">
                      SYSTEMS &amp; CLOUD
                    </span>
                  </div>
                  <span className="font-mono text-2xs text-light-ink-subtle">BACKEND</span>
                </div>
                <div className="text-[11px] font-mono font-medium text-emerald-800 dark:text-emerald-400">
                  Python · FastAPI · PostgreSQL · Node.js · Docker
                </div>
                <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed font-light">
                  High-throughput async APIs, distributed task workers, and relational schemas built for high availability and low latency.
                </p>
              </div>

              {/* Stack 2: Frontend & Interaction */}
              <div className="flex flex-col gap-2 p-4.5 rounded-[2px] bg-light-surface-card dark:bg-dark-surface-card craft-card border border-light-border dark:border-dark-border">
                <div className="flex items-center justify-between text-light-ink dark:text-dark-ink">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted" />
                    <span className="font-chakra text-xs uppercase tracking-wider font-semibold">
                      FRONTEND &amp; UI
                    </span>
                  </div>
                  <span className="font-mono text-2xs text-light-ink-subtle">CRAFT</span>
                </div>
                <div className="text-[11px] font-mono font-medium text-emerald-800 dark:text-emerald-400">
                  React 19 · TypeScript · Tailwind · Next.js · Vite
                </div>
                <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed font-light">
                  Type-safe component joinery, sub-100ms micro-interactions, responsive fluid physics, and wabi-sabi tactile elegance.
                </p>
              </div>

              {/* Stack 3: Agentic AI & RAG */}
              <div className="flex flex-col gap-2 p-4.5 rounded-[2px] bg-light-surface-card dark:bg-dark-surface-card craft-card border border-light-border dark:border-dark-border">
                <div className="flex items-center justify-between text-light-ink dark:text-dark-ink">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted" />
                    <span className="font-chakra text-xs uppercase tracking-wider font-semibold">
                      AGENTIC AI &amp; RAG
                    </span>
                  </div>
                  <span className="font-mono text-2xs text-light-ink-subtle">INTELLIGENCE</span>
                </div>
                <div className="text-[11px] font-mono font-medium text-emerald-800 dark:text-emerald-400">
                  Qdrant · LlamaIndex · Gemini API · LangChain · RAG
                </div>
                <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed font-light">
                  Autonomous agent tool-calling, semantic vector indexing, hybrid retrieval chunking, and grounded prompt engineering.
                </p>
              </div>

            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
