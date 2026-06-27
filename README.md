# NAMU Museum

Landing page for the National Art Museum of Ukraine (NAMU).

**Stack:** Next.js 16 · TypeScript · App Router · CSS Modules

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command                | Description        |
| ---------------------- | ------------------ |
| `npm run dev`          | Development server |
| `npm run build`        | Production build   |
| `npm run lint`         | ESLint check       |
| `npm run lint:fix`     | ESLint auto-fix    |
| `npm run format`       | Prettier format    |
| `npm run format:check` | Prettier check     |
| `npm run typecheck`    | TypeScript check   |

## Project Structure

```
src/
├── app/           → Next.js routes & layout
├── components/
│   ├── layout/    → Header, Footer, NavMenu
│   ├── sections/  → Hero, Events, Gallery, Subscription
│   ├── ui/        → UI Kit (Button, Input, Logo…)
│   └── features/  → EventCard, GallerySlider, Modal…
├── constants/     → Mock data & site config
├── hooks/         → Client-side hooks
├── styles/        → Design tokens (CSS)
└── types/         → TypeScript types
```

## Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md) — full project architecture
- [Pre-dev Checklist](./docs/CHECKLIST.md) — setup status
- [Contributing Guide](./CONTRIBUTING.md) — git flow & PR rules

## Design

Mockups: `../namu-figma/`

## Team

See [Architecture §8](./docs/ARCHITECTURE.md#8-розподіл-задач) for task distribution.
