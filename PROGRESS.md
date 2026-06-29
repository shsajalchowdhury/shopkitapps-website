# ShopKitApps Website — Build Progress Tracker

## Codeword: `shopkit-go`
When Sajal says this, resume building from wherever we left off.

## Milestones

| # | Milestone | Status | Completed | Notes |
|---|-----------|--------|-----------|-------|
| M1 | Project Setup (Next.js + Ant Design + Config) | ✅ done | Jun 29 | Next 14, antd 5, all deps installed, tsconfig, next.config |
| M2 | Layout (Header, Footer, Nav, Providers) | ✅ done | Jun 29 | Header w/ mobile drawer, Footer w/ 4-col, ConfigProvider theme |
| M3 | Homepage (all sections) | ✅ done | Jun 29 | Hero, problems, app grid, differentiators, how it works, CTA, FAQ |
| M4 | App Landing Page Template + 8 App Pages | ✅ done | Jun 29 | Dynamic [slug] pages, all 8 apps from apps.json, full template |
| M5 | Pricing + About + Contact | 🟡 partial | Jun 29 | Pricing page done. About + Contact NOT built yet |
| M6 | Docs Section (layout + stubs + search) | ❌ pending | - | |
| M7 | Blog Section (layout + 10 articles) | ❌ pending | - | |
| M8 | SEO (sitemap, robots, schema, OG) + Analytics | ❌ pending | - | |
| M9 | Deploy to VPS (Nginx + PM2 + SSL) | ❌ pending | - | |

## Current Step
M1-M4 complete. M5 partial (pricing done, need About + Contact).
Next: Finish M5, then M6 (Docs).

## Build Status
✅ `npx next build --no-lint` passes. 14 pages generated.
- / (homepage) - 11.4 kB
- /apps (listing) - 5.18 kB  
- /apps/[slug] (8 app pages) - 8.54 kB each
- /pricing - 4.68 kB

## Context Files
- Plan: `../SHOPKITAPPS-WEBSITE-PLAN.md`
- CLAUDE.md: `./CLAUDE.md`
- Visual prompts: `../visual-prompts/`
- App data: `data/apps.json` (dynamic, drives all pages)
- Progress: This file

## Key Technical Decisions
1. All pages use `'use client'` + `force-dynamic` for antd SSR compatibility
2. Marketing layout is a client component (no antd Layout in server components)
3. App detail pages use server wrapper (metadata) + client child (AppDetailClient)
4. `@ant-design/nextjs-registry` AntdRegistry wraps ConfigProvider in providers.tsx
5. No `optimizePackageImports` for `@ant-design/icons` (causes OOM on build)

## How to Resume
1. Read this file to find current milestone
2. Read CLAUDE.md for project rules
3. Read the plan file for details
4. Continue from M5 (About + Contact pages)
