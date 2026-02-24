# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev       # Start dev server (Next.js)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

The project also has a `pnpm-lock.yaml`, so pnpm can be used interchangeably.

## Architecture

This is a **Next.js 16 (App Router)** landing page for "Ruge Seguros", a Colombian insurance broker. The site is in Spanish and targets Colombian users.

### Routing Structure

- `/` — Home page, composed of marketing sections
- `/seguros/[type]` — Individual insurance product pages (autos-livianos, autos-pesados, mercancia, pymes, mascotas, vida, salud, cumplimiento)
- `/contacto`, `/nosotros`, `/pago-primas`, `/privacidad` — Static informational pages

### Quote Flow

The primary conversion path is a quote modal driven by a global React Context:

1. `QuoteModalProvider` (`components/quote-modal-provider.tsx`) wraps the entire app in `app/layout.tsx` and exposes the `useQuoteModal()` hook
2. Any component can call `useQuoteModal().openModal(insuranceType?)` to open the modal with an optional pre-selected insurance type
3. `QuoteModal` (`components/quote-modal.tsx`) collects user info (name, phone, email, cédula, insurance type) and on submit opens a WhatsApp chat (`wa.me/573104088621`) with the form data pre-filled as a message
4. A persistent floating `WhatsAppButton` (`components/whatsapp-button.tsx`) provides a direct WhatsApp contact shortcut

### UI Stack

- **shadcn/ui** (New York style) with Radix UI primitives — components live in `components/ui/`
- **Tailwind CSS v4** with `tw-animate-css`; design tokens are CSS variables defined in `app/globals.css`
- Color palette: deep blue (`--primary`), golden yellow (`--secondary`) for CTAs, light blue background
- Font: Plus Jakarta Sans (Google Fonts, loaded in `app/layout.tsx`)
- Icons: `lucide-react`
- Path alias `@/` maps to the project root (configured in `tsconfig.json`)

### Key Configuration Notes

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- Vercel Analytics is included via `@vercel/analytics/next` in the root layout
- CSS is Tailwind v4 — configuration is in `app/globals.css` (not a `tailwind.config.js` file)
