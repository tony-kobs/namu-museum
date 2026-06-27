# Contributing — NAMU Museum

## Git Flow

```
main        ← production
develop     ← integration (PR target)
feature/*   ← new features
fix/*       ← bug fixes
refactor/*  ← refactoring
release/*   ← release preparation
hotfix/*    ← critical production fixes
```

## Workflow

1. `git checkout develop && git pull`
2. `git checkout -b feature/your-task`
3. Implement in your assigned folder only
4. Run checks:
   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```
5. Commit with clear message:
   ```
   feat(ui): add Button component with primary variant
   fix(gallery): correct slider dot active state
   ```
6. Push and open PR to `develop`
7. Add screenshots (desktop 1280px + mobile 320px)
8. Wait for 1 review approval

## Commit Convention

```
<type>(<scope>): <description>
```

| Type       | Usage                               |
| ---------- | ----------------------------------- |
| `feat`     | New feature                         |
| `fix`      | Bug fix                             |
| `refactor` | Code change without behavior change |
| `style`    | CSS/formatting                      |
| `docs`     | Documentation                       |
| `chore`    | Tooling, deps                       |

## PR Rules

- Base branch: **develop**
- One feature per PR
- No changes outside your assigned scope
- No direct push to `main` or `develop`
- Shared files (`variables.css`, `types/`, `constants/`) — coordinate with Team Lead

## Code Standards

- TypeScript strict mode
- CSS Modules for component styles
- Design tokens via `var(--token)` — no hardcoded colors
- Data from `constants/` — no inline mock data in components
- `"use client"` only when needed (interactivity, hooks, browser APIs)
- Images via `next/image` with width/height from constants

## Folder Ownership

| Developer | Folders                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------- |
| Dev 1     | `src/components/ui/`                                                                              |
| Dev 2     | `src/components/layout/Header/`, `NavMenu/`                                                       |
| Dev 3     | `src/components/sections/Hero/`, `features/TicketsModal/`                                         |
| Dev 4     | `src/components/sections/Events/`, `features/EventCard/`                                          |
| Dev 5     | `src/components/sections/Gallery/`, `features/GalleryGrid/`, `GallerySlider/`, `GalleryLightbox/` |
| Dev 6     | `src/components/sections/Subscription/`, `layout/Footer/`, `features/SubscriptionForm/`           |
| Team Lead | `app/page.tsx`, `layout/SiteLayout/`, shared config                                               |

Full architecture: [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)
