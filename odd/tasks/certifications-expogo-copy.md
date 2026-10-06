# Certification list, Expo Go icon, and experience copy

## Objective

Apply the user's focused corrections: remove the Cybersecurity Awareness for Corporate Leaders certification, show every remaining certification without a “show more” control, display Expo Go's icon, and make the Pinprexat description natural and specific while protecting confidential details.

## Scope and constraints

- Work on the existing `main` branch; do not create or switch branches.
- Keep the changes limited to existing certification, technology-icon, and experience-content files.
- Reuse the installed Devicon Expo icon; add no dependencies or unrelated product/design setup files.
- Preserve the previous confidentiality constraint and keep the Spanish and English descriptions aligned.

## Task list

- [x] **CE-1 — Correct certifications, Expo Go icon, and Pinprexat wording.** Remove the named certification and its ID, render the full course list directly, map Expo Go to the installed icon, and revise the experience copy in both locales. Route: delegated direct. Trigger: six existing source files need coordinated changes; the required read-only mapping was delegated before implementation.

## Acceptance criteria

- `cybersecurity-awareness-leaders` is absent from course data and the course ID union.
- Every course is rendered in the certifications section without a collapsed remainder or “show more” control.
- Expo Go shows an Expo brand icon through the existing icon component.
- Spanish and English Pinprexat copy explains the procurement and lab-system work in plain language without naming private systems, clients, or operational details.
- The production build completes.

## Checks and configuration

- TDD: off for this content update. Source: session instruction says not to add or run tests unless the user requests testing/verification; project `AGENTS.md` says there is no test suite. Test runner: none configured. Functional check: `bun run build`.
- RDD: disabled/unmanaged by project policy (opt-in and off by default); no RDD review will be started.
- CodeGraph mapping is complete. The `devicon:expo` icon is available in the installed icon set. Engram tools are not exposed in this session; mirror status is pending/unavailable.
- Forecast: approximately 70 authored changed lines, excluding generated files. Delivery strategy: `ask-on-risk` (default), below the approximately 400-line budget.
- User-directed branch constraint: remain on `main`; the task's work-unit commit will be on `main`.

## Progress and evidence

- CodeGraph identified the 10-item visible slice and “show more” control in `src/components/sections/Certifications.astro`, the named course in `src/data/constants/courses.data.ts` and `src/data/models/portfolio.model.ts`, the missing Expo mapping in `src/utils/tech-icons.ts`, and Pinprexat copy in `src/i18n/es.ts` and `src/i18n/en.ts`.
- CE-1 outcome: the named certification and ID were removed, all remaining courses render in one list, Expo Go uses `devicon:expo`, and Pinprexat copy now describes the work in plain language in Spanish and English.
- CE-1 verification: `git diff --check` passed; `bun run build` passed; generated Spanish and English HTML contains the Expo Go label and `devicon:expo`, with no “show more” control or removed certification.
- CE-1 work-unit commit: pending.

## Next step

Record the CE-1 work-unit commit; implementation and verification are complete.

## Commit evidence

Pending.
