# Layout Components

Компоненти глобального каркасу сторінки.

| Папка         | Статус  | Відповідальність                                 |
| ------------- | ------- | ------------------------------------------------ |
| `SiteLayout/` | ✅      | Обгортка сторінки: Header + main + Footer        |
| `Header/`     | ✅ stub | Логотип, burger, sticky/fixed поведінка          |
| `NavMenu/`    | ✅ stub | Overlay-меню (desktop strip / mobile fullscreen) |
| `Footer/`     | ✅ stub | Footer з контактами, графіком, nav               |
| `Container/`  | ✅      | Max-width контейнер з responsive padding         |
| `Section/`    | ✅      | Обгортка секції з vertical spacing               |

**Import:**

```tsx
import { SiteLayout, Container, Section } from "@/components/layout";
```

**Composition:**

```tsx
<SiteLayout header={<Header />} footer={<Footer />}>
  <Section spacing="flush">
    <HeroSection />
  </Section>

  <Section id="events">
    <Container>
      <EventsSection />
    </Container>
  </Section>
</SiteLayout>
```

**Section spacing:**

| Prop      | Padding                           |
| --------- | --------------------------------- |
| `default` | 70px → 100px → 110px              |
| `compact` | 48px                              |
| `flush`   | 0 (Hero, Subscription full-bleed) |

**Залежності:** `ui/*`, `constants/*`
