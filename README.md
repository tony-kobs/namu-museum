# NAMU Museum

Навчальний landing page — National Art Museum of Ukraine.

**Стек:** Next.js · TypeScript · App Router · CSS Modules

## Запуск

```bash
npm install
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000)

## Структура проєкту

```
src/
├── app/
│   ├── layout.tsx      ← шрифти, metadata
│   ├── page.tsx        ← збірка сторінки
│   └── globals.css     ← базові стилі + CSS-змінні
├── components/
│   ├── Header/         ← шапка + меню
│   ├── Footer/         ← підвал
│   ├── Hero/           ← перший екран
│   ├── Events/         ← актуальні події
│   ├── Gallery/        ← галерея
│   ├── Subscribe/      ← підписка
│   ├── Container/      ← обгортка по ширині макету
│   └── ui/             ← кнопки, іконки, лого (спільні)
├── data/
│   └── index.ts        ← типи, тексти сайту, nav, контакти (НЕ події/галерея)
└── services/
    ├── eventServices.ts   ← mockAPI /events
    └── galleryServices.ts ← mockAPI /gallery
└── styles/
    └── variables.css   ← кольори, відступи, шрифти
```

## Як зібрана сторінка

`page.tsx` — просто список секцій зверху вниз:

```tsx
<Header />
<main>
  <Hero />
  <Events />
  <Gallery />
  <Subscribe />
</main>
<Footer />
```

## Розподіл задач у команді

| Хто   | Папка                                                                 |
| ----- | --------------------------------------------------------------------- |
| Dev 1 | `components/ui/` (вже готово)                                         |
| Dev 2 | `components/Header/` — Logo, IconButton, меню (`@/components/ui`)     |
| Dev 3 | `components/Hero/`                                                    |
| Dev 4 | `components/Events/`                                                  |
| Dev 5 | `components/Gallery/`                                                 |
| Dev 6 | `components/Footer/` + `Subscribe/` — з `@/components/ui` та `@/data` |

Кожен працює у **своїй папці** — менше конфліктів у Git.

## Git

- Гілка `develop` — основна для роботи
- `feature/hero`, `feature/events` — окремі задачі
- PR в `develop`, перед merge: `npm run lint && npm run build`

## Макет

Файли макету: `../namu-figma/`

## База данних mockapi

const BASE_URL = "https://6a450e04aab3faec3f6952a2.mockapi.io/namu/:endpoint";

const events = await fetch(`${BASE_URL}/events`);
const gallery = await fetch(`${BASE_URL}/gallery`);

## Задачі для команди

Детальні підказки кожному розробнику: [docs/DEV-TASKS.md](./docs/DEV-TASKS.md)
