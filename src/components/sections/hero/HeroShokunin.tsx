import React, { useState } from 'react';
import {
  ArrowRight,
  FileText,
  Terminal,
  Check,
  Copy,
  Cpu,
  Sparkles,
  GitBranch,
  Compass,
} from 'lucide-react';
import { HankoStamp } from '../../common/HankoStamp';
import { useSiteData } from '../../../context/SiteDataContext';

interface HeroShokuninProps {
  onNavigate?: (view: 'home' | 'projects' | 'resume', sectionId?: string) => void;
}

export const HeroShokunin: React.FC<HeroShokuninProps> = ({ onNavigate }) => {
  const { profile } = useSiteData();
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  const headline =
    profile?.headline ||
    'Crafting resilient distributed architecture with the quiet soul of shokunin craft.';
  const tagline =
    profile?.tagline ||
    'Software engineering rooted in the Japanese spatial philosophy of Ma (間) and the interlocking joinery of Kigumi (木組). Every schema, pipeline, and API contract is engineered with exact tolerances—calm, resilient, and built to endure under scale without friction or bloat.';
  const displayName = profile?.name || 'Vincent Yuan';
  const displayRole = profile?.role || 'Software & AI Engineer';

  const terminalCmd = 'npx vincent-yuan@latest';

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(terminalCmd);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2200);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] lg:min-h-screen pt-20 lg:pt-24 pb-24 lg:pb-28 flex flex-col justify-between overflow-hidden"
    >
      {/* 
        FIXED PINNED ENGAWA BACKDROP
        Combines subtle Japanese spatial garden imagery with sumi-e mountain atmosphere
      */}
      <div className="fixed inset-0 top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden select-none">
        {/* Layer 1: Komorebi / Pine Landscape Architecture Silhouette */}
        <div className="absolute right-0 top-0 w-full lg:w-7/12 h-full opacity-70 dark:opacity-18 mix-blend-multiply dark:mix-blend-luminosity dark:filter dark:brightness-65 dark:contrast-120 transition-opacity duration-700">
          <img
            src="./images/sumie-pine-tree-left.jpg"
            alt="Japanese pine and architectural garden atmosphere"
            className="w-full h-full object-cover object-center scale-x-[-1]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              maskImage:
                'radial-gradient(ellipse 85% 80% at 75% 42%, black 20%, transparent 82%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 85% 80% at 75% 42%, black 20%, transparent 82%)',
            }}
          />
        </div>

        {/* Layer 2: Subtle Sumi-e Mountains at Base */}
        <div className="absolute left-0 bottom-0 w-full lg:w-1/2 h-1/2 opacity-25 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
          <img
            src="./images/hero-sumie-landscape.png"
            alt="Sumi-e mountain silhouette"
            className="w-full h-full object-contain object-bottom-left"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Layer 3: Atmospheric Wash Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-light-canvas via-light-canvas/80 to-transparent dark:from-[#1F1E1D] dark:via-[#1F1E1D]/90 dark:to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-light-canvas dark:from-[#1F1E1D] to-transparent pointer-events-none" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 flex-1 flex flex-col justify-between relative z-10">
        
        {/* 
          TOP ARCHITECTURAL DATUM BEAM (Engawa Horizon Bar)
          Utilizes Chakra Petch for structural joinery tags and Azeret Mono for precise telemetry
        */}
        <div className="w-full mb-6 sm:mb-8 pb-3 border-b border-light-border/70 dark:border-[#3E3B37] flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Left: Geolocation & Coordinate Axis */}
          <div className="flex items-center gap-2 text-light-ink-subtle dark:text-dark-ink-subtle font-mono text-[11px] sm:text-xs">
            <Compass className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted" />
            <span className="font-chakra uppercase tracking-wider font-medium text-light-ink dark:text-dark-ink">
              KYOTO × PHILLY
            </span>
            <span className="text-light-border-strong dark:text-[#3E3B37]">/</span>
            <span className="tracking-tight text-light-ink-muted dark:text-dark-ink-muted">
              39.9526° N, 75.1652° W
            </span>
          </div>

          {/* Center: Pavilion Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-0.5 rounded-full bg-light-surface/60 dark:bg-[#262523]/80 border border-light-border/80 dark:border-[#3E3B37] font-chakra text-[11px] uppercase tracking-[0.2em] text-light-ink dark:text-dark-ink">
            <span className="text-terracotta font-semibold">参</span>
            <span>SHOKUNIN ENGAWA · 職人の縁側</span>
          </div>

          {/* Right: Runtime Telemetry */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-600/25 dark:border-emerald-400/25 text-emerald-800 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
              <span className="font-chakra uppercase tracking-wider text-[10px] sm:text-[11px]">
                LATENCY 14MS
              </span>
            </div>
            <span className="text-light-ink-subtle dark:text-dark-ink-subtle hidden sm:inline">
              STACK: TS · PY · RUST · SUPABASE
            </span>
          </div>
        </div>

        {/* 
          MAIN ASYMMETRIC GRID:
          Left 8 Cols: Zen Old Mincho Editorial Narrative & Actions
          Right 4 Cols: Shokunin Craft Joinery Matrix & Telemetry
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-auto">
          
          {/* LEFT COLUMN: Editorial Voice & Soul */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Architectural Sub-Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-light-surface-raised dark:bg-[#262523] border border-light-border dark:border-[#3E3B37] font-chakra text-[11px] uppercase tracking-[0.18em] font-semibold text-light-ink dark:text-dark-ink">
                ARCHITECTURAL ATELIER · 建築と組手
              </span>
              <span className="h-px w-12 bg-light-border dark:bg-[#3E3B37] hidden sm:inline-block" />
              <span className="font-mono text-xs text-light-ink-muted dark:text-dark-ink-muted hidden sm:inline">
                VOL. 2026 // EDITION 03
              </span>
            </div>

            {/* Display Headline in Zen Old Mincho */}
            <div className="space-y-3">
              <h1 className="font-zen text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal text-light-ink dark:text-dark-ink leading-[1.08] tracking-tight text-balance">
                {headline}
              </h1>
              
              {/* Literary Japanese Epigraph */}
              <div className="pt-1 flex items-center gap-3 text-light-ink-muted dark:text-dark-ink-muted">
                <span className="font-zen text-base sm:text-lg italic tracking-wide text-light-ink-muted/90 dark:text-dark-ink-muted/90">
                  「無垢なる構造美と、極限まで研ぎ澄まされたアルゴリズム。」
                </span>
              </div>
            </div>

            {/* Narrative Body Copy in Mulish */}
            <p className="font-mulish text-base sm:text-lg text-light-ink-muted dark:text-dark-ink-muted max-w-2xl leading-relaxed font-light">
              {tagline}
            </p>

            {/* Interactive Actions & Developer Console Snippet */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Work CTA */}
              <a
                href="#featured-works"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'featured-works');
                  }
                }}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-light-button-dark dark:bg-dark-button-light text-light-on-dark dark:text-dark-on-light font-mulish text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:opacity-95 transition-all cursor-pointer overflow-hidden"
              >
                <span className="font-chakra text-[11px] text-terracotta dark:text-terracotta font-bold tracking-wider">
                  01 //
                </span>
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary CV CTA */}
              <a
                href="#resume"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('resume');
                  }
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-light-surface-card dark:bg-[#2D2B29] border border-light-border dark:border-[#3E3B37] hover:border-light-border-strong dark:hover:border-[#4E525D] text-light-ink dark:text-dark-ink font-mulish text-xs sm:text-sm font-medium rounded-lg shadow-2xs transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-light-ink-muted dark:text-dark-ink-muted" />
                <span>Technical Blueprint</span>
                <span className="font-chakra text-[10px] text-light-ink-subtle dark:text-dark-ink-subtle uppercase">
                  (CV)
                </span>
              </a>

              {/* Developer Terminal Console Snippet in Azeret Mono */}
              <button
                type="button"
                onClick={handleCopyCmd}
                title="Copy developer terminal command"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-lg bg-light-surface/80 dark:bg-[#1A1918] border border-light-border/90 dark:border-[#3E3B37] hover:border-light-border-strong dark:hover:border-[#4E525D] font-mono text-xs text-light-ink dark:text-dark-ink transition-all cursor-pointer group shadow-2xs"
              >
                <Terminal className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted group-hover:text-terracotta transition-colors" />
                <span className="text-light-ink-subtle dark:text-dark-ink-subtle select-none">$</span>
                <span className="font-medium tracking-tight">{terminalCmd}</span>
                {copiedTerminal ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-light-ink-subtle dark:text-dark-ink-subtle ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>
          </div>

          {/* 
            RIGHT COLUMN: The Shokunin Matrix & Live Telemetry Vault
            A master tactile craft card with bevel highlights and vertical calligraphy
          */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="relative p-6 sm:p-7 rounded-2xl bg-light-surface-card dark:bg-[#262523] border border-light-border dark:border-[#3E3B37] craft-card shadow-sm space-y-6">
              
              {/* Header with Hanko Seal & Traditional Identity */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-light-border/70 dark:border-[#3E3B37]">
                <div className="flex items-center gap-3.5">
                  <HankoStamp char="原" className="w-12 h-12 shrink-0" />
                  <div>
                    <h2 className="font-zen text-2xl font-normal text-light-ink dark:text-dark-ink tracking-tight">
                      {displayName}
                    </h2>
                    <p className="font-chakra text-xs uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-medium">
                      {displayRole}
                    </p>
                  </div>
                </div>

                {/* Tategaki Calligraphy Marginalia */}
                <div className="hidden sm:flex items-center gap-2 pr-1">
                  <div className="writing-vertical-rl font-zen text-[11px] tracking-[0.28em] text-light-ink-muted dark:text-dark-ink-muted select-none opacity-80">
                    無垢なる構造
                  </div>
                  <div className="writing-vertical-rl font-zen text-[11px] tracking-[0.28em] text-light-ink-muted dark:text-dark-ink-muted select-none opacity-80">
                    温故知新
                  </div>
                </div>
              </div>

              {/* Shokunin Substrate Telemetry (Chakra Petch + Azeret Mono) */}
              <div className="space-y-3.5">
                <div className="text-[11px] font-chakra uppercase tracking-widest text-light-ink-subtle dark:text-dark-ink-subtle font-semibold flex items-center justify-between">
                  <span>CORE ARCHITECTURAL SUBSTRATES</span>
                  <span className="font-mono text-[10px] text-light-ink-muted dark:text-dark-ink-muted">REV.03</span>
                </div>

                {/* Substrate 01 */}
                <div className="p-3 rounded-lg bg-light-surface/60 dark:bg-[#2D2B29] border border-light-border/60 dark:border-[#3E3B37] space-y-1">
                  <div className="flex items-center justify-between text-xs font-chakra font-medium text-light-ink dark:text-dark-ink">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted" />
                      <span>DISTRIBUTED BACKEND</span>
                    </span>
                    <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400">P99 &lt; 20ms</span>
                  </div>
                  <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed">
                    PostgreSQL schemas, async task queues, event streaming, low-latency API contracts.
                  </p>
                </div>

                {/* Substrate 02 */}
                <div className="p-3 rounded-lg bg-light-surface/60 dark:bg-[#2D2B29] border border-light-border/60 dark:border-[#3E3B37] space-y-1">
                  <div className="flex items-center justify-between text-xs font-chakra font-medium text-light-ink dark:text-dark-ink">
                    <span className="flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted" />
                      <span>AGENTIC &amp; RAG PIPELINES</span>
                    </span>
                    <span className="font-mono text-[10px] text-light-ink-muted dark:text-dark-ink-muted">QDRANT · LLM</span>
                  </div>
                  <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed">
                    Vector search, context chunking, multi-step LLM tool calling, autonomous agent loop.
                  </p>
                </div>

                {/* Substrate 03 */}
                <div className="p-3 rounded-lg bg-light-surface/60 dark:bg-[#2D2B29] border border-light-border/60 dark:border-[#3E3B37] space-y-1">
                  <div className="flex items-center justify-between text-xs font-chakra font-medium text-light-ink dark:text-dark-ink">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-light-ink-muted dark:text-dark-ink-muted" />
                      <span>WABI-SABI INTERFACE</span>
                    </span>
                    <span className="font-mono text-[10px] text-light-ink-muted dark:text-dark-ink-muted">60FPS TACTILE</span>
                  </div>
                  <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed">
                    Zen Old Mincho typography, washi paper tooth, zero-layout-shift responsive physics.
                  </p>
                </div>
              </div>

              {/* Status Footer Capsule */}
              <div className="pt-3 border-t border-light-border/70 dark:border-[#3E3B37] flex items-center justify-between text-xs">
                <span className="font-chakra uppercase tracking-wider text-[11px] text-light-ink-subtle dark:text-dark-ink-subtle font-medium">
                  AVAILABILITY:
                </span>
                <span className="font-mono text-[11px] font-medium text-emerald-800 dark:text-emerald-400">
                  OPEN TO FULL-STACK &amp; AI ROLES
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 
          BOTTOM VERANDA HORIZON (3 Feature Pillars)
          Harmonizes with classical architectural concepts in Zen Old Mincho & Chakra Petch
        */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 mt-5 sm:mt-6 border-t border-light-border/70 dark:border-[#3E3B37]">
          {/* Pillar 01 */}
          <div className="flex flex-col gap-1.5 p-3.5 rounded-xl bg-light-surface-card dark:bg-[#2D2B29] craft-card border border-light-border dark:border-[#3E3B37]">
            <div className="flex items-center justify-between">
              <span className="font-chakra text-xs uppercase tracking-wider font-semibold text-terracotta dark:text-terracotta">
                01 // 間 · MA
              </span>
              <span className="font-zen text-xs text-light-ink-subtle dark:text-dark-ink-subtle">
                余白の力
              </span>
            </div>
            <h3 className="font-zen text-base font-normal text-light-ink dark:text-dark-ink">
              Negative Space &amp; Focus
            </h3>
            <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed font-light">
              Intentional white space and minimal cognitive friction. We eliminate noise so the architecture and content speak for themselves.
            </p>
          </div>

          {/* Pillar 02 */}
          <div className="flex flex-col gap-1.5 p-3.5 rounded-xl bg-light-surface-card dark:bg-[#2D2B29] craft-card border border-light-border dark:border-[#3E3B37]">
            <div className="flex items-center justify-between">
              <span className="font-chakra text-xs uppercase tracking-wider font-semibold text-light-ink dark:text-dark-ink">
                02 // 木組 · KIGUMI
              </span>
              <span className="font-zen text-xs text-light-ink-subtle dark:text-dark-ink-subtle">
                精緻な接合
              </span>
            </div>
            <h3 className="font-zen text-base font-normal text-light-ink dark:text-dark-ink">
              Interlocking Modularity
            </h3>
            <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed font-light">
              Components engineered to slot together seamlessly like mortise and tenon joints without fragile dependencies or bloated glueware.
            </p>
          </div>

          {/* Pillar 03 */}
          <div className="flex flex-col gap-1.5 p-3.5 rounded-xl bg-light-surface-card dark:bg-[#2D2B29] craft-card border border-light-border dark:border-[#3E3B37]">
            <div className="flex items-center justify-between">
              <span className="font-chakra text-xs uppercase tracking-wider font-semibold text-light-ink dark:text-dark-ink">
                03 // 渋味 · SHIBUSA
              </span>
              <span className="font-zen text-xs text-light-ink-subtle dark:text-dark-ink-subtle">
                深い味わい
              </span>
            </div>
            <h3 className="font-zen text-base font-normal text-light-ink dark:text-dark-ink">
              Enduring Restraint
            </h3>
            <p className="font-mulish text-xs text-light-ink-muted dark:text-dark-ink-muted leading-relaxed font-light">
              Beauty found in simplicity and quiet restraint. Designed to outlast ephemeral trends through robust craft, speed, and timeless typography.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
