# NAMU Museum — Архітектура проєкту

> Документ для Team Lead. Підготовлено перед командною розробкою.
> Стек: **Next.js 16 + TypeScript + App Router + CSS Modules**

---

## Зміст

1. [Аналіз макету (Етап 1)](#1-аналіз-макету)
2. [Архітектура проєкту (Етап 2)](#2-архітектура-проєкту)
3. [Design System (Етап 3)](#3-design-system)
4. [Component Tree (Етап 4)](#4-component-tree)
5. [Структура CSS (Етап 5)](#5-структура-css)
6. [Naming Convention (Етап 6)](#6-naming-convention)
7. [Git Flow (Етап 7)](#7-git-flow)
8. [Розподіл задач (Етап 8)](#8-розподіл-задач)
9. [Pre-dev Checklist (Етап 9)](#9-pre-dev-checklist)

---

## 1. Аналіз макету

**Макети:** `../namu-figma/` (Museum + Menu × 320/768/1280, Frame.png)

| Параметр      | Значення                                            |
| ------------- | --------------------------------------------------- |
| Сторінки      | 1 landing page                                      |
| Секції        | Header, Hero, Events, Gallery, Subscription, Footer |
| Breakpoints   | 320px, 768px, 1280px                                |
| «Про нас»     | Anchor `#about` — майбутня секція                   |
| «КВИТКИ»      | Modal (`TicketsModal`)                              |
| Gallery click | Lightbox (`GalleryLightbox`)                        |

### Уточнення від Team Lead

- Шрифти: IBM Plex Sans, Montserrat, Roboto
- Hover states: `namu-figma/Frame.png`
- Репозиторій: `namu-museum` (існуючий)

---

## 2. Архітектура проєкту

### Чому саме така структура

| Принцип                | Рішення                                        |
| ---------------------- | ---------------------------------------------- |
| **Паралельна робота**  | Секції ізольовані в `sections/`, UI Kit окремо |
| **Масштабованість**    | Feature-компоненти відокремлені від UI Kit     |
| **Next.js App Router** | Routing лише в `app/`, UI — в `components/`    |
| **CSS Modules**        | Стилі колocated з компонентом                  |
| **Mock data**          | `constants/` — єдине джерело даних до CMS      |
| **Design tokens**      | `styles/` — глобальні змінні, не в компонентах |

### Дерево папок

```
namu-museum/
├── .husky/
│   └── pre-commit
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── docs/
│   ├── ARCHITECTURE.md          ← цей файл
│   └── CHECKLIST.md
├── public/
│   ├── icons/
│   └── images/
│       ├── hero/
│       ├── events/
│       ├── gallery/
│       └── subscription/
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← root layout, fonts, metadata
│   │   ├── page.tsx             ← збірка секцій (інтеграція)
│   │   └── globals.css          ← entry point стилів
│   ├── components/
│   │   ├── layout/              ← Header, Footer, NavMenu, Container, Section
│   │   ├── sections/            ← Hero, Events, Gallery, Subscription, About
│   │   ├── ui/                  ← UI Kit (атоми)
│   │   └── features/            ← EventCard, GalleryGrid, Modal, Lightbox
│   ├── constants/               ← mock data, nav, schedule, contacts
│   ├── hooks/                   ← useScrollLock, useMediaQuery, useModal
│   ├── lib/                     ← fonts.ts
│   ├── services/                ← API (майбутнє)
│   ├── styles/                  ← design tokens (CSS)
│   ├── types/                   ← TypeScript interfaces
│   └── utils/                   ← pure functions
├── CONTRIBUTING.md
├── package.json
└── tsconfig.json                ← alias @/* → ./src/*
```

### Призначення директорій

| Директорія             | Призначення                                             |
| ---------------------- | ------------------------------------------------------- |
| `app/`                 | Next.js routes, layout, metadata, page assembly         |
| `components/layout/`   | Глобальний каркас: header, footer, menu, container      |
| `components/sections/` | Секції landing page — 1 папка = 1 секція                |
| `components/ui/`       | UI Kit — атомарні компоненти без бізнес-логіки          |
| `components/features/` | Складні компоненти: cards, slider, modal, lightbox      |
| `constants/`           | Статичні дані: events, gallery, nav, schedule           |
| `hooks/`               | Client-side React hooks                                 |
| `lib/`                 | Конфігурація сторонніх модулів (fonts)                  |
| `services/`            | API-шар (поки порожній)                                 |
| `styles/`              | Глобальні CSS: variables, typography, reset, animations |
| `types/`               | Shared TypeScript types                                 |
| `utils/`               | Pure utility functions                                  |
| `public/`              | Статичні assets (images, icons, favicon)                |

### ⚠️ Legacy папки (видалити вручну)

Якщо існують старі порожні папки — видалити перед стартом:

```
src/components/Footer/
src/components/Gallery/
src/components/Header/
src/components/Hero/
src/components/SectionActual/
src/components/Subscribe/
src/layout/
```

---

## 3. Design System

> Токени визначені в `src/styles/variables.css`

### Кольори

| Token                  | Value                | Використання                      |
| ---------------------- | -------------------- | --------------------------------- |
| `--color-white`        | `#ffffff`            | Background                        |
| `--color-black`        | `#0f0e08`            | Text, headings                    |
| `--color-primary`      | `#1a5744`            | Menu bg, CTA icon box, active dot |
| `--color-primary-dark` | `#144036`            | Hover on primary                  |
| `--color-accent`       | `#d0413d`            | Submit button, red marker         |
| `--color-accent-hover` | `#b83834`            | Hover on accent                   |
| `--color-gray-500`     | `#687383`            | Secondary text, labels            |
| `--color-gray-100`     | `#e0e0e0`            | Borders, dividers                 |
| `--color-overlay`      | `rgba(15,14,8,0.55)` | Subscription bg overlay           |

### Шрифти

| Token             | Font          | Призначення          |
| ----------------- | ------------- | -------------------- |
| `--font-family`   | IBM Plex Sans | Body, labels, dates  |
| `--second-family` | Montserrat    | Headings, display    |
| `--third-family`  | Roboto        | Fallback / secondary |

### Typography Scale

| Token              | Desktop | Mobile |
| ------------------ | ------- | ------ |
| `--font-size-3xl`  | 88px    | 48px   |
| `--font-size-2xl`  | 48px    | 32px   |
| `--font-size-xl`   | 32px    | 32px   |
| `--font-size-lg`   | 24px    | 24px   |
| `--font-size-base` | 16px    | 16px   |
| `--font-size-sm`   | 14px    | 14px   |
| `--font-size-xs`   | 12px    | 12px   |

Utility classes: `.display`, `.heading-section`, `.heading-card`, `.label`, `.body`, `.caption`, `.date`

### Border Radius

`0px` — гострі кути по всьому макету (`--radius-none`)

### Shadows

| Token         | Value                           |
| ------------- | ------------------------------- |
| `--shadow-sm` | `0 2px 8px rgba(15,14,8,0.08)`  |
| `--shadow-md` | `0 4px 16px rgba(15,14,8,0.12)` |
| `--shadow-lg` | `0 8px 32px rgba(15,14,8,0.16)` |

Featured Event card — `--shadow-md`

### Z-index

| Token          | Value | Element         |
| -------------- | ----- | --------------- |
| `--z-base`     | 1     | Default         |
| `--z-header`   | 100   | Header          |
| `--z-menu`     | 200   | NavMenu overlay |
| `--z-modal`    | 300   | TicketsModal    |
| `--z-lightbox` | 400   | GalleryLightbox |

### Transition / Animation

| Token               | Value                              |
| ------------------- | ---------------------------------- |
| `--transition-fast` | 150ms ease                         |
| `--transition-base` | 200ms ease                         |
| `--transition-slow` | 300ms ease                         |
| `--transition-menu` | 400ms cubic-bezier(0.4, 0, 0.2, 1) |

Keyframes: `fade-in`, `slide-down`, `slide-up`, `pulse-scroll` — в `animations.css`

### Opacity

| Token                | Value |
| -------------------- | ----- |
| `--opacity-overlay`  | 0.55  |
| `--opacity-hover`    | 0.85  |
| `--opacity-disabled` | 0.5   |

### Breakpoints

| Name | Value  | Media query                  |
| ---- | ------ | ---------------------------- |
| xs   | 320px  | default (mobile-first)       |
| sm   | 768px  | `@media (min-width: 768px)`  |
| lg   | 1280px | `@media (min-width: 1280px)` |

JS constants: `src/constants/breakpoints.ts`

### Container

| Token                    | Value  |
| ------------------------ | ------ |
| `--container-max-width`  | 1280px |
| `--container-padding-xs` | 20px   |
| `--container-padding-sm` | 40px   |
| `--container-padding-lg` | 55px   |

### Grid

12-column grid, gap: 20px (mobile) → 30px (tablet) → 50px (desktop)

### Spacing System

8px base: `--space-1` (4px) … `--space-24` (100px)

Section spacing: `--space-section-xs` (70px), `--space-section-sm` (100px), `--space-section-lg` (110px)

---

## 4. Component Tree

```
page.tsx
└── SiteLayout
    ├── Header
    │   ├── Logo
    │   ├── IconButton (burger)
    │   └── NavMenu [client]
    │       ├── IconButton (close)
    │       ├── NavLink × 4
    │       ├── Divider (vertical)
    │       └── ScheduleList
    ├── main
    │   ├── HeroSection
    │   │   ├── ScrollIndicator (desktop)
    │   │   ├── Button (primary → TicketsModal)
    │   │   └── Image (hero)
    │   ├── EventsSection [#events]
    │   │   ├── SectionHeading
    │   │   ├── EventCard (default) × 2
    │   │   └── EventCard (featured) × 1
    │   ├── GallerySection [#gallery]
    │   │   ├── SectionHeading
    │   │   ├── GalleryGrid (desktop)
    │   │   ├── GallerySlider (mobile/tablet)
    │   │   │   └── SliderDots
    │   │   └── GalleryLightbox [client]
    │   ├── SubscriptionSection
    │   │   └── SubscriptionForm
    │   │       ├── Input
    │   │       └── Button (submit)
    │   └── AboutSection [#about] — placeholder
    ├── Footer [#contacts]
    │   ├── Logo
    │   ├── SocialLinks
    │   ├── ScheduleList
    │   ├── ContactInfo
    │   ├── NavLink × 4
    │   └── Copyright
    └── TicketsModal [client]
```

### Класифікація

| Категорія    | Компоненти                                                                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Layout**   | SiteLayout, Header, Footer, NavMenu, Container, Section                                                                                      |
| **Sections** | Hero, Events, Gallery, Subscription, About                                                                                                   |
| **UI**       | Button, Input, Logo, Icon, IconButton, SectionHeading, NavLink, Divider, SliderDots, ScrollIndicator, ScheduleList, ContactInfo, SocialLinks |
| **Features** | EventCard, GalleryGrid, GallerySlider, GalleryLightbox, SubscriptionForm, TicketsModal                                                       |

### Залежності (граф)

```
constants/types ──→ ui ──→ features ──→ sections ──→ layout ──→ page
hooks ──→ features (client-only)
styles ──→ globals.css ──→ всі CSS Modules (через var())
```

**Правило імпортів:**

- `ui/` → тільки `types/`, `constants/`, `styles/`
- `features/` → `ui/`, `hooks/`, `types/`, `constants/`
- `sections/` → `features/`, `ui/`, `layout/`
- `layout/` → `ui/`, `features/`, `constants/`
- `page.tsx` → `layout/`, `sections/`

---

## 5. Структура CSS

```
src/styles/
├── reset.css        ← normalize: box-sizing, margins, lists
├── variables.css    ← design tokens (colors, spacing, z-index)
├── typography.css   ← utility classes + base body styles
└── animations.css   ← keyframes + prefers-reduced-motion

src/app/
└── globals.css      ← entry: @import styles/* + sr-only + main flex
```

| Файл             | Призначення                                                |
| ---------------- | ---------------------------------------------------------- |
| `reset.css`      | CSS reset: box-sizing, zero margins, list-style, img block |
| `variables.css`  | CSS custom properties — єдине джерело design tokens        |
| `typography.css` | Base body font + utility classes (.display, .label, .date) |
| `animations.css` | @keyframes + reduced motion media query                    |
| `globals.css`    | Entry point, imports, layout utilities (.sr-only)          |
| `*.module.css`   | Component-scoped styles — використовують `var(--token)`    |

**Правило:** компонентні стилі — тільки в `ComponentName.module.css`. Не дублювати tokens.

---

## 6. Naming Convention

### Компоненти

| Тип             | Convention     | Приклад                                   |
| --------------- | -------------- | ----------------------------------------- |
| React component | PascalCase     | `EventCard`                               |
| File            | PascalCase.tsx | `EventCard.tsx`                           |
| Folder          | PascalCase     | `EventCard/`                              |
| Barrel export   | index.ts       | `export { EventCard } from "./EventCard"` |

### CSS Modules

| Елемент  | Convention               | Приклад                           |
| -------- | ------------------------ | --------------------------------- |
| File     | ComponentName.module.css | `EventCard.module.css`            |
| Class    | camelCase                | `.eventCard`, `.eventCardTitle`   |
| Modifier | camelCase                | `.buttonPrimary`, `.buttonSubmit` |
| State    | camelCase / data-attr    | `.isOpen`, `.isActive`            |

### Hooks

| Тип    | Convention       | Приклад            |
| ------ | ---------------- | ------------------ |
| File   | use + PascalCase | `useScrollLock.ts` |
| Export | use + PascalCase | `useScrollLock`    |

### Types / Interfaces

| Тип        | Convention          | Приклад                |
| ---------- | ------------------- | ---------------------- |
| Interface  | PascalCase          | `Event`, `GalleryItem` |
| Type alias | PascalCase          | `EventVariant`         |
| Props      | Component + Props   | `EventCardProps`       |
| File       | camelCase або index | `types/index.ts`       |

### Enums / Constants

| Тип             | Convention      | Приклад                             |
| --------------- | --------------- | ----------------------------------- |
| Constant object | SCREAMING_SNAKE | `NAV_LINKS`, `BREAKPOINTS`          |
| Enum            | PascalCase      | `EventVariant` (prefer union types) |
| File            | camelCase       | `navigation.ts`, `events.ts`        |

### Utils

| Тип      | Convention | Приклад            |
| -------- | ---------- | ------------------ |
| Function | camelCase  | `validateEmail`    |
| File     | camelCase  | `validateEmail.ts` |

### Git branches

| Pattern    | Приклад                             |
| ---------- | ----------------------------------- |
| feature/*  | `feature/ui-kit-button`             |
| fix/*      | `fix/gallery-slider-dots`           |
| refactor/* | `refactor/events-section-structure` |

---

## 7. Git Flow

```
main ─────────────────────────────────────── production
  │
develop ──── integration branch ──────────── daily work
  │
  ├── feature/ui-kit
  ├── feature/header-nav-menu
  ├── feature/hero-section
  ├── feature/events-section
  ├── feature/gallery-section
  ├── feature/subscription-footer
  └── feature/page-integration
```

| Branch       | Призначення                                                         |
| ------------ | ------------------------------------------------------------------- |
| `main`       | Production-ready код. Merge тільки з `release/*` або `hotfix/*`     |
| `develop`    | Integration branch. Feature PRs merge сюди                          |
| `feature/*`  | Нова функціональність. Відгалуження від `develop`                   |
| `fix/*`      | Bug fix. Відгалуження від `develop` (або `main` для hotfix)         |
| `refactor/*` | Рефакторинг без зміни поведінки                                     |
| `release/*`  | Підготовка релізу: `release/v1.0.0`                                 |
| `hotfix/*`   | Критичний fix в production. Від `main` → merge в `main` + `develop` |

### Pull Request Rules

1. **Base branch:** `develop` (не `main`)
2. **1 PR = 1 feature/fix** — не змішувати секції
3. **Naming:** `[feature] Header + NavMenu` / `[fix] Gallery slider dots`
4. **Review:** мінімум 1 approve перед merge
5. **Checks:** `npm run lint`, `npm run typecheck`, `npm run build` — pass
6. **Conflicts:** автор PR вирішує conflicts
7. **No direct push** to `main` / `develop`
8. **Screenshots** — обов'язково для UI PR (desktop + mobile)
9. **Scope:** PR не чіпає чужі секції

---

## 8. Розподіл задач

### Фаза 0 — Foundation (Team Lead / 1 dev)

- Design tokens ✅ (зроблено)
- Constants + types ✅ (зроблено)
- Tooling ✅ (зроблено)
- UI Kit — **блокер для всіх**

### Фаза 1 — UI Kit

| Dev       | Задача | Branch           | Файли                 |
| --------- | ------ | ---------------- | --------------------- |
| **Dev 1** | UI Kit | `feature/ui-kit` | `src/components/ui/*` |

Компоненти: Button, Input, Logo, Icon, IconButton, SectionHeading, NavLink, Divider, SliderDots, ScrollIndicator, ScheduleList, ContactInfo, SocialLinks

### Фаза 2 — Секції (паралельно після UI Kit)

| Dev       | Задача                | Branch                        | Файли                                                                              |
| --------- | --------------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| **Dev 2** | Header + NavMenu      | `feature/header-nav-menu`     | `layout/Header/`, `layout/NavMenu/`                                                |
| **Dev 3** | Hero                  | `feature/hero-section`        | `sections/Hero/`, `features/TicketsModal/`                                         |
| **Dev 4** | Events                | `feature/events-section`      | `sections/Events/`, `features/EventCard/`                                          |
| **Dev 5** | Gallery               | `feature/gallery-section`     | `sections/Gallery/`, `features/GalleryGrid/`, `GallerySlider/`, `GalleryLightbox/` |
| **Dev 6** | Subscription + Footer | `feature/subscription-footer` | `sections/Subscription/`, `layout/Footer/`, `features/SubscriptionForm/`           |

### Фаза 3 — Integration

| Dev           | Задача        | Branch                     | Файли                                                                        |
| ------------- | ------------- | -------------------------- | ---------------------------------------------------------------------------- |
| **Team Lead** | Page assembly | `feature/page-integration` | `app/page.tsx`, `layout/SiteLayout/`, `layout/Container/`, `layout/Section/` |

### Hooks (розподіл)

| Hook                        | Dev                                    |
| --------------------------- | -------------------------------------- |
| `useScrollLock`, `useModal` | Dev 2 (NavMenu) + Dev 3 (TicketsModal) |
| `useMediaQuery`             | Dev 5 (Gallery)                        |
| `useGallerySlider`          | Dev 5 (Gallery)                        |

### Як уникнути конфліктів

1. Кожен dev працює **тільки в своїй папці**
2. Shared зміни (types, constants) — через окремий PR Team Lead
3. `page.tsx` — тільки Team Lead на фазі integration
4. UI Kit merge першим — всі залежать від нього
5. `globals.css` / `variables.css` — зміни тільки через Team Lead PR

---

## 9. Pre-dev Checklist

Див. [CHECKLIST.md](./CHECKLIST.md)

---

## Швидкий старт для розробника

```bash
cd namu-museum
npm install
npm run dev
```

```bash
# Перед PR
npm run lint
npm run typecheck
npm run build
```

Alias imports: `@/components/...`, `@/constants/...`, `@/types/...`
