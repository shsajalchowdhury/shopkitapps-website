# CLAUDE.md — ShopKitApps Website Project

## Project Overview
Building the ShopKitApps marketing website — showcasing 8 Shopify apps.
Each app gets its own high-converting landing page with CTA linking to Shopify App Store.

## Full Build Plan
The complete plan is at: `../SHOPKITAPPS-WEBSITE-PLAN.md`
Read it before starting any work. Follow it exactly.

## Key Rules
1. **NO bundle product mentions anywhere.** Each app sold individually.
2. **NO em dashes in any content.** Use parentheses, colons, or restructure.
3. **Every page must be fully editable** via Keystatic CMS (MDX files).
4. **Zero paid dependencies.** Next.js + Ant Design + Neon (free PG).
5. **CTAs link to Shopify App Store** (not internal signup).
6. **Git commits:** Use `SH Sajal Chowdhury <sajal.marketer@gmail.com>`
7. **Performance target:** 95+ Lighthouse, under 200KB per page.
8. **App names are placeholders.** Never hardcode app names in components. All app data comes from `data/apps.json`. Components must be data-driven.
9. **Visuals are optional.** Use `VisualSlot` component that shows placeholder with prompt text if image is missing.

## Tech Stack
- Next.js 14 (App Router)
- **Ant Design v5** (antd) — UI components (Card, Table, Form, Steps, Collapse, Tabs, etc.)
- **@ant-design/icons** — Icon system
- CSS Modules + antd ConfigProvider theme tokens
- Keystatic (CMS for MDX content)
- Neon PostgreSQL (free tier, Prisma ORM)
- Framer Motion (subtle animations only)
- Inter font (via next/font)
- Fuse.js (client-side search)

## Ant Design Usage
Before writing any antd component code, use the CLI:
```bash
antd info [Component] --format json    # Check available props
antd demo [Component] basic --format json  # Get working demo
antd token [Component] --format json   # Check design tokens
```

Install CLI: `npm install -g @ant-design/cli`

Theme is configured in `app/providers.tsx` via ConfigProvider with:
- colorPrimary: #0F3460
- colorSuccess: #00D4AA
- colorWarning: #F59E0B
- colorError: #E94560
- borderRadius: 8
- fontFamily: Inter

## Dynamic App Naming
All app data lives in `data/apps.json`. This includes:
- name, slug, tagline, category, color, icon
- pricing (free/pro/premium)
- copy (heroHeadline, heroSubHeadline, painPoint, solution, cta)
- features list
- appStoreUrl, scopes, size

To change an app name: update `data/apps.json` → site updates everywhere.
Components NEVER hardcode app names. Always reference `app.name` or `app.copy.cta`.

## Visual Elements
Each app page has visual slots. Visuals are loaded by convention:
`/public/images/apps/[slug]/[position].webp`

If visual is missing, `VisualSlot` component shows a placeholder with the prompt text.
Visual generation prompts are in `visual-prompts/[app-name].md`.

## Skills to Apply
- **Copywriting:** Benefits over features. Numbers over adjectives. Short sentences.
- **Page CRO:** 5-second value prop. Single primary CTA. Trust signals.
- **Content Strategy:** Searchable content targeting buyer-intent keywords.
- **UI/UX:** Mobile-first. WCAG AA. Ant Design tokens. Inter font.

## Important
Always read `../SHOPKITAPPS-WEBSITE-PLAN.md` fully before making changes.
That file is the source of truth for all decisions.
