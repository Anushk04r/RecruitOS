# RecruitOS — Recruitment Dashboard

A **production-style B2B SaaS** candidate pipeline dashboard built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. It is designed to feel like modern tools such as Linear, Notion, or contemporary HR platforms: calm neutrals, a clear primary accent, subtle elevation, and responsive layout.

This document explains **what the project includes**, **how it is organized**, and **how to run and extend it**.

---

## Table of contents

1. [Features](#features)
2. [Tech stack](#tech-stack)
3. [Getting started](#getting-started)
4. [Project structure](#project-structure)
5. [Design system (UI)](#design-system-ui)
6. [Main screens and routes](#main-screens-and-routes)
7. [Data model and mock data](#data-model-and-mock-data)
8. [Key user flows](#key-user-flows)
9. [UI states](#ui-states)
10. [Scripts](#scripts)
11. [Customization notes](#customization-notes)

---

## Features

### Layout and navigation

- **Left sidebar** (desktop): workspace branding, section label (“Workspace”), and links to **Dashboard**, **Jobs**, **Candidates**, and **Settings**. Active route uses primary-tinted background and icon color.
- **Mobile**: sidebar is hidden by default; a **menu button** in the top bar opens a **slide-in drawer** with the same navigation (tap a link to close).
- **Top bar**: global **search** placeholder (read-only demo), **notifications** icon (desktop), and **user avatar** (initials).
- **Page header** (per route): **breadcrumbs**, **page title**, and optional **description**.

The shell uses a **fixed viewport height on desktop** (`md:h-svh`): the **top bar stays at the top** of the main column while **only the page content scrolls**, similar to Linear/Notion. The **sidebar is full-height** with a subtle edge shadow. On small screens, the page can scroll naturally when content is taller than the viewport.

### Candidate Pipeline (home `/`)

- **Job overview**: card grid for the active role — title, department, location, open positions, hiring manager, total applicants.
- **Filters**: search by **name**, **stage**, **experience range**, and **match score range**.
- **Kanban board**: five columns — **Applied**, **Shortlisted**, **Interview**, **Offered**, **Hired**. Horizontal scroll on narrow viewports; columns have a muted column background and sticky column headers.
- **Candidate cards**: name, role + company, years of experience, **match score** badge (semantic colors), **status** badge, **last activity**. Cards lift slightly on hover with stronger shadow.
- **Candidate detail drawer**: opens from the right; shows skills/tags, interview status, notes, **move to stage** select, **Schedule interview** (placeholder), **Done**, **Reject** (marks candidate as withdrawn and closes drawer). **Escape** and backdrop click close the drawer.

### Placeholder routes

- **`/jobs`**, **`/candidates`**, **`/settings`**: minimal placeholder copy so sidebar links work; the main experience is the dashboard pipeline.

### Demo query parameter

- **`/?demo=empty`**: starts with **no candidates** so you can see the **empty pipeline** state. A **“Clear demo mode”** button restores the default mock list (when this demo mode is active).

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | Next.js **16** (App Router) |
| UI | React **19**, TypeScript |
| Styling | Tailwind CSS **4** (`@import "tailwindcss"`, `@theme inline`) |
| Fonts | Geist Sans / Geist Mono (via `next/font`) |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm start
```

---

## Project structure

```text
src/
├── app/
│   ├── (dashboard)/           # Shared dashboard chrome (sidebar + top bar)
│   │   ├── layout.tsx         # Wraps children with DashboardShell
│   │   ├── page.tsx           # Home: Candidate Pipeline
│   │   ├── loading.tsx        # Route-level skeleton while loading
│   │   ├── jobs/page.tsx
│   │   ├── candidates/page.tsx
│   │   └── settings/page.tsx
│   ├── layout.tsx             # Root layout, fonts, metadata
│   └── globals.css            # Design tokens + typography utilities
├── components/
│   ├── layout/                # dashboard-shell, sidebar, top-navbar, page-header
│   ├── pipeline/              # job overview, kanban, cards, filters, drawer, skeletons, empty states
│   └── ui/                    # badge, button
├── data/
│   ├── mock-candidates.ts     # Realistic candidate fixtures
│   └── mock-job.ts            # Active job overview
├── lib/
│   ├── cn.ts                  # `className` helper
│   ├── filter-candidates.ts   # Search + filter logic
│   └── status-styles.ts       # Maps candidate status → badge variant
└── types/
    ├── pipeline.ts            # Candidate, JobOverview, stages
    └── filters.ts             # Filter union types
```

---

## Design system (UI)

Design tokens live in **`src/app/globals.css`** as CSS variables, mapped into Tailwind via **`@theme inline`** so you can use utilities such as:

- **Neutrals**: `bg-background`, `text-foreground`, `bg-surface`, `bg-surface-muted`, `border-border`, `text-muted-foreground`
- **Primary (indigo)**: `bg-primary`, `text-primary-foreground`, `hover:bg-primary-hover`, `bg-primary-subtle`
- **Kanban**: `bg-column-bg`, `bg-column-header` (column chrome separate from page background)

**Typography helpers** (utility classes in `globals.css`):

- `text-heading-page` — page title scale
- `text-heading-section` — section titles
- `text-label` — uppercase micro-labels
- `text-body` — muted body copy

**Status colors** (badges): semantic **success** (green), **warning** (amber), **danger** (rose), plus **neutral** for secondary meta. Match score on cards maps to success / warning / danger by numeric bands.

**Interaction**: buttons use short transitions, focus rings tied to primary, and primary actions use the brand color. Cards use border + light ring + hover lift.

---

## Main screens and routes

| Route | Purpose |
|--------|---------|
| `/` | Candidate Pipeline: job strip, filters, Kanban, drawer |
| `/jobs` | Placeholder |
| `/candidates` | Placeholder |
| `/settings` | Placeholder |

The home page reads `searchParams` for `demo=empty` to enable the empty pipeline demo.

---

## Data model and mock data

- **`src/types/pipeline.ts`**: `Candidate` (including `stage`, `skills`, `interviewStatus`, `notes`, etc.), `JobOverview`, `PIPELINE_STAGES`.
- **`src/types/filters.ts`**: `StageFilter`, `ExperienceFilter`, `ScoreFilter`.
- **`src/data/mock-candidates.ts`**: a diverse list of candidates distributed across stages.
- **`src/data/mock-job.ts`**: one active job used in the overview section.

Filtering is implemented in **`src/lib/filter-candidates.ts`** and consumed by **`CandidatePipelineDashboard`** (client component).

---

## Key user flows

1. **Browse pipeline**: scroll the Kanban horizontally on small screens; vertically within each column when there are many cards.
2. **Filter**: type in the pipeline search or change dropdowns; if no one matches but filters are active, **No matching candidates** appears with **Clear filters**.
3. **Open detail**: click a card → drawer opens; change stage from the select to move the card between columns.
4. **Reject**: sets status to **Withdrawn** and closes the drawer (data remains in the pipeline for demo purposes).

---

## UI states

| State | Where |
|--------|--------|
| **Loading** | Initial client delay (~600ms) shows **`PipelineSkeleton`**; App Router **`loading.tsx`** can show during navigations. |
| **Empty pipeline** | No candidates (e.g. `?demo=empty`); optional reset button. |
| **No search results** | Filters/search exclude everyone; **Clear filters** resets controls. |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | ESLint |

---

## Customization notes

- **Replace mock data** with API calls: keep the same TypeScript types and update `CandidatePipelineDashboard` to fetch and set state.
- **Wire global search** in `TopNavbar` to real search or command palette behavior.
- **Primary color**: adjust `--primary`, `--primary-hover`, and `--primary-subtle` in `:root` (and dark mode) in `globals.css`.
- **ATS integration**: map external stages to `PipelineStage` in one place before rendering.

---

## License

Private / project use unless you add a license file.
