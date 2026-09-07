# inSmartio marketing site

Marketing website for inSmartio, a service marketplace connecting clients with verified professionals and TAs in Nigeria.

For the complete transfer document, see [INSMARTIO_HANDOFF.md](INSMARTIO_HANDOFF.md). It contains the stack, routes, workflows, deployment notes, environment setup, and troubleshooting guide.

## Quick start

Requirements: Node.js 20.x and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

The current code reads `NEXT_PUBLIC_API_BASE_URL`. It is optional because `lib/axios.ts` has a fallback API URL. Never commit `.env.local` or secret values.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit --skipLibCheck` | Run the TypeScript check |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Technology

- Next.js 16.2.1 with the App Router
- React 19.2.4 and TypeScript 5
- Tailwind CSS 4 through `@tailwindcss/postcss`
- Axios for the waitlist API request
- Framer Motion, Lucide React, React Icons, and React Hook Form
- GitHub Actions for CI and SSH/PM2 deployment

## Important locations

- `app/`: routes and page-level composition
- `components/`: reusable page sections and UI components
- `context/WaitlistContext.tsx`: waitlist state and API integration
- `lib/axios.ts`: configured Axios client and API base URL
- `app/globals.css`: theme tokens, typography variables, shared styles, and motion
- `public/assets/`, `public/fonts/`, `public/downloads/`: static assets
- `.github/workflows/node-js.yml`: CI and deployment workflow

## Git workflow

Open a pull request into `main`. CI runs lint, TypeScript, and build checks. A successful push to `main` triggers deployment to the configured server. Do not commit credentials, `.env*` files, private keys, or generated `.next` output.

