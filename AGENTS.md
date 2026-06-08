# AGENTS.md

Portfolio site for Luis Sagnay — built with Astro + Tailwind + GSAP. Managed with Bun.

## Commands

```bash
bun install        # Install deps
bun run dev        # Dev server at localhost:4321
bun run build      # Runs bun install then astro build (do not separate)
bun run preview   # Preview production build
```

## Architecture

- **Entry point:** `src/pages/index.astro` — imports Hero, Projects, About, Contact sections
- **GSAP animations:** All scroll animations driven by `data-animate` attributes (values: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom`, `scale`) + optional `data-delay`. Single unified script in `index.astro`. Hero elements use `data-animate` with directional keywords (if it contains "right" → x: -40, etc.)
- **Theme:** Dark mode via `dark` class on `<html>` — set by inline script in `Layout.astro` from localStorage + prefers-color-scheme

## Component hierarchy

```
src/components/
├── atoms/          # Minimal primitives (Icon, SkillTag, TechIcon, Key3D)
├── molecules/      # Composed primitives (TechStack)
├── organisms/      # Reusable section blocks (ProjectCard, ThemeToggle)
├── layout/         # Navbar, Footer
└── sections/       # Page sections (Hero, Projects, About, Contact)
    └── hero/       # Hero subcomponents co-located
```

## Data conventions

- **Models/types:** `src/data/models/portfolio.model.ts` — shaindigo interfaces
- **Content:** `src/data/constants/*.data.ts` — portfolio content (skills, projects, education, etc.)
- When adding fields: update model first, then all renderers

## Tech stack

- Astro 6 + TypeScript (strict tsconfig via `astro/tsconfigs/strict`)
- Tailwind CSS 4 via `@tailwindcss/vite` plugin
- GSAP 3 + ScrollTrigger for animations
- Lucide icons via `@lucide/astro` + `astro-icon` integration
- DevIcon icons via `@iconify-json/devicon`

## What to avoid

- No test suite; validate manually or with `bun run build`
- Do not introduce new runtime dependencies without clear value
- Do not hardcode design values — use existing Tailwind tokens
- Do not add AI attribution/co-author trailers in commits
