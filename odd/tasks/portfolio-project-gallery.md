# Portfolio project gallery

## Objective

Show five selected portfolio projects in the requested order, with accurate links, technologies, descriptions, and three screenshots per project.

## Problem and rationale

The current list contains outdated and unrelated projects, uses stale single-image paths, and does not describe the current Sureño, Chiroless, ParrasHub, or Lotengo products. A three-image gallery will make each selected project easier to understand at a glance.

## Scope and constraints

- Keep Pockly's existing content and links; use the three available Pockly screenshots.
- Display projects in this order: Sureño, Chiroless, ParrasHub, Lotengo, Pockly.
- Update project copy in both Spanish and English.
- Remove the other projects from the portfolio list and its localized content.
- Keep the implementation within existing Astro/Tailwind patterns; add no dependencies.
- Use the existing files in `public/img/{sureno,chiroless,parrashub,lotengo,pockly}/`.
- Preserve other existing workspace changes.

## Authorized scope

The user requested this project-list and screenshot-gallery update and approved the short design. Source scope: project metadata/model, both locale content maps, and the project rendering component. Relevant screenshots are already present in the worktree.

## Task checklist

- [x] **P1 — Refresh the selected project data and gallery.** Replaced the project IDs/order and metadata; added three image paths per project; updated Spanish and English project copy; rendered the screenshots as a responsive horizontal gallery.

## Acceptance criteria

- Only Sureño, Chiroless, ParrasHub, Lotengo, and Pockly appear, in that order, in both locales.
- Each project has three valid image paths and accurate repository links and technology labels.
- Pockly retains its existing description, technology list, and live/GitHub links.
- Removed projects have no stale localized content or ID references.
- All three screenshots are viewable per project on desktop and mobile layouts.
- Astro production build succeeds.

## Route and triggers

- Route: **delegated direct** for P1.
- Trigger evidence: mapping required more than four files (shared model/metadata, two locale maps, renderer, and image assets); the task changes multiple non-trivial files, so the writer trigger applies.
- Feature branch: `feat/portfolio-projects-gallery` (created from `main`).
- Forecast at creation: approximately 180 authored changed lines. The staged work unit is currently 319 authored changed lines (additions plus deletions; binary screenshots excluded), below the approximately 400-line delivery budget. Strategy: `ask-on-risk` (default).

## TDD and checks

- TDD: **off** for this task. Source: project `AGENTS.md` says there is no test suite and directs validation via manual checks or `bun run build`; the user did not request tests.
- Test runner: none configured.
- Functional check: `bun run build` (also the project command that installs dependencies before building).

## Progress and evidence

- Exploration confirmed metadata in `src/data/constants/projects.data.ts`, the ID/type in `src/data/models/portfolio.model.ts`, localized project content in `src/i18n/es.ts` and `src/i18n/en.ts`, and rendering in `src/components/organisms/FeaturedProject.astro`.
- Image paths: Sureño `1_home.webp`, `2_mayoreo.webp`, `3_cart.webp`; Chiroless `1_principal_gastos.webp`, `2_registro.webp`, `3_summary.webp`; ParrasHub `1_rooms.webp`, `2_send_image.webp`, `3_messages.webp`; Lotengo `1_lotengo_inicio.webp`, `3_lotengo_recorrido.webp`, `3_lotengo_uso.webp`; Pockly `1_pockly.webp`, `2_remove-bg.webp`, `3_login.webp`.
- The Lotengo third screenshot was visually inspected; the practice screen was selected to complement the home and course-progress screens.
- Existing worktree has pre-existing deletions of legacy root-level images and untracked image folders. Those workspace changes are preserved.
- `git diff --check` passed.
- `bun run build` passed: Bun install reported no dependency changes and Astro generated all three pages (`/en/`, `/es/`, `/`).
- Engram mirror: **pending**; no Engram/memory tools are available in this session. Resynchronize the full document under topic `odd/portfolio-project-gallery/tasks` when available.
- Commit identity: pending.
- Native review-mode check: unavailable because `gentle-ai` is not installed; no review was started.

## Next step

Commit P1's source changes, task document, and the five requested screenshot sets without staging unrelated pre-existing changes; then record the work-unit commit identity.
