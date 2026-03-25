# Madasa Collective — Top-Down Architectural Analysis

> Generated: 2026-03-25

---

## 1. Project Overview

**Project Name:** Madasa Collective
**Type:** Professional Services Website (B2B/B2C Digital Agency)
**Purpose:** Portfolio and lead-generation platform for a digital collective specializing in branding, product design, and web development
**Location:** Santa Barbara, California

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14.2.14 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3.3.0 + SCSS Modules |
| Animations | Framer Motion 11.0.5 |
| Email | Resend 3.2.0 + React Email 3.0.1 |
| Validation | Zod 3.23.8 |
| Security | Google reCAPTCHA (v2 + v3) |
| Analytics | Vercel Analytics + Speed Insights |
| Hosting | Vercel |

---

## 2. Directory Structure

```
madasacollective.com/
├── app/                              # Next.js App Router root
│   ├── (landing-page)/               # Route group — home page sections
│   │   ├── (cards-desktop)/
│   │   │   └── HeroCardsDesktop.tsx
│   │   ├── (cards-mobile)/
│   │   │   ├── HeroCardsMobile.module.scss
│   │   │   ├── HeroCardsMobileFormat.tsx
│   │   │   └── ScrollingHeroCardsMobile.tsx
│   │   ├── CallToAction.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── Hero.module.scss
│   │   ├── Hero.tsx
│   │   ├── OurServices.module.scss
│   │   ├── OurServices.tsx
│   │   └── Testimonial.tsx
│   ├── api/
│   │   └── verify-recaptcha/
│   │       └── route.ts              # POST — server-side reCAPTCHA verification
│   ├── contact-us/
│   │   ├── ContactForm.module.scss
│   │   ├── Form.tsx
│   │   └── page.tsx
│   ├── our-team/
│   │   ├── page.tsx
│   │   └── sections/
│   │       ├── CTA.tsx
│   │       ├── Developers.tsx
│   │       ├── Hero.tsx
│   │       ├── OurStory.tsx
│   │       └── TeamMembers.tsx
│   ├── projects-page/
│   │   ├── [slug]/
│   │   │   └── page.tsx              # Dynamic project detail
│   │   ├── page.tsx
│   │   └── sections/
│   │       ├── CTA.tsx
│   │       └── ProjectCard.tsx
│   ├── favicon.ico
│   ├── globals.css                   # Tailwind directives + global utilities
│   ├── layout.tsx                    # Root layout (fonts, providers, JSON-LD)
│   ├── opengraph-image.png
│   ├── page.tsx                      # Home page
│   ├── queries.scss                  # Shared SCSS breakpoint variables
│   └── sitemap.ts                    # Auto-generated XML sitemap
│
├── actions/
│   └── SendEmail.tsx                 # Server Action — contact form email send
│
├── components/                       # Shared/reusable components
│   ├── Header/
│   │   ├── Nav2/                     # Desktop navigation
│   │   ├── Nav2Button/               # Hamburger toggle
│   │   ├── index.jsx
│   │   └── style.module.scss
│   ├── scss/                         # Component-level SCSS modules
│   │   ├── CallToAction.module.scss
│   │   ├── CaseStudy.module.scss
│   │   ├── Designers.module.scss
│   │   ├── Footer.module.scss
│   │   ├── HeroCardsMobileFormat.module.scss
│   │   ├── OurStory.module.scss
│   │   ├── ProjectDetail.module.scss
│   │   ├── Projects.module.scss
│   │   ├── Sections.module.scss
│   │   ├── ServiceCardsDesktop.module.scss
│   │   └── Testimonial.module.scss
│   ├── ui/
│   │   ├── button.tsx                # Shadcn base button
│   │   └── carousel.tsx              # Embla carousel wrapper
│   ├── Arrow.tsx
│   ├── Button.tsx                    # Polymorphic button/link component
│   ├── CarouselIndicator.tsx
│   ├── ContactFormEmail.tsx          # React Email template
│   ├── CTABackground.tsx
│   ├── Footer.tsx
│   ├── GoogleReCaptchaWrapper.tsx
│   ├── Navbar.tsx
│   └── hamburgerIcon.tsx
│
├── context/
│   └── NavContext.tsx                # Hamburger open/close state
│
├── lib/
│   ├── BackendValidation.ts          # Server-side field validators
│   ├── ContactFormValidation.ts      # Zod contact form schema
│   ├── CustomDimensions.ts           # Dynamic sizing helpers
│   ├── FrontendValidation.ts
│   └── utils.ts                      # `cn()` — clsx + tailwind-merge
│
├── types/
│   ├── project.ts
│   └── team.ts
│
├── public/                           # Static assets (images, SVGs, video)
│   ├── case_study_*.png
│   ├── contact-icons/
│   ├── hero_*.svg/png
│   ├── landing-page-cards/
│   ├── logo/
│   │   └── letters/                  # A.png, C.png… for animated hero
│   └── team/
│
├── index.ts                          # Central data/content exports (~14 KB)
├── components.json                   # Shadcn/ui config
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 3. Routing & Entry Points

### URL → File Map

| URL | File |
|-----|------|
| `/` | `app/page.tsx` |
| `/contact-us` | `app/contact-us/page.tsx` |
| `/our-team` | `app/our-team/page.tsx` |
| `/projects-page` | `app/projects-page/page.tsx` |
| `/projects-page/[slug]` | `app/projects-page/[slug]/page.tsx` |
| `POST /api/verify-recaptcha` | `app/api/verify-recaptcha/route.ts` |

### Root Layout (`app/layout.tsx`)

- **Font:** Open Sans (weights 300/400/600/700) via Google Fonts
- **Providers:** `NavProvider`, `GoogleReCaptchaProvider`
- **Global Components:** `Header`, `Toaster` (react-hot-toast), `Footer`
- **Analytics:** `<Analytics />`, `<SpeedInsights />`
- **SEO:** JSON-LD Organization schema injected via `<script type="application/ld+json">`
- **Metadata:**
  - Title template: `%s | Madasa Collective`
  - OG image: `/opengraph-image.png`

### Home Page (`app/page.tsx`)

Five stacked sections:
1. `Hero` — animated logo letters (Framer Motion)
2. `OurServices` — service cards (desktop + mobile carousel)
3. `CaseStudy` — featured client work
4. `Testimonial` — client reviews
5. `CallToAction` — conversion CTA

---

## 4. Component Hierarchy

```
RootLayout
├── Header
│   ├── Nav2 (desktop navigation)
│   └── Nav2Button (hamburger toggle)
├── [Page Content]
│   ├── Home Page
│   │   ├── Hero
│   │   ├── OurServices
│   │   │   ├── HeroCardsDesktop
│   │   │   └── ScrollingHeroCardsMobile
│   │   │       └── HeroCardsMobileFormat
│   │   ├── CaseStudy
│   │   ├── Testimonial
│   │   └── CallToAction
│   ├── Our Team Page
│   │   ├── Hero
│   │   ├── OurStory
│   │   ├── TeamMembers (3D flip cards)
│   │   ├── Developers
│   │   └── CTA
│   ├── Projects Page
│   │   ├── ProjectCard (list)
│   │   └── CTA
│   ├── Project Detail Page (dynamic [slug])
│   └── Contact Page
│       └── Form (validation + reCAPTCHA + server action)
└── Footer
```

---

## 5. Styling Architecture

### Three-Layer Approach

1. **Tailwind CSS** — layout, spacing, typography, responsive utilities
2. **SCSS Modules** — complex component-specific rules, animations, BEM-ish naming
3. **CSS Variables** — design tokens for theme colors, dark mode, border radius

### Custom Tailwind Theme (`tailwind.config.ts`)

**Brand Colors:**
- `tertiary`: `#56B7CB` (teal/cyan)
- `quaternary`: `#DF4894` (pink)
- `fifth`: `#434A42` (charcoal)
- `btnColor`: `#A53860` (dark pink)

**Custom Breakpoints:**
- `mobile`: 394px
- `tablet`: 835px
- `small`: 950px
- `medium`: 1225px
- `wide`: 1440px
- `wideplus`: 2000px

### Button Utility Classes (`globals.css`)

- `.btn-blue` / `.btn-blue-fill` / `.btn-blue-white` — teal variants
- `.btn-pink` / `.btn-pink-fill` — pink variants
- All include hover, active, transition, and min-width rules

### 3D Card Effects

Team member cards use CSS `perspective` + `rotateY` for flip interaction (`.card-team`, `.front`, `.back`).

---

## 6. Data Layer

### Central Data File (`index.ts`)

All static content lives here (~14 KB):
- Testimonials array (2 client reviews)
- Case studies (landing page previews)
- Navigation links (including external Calendly link)
- Service card data (front/back images + descriptions)
- Team member cards (designers + developers)
- Contact form field definitions
- Full case study detail data (overview, challenge, approach, solution, impact)

### Form Submission Flow

```
User submits form
     │
     ▼
Client-side Zod validation (ContactFormValidation.ts)
     │
     ▼
reCAPTCHA v2 token check → POST /api/verify-recaptcha
     │
     ▼
Server Action: sendEmail() (actions/SendEmail.tsx)
     │
     ├── BackendValidation (lib/BackendValidation.ts)
     │
     └── Resend API → ContactFormEmail template → ethan.flores.js@gmail.com
          │
          ▼
     Toast notification (success / error)
```

### API Route: `POST /api/verify-recaptcha`

1. Receives `{ token }` from client
2. Forwards to Google reCAPTCHA verification endpoint
3. Returns `{ success: true/false }`

### Email Service

- **Provider:** Resend (`RESEND_API_KEY`)
- **From:** `onboarding@resend.dev` (default Resend sandbox)
- **To:** `ethan.flores.js@gmail.com`
- **Template:** `ContactFormEmail.tsx` (React Email component)
- **Reply-To:** submitting user's email address

---

## 7. State Management

**Minimal — no external state library.**

| State | Location | Mechanism |
|-------|----------|-----------|
| Nav menu open/close | `context/NavContext.tsx` | React Context + `useState` |
| Contact form fields | `app/contact-us/Form.tsx` | `useFormInput` custom hook |
| reCAPTCHA ref | `Form.tsx` | `useRef` |

---

## 8. Animations

**Framer Motion patterns:**
- `fadeInAnimationVariants` — staggered fade-in, `initial` → `animate`, delay by index
- `whileInView` — trigger animation on scroll into viewport
- `viewport={{ once: true }}` — play once only
- Custom easing: `[0.75, 0, 0.24, 1]`

**CSS animations:**
- 3D team card flip (`perspective`, `rotateY`)
- Hamburger icon transform (45° rotation)
- Text expansion (`.long-text` / `.expanded`)

---

## 9. Type Safety

Strict TypeScript mode. Key interfaces:

```typescript
// types/project.ts
interface Project {
  slug: string
  title: string
  // ...case study fields
}

// types/team.ts
interface TeamCard {
  name: string
  role: string
  image: string
  // ...
}
```

Path aliases in `tsconfig.json`:
- `@/*` → `./*`
- `@/context/*` → `./context/*`
- `@/components/*` → `./components/*`

---

## 10. SEO & Performance

**SEO:**
- JSON-LD Organization schema (founders, address, keywords, sameAs LinkedIn)
- Dynamic metadata with title template
- OG image for social sharing
- Auto-generated sitemap (`app/sitemap.ts`)

**Performance:**
- Next.js `<Image>` component throughout (automatic WebP conversion, lazy load)
- SVG for all icons and decorative graphics
- `@vercel/analytics` + `@vercel/speed-insights` (Core Web Vitals monitoring)
- `@studio-freight/lenis` for smooth scrolling

---

## 11. Third-Party Integrations

| Service | Purpose | Config |
|---------|---------|--------|
| Resend | Transactional email | `RESEND_API_KEY` env var |
| Google reCAPTCHA | Spam protection on contact form | Site key in env |
| Vercel Analytics | Page view analytics | Auto-injected |
| Vercel Speed Insights | Core Web Vitals | Auto-injected |
| Vercel Blob | File storage (imported, not actively used) | — |
| Calendly | Scheduling link in nav | External URL |
| Google Fonts | Open Sans typeface | `next/font/google` |

---

## 12. Known Issues / Notes

1. **`BackendValidation.ts` — `validateNumber` bug:** The function always returns `true` regardless of input, making phone number server-side validation a no-op.
2. **reCAPTCHA keys:** Partially commented out in multiple places — appears to be mid-integration or toggled for development.
3. **`Vercel Blob`** is imported in dependencies but no active usage found in the codebase.
4. **`team.mov`** exists in `public/` but is not referenced by any component.
5. **Mixed component extensions:** Header uses `.jsx`; all other components use `.tsx`. No functional difference but inconsistent.
6. **`Navbar.tsx` vs `Header/index.jsx`:** Two navigation components exist — unclear which is canonical.

---

## 13. Summary

Madasa Collective is a lean, production-grade Next.js 14 marketing site. The architecture prioritizes:

- **Simplicity:** No heavy state management, no CMS, content lives in a single `index.ts`
- **Performance:** Vercel-native deployment, Next.js Image optimization, lazy animations
- **Type Safety:** Strict TypeScript with Zod validation at both client and server boundaries
- **Visual Polish:** Framer Motion animations, 3D CSS effects, custom Tailwind design tokens
- **Maintainability:** SCSS Modules for complex styles, co-located component styles, clear route structure

The codebase is well-organized for a small team and is ready to scale with a CMS (e.g., Sanity, Contentful) if the content volume grows.
