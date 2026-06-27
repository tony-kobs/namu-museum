# Hooks

Client-side hooks для інтерактивних компонентів.

| Hook               | Призначення                                  | Використовується в                     |
| ------------------ | -------------------------------------------- | -------------------------------------- |
| `useScrollLock`    | Блокує scroll body при відкритому menu/modal | NavMenu, TicketsModal, GalleryLightbox |
| `useMediaQuery`    | Responsive breakpoints (768, 1280)           | Gallery, NavMenu                       |
| `useGallerySlider` | Carousel state + swipe                       | GallerySlider                          |
| `useModal`         | Open/close + Escape + focus trap             | TicketsModal, GalleryLightbox          |

**Правило:** hooks з `"use client"` — тільки якщо потрібен client runtime.
