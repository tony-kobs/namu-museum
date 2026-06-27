# Pre-dev Checklist

> Статус підготовки проєкту NAMU Museum

## Ініціалізація

- [x] Next.js проєкт (`namu-museum`)
- [x] TypeScript
- [x] App Router
- [x] Alias `@/*` → `./src/*`

## Tooling

- [x] ESLint (`eslint-config-next` + `eslint-config-prettier`)
- [x] Prettier (`.prettierrc`)
- [x] Husky (`prepare` script)
- [x] lint-staged (pre-commit)
- [x] `.editorconfig`
- [x] VS Code settings + extensions recommendations
- [x] npm scripts: `lint`, `lint:fix`, `format`, `format:check`, `typecheck`

## Design System

- [x] `src/styles/variables.css` — design tokens
- [x] `src/styles/typography.css` — typography utilities
- [x] `src/styles/reset.css` — CSS reset
- [x] `src/styles/animations.css` — keyframes
- [x] `src/app/globals.css` — entry point

## Fonts

- [x] IBM Plex Sans (`--font-family`)
- [x] Montserrat (`--second-family`)
- [x] Roboto (`--third-family`)
- [x] `src/lib/fonts.ts` + підключення в `layout.tsx`
- [x] `lang="uk"` в `<html>`

## Data Layer

- [x] `src/types/index.ts`
- [x] `src/constants/navigation.ts`
- [x] `src/constants/schedule.ts`
- [x] `src/constants/contacts.ts`
- [x] `src/constants/social.ts`
- [x] `src/constants/events.ts`
- [x] `src/constants/gallery.ts`
- [x] `src/constants/site.ts`
- [x] `src/constants/anchors.ts`
- [x] `src/constants/breakpoints.ts`

## Структура папок

- [x] `src/components/layout/` + README
- [x] `src/components/sections/` + README
- [x] `src/components/ui/` + README
- [x] `src/components/features/` + README
- [x] `src/hooks/` + README
- [x] `src/utils/` + README
- [x] `src/services/` + README
- [x] `public/images/` (hero, events, gallery, subscription)
- [x] `public/icons/`

## Документація

- [x] `docs/ARCHITECTURE.md`
- [x] `docs/CHECKLIST.md`
- [x] `CONTRIBUTING.md`
- [x] `README.md`

## Ще потрібно зробити (Team Lead)

- [ ] Видалити legacy порожні папки (`src/components/Footer`, `Hero`, `SectionActual`, `src/layout/`)
- [ ] Додати зображення з макету в `public/images/`
- [ ] Замінити favicon на NAMU logo
- [ ] Створити GitHub repo + push
- [ ] Створити branch `develop` від `main`
- [ ] Налаштувати branch protection rules на GitHub
- [ ] Створити PR template (`.github/pull_request_template.md`)
- [ ] Роздати задачі команді (див. ARCHITECTURE.md §8)
- [ ] Kickoff meeting: пройти naming convention + git flow

## Перед стартом верстки (кожен dev)

- [ ] `git pull origin develop`
- [ ] `npm install`
- [ ] Прочитати `docs/ARCHITECTURE.md`
- [ ] Створити feature branch від `develop`
- [ ] Працювати тільки у своїй папці
- [ ] Використовувати tokens з `variables.css`
- [ ] Дані з `constants/`, не hardcode
- [ ] PR зі скріншотами desktop + mobile
