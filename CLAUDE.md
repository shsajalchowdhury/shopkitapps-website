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
4. **Zero paid dependencies.** Next.js + Tailwind + shadcn/ui + Neon (free PG).
5. **CTAs link to Shopify App Store** (not internal signup).
6. **Git commits:** Use `SH Sajal Chowdhury <sajal.marketer@gmail.com>`
7. **Performance target:** 95+ Lighthouse, under 200KB per page.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS 3
- shadcn/ui components
- Keystatic (CMS for MDX content)
- Neon PostgreSQL (free tier, Prisma ORM)
- Framer Motion (subtle animations only)
- Inter font (via next/font)
- Lucide React icons

## Skills to Apply
When writing copy, apply these principles:
- **Copywriting:** Benefits over features. Specificity over vagueness. Numbers over adjectives. Short sentences (avg 12 words). Customer language, not jargon.
- **Page CRO:** 5-second value prop clarity. Single primary CTA. Trust signals near decision points. Comparison tables. FAQ handles objections.
- **Content Strategy:** Searchable content targeting buyer-intent keywords. Each blog post links to 1-2 relevant app pages.
- **UI/UX:** Mobile-first. WCAG AA. Color tokens defined in plan. Inter font. 1.250 type ratio. Consistent spacing scale.

## App Data Reference
All 8 apps, their copy, pricing, and details are in the plan file (Section 6 and Section 20).

## Project Structure
Follow the file structure in Section 19 of the plan file exactly.

## Development Phases
Follow Section 18 of the plan. Start with Phase 1 (Foundation).

## Content Files Location
- App pages: `content/apps/[slug].mdx`
- Blog posts: `content/blog/[slug].mdx`
- Docs: `content/docs/[slug].mdx`
- App metadata: `data/apps.json`
- Site config: `data/site.json`

## Important
Always read `../SHOPKITAPPS-WEBSITE-PLAN.md` fully before making changes.
That file is the source of truth for all decisions.
