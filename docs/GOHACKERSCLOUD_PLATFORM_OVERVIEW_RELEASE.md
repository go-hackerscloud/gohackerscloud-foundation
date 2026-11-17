# GoHackersCloud Platform Overview — Foundation Navigation Release

## Purpose

Visitors to GoHackersCloud Foundation should understand the broader ecosystem **before** being asked to begin Module 00. This release makes the introductory sidebar a professional product-discovery section while preserving free Foundation learning, the original 16-module tree, the existing 13-track Academy guide, and all canonical lesson routes.

## New Foundation routes

| Purpose | Local route | Source-owned by |
|---|---|---|
| Complete GoHackersCloud introduction | `/about-gohackerscloud/` | GitHub (not Obsidian publisher) |
| Courses and bundles explainer | `/about-gohackerscloud/courses/` | GitHub |
| Test Engine and mock preparation | `/about-gohackerscloud/test-engine/` | GitHub |
| Business cybersecurity services | `/about-gohackerscloud/cybersecurity-services/` | GitHub |
| GHC Academy Labs overview | `/ghc-labs/` | Existing GitHub page |

The first sidebar section is renamed **Explore GoHackersCloud** and lists those products before **Start Here · Free Foundation**. The Foundation homepage gets six responsive cards, retaining the original learning resources below.

## Official external destinations

- Main: https://gohackerscloud.com/
- Official brand/about: https://gohackerscloud.com/gohackerscloud
- Course bundles/offers supplied for this project: https://gohackerscloud.com/ghc-offers
- Classplus course catalog: https://www.gohackerscloud.org/courses
- Classplus **Free Tests** navigation link: https://www.gohackerscloud.org/freetest
- GHC Labs product/access: https://gohackerscloud.com/hands-on-cybersecurity-labs
- Academy: https://academy.gohackerscloud.com/
- Business services: https://gohackerscloud.com/cybersecurity-services
- Business contact: https://gohackerscloud.com/contact-gohackerscloud

### Content verification limits

The primary brand and classplus landing pages were indexed and readable, showing self-paced courses, practice questions, mentorship and labs. The **individual `/ghc-offers` bundle items and checkout URLs could not be retrieved** from the public tools during this change, nor could the full live cybersecurity-services catalog. Accordingly, the Foundation pages **do not invent individual bundle names, SKUs, prices, discount percentages, service accreditations or checkout URLs**. They explain the product families and link to the official current catalogs and contact routes.

The Free Tests path was observed as an actual navigation destination from `www.gohackerscloud.org`, though the test page itself did not expose readable content. Avoid implying a specific mock test is free or live until verified from its product listing.

## Editorial rules

1. Foundation remains free and is not an automatic entitlement to courses, test engine subscriptions, Academy lab sessions or business consulting.
2. Individual product availability, prices, coupons, exam versions and access terms live on the official storefront and should not be duplicated in static Foundation prose.
3. Mock tests are practice materials, not vendor examinations or restricted real exam dumps.
4. Academy labs are authorized practice environments only; they do not grant permission to assess third-party systems.
5. Business cybersecurity services are separately scoped and legally authorized; do not imply PCI DSS QSA, ISO certification or other external accreditation without verification.
6. Do not claim guaranteed employment, exam passes, certification, active mentoring entitlement or actual production systems without substantiation.
7. Keep pages useful to first-time visitors, with business-facing and learner-facing pathways clearly separated.

## Publishing and Obsidian ownership

The new pages are in `src/content/docs/about-gohackerscloud/`; the homepage component lives in `src/components/`. Neither folder is removed by `publish-foundation.ps1`. These are GitHub-maintained Foundation platform pages, **not** imported into the existing Obsidian publisher. This release makes **no edits inside** `src/content/docs/foundation/`, so no new reverse sync is required for these content changes.

Do not manually copy these pages into the Obsidian publisher's source directory without deciding on a single authoritative version. The existing lesson publisher should not overwrite or delete them.

## CI and post-deploy checks

Before merge: `npm ci`, dependency security audits, Astro build, existing 16-module/205-lesson route validation, expanded guides, all prior Mermaid checks and `node scripts/verify-platform-offerings.mjs`.

After deploy:
- Verify **Explore GoHackersCloud** appears as the first sidebar group.
- Verify About, Courses, Test Engine, Cybersecurity Services and GHC Labs appear **before** Start Here.
- Verify the homepage's six cards are readable at mobile width in light and dark modes.
- Check all four new pages' Mermaid diagrams are rendered, not code fences.
- Check external link destinations manually with a signed-out browser, especially `/ghc-offers`, `/freetest`, `/courses` and the services page. Correct any new storefront URLs through a reviewable PR.
- Confirm existing Foundation modules, deep-dive guides and GHC Labs retain their URLs and content.

## Later content maintenance

When an authoritative product catalog/API becomes available, replace the broad course-family overview with a curated, data-driven list of verified active bundles and individual links. Do not scrape or hard-code a moving price list into learning content without an ownership/update process.
