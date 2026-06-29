# ShopKitApps Website — Build Progress Tracker

## Codeword: `shopkit-go`
When Sajal says this, resume building from wherever we left off.

## Milestones

| # | Milestone | Status | Completed | Notes |
|---|-----------|--------|-----------|-------|
| M1 | Project Setup (Next.js + Ant Design + Config) | ✅ done | Jun 29 | Next 14, antd 5, all deps installed |
| M2 | Layout (Header, Footer, Nav, Providers) | ✅ done | Jun 29 | Header w/ mobile drawer, Footer, ConfigProvider |
| M3 | Homepage (all sections) | ✅ done | Jun 29 | Hero, problems, app grid, differentiators, CTA, FAQ |
| M4 | App Landing Page Template + 8 App Pages | ✅ done | Jun 29 | Dynamic [slug] from apps.json, full template |
| M5 | About + Contact + Pricing | ✅ done | Jun 29 | All 3 pages with antd Form, Timeline, Cards |
| M6 | Docs Section | ✅ done | Jun 29 | Sidebar layout, landing, getting-started, FAQ, changelog, 8 app guides |
| M7 | Blog Section | ✅ done | Jun 29 | Layout, listing (10 articles), dynamic post pages |
| M8 | SEO + Legal + API Routes | ✅ done | Jun 29 | sitemap, robots, JSON-LD, Privacy, Terms, contact + newsletter APIs |
| M9 | Deploy to VPS (PM2 + production build) | ❌ pending | - | Dev server running on :3001, production deploy pending |

## Current Status
M1-M8 complete. Build passes with 26+ pages.
Dev server live at: http://173.212.238.205:3001

## What's Left (M9 - Deploy)
- [ ] Buy/connect domain (shopkitapps.com)
- [ ] Apache reverse proxy or Nginx setup
- [ ] SSL via Certbot
- [ ] Production build (next start instead of next dev)
- [ ] PM2 for process management

## What's NOT from the plan (deferred)
- Keystatic CMS integration (requires GitHub OAuth setup)
- Neon PostgreSQL connection (forms store in memory for now)
- Blog MDX files (blog data is in TypeScript for now, easily migratable)
- OG image generation (needs placeholder images)
- Analytics (Plausible/Vercel)
- Cookie consent banner
- 10 blog articles have stub content (need expansion)

## Build Output
```
/                        11.4 kB
/apps                    7.18 kB
/apps/[slug]             7.13 kB (8 pages)
/blog                    4.03 kB
/blog/[slug]             5.50 kB
/contact                 9.24 kB
/docs                    6.93 kB
/docs/[slug]             5.72 kB
/docs/changelog          6.93 kB
/docs/faq                5.20 kB
/docs/getting-started    4.48 kB
/pricing                 6.75 kB
/privacy                 3.71 kB
/terms                   3.77 kB
```

## How to Resume
1. Read this file
2. Read CLAUDE.md for project rules
3. Continue from M9 (deploy)
