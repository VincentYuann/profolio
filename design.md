---
version: 2.0.0
name: Vincent Yuan: Akari Craft & Editorial Design System
description: >-
  A restrained, museum-grade portfolio design system combining a warm Akari-inspired
  editorial day mode with a quiet charcoal night mode. The visual language is
  rooted in Japanese craft, tactile materiality, and editorial typography, embodying Ma (negative space),
  Shokunin (artisan precision), and Wabi-Sabi (organic harmony), completely free from cyberpunk or digital UI clichés.
colors:
  # Shared brand / identity
  identity-accent: "#B5482E"
  identity-accent-hover: "#9E3D27"
  identity-accent-soft: "#F0D7C7"
  terracotta: "#B5482E"
  ochre: "#D49B6A"
  bamboo: "#526D57"

  # Light theme: Washi & Akari Paper (Canonical Reference Spec)
  light-canvas: "#F2E9DA"
  light-surface: "#F7F0E3"
  light-surface-card: "#F7F0E3"
  light-surface-raised: "#FBF6EC"
  light-surface-muted: "#EDE1CE"
  light-ink: "#282E3A"
  light-ink-muted: "#686559"
  light-ink-subtle: "#8B8375"
  light-border: "#D9C9AE"
  light-border-strong: "#BDAA89"
  light-button-dark: "#26262E"
  light-on-dark: "#F7F0E3"
  light-focus: "#B5482E"

  # Dark theme: Sumi & Charred Cedar (Canonical 4-Tier Reference Spec)
  dark-canvas: "#1E1F24"
  dark-panel: "#2A2C32"
  dark-surface: "#2A2C32"
  dark-card: "#2A2C32"
  dark-surface-card: "#2A2C32"
  dark-surface-raised: "#353842"
  dark-surface-muted: "#18191D"
  dark-ink: "#E8E6DF"
  dark-ink-muted: "#A7A398"
  dark-ink-subtle: "#76736A"
  dark-border: "#3A3D44"
  dark-border-strong: "#4E525D"
  dark-border-subtle: "rgba(182, 175, 162, 0.18)"
  dark-button-light: "#E8E6DF"
  dark-on-light: "#1E1F24"
  dark-focus: "#B5482E"

typography:
  display-xl:
    fontFamily: "Zen Old Mincho, Noto Serif JP, Georgia, serif"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-lg:
    fontFamily: "Zen Old Mincho, Noto Serif JP, Georgia, serif"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Zen Old Mincho, Noto Serif JP, Georgia, serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  headline-md:
    fontFamily: "Zen Old Mincho, Noto Serif JP, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  headline-sm:
    fontFamily: "Chakra Petch, Mulish, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.02em"
  body-lg:
    fontFamily: "Mulish, Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  body-md:
    fontFamily: "Mulish, Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Mulish, Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.01em"
  code-md:
    fontFamily: "Azeret Mono, JetBrains Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  code-sm:
    fontFamily: "Azeret Mono, JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"

spacing:
  page-gutter-mobile: "20px"
  page-gutter-tablet: "32px"
  page-gutter-desktop: "48px"
  content-max: "1440px"
  content-reading-max: "720px"

rounded:
  none: "0px"
  xs: "2px"
  sm: "2px"
  md: "3px"
  lg: "3px"
  xl: "3px"
  2xl: "3px"
  3xl: "3px"
  pill: "3px"
  full: "9999px"
---

# Vincent Yuan: Akari Craft & Editorial Design System (v2.0)

## 1. Design Philosophy & Aesthetic Foundation

The Vincent Yuan portfolio visual system is an homage to traditional Japanese material craft and fine editorial book design. It intentionally rejects the ubiquitous dark-mode cyberpunk tropes (neon glows, HUD targeting brackets, cyan/orange terminal styling, sci-fi fonts) in favor of quiet confidence, intentional negative space (*Ma*), and artisan joinery (*Shokunin*).

### The Dual-Theme Equilibrium
- **Akari Day Mode**: Warm washi-paper canvas (`#F2E9DA`), tactile card panels (`#F7F0E3`), muted warm-tan hairline borders (`#D9C9AE`), and deep sumi charcoal ink (`#2B2E3A`).
- **Warm Charcoal Night Mode**: Deep blue-charcoal ground (`#1E1F24`), warm slate card panels (`#2A2C32`), soft muted warm-gray hairline borders (`#3A3D44` / `rgba(58, 61, 68, 0.75)`), and warm off-white typography (`#E8E6DF`).
- **The Golden Rule of Night Mode**: Night mode is a warm, desaturated evening studio, NOT an obsidian abyss (`#000000` / `#090A0C`). Outlines are quiet and low-opacity, never competing with content.

### Accent Color Restraint: Terracotta Cinnabar (`#B5482E`)
- Terracotta cinnabar (`#B5482E`) is an **accent of intention**, like an authentic red Hanko seal stamp pressed onto handmade paper.
- **Strict Rule**: Terracotta is NEVER a structural outline color for resting elements. It must not outline cards, timeline tracks, or headings by default.
- **Active State Rule**:
  ```css
  /* Terracotta is applied ONLY when an element is actively selected */
  .element:active,
  .element.is-active,
  .element.is-selected {
    border-color: #B5482E;
    color: #B5482E;
  }
  ```

---

## 2. Typography Hierarchy

1. **Headings & Display** (`font-serif` / `font-zen`):
   - Primary: **Zen Old Mincho** (weights 400, 500, 600), **Noto Serif JP**, `serif`.
   - Character: Light, authentic Japanese editorial calligraphy, generous letterpress breathing room, relaxed line-height.
   - Purpose: Main hero headline, major section titles (`01 //`, `02 //`), company names in career timeline, and Kanji watermarks.

2. **UI & Operational Copy** (`font-sans` / `font-mulish`):
   - Primary: **Mulish** (weights 200–900), `sans-serif`.
   - Character: Clean, balanced, neutral modernist grotesque, comfortable reading cadence for descriptions, paragraphs, and list items.

3. **Technical Metadata & Code** (`font-mono` / `font-azeret`):
   - Primary: **Azeret Mono** (weights 400, 500, 600, 700), `monospace`.
   - Character: Geometric monospaced precision, small, tracked, quiet metadata (e.g. coordinates, timestamps, `$ npx vincent-yuan` CLI snippets, tech substrates).

4. **Technical Subheadings & Dossier Accents** (`font-chakra`):
   - Primary: **Chakra Petch** (weights 300, 400, 500, 600), `sans-serif`.
   - Purpose: Section labels, category eyebrows (`[ ATELIER DOSSIER · 工匠の記録 ]`), dossier headers, and tech category titles.

5. **Punctuation Standard**:
   - Strict elimination of em dashes (`—`) and en dashes (`–`).
   - Use standard hyphens (`-`), colons (`:`), commas (`,`), and centered middle dots (`·`).

---

## 3. Structural Hierarchy & Card Anatomy

To eliminate visual claustrophobia and "box-in-a-box" clutter:
- **Clean Depth Hierarchy**: `Page (Canvas) → Section → Card → Content`.
- Cards must have generous internal padding (`p-6` to `p-8` on desktop).
- Resting cards have a single, muted border:
  - Day: `1px solid #D9C9AE`
  - Night: `1px solid rgba(58, 61, 68, 0.75)`
- Resting cards have serene surfaces. Hover transitions are smooth, gentle, and tactile (subtle warm elevation), without intense neon glows or harsh border flips.

### Corner Ornaments Specification
- Corner ornaments are inspired by traditional Japanese joinery (*Kumiko*) and fine book-binding corners.
- **Rules**:
  - Thickness: Hairline (`1px`), low contrast (`border-ochre/30` / `border-[#3A3D44]/60`).
  - Visibility: 50% to 70% lower contrast than previous HUD brackets.
  - Placement: Strictly reserved for major container frames and hero showcase cards. Never repeated inside nested tags or child cards.
  - Interaction: No aggressive translation outward (no `translate(-2px, -2px)`). On hover, a soft, subtle tint transition only.

### Dividers & Rules
- Inspired by Reference Image #2: Fine horizontal rule with an understated center diamond motif (`<DiamondCrest />`) and gentle Seigaiha wave cues. Not heavy dividing bars.

---

## 4. Parallax Scrolling Layering: "The Division Effect"

To establish a clear, dramatic spatial relationship between the introductory narrative and the product/case study showcase:

### Architectural Concept
1. **Pinned Hero Canvas**:
   - The hero background (panoramic sumi-e landscape, pine tree *Matsu*, and ambient bamboo) is pinned or positioned in a fixed viewport layer behind the text.
   - The background participates in the palette:
     - Day: Warm sepia/sumi ink wash with washi texture and soft vignette mask.
     - Night: Dark, desaturated charcoal tone with soft warm glow, blending into `#1E1F24`.
2. **Mask-Sliding Heavy Container Layer**:
   - The subsequent section (e.g., Selected Portfolio / Career Trajectory) is constructed as a solid, heavy independent container layer (`bg-light-canvas dark:bg-[#1E1F24]`).
   - As the user scrolls, this heavy container slides directly over the pinned hero area.
   - The leading edge of this container features a crisp, architectural division boundary: a fine double hairline rule with a central diamond crest and subtle elevation drop-shadow (`shadow-2xl`), creating a seamless mask-slide effect (The Division Effect).

---

## 5. Canonical Architecture & Extracted Patterns

### Canonical Hero: Akari Studio Frame (`HeroAkariStudio.tsx`)
- **Structure**: Selected Variant 2 (Studio Frame), inspired by the Akari reference site (`media_1790438816001.png`).
- **Elimination of Duplication with Top Navbar**:
  - The top fixed `Header` is the sole global site navigator.
  - The Hero left column is dedicated to the **Atelier Dossier** (`[ ATELIER DOSSIER · 工匠の記録 ]`):
    - Geolocation & Coordinates: `PHILLY, PA · 39.9526° N, 75.1652° W`
    - Academic Foundation: `DREXEL UNIVERSITY (BS CS)`
    - Timezone & Activity: `EST (UTC-5) · ACTIVE ATELIER`
    - Direct Channels: GitHub, LinkedIn, Email
    - Copyable Terminal Command: `$ npx vincent-yuan`
    - Availability Badge: `Open to Full-Stack & AI Roles`
- **Concrete Tech Stacks (Replacing generic cards)**:
  1. *Systems & Cloud Backend*: `Python · FastAPI · PostgreSQL · Node.js · Docker`
  2. *Frontend & UI Craft*: `React 19 · TypeScript · Tailwind · Next.js · Vite`
  3. *Agentic AI & RAG Intelligence*: `Qdrant · LlamaIndex · Gemini API · LangChain · RAG`

### Curated Section Atmosphere & Decoration Blends
Each section carries a unique Japanese craft backdrop with radial vignette masking:
1. **Hero**: Akari craftsmanship (`akari-commerce.jpg`) + Pine tree (*Matsu*) motif (`sumie-pine-tree-left.jpg`) + sumi mountain mist.
2. **Experience**: Tall sumi-e bamboo grove (`sumie-tall-vertical-bamboo.jpg`) + **Enso Orbital** hover animation (`media_1790446060879.png`).
3. **Projects / Selected Works**: Great ocean waves backdrop (`sumie-ocean-waves-backdrop.jpg`) + left wave accent (`sumie-wave-left.jpg`), symbolizing dynamic ventures.
4. **Philosophy / Bento**: Panoramic sumi-e bamboo landscape (`hero-sumie-landscape-bamboo-banner.jpg`) + rising vertical bamboo flanks.
5. **Hobbies / Daily Pursuits**: Komorebi light filtering through forest canopy (`komorebi-spatial.jpg`), symbolizing leisure and life beyond code.
6. **Contact / Dialogue**: Misty mountain pagoda silhouette (`contact-sumie-mountain.png`), representing the summit and destination of correspondence.

### Extracted Component: Enso Orbital (`EnsoOrbital.tsx`)
- Animated calligraphic Enso circle formulated on milestone hover.
- **Layer 0**: Sumi-e bamboo sprig with terracotta cinnabar accent leaf (`#B5482E`), bamboo green leaf (`#526D57`), and sumi gray leaves (`#8C857B`).
- **Layer 1**: Golden celestial arc with slow orbital rotation (`animate-orbital-spin`).
- **Layer 2**: Dashed vermilion orbital ring (`animate-dash-flow`).
- **Layer 3**: Pulsing ruby bead (`animate-ruby-pulse`).
- **Layer 4**: Full calligraphic sumi-e Enso ring with breathing opacity (`animate-enso-breathe`).

---

## 6. Implementation Checklist & Anti-Patterns

### Anti-Patterns (Banned)
- ❌ **No sci-fi fonts**: `Oxanium`, `Chakra Petch`, and futuristic HUD fonts are strictly prohibited.
- ❌ **No cyberpunk neon glow**: Drop shadows must be natural soft contact shadows (`rgba(0, 0, 0, 0.08)` or `rgba(43, 46, 58, 0.06)`), never neon orange or cyan glows.
- ❌ **No structural orange borders**: Terracotta (`#B5482E`) must not be used on resting card borders, headings, or timeline lines.
- ❌ **No nested border stacking**: Avoid `border` inside `border` inside `border`.
- ❌ **No pure black night theme**: Avoid `#000000` / `#090A0C`; strictly use warm charcoal `#1E1F24` and `#2A2C32`.
- ❌ **No harsh white outlines**: In night mode, borders are `#3A3D44` (`rgba(58, 61, 68, 0.75)`).

### Approved Patterns (Enforced)
- ✅ **Editorial Serif Headings**: Canela / Tiempos / Noto Serif with generous breathing room.
- ✅ **Single Accent Focus**: Terracotta cinnabar (`#B5482E`) reserved exclusively for active states, selected cards, and the Hanko seal.
- ✅ **Desaturated Palette Textures**: Sumi-e pine trees, bamboo, and washi grain that participate in the warm charcoal or washi canvas.
- ✅ **The Division Effect**: Smooth parallax scrolling with heavy independent container sliding over the pinned hero.
- ✅ **Refined Corner Ornaments**: Subtle, print-inspired hairlines on major containers with 50-70% reduced contrast.
