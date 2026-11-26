# Foundation P5 — Quality & Experience Audit (Audit First)

**Audit status:** In progress. This PR introduces reporting and does **not** claim production pages have passed accessibility, performance or visual review.

## Scope and release safeguards

- Site: `foundation.gohackerscloud.com`.
- Page set: all **16 Explore GoHackersCloud** sidebar destinations, extracted from `astro.config.mjs`.
- Public Foundation landing pages and the Study Plan use an **Academy-aligned 78rem / 1248px maximum width** (updated 26 November 2026); technical learning lessons retain narrower reading widths.
- Keep all Foundation, Academy and lab links, URLs, content, course or subscription terms unchanged.
- No source-owned Obsidian lessons, content tree, product inventory, runtime services, auth or billing changes.

## Layout correction — 26 November 2026

The Foundation homepage was visibly narrower than the Academy because public landing pages used both `--sl-content-width: 60rem` and an explicit `.sl-container` maximum of `60rem`. The Academy homepage uses a wider `78rem` setting. A separate scoped correction aligns Foundation splash pages and the Study Plan to `78rem`, retains centered fluid layouts on smaller screens, and preserves long-form lesson widths. The automated checks and manual viewport audit now use this updated baseline. This correction changes only layout styling, assertions and documentation—not learning content or routes.

## Automated static checks

CI runs `node scripts/audit-foundation-experience.mjs` after `npm run build` and the existing functional tests.

The tool inventories the 16 Explore destinations and inspects their built HTML for:

1. Missing rendered route files, duplicate/missing H1 and basic title or description presence.
2. Relative/internal links pointing to absent built routes or missing local files.
3. In-page or cross-page fragment links not present in static markup (review required for client-inserted IDs).
4. Images without an `alt` attribute.
5. Counts of internal and external links to help plan a manual URL review.

The findings are **non-blocking** because this is an audit-first effort, not an unreviewed mass-fix. Existing functional, build and dependency security gates remain enforced independently.

Download the `foundation-p5-static-audit` artifact from the functional workflow run and inspect `foundation-p5-audit.json`.

## Manual browser audit checklist — not completed by this PR

| Category | Required check | Pages / viewport | Evidence |
|---|---|---|---|
| Responsive layout | Verify centered 78rem public canvas (and narrower lesson reading widths), responsive cards and local table scrolling, without viewport horizontal overflow | 16 Explore routes at 375, 768, 1440, 1920px | Screenshots / measurements |
| Zoom & accessibility | Keyboard-only navigation; focus order/visibility; headings, labels, expanded disclosures; 200% zoom | Home, Catalog, Courses, Test Engine, Labs, Study Plan, Challenge | Video or screenshots |
| Contrast | Use automated axe-style scan plus human verification of light/dark mode contrast and decorative text | All 16 pages | Test output |
| Diagrams | Mermaid graphics readable with scroll/zoom and no clipped nodes | About, Catalog, Challenge, Services, learning paths | Screenshots |
| Learner journey | Home → Start Here → Module → Challenge → Portfolio → optional Academy; ensure Foundation is free and separate access is clear | Desktop and mobile | Click-path evidence |
| Live links | Test external course, offers, Free Tests, Academy, Labs and Services destination status; test redirects and authentication expectations | Links in built report | Verified URLs/status |
| SEO | View-source title, description, canonical, robots, sitemap, structured WebSite data, duplicate metadata, indexing eligibility | Public landing pages | Source + crawler report |
| Performance | Lighthouse mobile/desktop, Core Web Vitals and transfer sizes of CSS/JS/images | Home, Catalog, Courses, Test Engine, Labs | Lighthouse JSON |
| Security & deploy | Preserve required dependency audit, content validation and static build | Existing required workflows | Both green checks |

## Severity and follow-up

- **P0 blocker:** Broken landing route, site-wide layout failure, severe security regression.
- **P1 high:** Broken primary learner CTA, inaccessible primary navigation, material content hidden on mobile.
- **P2 medium:** Subsection anchor errors, contrast or spacing defects, unclear navigation.
- **P3 low:** Minor visual polish, copy spacing and noncritical affordances.

Create a separate small corrective PR for a confirmed finding, with before/after evidence and links to the relevant report entries. Do not revise CI assertions just to turn them green.

## What remains unknown

This audit PR alone cannot prove real browser rendering, accessibility conformance, Lighthouse scores, or remote URL availability. No scores, counts of defects or production pass claims should be reported until the CI artifact and manual browser evidence are reviewed.
