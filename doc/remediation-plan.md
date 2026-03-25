# Madasa Collective — Remediation Plan

> Authored: 2026-03-25
> Based on: [architecture.md](./architecture.md)

This document catalogs every identified issue in the codebase, grouped by severity, and prescribes a concrete fix for each. Issues are further organized into implementation phases.

---

## Issue Index

| ID | Severity | File | Title |
|----|----------|------|-------|
| C-01 | Critical | `lib/BackendValidation.ts` | `validateNumber` always returns `true` |
| C-02 | Critical | `actions/SendEmail.tsx` | API key duplicated in request headers |
| C-03 | Critical | `actions/SendEmail.tsx` | Backend validation mismatches Zod schema |
| C-04 | Critical | `actions/SendEmail.tsx` | Recipient email hardcoded in source |
| C-05 | Critical | `app/layout.tsx` | Typo in `metadataBase` URL |
| H-01 | High | `actions/SendEmail.tsx` | Debug `console.log` exposes form data in server logs |
| H-02 | High | `context/NavContext.tsx` | Debug `console.log` in React context hook |
| H-03 | High | `app/contact-us/Form.tsx` | Debug `console.log` throughout form submission |
| H-04 | High | `app/contact-us/Form.tsx` | Form labels not associated with inputs (`htmlFor` missing) |
| H-05 | High | `app/api/verify-recaptcha/route.ts` | No `response.ok` check on `fetch` call |
| H-06 | High | `app/api/verify-recaptcha/route.ts` | `RECAPTCHA_SECRET_KEY` env var not validated before use |
| H-07 | High | `components/Header/index.jsx` | `useNav(false)` passes unused param to hook |
| H-08 | High | `components/Navbar.tsx` | Hamburger button invisible (icon commented out) |
| H-09 | High | `components/Navbar.tsx` | Navbar hardcoded to `h-[300px]` |
| M-01 | Medium | `index.ts` | `company` and `phoneNumber` marked `required` in form config but optional in Zod schema |
| M-02 | Medium | `index.ts` | Email input `type` set to `"text"` instead of `"email"` |
| M-03 | Medium | `index.ts` | Daniel Castillo's LinkedIn URL has typo (`aniel-castillo`) |
| M-04 | Medium | `lib/FrontendValidation.ts` | Entire file is commented-out dead code |
| M-05 | Medium | `components/Button.tsx` | `children` prop defined but never rendered |
| M-06 | Medium | `components/Navbar.tsx` | Unused imports (`Navbar2Button`, `Header`) and unused `isActive` state |
| M-07 | Medium | `components/Footer.tsx` | `getHeight()` switch only handles `"contact"`, returns `undefined` for all other pages |
| M-08 | Medium | `app/contact-us/Form.tsx` | `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` non-null asserted (`!`) without env guard |
| M-09 | Medium | `app/contact-us/page.tsx` | Background image `alt=""` and no responsive sizing (`4000×4000`) |
| M-10 | Medium | `app/layout.tsx` | Multiple commented-out import/JSX blocks left in source |
| L-01 | Low | `app/globals.css` | `.front`/`.back` use `linear-gradient(white, white)` — should be `background: white` |
| L-02 | Low | `app/globals.css` | `.expanded` transition is `2s` vs `.long-text` at `0.3s` — inconsistent |
| L-03 | Low | `app/globals.css` | `hamburger:hover` uses `!important` |
| L-04 | Low | `app/globals.css` | Body `font-family` set in both `globals.css` and `layout.tsx` (redundant) |
| L-05 | Low | `components/Button.tsx` | Commented-out `<a>` block at bottom of file |
| L-06 | Low | `components/Navbar.tsx` vs `Header/index.jsx` | Logo references `.svg` in one, `.png` in the other |
| L-07 | Low | Codebase-wide | No organized z-index scale |

---

## Phase 1 — Critical Fixes (Do First)

These issues either break functionality, expose credentials, or undermine SEO for the live site.

---

### C-01 · `validateNumber` always returns `true`

**File:** [lib/BackendValidation.ts](../lib/BackendValidation.ts)

**Problem:** All three return paths in `validateNumber` return `true`, making phone validation a no-op on the server.

**Fix:**
```typescript
export const validateNumber = (
  value: unknown,
  maxLength: number
): value is string => {
  if (typeof value !== "string") return false;
  if (value.trim() === "") return true;          // allow empty (optional field)
  if (!/^\+?[\d\s\-().]{7,}$/.test(value)) return false;
  if (value.replace(/\D/g, "").length > maxLength) return false;
  return true;
};
```

---

### C-02 · API key duplicated in request headers

**File:** [actions/SendEmail.tsx](../actions/SendEmail.tsx)

**Problem:** `Resend` SDK is already initialized with `RESEND_API_KEY` on line 12. Passing it again as a raw `Authorization` header in a manual `fetch` is redundant and exposes the key in logs/traces.

**Fix:** Remove the `headers` block from any manual fetch calls. Use the Resend SDK client exclusively:
```typescript
// KEEP this
const resend = new Resend(process.env.RESEND_API_KEY);

// DELETE any manual fetch that duplicates the key
```

---

### C-03 · Backend validation mismatches Zod schema

**File:** [actions/SendEmail.tsx](../actions/SendEmail.tsx)

**Problem:** `company` is validated as required on the server (`if (!validateString(company, 500)) return error`) but is `z.string().optional()` in the schema. Same for `phoneNumber`. This causes valid submissions to be rejected.

**Fix:** Guard optional fields before validating:
```typescript
// company — optional
if (company && !validateString(company, 500)) {
  return { error: "Invalid sender company" };
}

// phoneNumber — optional
if (phoneNumber && !validateNumber(phoneNumber, 15)) {
  return { error: "Invalid phone number" };
}
```

---

### C-04 · Recipient email hardcoded

**File:** [actions/SendEmail.tsx](../actions/SendEmail.tsx)

**Problem:** `to: "ethan.flores.js@gmail.com"` is hardcoded. Business contact email should never live in source code.

**Fix:**
1. Add `CONTACT_EMAIL` to `.env.local` (and Vercel environment variables)
2. Reference it in the action:
```typescript
to: process.env.CONTACT_EMAIL ?? "",
```
3. Add a startup guard:
```typescript
if (!process.env.CONTACT_EMAIL) {
  throw new Error("CONTACT_EMAIL environment variable is not set");
}
```

---

### C-05 · Typo in `metadataBase` URL

**File:** [app/layout.tsx](../app/layout.tsx)

**Problem:** `metadataBase: new URL("https://madasacolletive.com")` — missing the second `c` in "collective". All Open Graph and canonical URLs generated by Next.js metadata API will point to the wrong domain.

**Fix:**
```typescript
metadataBase: new URL("https://madasacollective.com"),
```

---

## Phase 2 — High Priority Fixes

These affect user experience, accessibility, and reliability in production.

---

### H-01 · H-03 · Remove all debug `console.log` calls

**Files:** [actions/SendEmail.tsx](../actions/SendEmail.tsx), [context/NavContext.tsx](../context/NavContext.tsx), [app/contact-us/Form.tsx](../app/contact-us/Form.tsx)

**Problem:** Debug logs expose sensitive form data (name, email, message) and internal validation state in server and browser logs.

**Fix:** Delete every `console.log` in those three files. If observability is needed in production, use a structured logger or Vercel's log drains — not raw `console.log`.

Affected lines:
- `SendEmail.tsx` lines 21–27
- `NavContext.tsx` line 28
- `Form.tsx` lines 38, 54, 56, 66, 67

---

### H-04 · Form labels not associated with inputs

**File:** [app/contact-us/Form.tsx](../app/contact-us/Form.tsx)

**Problem:** Labels and inputs are siblings without `htmlFor`/`id` linkage. Screen readers cannot associate them; clicking a label won't focus the input.

**Fix:** Add matching `id` to each input and `htmlFor` to each label:
```tsx
<label htmlFor={name}>{label}</label>
<input id={name} name={name} type={type} ... />
```

---

### H-05 · No `response.ok` check in reCAPTCHA route

**File:** [app/api/verify-recaptcha/route.ts](../app/api/verify-recaptcha/route.ts)

**Problem:** If Google's API returns a non-2xx response, `response.json()` may throw or return an error body, causing an unhandled 500.

**Fix:**
```typescript
const response = await fetch(verifyUrl, { method: "POST" });

if (!response.ok) {
  return NextResponse.json(
    { success: false, message: "reCAPTCHA verification service unavailable" },
    { status: 502 }
  );
}

const data = await response.json();
```

---

### H-06 · `RECAPTCHA_SECRET_KEY` not validated before use

**File:** [app/api/verify-recaptcha/route.ts](../app/api/verify-recaptcha/route.ts)

**Problem:** If the env var is undefined, `undefined` is interpolated into the URL string silently, and Google returns a `missing-input-secret` error — which looks like a user error, not a config error.

**Fix:**
```typescript
const secretKey = process.env.RECAPTCHA_SECRET_KEY;

if (!secretKey) {
  console.error("RECAPTCHA_SECRET_KEY is not configured");
  return NextResponse.json(
    { success: false, message: "Server misconfiguration" },
    { status: 500 }
  );
}
```

---

### H-07 · `useNav(false)` passes unused argument to hook

**File:** [components/Header/index.jsx](../components/Header/index.jsx)

**Problem:** `useNav` accepts no parameters. Passing `false` is silently ignored but signals a misunderstanding of the hook's API.

**Fix:** Remove the argument:
```tsx
const { isActive, setIsActive } = useNav();
```

---

### H-08 · Hamburger button icon commented out in `Navbar.tsx`

**File:** [components/Navbar.tsx](../components/Navbar.tsx)

**Problem:** The hamburger `<div>` has an `onClick` handler but the icon inside it is commented out, making the button invisible. Mobile navigation cannot be opened.

**Fix:** Uncomment the `hamburgerIcon` component or replace with an equivalent visible icon element.

---

### H-09 · Navbar hardcoded to `h-[300px]`

**File:** [components/Navbar.tsx](../components/Navbar.tsx)

**Problem:** A 300px-tall navbar is excessive and appears to be a copy-paste error. Standard nav height is 60–80px.

**Fix:** Replace with an appropriate height class (e.g., `h-[72px]`) or remove the fixed height and rely on padding.

---

## Phase 3 — Medium Priority Fixes

Consistency, correctness, and code hygiene issues.

---

### M-01 · `company` and `phoneNumber` marked `required` in form config but optional in schema

**File:** [index.ts](../index.ts)

**Problem:** `required: true` on these fields causes the browser to block submission if empty, but the Zod schema accepts them as optional — a contradictory UX.

**Fix:** Update the form config in `index.ts` to match the schema:
```typescript
{ label: "Company", ..., required: false },
{ label: "Phone number", ..., required: false },
```

---

### M-02 · Email input `type` set to `"text"`

**File:** [index.ts](../index.ts)

**Problem:** Email field renders as a plain text input, losing browser email validation, mobile keyboard optimizations, and autofill hints.

**Fix:**
```typescript
{ label: "Email *", ..., type: "email" }
```

---

### M-03 · Typo in Daniel Castillo's LinkedIn URL

**File:** [index.ts](../index.ts)

**Problem:** URL reads `aniel-castillo-software-developer` (missing leading `d`). The link is broken.

**Fix:**
```typescript
linkedin: "https://www.linkedin.com/in/daniel-castillo-software-developer/",
```

---

### M-04 · `FrontendValidation.ts` is entirely commented out

**File:** [lib/FrontendValidation.ts](../lib/FrontendValidation.ts)

**Problem:** The file contains nothing but a large commented-out block. It was superseded by Zod but never deleted.

**Fix:** Delete the file. If its contents are needed for reference, they are in git history.

---

### M-05 · `children` prop defined but never rendered in `Button.tsx`

**File:** [components/Button.tsx](../components/Button.tsx)

**Problem:** The prop type declares `children?: ReactNode` but the JSX never renders `{children}`. Consumers who try to pass children will get no output.

**Fix:** Either render `{children}` in the button's JSX alongside `{title}`, or remove the prop from the type definition if it is intentionally not supported.

---

### M-06 · Dead imports and unused state in `Navbar.tsx`

**File:** [components/Navbar.tsx](../components/Navbar.tsx)

**Problem:** `Navbar2Button` and `Header` are imported but never used. `isActive` state is created but never read or set.

**Fix:** Remove unused imports and the unused state declaration.

---

### M-07 · `getHeight()` switch incomplete in `Footer.tsx`

**File:** [components/Footer.tsx](../components/Footer.tsx)

**Problem:** The switch only handles `"contact"`, returning `""`. All other pages return `undefined`, which may cause style inconsistencies.

**Fix:** Add a `default` case:
```typescript
const getHeight = () => {
  switch (currentPage) {
    case "contact":
      return "";
    default:
      return "auto";   // or whatever the intended fallback is
  }
};
```

---

### M-08 · reCAPTCHA site key non-null asserted without env guard

**File:** [app/contact-us/Form.tsx](../app/contact-us/Form.tsx)

**Problem:** `process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!` will throw a runtime error if the variable is undefined.

**Fix:** Add an env guard and render the component conditionally:
```tsx
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

{siteKey && (
  <ReCAPTCHA sitekey={siteKey} onChange={setRecaptchaToken} />
)}
```

---

### M-09 · Background image in contact page has empty alt and oversized dimensions

**File:** [app/contact-us/page.tsx](../app/contact-us/page.tsx)

**Problem:** `alt=""` is acceptable for decorative images but the `width={4000} height={4000}` forces the browser to think the image is 4000px wide on all devices.

**Fix:** Use `fill` layout with `object-fit` or provide proper responsive props:
```tsx
<Image
  src="/testbackground.svg"
  alt=""            // decorative — keep empty
  role="presentation"
  fill
  className="object-cover"
/>
```
Wrap in a `relative` positioned container.

---

### M-10 · Commented-out code blocks in `layout.tsx`

**File:** [app/layout.tsx](../app/layout.tsx)

**Problem:** Several import lines and JSX blocks are commented out (`NavProvider`, `GoogleReCaptchaWrapper`, `LazyNavProvider`, inline script tag). These obscure the active code.

**Fix:** Delete commented-out blocks. Retain `GoogleReCaptchaProvider` only if reCAPTCHA is being used; otherwise remove it and its import.

---

## Phase 4 — Low Priority / Polish

Minor quality-of-life improvements that can be batched.

---

### L-01 · Redundant gradient in `.front` / `.back`

**File:** [app/globals.css](../app/globals.css)

**Fix:**
```css
/* Before */
background: linear-gradient(white, white);

/* After */
background: white;
```

---

### L-02 · Inconsistent transition durations on `.long-text` / `.expanded`

**File:** [app/globals.css](../app/globals.css)

**Fix:** Align both to the same duration (e.g., `0.4s ease`).

---

### L-03 · `!important` on `.hamburger:hover`

**File:** [app/globals.css](../app/globals.css)

**Fix:** Increase specificity instead of using `!important`:
```css
.hamburger:hover .hamburger-inner,
.hamburger:hover .hamburger-inner::before,
.hamburger:hover .hamburger-inner::after {
  opacity: 1;
}
```

---

### L-04 · Redundant `font-family` declaration in `globals.css`

**File:** [app/globals.css](../app/globals.css)

**Problem:** `font-family: "Open Sans"` set in `body {}` in `globals.css`, and also applied via `<body className={openSans.className}>` in `layout.tsx`.

**Fix:** Remove the declaration from `globals.css` and let `next/font` handle it exclusively.

---

### L-05 · Commented-out `<a>` block in `Button.tsx`

**File:** [components/Button.tsx](../components/Button.tsx)

**Fix:** Delete the commented-out block at the bottom of the file.

---

### L-06 · Logo uses `.svg` in `Navbar.tsx` and `.png` in `Header/index.jsx`

**Files:** [components/Navbar.tsx](../components/Navbar.tsx), [components/Header/index.jsx](../components/Header/index.jsx)

**Fix:** Standardize on SVG (`/logo/short.svg`) across both files for scalability and consistency.

---

### L-07 · No organized z-index scale

**Problem:** z-index values (e.g., `z-30`, `z-10`) are scattered throughout components with no documented hierarchy.

**Fix:** Add a z-index scale to `tailwind.config.ts`:
```typescript
extend: {
  zIndex: {
    nav: "30",
    overlay: "20",
    modal: "50",
    toast: "60",
  }
}
```
Then replace ad-hoc `z-30` classes with semantic names like `z-nav`.

---

## Environment Variables Checklist

The following env vars must be configured in both `.env.local` and Vercel project settings:

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend email service API key |
| `CONTACT_EMAIL` | Yes | Recipient email for contact form (new — replaces hardcoded value) |
| `NEXT_PUBLIC_BASE_URL` | Yes | Base URL for the frontend (e.g., `https://madasacollective.com`) |
| `RECAPTCHA_SECRET_KEY` | Yes (if reCAPTCHA enabled) | Server-side reCAPTCHA secret |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Yes (if reCAPTCHA enabled) | Client-side reCAPTCHA site key |

---

## Implementation Order Summary

| Phase | Issues | Priority |
|-------|--------|----------|
| **1 — Critical** | C-01 through C-05 | Fix before next deploy |
| **2 — High** | H-01 through H-09 | Fix this sprint |
| **3 — Medium** | M-01 through M-10 | Fix next sprint |
| **4 — Low** | L-01 through L-07 | Batch in a cleanup PR |

Total issues: **31** across 4 phases.
