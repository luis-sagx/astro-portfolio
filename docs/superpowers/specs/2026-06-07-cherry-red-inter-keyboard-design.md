# Portfolio Redesign — Cherry Red + Inter + Keyboard v2

**Date:** 2026-06-07
**Status:** approved
**Scope:** Visual redesign — color palette, typography, tech keyboard display

---

## 1. Color Migration: Teal/Emerald → Cherry Red

### 1.1 Primary Palette

| Role | Light Mode | Dark Mode |
|------|-----------|-----------|
| Primary accent | `red-600` (#E11D48) | `red-400` (#F87171) |
| Primary darker | `red-700` (#BE123C) | `red-500` (#EF4444) |
| Primary lighter | `red-400` (#F87171) | `red-300` (#FCA5A5) |
| Primary subtle | `red-100` (#FEE2E2) | `red-950/30` |
| Primary bg tint | `red-50/40` | `red-950/20` |

### 1.2 Gradient Patterns

Replace ALL `emerald-X`→`teal-X` gradients with `red-X`→`rose-X`:

```
bg-linear-to-r from-red-600 to-rose-600        (light mode)
dark:from-red-400 dark:to-rose-400              (dark mode)
```

### 1.3 Files to Change

| File | Change |
|------|--------|
| `src/styles/global.css` | Scroll progress bar gradient, glow text shadow, typing cursor |
| `src/layouts/Layout.astro` | `<meta name="theme-color">` |
| `src/layouts/BaseLayout.astro` | Same theme-color meta |
| `src/components/layout/Navbar.astro` | `bg-emerald-600` → `bg-red-600` |
| `src/components/layout/Footer.astro` | All emerald/teal → red/rose |
| `src/components/sections/Hero.astro` | Section bg, interest badges, gradients |
| `src/components/sections/hero/HeroBackground.astro` | Dot grid overlay, floating orbs |
| `src/components/sections/hero/HeroProfileImage.astro` | Glow ring |
| `src/components/sections/hero/HeroActions.astro` | CTA buttons, magnetic effect, shimmer |
| `src/components/sections/Projects.astro` | Section bg, decorative orbs, heading gradient |
| `src/components/organisms/ProjectCard.astro` | Accent colors, hover borders, tech container, checkmarks |
| `src/components/sections/About.astro` | Section bg, subsection icons, floating orbs, keyboard container |
| `src/components/atoms/Key3D.astro` | Key appearance, hover behavior (see §3) |
| `src/components/sections/Contact.astro` | Contact card gradient, icon boxes |
| `src/components/organisms/ThemeToggle.astro` | Border color |
| `src/components/atoms/SkillTag.astro` | Background, border colors |

### 1.4 Specific Replacements

| Old | New |
|-----|-----|
| `emerald-50`, `emerald-100` | `red-50`, `red-100` |
| `emerald-200`, `emerald-300` | `red-200`, `red-300` |
| `emerald-400`, `emerald-500` | `red-400`, `red-500` |
| `emerald-600`, `emerald-700` | `red-600`, `red-700` |
| `emerald-800`, `emerald-900` | `red-800`, `red-900` |
| `emerald-950` | `red-950` |
| `teal-50`…`teal-950` | `rose-50`…`rose-950` |
| `text-teal-*` | `text-rose-*` |
| `border-teal-*` | `border-rose-*` |
| `hover:text-emerald-*` | `hover:text-red-*` |
| `hover:bg-emerald-*` | `hover:bg-red-*` |
| `hover:border-emerald-*` | `hover:border-red-*` |
| `shadow-emerald-*` | `shadow-red-*` |
| `accent-emerald-*` | `accent-red-*` |

### 1.5 Hardcoded Hex Values

| Old Hex | File | New Hex | Tailwind |
|---------|------|---------|----------|
| `#059669` | `global.css`, `Layout.astro`, `BaseLayout.astro`, `HeroBackground.astro` | `#E11D48` | `red-600` |
| `#0d9488` | `global.css` | `#BE123C` | `red-700` |
| `#10b981` | `global.css` | `#F87171` | `red-400` |

### 1.6 Acceptance Criteria

- [ ] No tailwind class with `emerald` or `teal` remains in any `.astro` file
- [ ] No hardcoded hex `#059669`, `#0d9488`, `#10b981` remains
- [ ] All sections render correctly in light mode with red palette
- [ ] All sections render correctly in dark mode with red palette
- [ ] `bun run build` succeeds without errors
- [ ] Scroll progress bar shows red gradient
- [ ] Glow text uses red shadow

---

## 2. Typography: Inter + Instrument Serif Italic

### 2.1 Fonts

| Font | Weights | Role | Source |
|------|---------|------|--------|
| **Inter** | 400 (Regular), 600 (SemiBold), 800 (ExtraBold) | Headings + Body | Google Fonts → self-hosted `.woff2` |
| **Instrument Serif** | 400 Italic only | Accent text, section labels | Google Fonts → self-hosted `.woff2` |
| **JetBrains Mono** | 400, 500 (existing, now self-hosted) | Badges, code snippets | Google Fonts → self-hosted `.woff2` |

### 2.2 Files to Change

| File | Change |
|------|--------|
| `tailwind.config.js` | Replace `fontFamily` config |
| `src/styles/global.css` | Replace `@font-face` declarations |
| `public/fonts/` | Remove Plus Jakarta Sans + Outfit `.woff2` files, add Inter + Instrument Serif `.woff2` files |
| All `.astro` files using `font-display` | No change needed — `font-display` maps to new Inter |

### 2.3 Tailwind Config

```js
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  display: ['Inter', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
  serif: ['Instrument Serif', 'serif'],
}
```

### 2.4 Typography Rules

| Element | Class/Font | Weight | Style |
|---------|-----------|--------|-------|
| Section headings (h2) | `font-display` (Inter) | 800 | normal |
| Hero name (h1) | `font-display` (Inter) | 800 | normal |
| Hero profession | `font-display` (Inter) | 600 | normal |
| Subsection headings | `font-display` (Inter) | 600/700 | normal |
| Body text | `font-sans` (Inter) | 400 | normal |
| Accent labels | `font-serif` (Instrument Serif) | 400 | italic |
| Code/badges | `font-mono` (JetBrains Mono) | 500 | normal |

### 2.5 Where Instrument Serif Italic Is Used

- Hero profession subtitle: "full-stack developer" in Instrument Serif Italic, cherry colored (mandatory — user-approved design element)
- Section label pills (e.g., "Portfolio", "About Me", "Contact") — evaluate visually; try Instrument Serif Italic, but fall back to Inter `tracking-wider uppercase` if italic feels wrong at small sizes
- Project card "Project" badge — same evaluation as section labels
- Any other accent/category labels — apply same italic accent pattern where it reads well

### 2.6 Acceptance Criteria

- [ ] Plus Jakarta Sans `.woff2` files removed from `public/fonts/`
- [ ] Outfit `.woff2` files removed from `public/fonts/`
- [ ] Inter (400, 600, 800) `.woff2` files added
- [ ] Instrument Serif Italic `.woff2` file added
- [ ] JetBrains Mono (400, 500) `.woff2` files present (self-hosted)
- [ ] `@font-face` declarations updated in `global.css`
- [ ] All text renders in Inter/Instrument Serif/JetBrains Mono
- [ ] `bun run build` succeeds
- [ ] No visual regressions — all sections readable

---

## 3. Tech Keyboard — Improved

### 3.1 Container

- Outer: `bg-gray-900 dark:bg-gray-950` with `border border-red-500/20`
- Inner: `bg-gray-800 dark:bg-gray-900` with `border border-red-500/10`

### 3.2 Inclination

```css
transform: perspective(1200px) rotateX(35deg) rotateZ(-6deg);
```

Responsive breakpoints:
- `@media (max-width: 768px)`: `rotateX(22deg) rotateZ(-4deg)`
- `@media (max-width: 640px)`: `rotateX(14deg) rotateZ(-2deg)`

### 3.3 Key Appearance

- Background: brand color hex from `tech-icons.ts`
- Icon: white by default (`color: white`), black for light backgrounds
- White icon rule applies to keys where `isWhiteIcon(iconKey)` returns true in `tech-icons.ts`
- Top face: `box-shadow: 0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`
- Back shadow: `background: #1a1a1e; border: 1px solid #2a2a30; transform: translate(3px, 6px)`
- Border radius: `7px` (slightly more rounded than current `6px`)
- Key size: `50px × 50px` base (was `48px`)

### 3.4 Hover Behavior

- Key press effect: `key-top` translates to `translate(1px, 3px)` (was `2px, 5px`)
- Tooltip: appears outside keyboard container, to the right of the key
  - Content: technology name only (e.g., "TypeScript")
  - Style: dark background, cherry border, 12px gap from key
  - Transition: `opacity 0.15s`, hidden by default, visible on hover

### 3.5 Files to Change

| File | Change |
|------|--------|
| `src/components/atoms/Key3D.astro` | Key styling, tooltip element, hover behavior |
| `src/components/atoms/TechIcon.astro` | Icon color logic (white vs black) |
| `src/components/sections/About.astro` | Keyboard container colors, perspective transform |
| `src/utils/tech-icons.ts` | May need `isWhiteIcon` helper verified/correct |

### 3.6 Layout

- Maintain QWERTY-simulated layout with variable key widths
- `keyboardRowConfig` unchanged
- Extra skills overflow appended to last row

### 3.7 Acceptance Criteria

- [ ] Keyboard container is dark (not teal)
- [ ] Each key shows brand color background + white or black icon
- [ ] Icons are clearly legible on all key colors
- [ ] Keyboard appears strongly tilted (35° X, -6° Z)
- [ ] Hovering a key shows its technology name to the right
- [ ] Tooltip text doesn't overlap other keys
- [ ] Key press animation feels snappy
- [ ] Responsive tilt works at 768px and 640px breakpoints
- [ ] `bun run build` succeeds

---

## 4. Out of Scope

- Changing section layouts or content
- Adding new sections or pages
- Changing GSAP animation behavior (except colors referenced in JS if any)
- Changing project data or portfolio content
- Changing the ThemeToggle mechanism
- Modifying the scroll progress bar logic (only colors)

---

## 5. Rollback Plan

If any section breaks visually:
1. Revert the specific file from git
2. Re-run `bun run build` to verify
3. Fix the offending class/hex and re-apply

The changes are purely visual (class names + hex values) — no logic changes, no new dependencies.
