 # Spring Street — Frontend Engineering Internship Assignment

A complete redesign of the Spring Street public-facing website, built with Next.js 15, TypeScript, and Tailwind CSS.

## Live Demo

https://spring-street-zeta.vercel.app

## Pages

- **Home** — Hero, animated stats, why global section, product cards
- **Products** — Full Prisma family with performance data
- **Prisma Detail** — Fund factsheet with holdings table, allocation bars, methodology
- **Contact** — Contact form with office details
- **FAQ** — Categorized accordion FAQ
- **About** — Company story and core beliefs

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Design Decisions

- Dark, premium aesthetic inspired by Linear and Stripe
- Animated number counters on scroll for key stats
- Factsheet-style Prisma detail page inspired by global fund managers
- Consistent design system across all pages

## Setup Instructions

1. Clone the repository
   git clone https://github.com/princeyadav14/spring-street.git

2. Install dependencies
   cd spring-street
   npm install --legacy-peer-deps

3. Run the development server
   npm run dev

4. Open http://localhost:3000 in your browser

## Project Structure

app/
  components/     — Shared components (Navbar, Footer, Hero, Stats, etc.)
  products/       — Products page and Prisma detail page
  contact/        — Contact page
  faq/            — FAQ page
  about/          — About page
  page.tsx        — Homepage
  layout.tsx      — Root layout
  globals.css     — Global styles
