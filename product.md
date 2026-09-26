# Product Specification: Vincent Yuan Portfolio

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

1. **Engineering Leaders, Hiring Managers & Technical Recruiters**: Assessing systems depth, full-stack capability, architectural maturity, and craft.
2. **Peer Engineers, Open-Source Collaborators & AI Practitioners**: Exploring code repositories, architecture decisions, research projects, and systems design.
3. **Portfolio Owner (Vincent Yuan)**: Managing content, editing projects, tracking experience, managing LaTeX resume sources, and deploying updates via the authenticated Admin Studio.

## Product Purpose

The **Vincent Yuan Portfolio** is a high-performance web experience representing Vincent Yuan, a Full-Stack Software Engineer with concentrations in Systems Architecture and AI based in Philadelphia, PA. It demonstrates production-level engineering through real-world systems, interactive case studies, an authenticated admin suite, and an AI companion, presented within an editorial Japanese craft aesthetic (*Wabi-Sabi*, *Ma*, *Shokunin*).

## Positioning

Unlike typical developer portfolios that rely on generic tech templates or noisy cyberpunk/HUD dashboards, this portfolio unites rigorous systems engineering (Supabase RLS, PostgreSQL RPC, Vite code-splitting, LaTeX parsing, Gemini Multimodal AI) with a restrained, museum-grade Japanese editorial aesthetic inspired by Akari washi craft and traditional sumi-e wash paintings.

## Operating Context

- Evaluated across desktop displays, ultra-wide monitors, tablets, and mobile devices by recruiters and tech leads.
- Evaluated in both daylight environments (warm washi paper palette `#F2E9DA`) and evening/night viewing sessions (warm charcoal palette `#1E1F24`).
- Must load instantaneously (zero-flash theme initialization, code-split lazy routes, responsive images).

## Capabilities and Constraints

- **Single Page Application with Deep Hash Routing**: `#home`, `#experience`, `#projects`, `#resume`, `#hobbies`, `#login`, `#edit`.
- **Dual-Theme Equilibrium**: Akari Day Mode (`#F2E9DA` / `#F7F0E3`) and Warm Charcoal Night Mode (`#1E1F24` / `#2A2C32`).
- **Section Transition Layering (The Division Effect)**: Pinned atmospheric hero layer with a heavy, independent content container sliding directly over it.
- **Admin Studio CMS**: Authenticated via GitHub OAuth + PostgreSQL RLS (`is_admin()`), enabling live database editing of profile, experience, projects, resume LaTeX, and philosophy pillars.
- **Interactive Resume & LaTeX System**: Live PDF stream from Supabase S3 bucket and synchronized LaTeX editor.
- **Vincent's AI Companion**: Multimodal streaming conversational agent powered by Google Gemini API.
- **Strict Anti-Cyberpunk Rule**: No neon glows, no sci-fi fonts (`Oxanium`/`Chakra Petch`), no HUD bracket animations, no orange borders around every resting element. Orange (`#B5482E`) is strictly reserved for active/selected states and Hanko seals.

## Brand Commitments

- **Name**: Vincent Yuan (Software & AI Engineer)
- **Primary Aesthetic Reference**: Akari Washi Craft, Sumi-e landscape art, Shokunin joinery.
- **Typography**: Editorial Serif (Canela / Tiempos / Noto Serif) for display and headlines; Operational Sans (Montserrat / Inter) for UI; Monospace (JetBrains Mono) for code and metadata.
- **Hanko Seal**: Cinnabar vermilion seal mark (`原`) representing authenticity and craftsmanship.
- **No Em or En Dashes**: Clean punctuation (colons, commas, hyphens `-`, and middle dots `·`).

## Evidence on Hand

- Authentic experience at Dakdan Worldwide (Software Engineer Intern), Drexel University (B.S. in Computer Science).
- Full-stack projects: AnimY (social streaming engine), FoodFinder (real-time geolocation recommendation), Portfolio Website.
- Master design system sheets: `public/Day and Nigh theme.png`, `public/Day theme and components.png`, and `public/Website Overall Theme.webp`.

## Product Principles

1. **Ma (間: Negative Space as Presence)**: Whitespace is an active design element providing breathing room and clarity.
2. **Shokunin (職人: Artisan Discipline)**: Every joinery detail, border hairline, and data interface reflects intentional craft.
3. **Subtle Restraint over Cyberpunk Noise**: Muted warm-gray borders, quiet background textures, and purposeful accent placement over loud digital UI widgets.
4. **Physical Materiality**: Backgrounds participate in the palette as warm washi paper, cedar wood, woven linen, and quiet charcoal slates.

## Accessibility & Inclusion

- WCAG AA contrast compliance across all text and UI elements in both Day and Night modes.
- Keyboard-accessible navigation (`Tab`, `Esc`, `Enter`), screen-reader status announcements, and focus restoration on modal dismissals.
