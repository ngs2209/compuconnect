# COMPU CONNECT — Website

Marketing website for COMPU CONNECT (computer sales, service, CCTV, networking and home automation), Pollachi, Tamil Nadu.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Router (Home / About / Products / Services / Contact)
- React Hook Form + Zod (quote form validation)
- WhatsApp deep-linking (`wa.me`) for enquiries — no backend/database required

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:4173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/   Header, Hero, ServicesSection, ProductGrid, ContactSection, WhatsAppForm, ...
  data/         content.ts — all business copy, products, services, FAQs in one place
  lib/          whatsapp.ts — builds wa.me links from form data
  pages/        Home, About, Products, Services, Contact, NotFound
```

All business content (company details, products, services, FAQs, testimonials) lives in
`src/data/content.ts`. Update phone numbers, address, products or copy there — no need to
touch components.

## WhatsApp enquiries

The quote form and every "Enquire" button build a `https://wa.me/<number>?text=...` link with the
enquiry pre-filled, and open it in a new tab. This works with zero backend. To later add a real
backend (e.g. to log enquiries to a database before redirecting to WhatsApp), wire up
`src/components/WhatsAppForm.tsx`'s `onSubmit` to call your API first.

## SEO

- Per-page `<title>`/meta via `src/components/SEO.tsx`
- JSON-LD `ElectronicsStore` schema with address, geo and hours in `index.html`
- `public/robots.txt` and `public/sitemap.xml` included — update the sitemap if routes change
- Update `og-image.jpg` (referenced in `index.html`) with a real 1200×630 social preview image before launch

## Deployment

This is a static single-page app after `npm run build` (output in `dist/`). It deploys to any
static host (Vercel, Netlify, GitHub Pages, S3 + CloudFront, or a plain NGINX server serving
`dist/` with a SPA fallback to `index.html`).

## Docker

A Docker image can build and run this app in a container.

- Build the image:

```bash
docker build -t compu-connect .
```

- Run the app in development mode and expose it to your browser:

```bash
docker compose up --build
```

Then open `http://localhost:4173` in your browser.

- Run the build/test checks:

```bash
docker compose run --rm app npm test
```

If you prefer a direct container run without Compose:

```bash
docker run --rm -p 4173:4173 compu-connect
```

This repo currently uses `npm run test` as a shortcut for linting with `oxlint`.

## Notes on scope

This build focuses on a complete, production-quality **frontend**. The following items from the
original spec are intentionally out of scope for this delivery and can be added as a next phase:

- Backend API server (Node/Express), MongoDB, Docker/CI pipeline
- Full Three.js/WebGL 3D scene in the hero (replaced with a lightweight animated SVG network
  diagram + CSS/gradient backdrop for performance and reliability)
- Blog/CMS with category and tag pages
- Real photography — product cards currently use category labels instead of stock photos, since
  the spec requires actual product-matching photography rather than placeholders
