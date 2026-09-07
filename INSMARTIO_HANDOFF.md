# inSmartio Marketing Site - Project Handoff

Last updated: 07-09-2026

## Project summary

This repository contains the inSmartio marketing website. It presents the service marketplace to clients, experts, and TAs, and includes informational pages, legal pages, app download/referral flows, and a waitlist form.

The site is a Next.js application using the App Router. It is primarily a frontend/content project. The only application API integration currently visible in source is the waitlist join request.

## Stack

| Area | Technology | Notes |
| --- | --- | --- |
| Framework | Next.js 16.2.1 | App Router, React Server Components by default |
| UI runtime | React 19.2.4 | Client components use `"use client"` |
| Language | TypeScript 5 | Strict mode enabled |
| Styling | Tailwind CSS 4 | Via `@tailwindcss/postcss` |
| HTTP | Axios 1.18.1 | Configured in `lib/axios.ts` |
| Animation | Framer Motion 12.38.0 | Used by animated sections |
| Icons | Lucide React and React Icons | Navigation and page icons |
| Forms | React Hook Form 7.81.0 | Form components |
| Fonts | DM Sans, Montserrat, local Monexa | Loaded in `app/layout.tsx` |
| CI/CD | GitHub Actions, SSH, PM2 | `.github/workflows/node-js.yml` |

Use Node.js 20.x. `package-lock.json` is committed, so use `npm ci` for reproducible installs.

## Project structure

```text
app/                         Routes and page-level composition
  layout.tsx                 Global metadata, fonts, theme, navbar, footer
  globals.css                Design tokens, Tailwind theme, shared CSS, animations
  page.tsx                   Home page
  about/ blog/ case-study/   Company, blog, and case study pages
  contact/ download/         Contact and app download pages
  for-clients/               Client audience page
  for-experts/               Expert audience page
  for-tas/                   TA audience page
  how-it-works/              Role-based process guide and tabs
  join/[code]/               Referral/deep-link page
  privacy/ terms-of-service/ Legal pages
  tas-agreement/             TA agreement
  waitlist/                  Waitlist page and provider

components/                  Reusable page sections and UI
  home/ about/ blog/         Page-specific sections
  case-study/ contact/       Page-specific sections
  download/ for-clients/     Audience-specific sections
  for-experts/ for-tas/      Audience-specific sections
  how-it-works/              Process sections and tab content
  layout/                    Navbar and footer
  providers/                 Theme provider
  ui/                        Shared buttons, cards, inputs, backgrounds
  waitlist/                  Waitlist UI

context/WaitlistContext.tsx  Waitlist state and API integration
lib/axios.ts                 Shared Axios client and API base URL
public/                      Images, fonts, app downloads, static files
.github/workflows/           GitHub Actions CI/CD
```

The `@/*` TypeScript alias points to the repository root. Prefer it for internal imports, for example `@/components/ui/Button`.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing home page |
| `/about` | Company and impact information |
| `/blog` | Blog/resources page |
| `/case-study` | Case study page |
| `/contact` | Contact form, details, and office locations |
| `/download` | Mobile app download page |
| `/for-clients` | Client benefits, verification, payments, and FAQ |
| `/for-experts` | Expert benefits, payments, verification, and earnings |
| `/for-tas` | TA opportunity, steps, earnings, tools, and FAQ |
| `/how-it-works` | Role-based process guide; supports `?tab=client`, `?tab=expert`, and `?tab=ta` |
| `/join/[code]` | Referral flow; stores the referral code locally |
| `/waitlist` | Waitlist form backed by the API |
| `/privacy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/tas-agreement` | TA agreement |

The footer also contains links to future or unimplemented destinations such as `/careers`, `/press`, `/help`, `/cookies`, and `/coming-soon`. Confirm those routes before presenting them as live features.

## Visual style and design system

The visual system is defined in `app/globals.css` and uses CSS variables for light/dark mode.

- Primary: deep blue (`#1A4B8C`)
- Secondary/accent: warm yellow-orange (`#F9A826`)
- Success: green (`#2E7D32`)
- TA accent: purple (`#6B4EFF`)
- Light background: cool pale blue (`#e2e9f3`)
- Dark background: deep navy (`#060D1A`)
- Display font: Montserrat
- Body font: local Monexa, with DM Sans also loaded
- Shared classes include `.glass-panel`, `.btn-primary`, `.btn-secondary`, `.tool-bg`, and animated `.drift-*`

Theme state is stored in `localStorage` under `foodies-theme`. The key is historical; change it only with a migration plan.

Remote images used with `next/image` must use a hostname listed in `next.config.ts`. Current hosts include `i.pinimg.com`, `i.pravatar.cc`, `images.unsplash.com`, `toppng.com`, `www.liblogo.com`, and `www.chrivon.com`.

## API and environment variables

### Current variable

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-host.example/api
```

`lib/axios.ts` reads this variable. If absent, the local build falls back to `https://insmartio.chrivon.tech/api`.

Because the name starts with `NEXT_PUBLIC_`, its value is bundled into browser code. It must not contain a password, private token, database credential, or other secret.

### Waitlist request (not in use)

The waitlist provider sends:

```http
POST {NEXT_PUBLIC_API_BASE_URL}/waitlist/join
Content-Type: application/json
```

with:

```json
{
  "name": "Example User",
  "email": "user@example.com"
}
```

The UI expects a waitlist entry and can display `id`, `name`, `email`, `position`, and `createdAt`. The Axios client has a 15-second timeout and normalizes API error messages.



## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Before opening a pull request, run the same checks used by CI:

```bash
npm run lint
npx tsc --noEmit --skipLibCheck
npm run build
```

For a production-like local run:

```bash
npm run build
npm run start
```

## Git and deployment workflow

The GitHub Actions workflow runs for pull requests targeting `main` and pushes to `main`.

Build job: Ubuntu, Node 20.x, `npm ci`, `npm run lint`, TypeScript check, and `npm run build`.

Deployment runs only after a successful build and only for a push to `main`. It uses GitHub secrets `SSH_PRIVATE_KEY`, `SSH_HOST`, and `SSH_USER`, connects to `/home/deploy/var/www/inSmartio-marketing-site`, pulls `main`, runs `npm ci`, builds, and restarts PM2 process `insmartio`.

Recommended workflow:

```text
feature branch -> pull request -> CI checks -> merge to main -> automatic server deploy
```

GitHub Actions secrets are managed under repository Settings > Secrets and variables > Actions. They are not stored in this repository.

## Maintenance notes

- Keep `package-lock.json` in sync with `package.json`.
- Use `npm ci` in CI and on the deployment server.
- Add new remote image hosts to `next.config.ts` before using them with `next/image`.
- Keep page-specific content in the matching `components/<area>/` directory.
- Keep interactive components client-side only when they need browser APIs, state, effects, or event handlers.
- Verify mobile layouts after editing navigation, forms, calculators, tabs, or download sections.
- `public/downloads/insmartio.crdownload` appears to be an incomplete browser download. Replace it with the final asset before relying on it in production.

## Troubleshooting

### API requests fail locally

Check `.env.local`, confirm the API URL includes the `/api` path expected by the backend, restart `npm run dev`, and inspect the `/waitlist` browser network request.

### Images fail to build or render

For remote images, check that the hostname is allowed in `next.config.ts`. For local images, place the file under `public/` and reference it with a root path such as `/assets/example.png`.

### Production still uses an old API URL

Public environment variables are compiled into the build. Update production configuration, run `npm run build`, and restart PM2.

### Deployment does not start

Check GitHub Actions logs, the three SSH secrets, server access, deployment directory, Node/npm versions, and that the PM2 process is named `insmartio`.

## Handoff checklist

- [ ] Repository access transferred
- [ ] Production server SSH access transferred securely
- [ ] GitHub Actions secrets reviewed and rotated if needed
- [ ] Production `NEXT_PUBLIC_API_BASE_URL` verified
- [ ] API owner and `/waitlist/join` contract confirmed
- [ ] Domain/DNS and SSL ownership documented separately
- [ ] App Store and Play Store ownership/access documented separately
- [ ] Final `public/downloads` assets supplied
- [ ] Test waitlist submission completed without real personal data
- [ ] Lint, TypeScript check, and production build passing
