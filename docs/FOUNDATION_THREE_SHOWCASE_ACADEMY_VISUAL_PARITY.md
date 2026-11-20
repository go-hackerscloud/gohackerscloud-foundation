# Foundation three-page visual alignment — Academy design parity

## Scope and baseline

The user requested a source-backed review of **Foundation Home**, **About GoHackersCloud** and the **Complete Catalog**, with visual consistency alongside `academy.gohackerscloud.com` and reduced blank space. The live sites could not be fetched by available public web access during this change, so the implementation is based on the actual current Foundation and Academy GitHub code, plus the previously supplied desktop screenshots. Final production visual acceptance is required.

The inspected Academy source uses:
- a **78rem** Starlight content width only on its hero/track workspaces;
- deep navy, gradient and teal/cyan hero treatment;
- responsive learning cards and contextual next steps instead of isolated prose;
- a compact track directory and clear status/metadata labels.

## What has changed

### Shared visual system
- `src/styles/landing-layout.css`: limit 78rem / cyan accent palette and paragraph-width rules to **exactly three showcase pages**: `body:has(.foundation-hero)`, `body:has(.ghc-about-lead)`, `body:has(.ghc-catalog-hero)`.
- Dark theme matches Academy's existing teal variables.
- Keep original Foundation lesson pages and other splash pages at the original Starlight reading width; no global 88rem override.
- Preserve native keyboard focus, small-screen stacking and reduced-motion preferences.

### Homepage
- Keep the existing hero, student/professional cards, free 7-day challenge, six featured modules, three safe lesson cards, four study-path cards, portfolio spotlight, six learning resources and optional offerings.
- Add `FoundationSectionIntro.astro` for the **five** main headings that previously had narrow, standalone description paragraphs. Each pairs a readable, factually grounded description with an adjacent resource/action and a verified label.
- Free Foundation remains the primary message; no paid product is required to read lessons or use worksheets.

### About
- Keep the original Academy-style 2-column About lead, five learning-stage cards, six official destination cards, offering/audience tables, title and original Mermaid content.
- `FoundationAboutDiagram.astro` places the **existing real Mermaid graph** alongside a useful practical next-step companion on desktop, and stacks below 65rem. Link contexts: free challenge, portfolio, optional hosted Labs, scoped professional services.
- Avoid adding decorative filler, testimonials or unsupported claims.

### Catalog
- Previously, `catalog.mdx` consisted of a long textual introduction, a first five-row offering table, four Mermaid diagrams, large inventory tables and video references.
- Add `FoundationCatalogHero.astro`: matching navy/cyan two-column hero, **qualified reference counts** (nine previously documented AWS topic areas, 13 published Academy tracks, eight service categories and two previously supplied video links), explicit inventory and current-price disclaimer, plus Start Free and official course links.
- Add a seven-link Catalog Index to the existing seven major sections with stable `#catalog-...` anchors.
- Replace **only the first five-row offering-selection table** with five responsive `FoundationCatalogChoices.astro` cards: Free Foundation, Courses/Bundles, Test Engine, GHC Academy/Labs and enterprise Security Services.
- Preserve all historical bundle names and caveats, the itemized nine-course AWS table, Academy's 13 track URLs, 90 dedicated lab entries linked through the directory, eight service areas, original four Mermaid diagrams, both supplied YouTube video links, official outbound URLs and the remaining detailed catalog content.
- No invented SKU prices, entitlements, published user counts, video IDs or real-time availability.

## QA

Existing security workflow still runs:
- `npm ci`, KaTeX rendering compatibility, full and production `npm audit --audit-level=high`
- Astro production build and all learning, Mermaid, catalog, challenge, accessibility-heading and portfolio checks
- Updated learner-first homepage assertion for the rendered module introduction
- New `scripts/verify-three-showcase-pages.mjs` to confirm 78rem/teal scope, five homepage section intros, preserved learner-first order, About's original Mermaid and contextual links, all catalog jump anchors, five catalog cards and the retained four catalog diagrams/video references.

### Post-deployment visual acceptance
At 1440px, 1920px, 1024px, 768px, 375px and 200% zoom:

1. Home: all five section descriptions have contextual resource panels beside them; no isolated left-side paragraphs or orphaned featured module cards. Core learning remains before paid products.
2. About: one Mermaid diagram remains visibly readable next to the goal-aware sidebar; its sidebar stacks below the diagram at tablet width without clipping.
3. Catalog: Starlight H1 is concise, the navy/cyan intro matches Academy, the seven shortcuts navigate to the correct sections under the fixed header, and long tables/diagrams remain accessible, including horizontal scrolling when needed.
4. Check all three in light and dark mode, keyboard focus and minimum touch targets.
5. Run the existing 7-day quiz, local progress reset, module filters, public downloads and Academy cross-links as smoke checks.

**Deployment:** Merge only when CI is green, then verify real browsers. No Obsidian lesson files, auth, runtime, service portal, subscriptions or dependencies changed. **No Obsidian reverse sync required.**
