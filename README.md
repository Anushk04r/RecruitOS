# 🚀 RecruitOS — Candidate Pipeline Dashboard

> A modern **B2B SaaS recruitment dashboard** built with **Next.js, React, TypeScript, and Tailwind CSS** — designed to replicate real-world hiring workflow tools.

---

## ✨ Overview

RecruitOS is a **production-style frontend system** that helps recruiters:

* Track candidates across hiring stages
* Filter and search efficiently
* View detailed candidate insights
* Manage hiring workflows visually

Inspired by tools like **Linear, Notion, and modern HR SaaS platforms**.

---

## 🧩 Features

### 🧱 Layout & Navigation

* 📌 Sidebar navigation (Dashboard, Jobs, Candidates, Settings)
* 🔍 Top navbar with search + user avatar
* 🧭 Breadcrumbs + page header
* 📱 Fully responsive (desktop + mobile drawer)

---

### 📊 Job Overview

* Job title, department, location
* Open positions
* Hiring manager
* Total applicants
* Clean card-based UI

---

### 🔄 Candidate Pipeline (Kanban)

* Stages:

  * Applied
  * Shortlisted
  * Interview
  * Offered
  * Hired
* Horizontal scroll on smaller screens
* Sticky column headers

---

### 👤 Candidate Cards

Each card includes:

* Name + role + company
* Experience (years)
* Match score (color-coded)
* Status badge
* Last activity

---

### 🔍 Search & Filters

* Search by candidate name
* Filter by:

  * Stage
  * Experience range
  * Match score

---

### 📂 Candidate Detail Drawer

* Slide-in panel (right side)
* Includes:

  * Profile info
  * Skills/tags
  * Interview status
  * Notes section
  * Actions (Move stage, Reject)

---

### ⚡ UI States

* ⏳ Loading skeleton
* 📭 Empty pipeline
* 🔎 No search results

---

## 🛠️ Tech Stack

| Layer     | Technology           |
| --------- | -------------------- |
| Framework | Next.js (App Router) |
| Language  | TypeScript           |
| UI        | React                |
| Styling   | Tailwind CSS         |
| Fonts     | Geist Sans / Mono    |

---

## 📁 Project Structure


## 🖥️ Main Screens and Routes

| Route         | Purpose                                                         |
| ------------- | --------------------------------------------------------------- |
| `/`           | Candidate Pipeline: job overview, filters, Kanban board, drawer |
| `/jobs`       | Placeholder page                                                |
| `/candidates` | Placeholder page                                                |
| `/settings`   | Placeholder page                                                |

👉 The home page reads `searchParams` for `demo=empty` to enable the empty pipeline demo.

---

## 📊 Data Model and Mock Data

* `src/types/pipeline.ts` → Candidate (stage, skills, interviewStatus, notes, etc.), JobOverview, PIPELINE_STAGES
* `src/types/filters.ts` → StageFilter, ExperienceFilter, ScoreFilter
* `src/data/mock-candidates.ts` → list of candidates distributed across stages
* `src/data/mock-job.ts` → active job overview data

👉 Filtering logic is implemented in:

```bash
src/lib/filter-candidates.ts
```

👉 Consumed by:

```bash
CandidatePipelineDashboard
```

> ⚠️ Note: This project uses static mock data for demonstration. In a real-world scenario, this would be replaced with API-based data fetching.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open 👉 http://localhost:3000

---

## 🧪 Demo Modes

```bash
/?demo=empty
```

* Shows empty pipeline state
* Useful for testing UI edge cases

---

## 🔁 Key User Flows

1. Browse candidates in Kanban pipeline
2. Search or apply filters
3. Click candidate → open drawer
4. Move candidate between stages
5. Reject candidate

---

## 🎨 Design System

* Neutral color palette + primary accent
* Semantic colors:

  * 🟢 Success
  * 🟡 Warning
  * 🔴 Danger
* Clean spacing + typography hierarchy
* Subtle shadows + hover interactions

---

## 📦 Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```

---

## 🔮 Future Improvements

* Drag & drop Kanban
* Backend/API integration
* Authentication
* Real-time updates
* Global search

---

## 🧠 Approach

* Component-based architecture
* Focus on scalability & reusability
* Designed for real-world recruiter workflows
* Emphasis on UX clarity and clean UI

---

## 📄 License

Private / Assignment use

---

## 🙌 Final Note

This project demonstrates a **production-level frontend architecture with strong UX focus**, simulating real SaaS hiring tools.
