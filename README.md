# Bill Yang — Personal Website

A sophisticated personal portfolio for job applications, built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Motion**. Dark, quant-engineer aesthetic with an interactive node-network hero, scroll reveals, and a filterable project gallery wired to real GitHub repositories.

## Sections

- **Hero** — animated particle network, rotating role titles, availability badge.
- **About** — bio plus a live stat grid.
- **Work** — filterable project cards (Quant / ML / Data / Software) linking to source and live demos.
- **Skills** — grouped toolkit.
- **Path** — education and experience timeline.
- **Contact** — email + GitHub call-to-action.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Editing your content

All copy lives in plain data files — no need to touch the components:

- `src/data/profile.ts` — name, tagline, location, email, stats, about text, skills, timeline.
- `src/data/projects.ts` — the project gallery. Each entry has a title, blurb, domain, tags, repo link, and optional `demo` URL and `metric`.

Design tokens (colors, accent, fonts) live as CSS variables at the top of `src/app/globals.css`.

### Adding a résumé

Drop a PDF at `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` in `src/data/profile.ts`.

## Deploy to Vercel

This site is a standard Next.js app and deploys to Vercel with zero config:

1. Push this branch to GitHub (already done).
2. At [vercel.com/new](https://vercel.com/new), import `Specifxx/website`.
3. Accept the defaults (Vercel auto-detects Next.js) and deploy.
4. Optionally add a custom domain in the Vercel dashboard.

Every push to the connected branch redeploys automatically.
