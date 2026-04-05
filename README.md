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

| Layer      | Technology           |
| ---------- | -------------------- |
| Framework  | Next.js (App Router) |
| Language   | TypeScript           |
| UI Library | React                |
| Styling    | Tailwind CSS         |
| Fonts      | Geist Sans / Mono    |

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── (dashboard)/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── jobs/
│   │   ├── candidates/
│   │   └── settings/
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── pipeline/
│   └── ui/
│
├── data/
├── lib/
├── types/
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run locally
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
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Run production server
npm run lint    # Lint code
```

---

## 🔮 Future Improvements

* Drag & drop Kanban (like Trello)
* Backend/API integration
* Authentication system
* Real-time updates
* Global search functionality

---

## 🧠 Approach

* Built with **component-first architecture**
* Focused on **scalability and reusability**
* Designed for **real-world recruiter workflows**
* Prioritized **clean UI and usability**

---

## 📄 License

Private / Assignment use

---

## 🙌 Final Note

This project focuses on **combining strong UI/UX with clean engineering practices**, simulating a real-world SaaS product environment.

---
