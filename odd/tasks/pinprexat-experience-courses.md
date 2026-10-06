# Pinprexat experience and DataCamp courses

## Objective

Update the portfolio to show one Pinprexat internship from June through October 2026, describe the work at a confidentiality-safe level, add Expo Go and NestJS to the technology lists, and add three DataCamp courses with the supplied links.

## Problem and why

The current portfolio shows separate Pinprexat part-time and internship entries, which does not match the requested experience. Its experience descriptions do not reflect the two work areas the user described, and the requested technologies and courses are missing.

## Authorized scope and constraints

- Authorized by the user, who approved the proposed content and dates.
- Work on the existing `main` branch; do not create or switch to another branch.
- Consolidate Pinprexat as an internship, June–October 2026, with no part-time wording.
- Describe public-information research assistance and internal service-workflow improvements in broad terms. Do not expose system names, clients, private documents, or operational specifics.
- Add Expo Go and NestJS to the technology skills and relevant Pinprexat technology tags.
- Add the three requested DataCamp courses using the supplied URLs; omit dates because none were supplied.
- Preserve unrelated existing working-tree files (`DESIGN.md`, `skills-lock.json`).
- No new runtime dependencies.

## Design

Remove the duplicate Pinprexat entry and its ID, update the remaining localized entry in Spanish and English, and retain the current two-locale model/builders. Put Expo Go in frontend skills and NestJS in backend skills, then add both to the Pinprexat tags and the fixed stack rows. Add three course IDs, DataCamp metadata, and localized titles.

## Task list

- [x] **PX-1 — Pinprexat internship and technologies.** Consolidate the experience and update Spanish/English copy, skills, and stack labels. Route: delegated direct. Trigger: this task touches more than two non-trivial files; mapping required six content/model/component files.
- [x] **PX-2 — DataCamp courses.** Add course metadata and Spanish/English titles. Route: delegated direct. Trigger: this task touches the model, metadata, and two locale files.

## Acceptance criteria

- Exactly one Pinprexat entry remains; its role is an internship and its period is June–October 2026 in both locales.
- Neither locale presents the Pinprexat role as part-time or current.
- Experience copy covers both work areas without naming private systems or disclosing client or operational details.
- Expo Go and NestJS appear in skills, the stack overview, and the Pinprexat technologies.
- All three DataCamp courses appear in Spanish and English with the exact links supplied by the user.
- The production build completes.

## Checks and configuration

- TDD: off for this content update. Source: session instruction says not to add or run tests unless the user requests testing/verification; project `AGENTS.md` says there is no test suite. Test runner: none configured. Functional check: `bun run build` (the project command installs dependencies and builds).
- RDD: disabled/unmanaged by project policy (opt-in and off by default); `gentle-ai` is not installed in this environment. No RDD review will be started.
- CodeGraph was initialized because the project instructions require it when the index is absent. Engram tools are not exposed in this session; mirror status is pending/unavailable.
- Forecast: approximately 160 authored changed lines across two work units, excluding generated files. Delivery strategy: `ask-on-risk` (default); the forecast is below the approximately 400-line delivery budget.
- User-directed branch constraint: stay on `main`; each task's required work-unit commit will be on `main`.

## Progress and evidence

- Exploration: CodeGraph map and read-only file mapping identified `src/data/constants/experience.data.ts`, `src/data/constants/skills.data.ts`, `src/data/constants/courses.data.ts`, `src/data/models/portfolio.model.ts`, `src/components/sections/Stack.astro`, `src/i18n/es.ts`, and `src/i18n/en.ts`.
- Initial repository state: branch `main`; pre-existing untracked `DESIGN.md` and `skills-lock.json` left untouched. `.codegraph/` was created by the required project index initialization.
- PX-1 outcome: one Pinprexat internship remains, June–October 2026, with confidentiality-safe summaries in both locales. Expo Go and NestJS are present in skills, stack labels, and experience technologies; the other existing stack technologies are preserved.
- PX-1 verification: `git diff --check` passed; `bun run build` passed and generated `/en/index.html`, `/es/index.html`, `/sitemap.xml`, and `/index.html`.
- PX-1 work-unit commit: `476436d` (`feat(experience): consolidate Pinprexat internship`).
- PX-2 outcome: added the three requested DataCamp courses with the supplied URLs, no dates, and Spanish/English titles.
- PX-2 verification: `git diff --check` passed; `bun run build` passed and generated `/en/index.html`, `/es/index.html`, `/sitemap.xml`, and `/index.html`.
- PX-2 work-unit commit: `d458ff2` (`feat(courses): add DataCamp certifications`).

## Next step

Implementation is complete. Engram synchronization remains pending because its tools were unavailable in this session.

## Commit evidence

PX-1: `476436d` (`feat(experience): consolidate Pinprexat internship`).
PX-2: `d458ff2` (`feat(courses): add DataCamp certifications`).
