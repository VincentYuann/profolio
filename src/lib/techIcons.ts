import React, { useState, useEffect } from 'react';
import {
  // AI & Machine Learning
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiGooglegemini,
  SiAnthropic,
  SiClaude,
  SiScikitlearn,
  SiKeras,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiLangchain,
  SiOllama,
  SiQdrant,

  // Languages & Core Runtimes
  SiRust,
  SiPython,
  SiCplusplus,
  SiC,
  SiGo,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiBun,
  SiDeno,
  SiGnubash,
  SiHtml5,
  SiCss,
  SiWebassembly,

  // Frontend & UI
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiSvelte,
  SiAstro,
  SiVite,
  SiRedux,

  // Backend & APIs
  SiFastapi,
  SiFlask,
  SiDjango,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiApachekafka,
  SiRabbitmq,

  // Databases & Storage
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiMongodb,
  SiSqlite,
  SiPrisma,
  SiClickhouse,
  SiGooglebigquery,

  // Cloud & Big Tech
  SiGoogle,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiCloudflare,
  SiGithub,
  SiGit,
  SiNginx,
  SiTerraform,
  SiMeta,
  SiApple,
  SiN8n,

  // Creative Tech & Graphics
  SiThreedotjs,
  SiWebgl,
  SiOpengl,
  SiBlender,
  SiFigma,
} from '@icons-pack/react-simple-icons';

import { Bot, Cloud, Cpu } from 'lucide-react';

export type TechIconComponent = React.ComponentType<{
  className?: string;
  size?: number | string;
  color?: string;
}>;

export interface TechIconMatch {
  Icon: TechIconComponent | null;
  svgString: string | null;
  isOfficialBrand: boolean;
  canonicalName: string;
}

export interface TechIconHookResult {
  IconComponent: TechIconComponent | null;
  svgString: string | null;
  isOfficialBrand: boolean;
  isLoading: boolean;
  canonicalName: string;
}

/**
 * Curated Pre-bundled Local Registry for instantaneous (0ms) offline rendering
 */
export const LOCAL_TECH_REGISTRY: Record<string, { icon: TechIconComponent; name: string }> = {
  google: { icon: SiGoogle, name: 'Google' },
  gcp: { icon: SiGooglecloud, name: 'Google Cloud' },
  googlecloud: { icon: SiGooglecloud, name: 'Google Cloud' },
  meta: { icon: SiMeta, name: 'Meta' },
  llama: { icon: SiMeta, name: 'LLaMA' },
  llamaindex: { icon: SiLangchain, name: 'LlamaIndex' },
  apple: { icon: SiApple, name: 'Apple' },
  n8n: { icon: SiN8n, name: 'n8n' },

  pytorch: { icon: SiPytorch, name: 'PyTorch' },
  tensorflow: { icon: SiTensorflow, name: 'TensorFlow' },
  huggingface: { icon: SiHuggingface, name: 'Hugging Face' },
  gemini: { icon: SiGooglegemini, name: 'Gemini' },
  anthropic: { icon: SiAnthropic, name: 'Anthropic' },
  claude: { icon: SiClaude, name: 'Claude' },
  scikitlearn: { icon: SiScikitlearn, name: 'scikit-learn' },
  keras: { icon: SiKeras, name: 'Keras' },
  jupyter: { icon: SiJupyter, name: 'Jupyter' },
  pandas: { icon: SiPandas, name: 'Pandas' },
  numpy: { icon: SiNumpy, name: 'NumPy' },
  opencv: { icon: SiOpencv, name: 'OpenCV' },
  langchain: { icon: SiLangchain, name: 'LangChain' },
  ollama: { icon: SiOllama, name: 'Ollama' },
  qdrant: { icon: SiQdrant, name: 'Qdrant' },
  openai: { icon: Bot as unknown as TechIconComponent, name: 'OpenAI' },
  cuda: { icon: Cpu as unknown as TechIconComponent, name: 'CUDA' },

  rust: { icon: SiRust, name: 'Rust' },
  python: { icon: SiPython, name: 'Python' },
  cplusplus: { icon: SiCplusplus, name: 'C++' },
  c: { icon: SiC, name: 'C' },
  go: { icon: SiGo, name: 'Go' },
  typescript: { icon: SiTypescript, name: 'TypeScript' },
  javascript: { icon: SiJavascript, name: 'JavaScript' },
  nodejs: { icon: SiNodedotjs, name: 'Node.js' },
  bun: { icon: SiBun, name: 'Bun' },
  deno: { icon: SiDeno, name: 'Deno' },
  bash: { icon: SiGnubash, name: 'Bash' },
  html5: { icon: SiHtml5, name: 'HTML5' },
  css: { icon: SiCss, name: 'CSS3' },
  wasm: { icon: SiWebassembly, name: 'WebAssembly' },

  react: { icon: SiReact, name: 'React' },
  nextjs: { icon: SiNextdotjs, name: 'Next.js' },
  tailwindcss: { icon: SiTailwindcss, name: 'Tailwind CSS' },
  vue: { icon: SiVuedotjs, name: 'Vue.js' },
  svelte: { icon: SiSvelte, name: 'Svelte' },
  astro: { icon: SiAstro, name: 'Astro' },
  vite: { icon: SiVite, name: 'Vite' },
  redux: { icon: SiRedux, name: 'Redux' },

  fastapi: { icon: SiFastapi, name: 'FastAPI' },
  flask: { icon: SiFlask, name: 'Flask' },
  django: { icon: SiDjango, name: 'Django' },
  express: { icon: SiExpress, name: 'Express' },
  nestjs: { icon: SiNestjs, name: 'NestJS' },
  graphql: { icon: SiGraphql, name: 'GraphQL' },
  kafka: { icon: SiApachekafka, name: 'Apache Kafka' },
  rabbitmq: { icon: SiRabbitmq, name: 'RabbitMQ' },

  postgresql: { icon: SiPostgresql, name: 'PostgreSQL' },
  supabase: { icon: SiSupabase, name: 'Supabase' },
  redis: { icon: SiRedis, name: 'Redis' },
  mongodb: { icon: SiMongodb, name: 'MongoDB' },
  sqlite: { icon: SiSqlite, name: 'SQLite' },
  prisma: { icon: SiPrisma, name: 'Prisma' },
  clickhouse: { icon: SiClickhouse, name: 'ClickHouse' },
  bigquery: { icon: SiGooglebigquery, name: 'BigQuery' },

  docker: { icon: SiDocker, name: 'Docker' },
  kubernetes: { icon: SiKubernetes, name: 'Kubernetes' },
  linux: { icon: SiLinux, name: 'Linux' },
  aws: { icon: Cloud as unknown as TechIconComponent, name: 'AWS' },
  cloudflare: { icon: SiCloudflare, name: 'Cloudflare' },
  github: { icon: SiGithub, name: 'GitHub' },
  git: { icon: SiGit, name: 'Git' },
  nginx: { icon: SiNginx, name: 'NGINX' },
  terraform: { icon: SiTerraform, name: 'Terraform' },

  threejs: { icon: SiThreedotjs, name: 'Three.js' },
  webgl: { icon: SiWebgl, name: 'WebGL' },
  opengl: { icon: SiOpengl, name: 'OpenGL' },
  blender: { icon: SiBlender, name: 'Blender' },
  figma: { icon: SiFigma, name: 'Figma' },
};

/**
 * Common Aliases for natural developer terminology
 */
export const TECH_ALIASES: Record<string, string> = {
  k8s: 'kubernetes',
  postgres: 'postgresql',
  psql: 'postgresql',
  torch: 'pytorch',
  tf: 'tensorflow',
  ts: 'typescript',
  js: 'javascript',
  py: 'python',
  node: 'nodejs',
  cpp: 'cplusplus',
  'c++': 'cplusplus',
  tailwind: 'tailwindcss',
  vuejs: 'vue',
  next: 'nextjs',
  'next.js': 'nextjs',
  'three.js': 'threejs',
  three: 'threejs',
  'amazon web services': 'aws',
  'google cloud': 'gcp',
  'google cloud platform': 'gcp',
  webassembly: 'wasm',
  sh: 'bash',
  zsh: 'bash',
  shell: 'bash',
  css3: 'css',
  html: 'html5',
  llamaindex: 'llamaindex',
};

/**
 * Normalize human technology input to a slug compatible with icon registries
 */
export function normalizeTechSlug(input: string): string {
  if (!input) return '';
  const raw = input.toLowerCase().trim();

  if (TECH_ALIASES[raw]) {
    return TECH_ALIASES[raw];
  }

  const norm = raw
    .replace(/\.js\b/g, 'dotjs')
    .replace(/\+\+/g, 'plusplus')
    .replace(/#/g, 'sharp')
    .replace(/[^a-z0-9]/g, '');

  if (TECH_ALIASES[norm]) {
    return TECH_ALIASES[norm];
  }

  return norm;
}

// Global in-memory cache for dynamic SVG strings (slug -> SVG content or null)
const SVG_CACHE = new Map<string, string | null>();
const PENDING_PROMISES = new Map<string, Promise<string | null>>();
const CACHE_PREFIX = 'tech_svg_v2_';

// Seed SVG cache from localStorage
if (typeof window !== 'undefined') {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(CACHE_PREFIX)) {
        const slug = key.replace(CACHE_PREFIX, '');
        const val = localStorage.getItem(key);
        if (val === 'NULL') {
          SVG_CACHE.set(slug, null);
        } else if (val) {
          SVG_CACHE.set(slug, val);
        }
      }
    }
  } catch {}
}

/**
 * Format SVG string to ensure it inherits currentColor and scales properly
 */
function sanitizeSvg(rawSvg: string): string {
  return rawSvg
    .replace(/<svg\b([^>]*)>/i, (_match, attrs) => {
      let cleanedAttrs = attrs
        .replace(/\bwidth="[^"]*"/i, '')
        .replace(/\bheight="[^"]*"/i, '')
        .trim();
      return `<svg width="100%" height="100%" ${cleanedAttrs}>`;
    })
    .replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"')
    .replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"');
}

/**
 * Dynamically resolves an SVG logo for any technology via jsDelivr Simple Icons & Devicon
 * with zero rate-limiting and global multi-CDN caching.
 * If not found, returns null (clean fallback to pure text, NO emojis).
 */
export async function fetchTechIconSvg(tag: string): Promise<string | null> {
  const slug = normalizeTechSlug(tag);
  if (!slug) return null;

  // 1. In-memory cache hit
  if (SVG_CACHE.has(slug)) {
    return SVG_CACHE.get(slug) ?? null;
  }

  // 2. Pending network request deduplication
  if (PENDING_PROMISES.has(slug)) {
    return PENDING_PROMISES.get(slug)!;
  }

  const promise = (async (): Promise<string | null> => {
    // Uncapped, high-performance CDNs (jsDelivr simple-icons, jsDelivr devicon)
    const endpoints = [
      `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`,
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`,
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-plain.svg`,
      `https://api.iconify.design/simple-icons:${slug}.svg?color=currentColor`,
      `https://api.iconify.design/logos:${slug}.svg`,
    ];

    for (const url of endpoints) {
      try {
        const res = await fetch(url);
        if (res.status === 200) {
          const text = await res.text();
          if (text && text.includes('<svg') && !text.includes('404')) {
            const cleaned = sanitizeSvg(text);
            SVG_CACHE.set(slug, cleaned);
            try {
              localStorage.setItem(`${CACHE_PREFIX}${slug}`, cleaned);
            } catch {}
            return cleaned;
          }
        }
      } catch {
        // network issue, try next endpoint
      }
    }

    // Explicitly not found across all registries
    SVG_CACHE.set(slug, null);
    try {
      localStorage.setItem(`${CACHE_PREFIX}${slug}`, 'NULL');
    } catch {}
    return null;
  })();

  PENDING_PROMISES.set(slug, promise);
  const result = await promise;
  PENDING_PROMISES.delete(slug);
  return result;
}

/**
 * React hook to resolve tech icons with automatic dynamic discovery
 */
export function useTechIcon(tag: string): TechIconHookResult {
  const norm = normalizeTechSlug(tag);
  const localMatch = LOCAL_TECH_REGISTRY[norm];

  const [svgString, setSvgString] = useState<string | null>(() => {
    if (localMatch) return null;
    return SVG_CACHE.get(norm) ?? null;
  });

  const [isLoading, setIsLoading] = useState<boolean>(() => {
    if (localMatch) return false;
    return !SVG_CACHE.has(norm);
  });

  useEffect(() => {
    if (localMatch) {
      setIsLoading(false);
      return;
    }

    if (SVG_CACHE.has(norm)) {
      setSvgString(SVG_CACHE.get(norm) ?? null);
      setIsLoading(false);
      return;
    }

    let active = true;
    setIsLoading(true);

    fetchTechIconSvg(tag).then((svg) => {
      if (active) {
        setSvgString(svg);
        setIsLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [norm, tag, localMatch]);

  if (localMatch) {
    return {
      IconComponent: localMatch.icon,
      svgString: null,
      isOfficialBrand: true,
      isLoading: false,
      canonicalName: localMatch.name,
    };
  }

  const isBrand = Boolean(svgString);

  return {
    IconComponent: null,
    svgString,
    isOfficialBrand: isBrand,
    isLoading,
    canonicalName: tag.trim(),
  };
}

/**
 * Synchronous badge inspector (checks local registry and local SVG cache)
 */
export function getTechBadgeIcon(tag: string): TechIconMatch {
  if (!tag || !tag.trim()) {
    return { Icon: null, svgString: null, isOfficialBrand: false, canonicalName: tag || '' };
  }

  const norm = normalizeTechSlug(tag);
  const localMatch = LOCAL_TECH_REGISTRY[norm];

  if (localMatch) {
    return {
      Icon: localMatch.icon,
      svgString: null,
      isOfficialBrand: true,
      canonicalName: localMatch.name,
    };
  }

  const cachedSvg = SVG_CACHE.get(norm);
  if (cachedSvg) {
    return {
      Icon: null,
      svgString: cachedSvg,
      isOfficialBrand: true,
      canonicalName: tag.trim(),
    };
  }

  // Pure text only (no emojis, no placeholders)
  return {
    Icon: null,
    svgString: null,
    isOfficialBrand: false,
    canonicalName: tag.trim(),
  };
}

/**
 * Queries Iconify for matching icons when searching, filtered strictly to tech/brand libraries
 */
export async function searchTechIcons(query: string): Promise<string[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  try {
    const res = await fetch(`https://api.iconify.design/search?query=${encodeURIComponent(q)}&limit=60`);
    if (!res.ok) return [];
    const data = await res.json();
    const icons = (data.icons as string[]) || [];

    // Strictly whitelist developer / tech-specific icon sets
    const techPrefixes = ['simple-icons:', 'devicon:', 'logos:', 'skill-icons:'];
    const names = new Set<string>();

    icons.forEach((ic) => {
      if (!techPrefixes.some((p) => ic.startsWith(p))) return;

      const parts = ic.split(':');
      if (parts.length === 2) {
        // Strip style suffixes like -line, -fill, -solid, -outline, -original, -plain, -icon
        const rawName = parts[1]
          .replace(/-(original|plain|icon|wordmark|line|fill|solid|outline|dark|light)$/i, '')
          .replace(/[-_]/g, ' ')
          .trim();

        if (rawName && rawName.length <= 20) {
          names.add(rawName.charAt(0).toUpperCase() + rawName.slice(1));
        }
      }
    });

    return Array.from(names);
  } catch {
    return [];
  }
}
