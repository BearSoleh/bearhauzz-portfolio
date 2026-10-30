# Portfolio Profile Update Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this approved content update inline.

**Goal:** Align the portfolio and downloadable resume with the supplied 30 October resume and publish the approved draft.

**Architecture:** Keep the existing Next.js components and shared project data. Add BJBC through the existing project model, select six featured projects explicitly and group resume skills within the existing visual style.

**Tech Stack:** Next.js 16.2.1, React 19, TypeScript, Tailwind CSS and existing CSS.

**Spec:** docs/portfolio-profile-update-draft-2026-10-30.md (approved by the user's "Alright proceed").

## Global Constraints

- Preserve the existing design, accessibility and responsive behavior.
- No Oxford commas in website copy.
- BJBC remains In development with no invented screenshot, demo URL or repository URL.
- Keep all previous projects and their recorded statuses.
- Copy the supplied PDF unchanged; keep the download name Afiq Haikal - Resume.pdf.
- Preserve manual testing versus automated testing distinctions and describe Agile/Scrum as familiarity.

## Review Focus

- BJBC must have a working case study without a false live link or GVL contract note.
- Home must feature BJBC, Portfolio, CampusSphere, MyPATH, Vastiq and GVL in that order; other projects remain on the index.
- CampusSphere must describe seller approval of payment receipts and UAT with 33 participants.
- Long skill groups and availability copy must wrap on mobile without horizontal overflow.
- The deployed PDF must match the user-supplied file byte for byte.

## Tasks

### 1. Profile content, skills and project data

- [x] Update app/page.tsx, app/layout.tsx, app/projects/page.tsx, components/Contact.tsx, components/Experience.tsx and components/Skills.tsx to the approved copy.
- [x] Add BJBC and update CampusSphere, CPM and Mega Jati in data/projects.ts; use explicit featured slugs and reorder the index consistently.
- [x] Update only CSS needed for grouped skills and long copy, preserving the incumbent design.
- [x] Verify built routes and rendered content, six-project order, all-project preservation and missing-URL behavior. Run npm run lint and npm run build.

### 2. Resume, review and deployment

- [x] Replace public/resume.pdf with the supplied PDF and render its first page to public/resume-preview.png. Verify SHA256 equality.
- [x] Inspect desktop and mobile together, including BJBC case study and grouped skills. Resolve defects in one batch and confirm if necessary.
- [x] Obtain one independent review of the completed change against the approved draft.
- [ ] Commit only task files, push to main and verify Vercel production deployment plus live PDF equality.

## Execution Notes

- Execute in the existing workspace: this is an approved content refresh with no competing product edits. No application dependencies are added.
- Verification uses the rendered site, static build and actual PDF bytes. New unit tests that only repeat content constants are unnecessary for these reversible content changes.
- Keep Codex and Claude as supporting tools, using the previously supplied information.
- Leave driving licence details out of the public About copy; this was optional in the draft and remains available in the supplied resume.

## Verification record

- Integrated three newer documentation commits from origin/main (base 551be41), preserving the approved in-progress product edits.
- ESLint passed and the production build generated 19 routes, including 13 case studies.
- Independent review found no critical, important or minor issues; all previous project slugs/statuses were preserved.
- Visual QA identified mobile intrinsic sizing in text project covers and single-column project grids. Explicit cover width and a minmax(0, 1fr) mobile track fixed it. Confirmed homepage and full project index widths equal the 375px content viewport at the 390px browser override; BJBC detail also has no horizontal overflow.
- Grouped skills wrap without overflow. Desktop dimensions and the six-project order were checked in the rendered site. No Oxford commas were found in the rendered homepage.
- PDF SHA256 matches the supplied file: 8D942FC82FE797D7695CC415238D3F3EE16E226D366C8DAD3A893E2ACE2BC7FD.
- Reviewer deferred visual appearance and deployed/external availability to the parent checks. Parent completed visual verification; live verification follows deployment. Professional claims remain sourced from the supplied resume and previously confirmed project information.
