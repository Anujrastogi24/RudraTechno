# Rudra Techno

**Custom websites & software, built for you.** Rudra Techno is a multi-tenant SaaS
platform where clients request projects, track progress in real time, chat with their
team, and pay invoices securely — while admins manage delivery and developers work a
task board. This repo contains the marketing site plus the foundations of the app.

Owner: **Anuj Rastogi** · Brand: **Rudra Techno**

---

## ✨ Features

**Live today (marketing site)**
- Modern, responsive landing page with light/dark themes
- Pages: Home, Services, Portfolio, Pricing, Blog, About, Contact, Sign in / Sign up
- Rudra Techno branding throughout (logo, favicon, copy)

**In progress (SaaS platform)** — see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Role-based dashboards for **Clients**, **Admins**, and **Developers**
- RBAC with three enforcement layers (route middleware, `can()` policy, UI `<Can>` guard)
- Multi-tenancy (shared DB + `tenantId` discriminator)
- Hybrid payments: **Razorpay** (INR) + **Stripe** (global) behind one abstraction
- Project tracking, kanban tasks, invoices, messaging, and support tickets

## 🧱 Tech Stack

| Layer        | Choice                                              |
|--------------|-----------------------------------------------------|
| Framework    | Next.js 16 (App Router, Turbopack), React 19        |
| Language     | TypeScript                                          |
| Styling      | Tailwind CSS v4, `next-themes`                       |
| Database     | PostgreSQL + Prisma ORM                             |
| Auth         | Auth.js (NextAuth) — *Phase 2*                       |
| Payments     | Razorpay + Stripe — *Phase 8*                        |
| Passwords    | bcryptjs                                            |

## 🚀 Getting Started

```bash
# 1. Install dependencies (runs `prisma generate` automatically)
npm install

# 2. Configure environment
cp .env.example .env        # then fill in DATABASE_URL, secrets, etc.

# 3. Set up the database (requires a Postgres URL in .env)
npm run db:push             # apply the Prisma schema
npm run db:seed             # seed a demo tenant + sample data

# 4. Run the dev server
npm run dev                 # http://localhost:3000
```

### Demo logins (after seeding)

All seeded accounts use the password `Password123!`:

| Role      | Email                     |
|-----------|---------------------------|
| Admin     | `admin@rudratechno.com`   |
| Developer | `dev@rudratechno.com`     |
| Client    | `client@example.com`      |

## 📜 Scripts

| Command            | Description                                  |
|--------------------|----------------------------------------------|
| `npm run dev`      | Start the dev server (Turbopack)             |
| `npm run build`    | Production build                             |
| `npm run start`    | Run the production build                     |
| `npm run db:push`  | Push the Prisma schema to the database       |
| `npm run db:migrate` | Create/run a migration                     |
| `npm run db:seed`  | Seed demo data                               |
| `npm run db:studio`| Open Prisma Studio                           |

## 📁 Project Structure

```
docs/                  Architecture blueprint + project documentation (PDF/HTML)
prisma/
  schema.prisma        Multi-tenant data model (Tenant, User, Project, Task, Invoice…)
  seed.ts              Demo tenant + users + sample project
public/images/logo/    Rudra_Techno-logo.png (brand logo)
src/
  app/                 App Router pages (marketing + auth)
  app/icon.png         Brand favicon (trident mark)
  components/          Header, Footer, Hero, Features, Pricing, Contact, …
  lib/db.ts            Prisma singleton + tenant-scoped client helper
```

## 📚 Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — full 13-section blueprint (decisions,
  schema, RBAC, payments, 12-phase build plan).
- `aboutmywebsite.pdf` — plain-language overview of every page, the database, Razorpay,
  and the backend, with architecture diagrams.

## 🗺️ Roadmap

The build follows a phased plan (see the architecture doc):

- **Phase 0** — Rebrand to Rudra Techno ✅
- **Phase 1** — Prisma schema + Postgres data layer ✅
- **Phase 2** — Auth.js (credentials + Google), route guards — *next*
- **Phase 8** — Hybrid payments (Razorpay + Stripe)
- …through dashboards, messaging, analytics, and deployment.

## 📄 License

Proprietary — © 2026 Rudra Techno. All rights reserved.
