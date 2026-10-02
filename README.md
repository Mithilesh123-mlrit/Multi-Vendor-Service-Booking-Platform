# ServiceHub

ServiceHub is a multi-vendor marketplace for discovering local service professionals. Customers will be able to compare services, prices, and availability, book appointments, pay, track progress, communicate with providers, and leave reviews.

This repository currently contains **Module 01: Project Architecture and Setup**. Authentication, database models, bookings, payments, and role-based dashboards are intentionally out of scope until their modules are requested.

## Technology stack

- Next.js 16 App Router and React 19
- TypeScript with strict checking
- Tailwind CSS 4
- ESLint and Prettier
- Node.js REST route handlers (health endpoint starter)
- Planned for later modules: PostgreSQL, Prisma, secure authentication, Socket.IO, Vitest, Playwright, and Docker

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
git clone <repository-url>
cd Multi-Vendor-Service-Booking-Platform
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, copy the environment example with:

```powershell
Copy-Item .env.example .env.local
```

Open <http://localhost:3000>. The starter health endpoint is available at <http://localhost:3000/api/health>.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | No | Public application URL used for metadata. Defaults to `http://localhost:3000`. |

Only put non-secret values in variables prefixed with `NEXT_PUBLIC_`; Next.js exposes them in browser bundles. Local `.env*` files are ignored by Git, except `.env.example`.

## Development commands

```bash
npm run dev          # Start the local development server
npm run build        # Create a production build
npm run start        # Serve the production build
npm run lint         # Run ESLint
npm run typecheck    # Check TypeScript without emitting files
npm run format       # Format supported files with Prettier
npm run format:check # Check formatting without changing files
```

## Project structure

```text
app/                 App Router pages, layouts, error states, and API routes
  api/health/        Liveness endpoint
components/          Shared presentational components
features/            Future domain modules (services, providers, bookings, ...)
lib/                 Cross-cutting configuration and utilities
  env.ts             Validated public runtime configuration
public/              Static assets
```

Keep route handlers focused on HTTP concerns, place reusable UI in `components/`, and add future business capabilities under `features/` with server-side validation and logic separated from presentation.
