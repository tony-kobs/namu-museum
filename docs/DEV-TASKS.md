# Задачі для команди — NAMU Landing

> Макет: `../namu-figma/` (320 / 768 / 1280 px)  
> Дані: `src/data/index.ts`  
> UI Kit: `src/components/ui/` (готовий)  
> Стилі: CSS Modules + змінні з `styles/variables.css`

---

## Загальні правила для всіх

1. Працюй **тільки у своїй папці** — не чіпай чужі компоненти.
2. **Не змінюй** `page.tsx`, `data/index.ts`, `globals.css` без узгодження з Team Lead.
3. Кожен компонент = `Component.tsx` + `Component.module.css`.
4. Картинки — через `next/image`, шляхи з `data/`.
5. Інтерактив (меню, slider, modal) — `"use client"` на початку файлу.
6. Перед PR: `npm run lint` і `npm run build`.
7. Гілка: `feature/назва-задачі` → PR у `develop`.

---

## Dev 1 — UI Kit ✅ (готово)

**Папка:** `src/components/ui/`

**Статус:** UI Kit зібраний Team Lead.

**Завдання (якщо Dev 1 є в команді):**

- Перевірити компоненти на макеті `Frame.png`.
- Допомагати іншим з import:

  ```tsx
  import { Button, Logo } from "@/components/ui";
  ```

- Не змінювати API компонентів без обговорення.

---

## Dev 2 — Header + Mobile Menu

**Папка:** `src/components/Header/`  
**Гілка:** `feature/header`

### Що зробити

Заглушка вже є — зібрати Header з UI Kit:

| Елемент       | UI компонент                                     |
| ------------- | ------------------------------------------------ |
| Логотип       | `Logo`                                           |
| Burger        | `IconButton` (`icon="burger"`)                   |
| Меню          | окремий файл `HeaderMenu.tsx`                    |
| Посилання     | `NavLink` (`variant="menu"`)                     |
| Графік у меню | `ScheduleList` (`variant="menu"`)                |
| Close         | `IconButton` (`icon="close"`, `variant="close"`) |

### Дані

```tsx
import { NAV_LINKS } from "@/data";
```

### Поведінка

- `"use client"` + `useState` для open/close меню
- **Mobile (320):** меню fullscreen, зелений фон
- **Desktop (1280):** меню — смуга зверху, hero видно знизу
- При відкритті — заблокувати scroll body
- Закриття: ×, клік по посиланню, Escape

### Макет

`Menu_320.png`, `Menu_768.png`, `Menu_1280.png`

---

## Dev 3 — Hero

**Папка:** `src/components/Hero/`  
**Гілка:** `feature/hero`

### Що зробити

| Елемент                    | Джерело                                    |
| -------------------------- | ------------------------------------------ |
| Заголовок «ХУДОЖНІЙ МУЗЕЙ» | `HERO.title` з `@/data`                    |
| Кнопка «КВИТКИ»            | `Button` + `HERO.ctaLabel`                 |
| Фото музею                 | `next/image`, файл у `public/images/hero/` |
| Scroll indicator           | `ScrollIndicator` (desktop only)           |
| Container                  | `Container` для вирівнювання               |

### Адаптив

- **Desktop:** текст зліва, фото справа
- **Mobile:** фото → заголовок → кнопка

### Додатково

- Кнопка «КВИТКИ» відкриває modal (можна заглушку `TicketsModal.tsx` у цій же папці)
- Header fixed — додай `padding-top` у Hero, щоб контент не ховався під шапкою

### Макет

Верхня частина `Museum_*.png`

---

## Dev 4 — Events (Актуальні події)

**Папка:** `src/components/Events/`  
**Гілка:** `feature/events`

### Що зробити

Секція вже має `id="events"` і заголовок — доповнити картками.

```tsx
import { fetchEvents } from "@/services/eventServices";
// дані приходять з mockAPI, не з @/data
```

### Два типи карток

| Тип          | Опис                                         |
| ------------ | -------------------------------------------- |
| **default**  | фото + категорія + дата + заголовок + опис   |
| **featured** | full-width фото + біла картка знизу (лекція) |

### UI

- `SectionHeading` — вже є
- `Icon name="red-square"` — біля заголовку події
- Категорія — uppercase, сірий колір
- Дата — зелений акcent

### Адаптив

- **Desktop:** default-картки горизонтально (фото зліва)
- **Mobile:** все вертикально

### Файли

`EventCard.tsx` можна створити в цій же папці.

---

## Dev 5 — Gallery (Галерея)

**Папка:** `src/components/Gallery/`  
**Гілка:** `feature/gallery`

### Що зробити

```tsx
import { fetchGallery } from "@/services/galleryServices";
// 4 зображення з mockAPI
```

### Адаптив

| Breakpoint | Layout                                     |
| ---------- | ------------------------------------------ |
| ≥ 1280px   | CSS Grid, 4 фото різних розмірів (masonry) |
| < 1280px   | горизонтальний slider + `SliderDots`       |

### Поведінка

- Клік на фото → **lightbox** (fullscreen overlay)
- Slider: swipe на mobile, dots з `SliderDots`

### Файли (опційно в папці Gallery)

- `GalleryGrid.tsx` — desktop
- `GallerySlider.tsx` — mobile/tablet (`"use client"`)
- `GalleryLightbox.tsx` — lightbox (`"use client"`)

### Макет

Секція «Галерея» в `Museum_*.png`

---

## Dev 6 — Footer + Subscribe

**Папки:** `src/components/Footer/` + `src/components/Subscribe/`  
**Гілка:** `feature/footer-subscribe`

### Footer

Заглушка є — зібрати з UI Kit:

| Блок             | UI компонент                                 |
| ---------------- | -------------------------------------------- |
| Лого + соцмережі | `Logo`, `SocialLinks`                        |
| Графік           | `ScheduleList` (`variant="footer"`)          |
| Контакти         | `ContactInfo`                                |
| Nav              | `NavLink` (`variant="footer"`) + `NAV_LINKS` |
| Copyright        | `SITE.copyright`, `SITE.designer`            |
| Розділювачі      | `Divider`                                    |

- Обгортка: `Container`
- `id="contacts"` — вже є

### Subscribe (Підписка)

| Елемент               | Джерело                       |
| --------------------- | ----------------------------- |
| Фонове фото + overlay | `public/images/subscription/` |
| Заголовок + текст     | `SUBSCRIPTION` з `@/data`     |
| Email input           | `Input`                       |
| Кнопка submit         | `Button variant="submit"`     |

Input + button в один ряд (як на макеті).

### Макет

`Frame.png`, низ `Museum_1280.png`

---

## Team Lead

- Стежить за merge PR у `develop`
- `page.tsx` — не чіпати без потреби (збірка вже є)
- `data/index.ts` — зміни тільки через окремий PR
- Ревʼю: desktop 1280px + mobile 320px, скріншоти в PR

---

## Порядок merge (рекомендований)

```
1. UI Kit        ✅ (готово)
2. Header        → Dev 2
3. Hero          → Dev 3
4. Events        → Dev 4
5. Gallery       → Dev 5
6. Footer + Subscribe → Dev 6
```

Dev 2–6 можуть працювати **паралельно** — кожен у своїй папці.

---

## Чеклист перед PR

- [ ] Виглядає як макет на 320 / 768 / 1280
- [ ] Використовуються `var(--...)` з `variables.css`
- [ ] Дані з `@/data`, без hardcode текстів
- [ ] `npm run lint` ✅
- [ ] `npm run build` ✅
- [ ] Скріншоти desktop + mobile в PR
