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

  # Light theme: canonical Akari palette (Reference Image #1 & #2)
  light-canvas: "#F2E9DA"
  light-surface: "#F7F0E3"
  light-surface-card: "#F7F0E3"
  light-surface-raised: "#FBF6EC"
  light-surface-muted: "#EDE1CE"
  light-ink: "#2B2E3A"
  light-ink-muted: "#686559"
  light-ink-subtle: "#8B8375"
  light-border: "#D9C9AE"
  light-border-strong: "#BDAA89"
  light-button-dark: "#26262E"
  light-on-dark: "#F7F0E3"
  light-focus: "#B5482E"

  # Dark theme: Warm Charcoal Night Mode (Reference Image #1 Dark Mode)
  dark-canvas: "#1E1F24"
  dark-surface: "#2A2C32"
  dark-surface-card: "#2A2C32"
  dark-surface-raised: "#32353C"
  dark-surface-muted: "#18191D"
  dark-ink: "#E8E6DF"
  dark-ink-muted: "#A7A398"
  dark-ink-subtle: "#76736A"
  dark-border: "#3A3D44"
  dark-border-subtle: "rgba(58, 61, 68, 0.75)"
  dark-button-light: "#E8E6DF"
  dark-on-light: "#1E1F24"
  dark-focus: "#B5482E"

typography:
  display-xl:
    fontFamily: "Canela, Tiempos, Noto Serif, Georgia, serif"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-lg:
    fontFamily: "Canela, Tiempos, Noto Serif, Georgia, serif"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Canela, Tiempos, Noto Serif, Georgia, serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  headline-md:
    fontFamily: "Canela, Tiempos, Noto Serif, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  headline-sm:
    fontFamily: "Montserrat, Inter, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.02em"
  body-lg:
    fontFamily: "Montserrat, Inter, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  body-md:
    fontFamily: "Montserrat, Inter, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Montserrat, Inter, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.01em"
  code-md:
    fontFamily: "JetBrains Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  code-sm:
    fontFamily: "JetBrains Mono, SFMono-Regular, Consolas, monospace"
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
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
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

1. **Headings & Display** (`font-serif`):
   - Primary: **Canela**, **Tiempos**, **Noto Serif**, **Georgia**, `serif`.
   - Character: Light, elegant, editorial, generous letterpress breathing room, relaxed line-height.
   - Purpose: Main hero headline, major section titles (`01 //`, `02 //`), company names in career timeline, and Kanji watermarks.
   - **Absolute Ban**: No sci-fi chamfered faces (e.g. `Oxanium`, `Chakra Petch`).

2. **UI & Operational Copy** (`font-sans`):
   - Primary: **Montserrat**, **Inter**, `system-ui`, `sans-serif`.
   - Character: Clean, legible, uppercase with tight tracking for badges/labels, balanced for descriptions and paragraphs.

3. **Technical Metadata & Code** (`font-mono`):
   - Primary: **JetBrains Mono**, `monospace`.
   - Character: Small, tracked, quiet metadata (e.g. `#01`, date ranges, coordinates, and code snippets). Never glowing or neon.

4. **Punctuation Standard**:
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

## 5. Design Variants Exploration

### Variant 1: "Architectural Tokonoma & Pinned Horizon"
- **Structure**: Center-balanced editorial layout.
- **Hero**: Pinned atmospheric landscape backdrop. Left content column with large editorial serif headline, narrative overview, and clean monochrome domain pills. Right column houses the authentic Hanko seal box with vertical Japanese calligraphy (*tategaki*) and Philadelphia coordinates.
- **The Division Layer**: A heavy, elevated canvas block slides directly over the hero on scroll, introduced by a fine double hairline rule and center seal motif.
- **Tone**: Meditative, calm, museum-grade, balanced.

### Variant 2: "Akari Studio Column & Asymmetrical Mask"
- **Structure**: Direct adaptation of the Akari reference site (`media_1790438816001.png`).
- **Sidebar**: Persistent left editorial spine containing the Hanko seal mark, vertical calligraphy, primary navigation links, and Ensō ring framed by a fine vertical hairline.
- **Hero & Canvas**: Right workspace with pinned photography/sumi-e art and large headline.
- **The Division Layer**: Solid panel block sliding straight over the hero image with a sharp horizontal partition and high-contrast section cards.
- **Tone**: Architectural, editorial, lateral rhythm, gallery showcase.

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
