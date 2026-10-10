# Portfolio project gallery

## Objective

Show five selected portfolio projects in the requested order, with accurate links, technologies, descriptions, and a larger, auto-advancing three-image carousel per project.

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

- [x] **P1 — Refresh the selected project data and screenshots.** Replaced the project IDs/order and metadata; added three image paths per project; updated Spanish and English project copy.
- [x] **P1 correction — Fix technology icons and ParrasHub labels.** Map Expo to its Devicon, map React Native to the React Devicon, and remove unavailable MinIO/BullMQ labels from ParrasHub.
- [x] **P3 — Refine project marketing copy.** Reworked the copy after user feedback to retain concise, professional, benefit-led phrasing with more technical specificity in Spanish and English; Sureño remains framed around beverage commerce and case pricing, without a liquor-store label.
- [x] **P2 — Replace horizontal screenshot strips with a carousel.** Expanded the active image area, added five-second auto-advance, and added three selectable dash indicators inside the image container at its lower edge. Auto-advance pauses on hover/focus and respects reduced-motion settings.
- [x] **P2 correction — Keep gallery containers equal in size.** Use equal desktop grid columns so alternating project order cannot place a gallery in a narrower column; every gallery retains the same responsive height.

## Acceptance criteria

- Only Sureño, Chiroless, ParrasHub, Lotengo, and Pockly appear, in that order, in both locales.
- Each project has three valid image paths and accurate repository links and technology labels.
- Pockly retains its existing description, technology list, and live/GitHub links.
- Project descriptions and highlights use concise, professional, benefit-led language with enough technical detail to identify each product's implementation and value; Spanish and English stay consistent, and Sureño avoids an explicit liquor-store label.
- Removed projects have no stale localized content or ID references.
- Each project displays one large screenshot at a time, advances automatically, and provides three selectable dash indicators inside the image container without horizontal scrolling.
- All project image containers use the same width and responsive height, including projects whose text/gallery order is reversed.
- Keep the screenshot frame compact at the original 18rem mobile and 20rem desktop heights to avoid excess empty space around landscape screenshots.
- Carousel interaction stops auto-advance while a user hovers over it or focuses a control, and honors the reduced-motion preference.
- Astro production build succeeds.

## Route and triggers

- Route: **delegated direct** for P1.
- Trigger evidence: mapping required more than four files (shared model/metadata, two locale maps, renderer, and image assets); the task changes multiple non-trivial files, so the writer trigger applies.
- Feature branch: `feat/portfolio-projects-gallery` (created from `main`).
- Forecast at creation: approximately 180 authored changed lines. The staged work unit is currently 319 authored changed lines (additions plus deletions; binary screenshots excluded), below the approximately 400-line delivery budget. Strategy: `ask-on-risk` (default).
- P2 route: **direct inline**. Trigger evidence: the behavior is localized to the existing project gallery component; one source file is sufficient.
- P2 implementation diff: 176 authored changed lines. The cumulative feature branch is approximately 499 authored changed lines (including P1 and task documents, excluding binary images), above the approximately 400-line delivery budget. Strategy `ask-on-risk` requires a chain-strategy choice before the next commit; the choice is pending from the user.
- P3 route: **delegated direct**. Trigger evidence: copy changes affect both non-trivial locale files, so the writer trigger applies. The user approved the concise, professional, sales-oriented editorial design, including Sureño's beverage-commerce framing.
- P3 revised route: **delegated direct**. Trigger evidence: accepted user feedback reopens the copy task across the same two locale files; the writer trigger still applies.

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
- Work-unit commit: `27c3d4b` — `feat(portfolio): refresh projects and add screenshot galleries`.
- Native review-mode check: unavailable because `gentle-ai` is not installed; no review was started.
- P2 request: remove horizontal scrolling, give the image more space, auto-advance between screenshots, and show three selectable dash indicators beneath it.
- P2 verification: `git diff --check` passed; `bun run build` passed and generated `/en/`, `/es/`, and `/`.
- P2 size correction: the asymmetric `1.2fr / 0.8fr` grid made reversed galleries occupy the narrower column; changed to two equal desktop columns. `.project-shot` already defines the same responsive height for every project.
- Equal-size correction verification: `git diff --check` passed; `bun run build` passed and generated `/en/`, `/es/`, `/`, and `/sitemap.xml`.
- Indicator placement request: moved the three selectable dashes into the screenshot container and anchored them along its lower edge.
- Height correction request: restored the original 18rem mobile and 20rem desktop screenshot frame heights; the carousel no longer increases the frame height beyond the pre-carousel layout.
- Technology correction: added the Expo and React Native icon mappings and removed MinIO/BullMQ from ParrasHub. `bun run build` passed; generated Spanish HTML contains the Expo and React icons and omits MinIO/BullMQ; `git diff --check` passed.
- P3 verification: `bun run build` passed and generated `/en/`, `/es/`, `/`, and `/sitemap.xml`; `git diff --check` passed. Reviewed both locale maps for concise phrasing, factual features, and the Sureño wording constraint.
- P3 revision verification: `bun run build` passed and generated `/en/`, `/es/`, `/`, and `/sitemap.xml`; `git diff --check` passed. Confirmed technical copy for all five projects in both generated locales and verified the Sureño wording constraint.

## Next step

Wait for the user's chain-strategy choice, then follow the selected delivery strategy before committing P2. Engram synchronization remains pending until its tools are available.
