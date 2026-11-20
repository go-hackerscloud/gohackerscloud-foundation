# Foundation public landing pages — layout and whitespace correction

**Source issue:** User-supplied desktop screenshots of the [Foundation homepage](https://foundation.gohackerscloud.com/) and [About GoHackersCloud](https://foundation.gohackerscloud.com/about-gohackerscloud/) show long blank areas next to prose and unbalanced card rows.

## Audit conclusions

The source audit covered all current Markdown/MDX landing pages that use `template: splash`:

1. `/` — homepage
2. `/about-gohackerscloud/` — About
3. `/about-gohackerscloud/catalog/` — Complete catalog
4. `/about-gohackerscloud/courses/` — Courses & Bundles
5. `/about-gohackerscloud/test-engine/` — Test Engine
6. `/about-gohackerscloud/cybersecurity-services/` — Cybersecurity Services
7. `/about-gohackerscloud/lab-directory/` — Academy Lab Directory
8. `/7-day-challenge/` — Seven-day Challenge
9. `/core-it-devops/` — Core IT Overview
10. `/curriculum/` — Curriculum Explorer
11. `/ghc-labs/` — GHC Labs Overview
12. `/portfolio/` — Career & Portfolio Hub

**Shared root cause:** Starlight's `ContentPanel` limits the centered `.sl-container` to the narrower default splash width (`--sl-content-width`). The existing GoHackersCloud global CSS additionally limits direct paragraph text to 48rem. This combination gives a narrow text column on large screens even when the page could use more space for tables, diagrams and interactive learning cards.

**Homepage-specific root cause:** the featured Foundation list has **four Core IT modules and two Cloud/Security modules**, but the explorer used a fixed three-column grid. That creates a lonely fourth card in one row and a partially empty two-card row. Separately, the free Resource Hub had **five cards** in a two-column grid.

**About-specific root cause:** the long page title took multiple lines, while introductory prose remained in a narrow column and the right side had no navigational purpose.

## Implementation

- `src/styles/landing-layout.css` is a **splash-only** responsive layout stylesheet. It targets `html:not([data-has-sidebar])` and caps the page's centered content at 88rem. The main content panel, tables and card components can use that space, while direct prose stays at a readable maximum of 88ch. This does **not** widen Starlight's original Foundation lesson pages, which retain the `data-has-sidebar` attribute.
- Loaded this stylesheet **after** the existing Foundation CSS in `astro.config.mjs`.
- `FoundationModuleExplorer.astro`: two balanced columns for the six featured modules by default; four across for the four Core IT modules on sufficiently wide viewports, two across for Cloud/Security; one column on mobile. The full 16-module explorer uses an auto-fitting responsive grid rather than leaving sparse fixed three-column rows.
- `FoundationResourceHub.astro`: include the existing 7-Day Free Foundation Challenge as a useful sixth resource card to complete the 2×3 grid without adding decorative filler or promoting a paid product to fill space.
- `src/content/docs/about-gohackerscloud/index.mdx`: shorten the visible page title to **About GoHackersCloud**, preserving the description, original content below the introduction, tables, Mermaid diagram and URLs.
- `FoundationAboutLead.astro`: preserve the introductory explanation in a readable left column; add a useful right-hand **free learning starter panel** linking to Start Here, the 7-Day Challenge, the Career & Portfolio Hub and the platform catalog. Its numbers describe **16 modules, seven challenge days and six guided projects**, not unsupported learner or subscriber counts.
- The About panel stacks below the introduction on tablet/mobile to avoid squeezing the reading column.

## Editorial and operational safety

- No changes to any `src/content/docs/foundation/` lesson files. **No Obsidian reverse sync required.**
- No external media, speculative user testimonials, pricing, subscriptions, authentication, telemetry, database migrations, tracking or lab runtime.
- No deleted content, changed learning routes or modified learner progression. The About intro's original explanation was moved into the new component rather than removed.
- The 7-day challenge's private progress and reset behavior is untouched.
- The 13 Academy tracks and the existing catalog/offerings links are unchanged.
- The responsive design respects light/dark Starlight theme variables, keyboard focus and mobile stacking.

## CI and regression checklist

`node scripts/verify-public-landing-layout.mjs` checks:

- All **12** splash routes exist, preserve one H1 and SEO descriptions;
- expanded width CSS is scoped to no-sidebar public landing pages and emitted in built assets;
- About's two-column companion and free-resource links are present; original Mermaid flow survives;
- homepage has four featured Core modules, two featured Cloud/Security modules and six balanced free/career resource cards;
- original lesson reading widths are not overridden by this stylesheet.

The standard security workflow still runs exact lockfile installation, KaTeX compatibility, both strict `npm audit` checks, Astro build, 16-module/lesson integrity, Mermaid, catalogs, 7-Day Challenge and Portfolio Hub checks. The functional workflow also runs all `scripts/verify-*.mjs`.

## Manual desktop/mobile release acceptance (after merge/deployment)

1. **Homepage 1440–1920px:** the hero, two learner-path cards, challenge teaser, four Core IT cards, two Cloud/Security cards and six Resource Hub cards align without orphaned module cards or a large blank right half.
2. **About 1440–1920px:** the page title is concise, introduction sits beside the free starter panel, and the offerings table and learning diagram have usable width.
3. **Other ten splash pages:** open Courses, Test Engine, Services, Catalog, Labs, Lab Directory, Curriculum, Core IT, Seven-Day Challenge and Portfolio Hub; check tables, long diagrams and cards remain legible, including horizontal overflow when necessary.
4. **Documentation pages:** verify at least one original Foundation lesson and one portfolio project still show their normal narrow Starlight reading width and sidebars.
5. **Small screens and zoom:** test at 375px, 768px, 1024px and 200% browser zoom. Ensure no horizontal page scroll, clipped headings or overlapping elements.
6. **Appearance:** light/dark themes, keyboard focus states and navigation links remain consistent.
7. **Interactive regression:** test Foundation module filters/search, a 7-day quiz and optional progress saving after deployment; no interactive code was changed.

**Merge only if all GitHub checks pass; a successful build does not replace the final browser visual check.**
