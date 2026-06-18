# Rudra Techno

**Rudra Techno** is a multi-tenant SaaS platform that designs and builds custom websites and software for growing businesses. Clients can request a project, track progress in real time, chat with their delivery team, and pay securely — all in one place.

Owner: **Anuj Rastogi**

---

## ✨ What's Inside

- **Marketing site** — Hero, services, products, portfolio, blog, and contact pages with dark/light themes.
- **RudraWeb Analyzer** — our own product: an instant website & SEO audit tool that scans any URL and returns a clear, prioritized report on SEO, accessibility, and web best practices.
- **Role-based dashboards** (planned) — separate experiences for Clients, Admins, and Developers with RBAC.
- **Hybrid payments** (planned) — Razorpay + Stripe.
- **SEO foundation** — server-rendered metadata, Open Graph & Twitter cards, dynamic OG image, `sitemap.xml`, `robots.txt`, and Organization + SoftwareApplication JSON-LD.

## 🧱 Tech Stack

| Area        | Technology                                  |
|-------------|---------------------------------------------|
| Framework   | Next.js 16 (App Router, Turbopack)          |
| UI          | React 19, TypeScript, Tailwind CSS v4       |
| Theming     | next-themes (dark default)                  |
| Database    | PostgreSQL + Prisma                         |
| Auth        | Auth.js (planned)                           |
| Payments    | Razorpay + Stripe (planned)                 |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# then fill in DATABASE_URL, NEXT_PUBLIC_SITE_URL, etc.

# Run the database migrations
npx prisma migrate dev

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ⚙️ Environment Variables

| Variable               | Description                                              |
|------------------------|----------------------------------------------------------|
| `DATABASE_URL`         | PostgreSQL connection string used by Prisma.             |
| `NEXT_PUBLIC_SITE_URL` | Public site URL — drives canonical URLs, sitemap, OG tags. Defaults to `https://rudratechno.com`. |

> `.env` is gitignored. Use `.env.example` as the template and never commit secrets.

## 📦 Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Production build
npm run start    # Run the production build
npm run lint     # Lint the codebase
```

## 📄 License

© Rudra Techno. All rights reserved.
