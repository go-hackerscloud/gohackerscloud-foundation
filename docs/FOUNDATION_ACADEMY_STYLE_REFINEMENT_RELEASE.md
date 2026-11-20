# GoHackersCloud Foundation — Academy-style layout refinement

## Reason for follow-up

Desktop screenshots taken after merged PR #19 showed that enlarging every splash page to **88rem** did not create a better reading experience. Several sections remained text-heavy, leaving too much blank space to the right of their paragraph columns. The user asked to use a visual approach similar to `academy.gohackerscloud.com`: a balanced, card-led layout with relevant actions.

## Direct comparison with the current Academy code

The Academy's `src/styles/academy.css` uses `body:has(.ghc-hero) { --sl-content-width: 78rem; }` for its homepage, while its `index.mdx` primarily assembles interactive components and concise next-step sections. It does not globally widen every Starlight page. This update follows that architectural pattern for Foundation.

## What changes

**Shared Foundation landing style**

- Replace PR #19's global `88rem` `html:not([data-has-sidebar]) .content-panel .sl-container` selector with Academy-like **`--sl-content-width: 78rem` on the Foundation homepage and About page only**, via `body:has(.foundation-hero)` and `body:has(.ghc-about-lead)`.
- All other 10 splash routes return to Starlight's normal default content measure; original technical Foundation lessons remain unchanged.
- Hero and About prose is capped at approximately 70 characters per line; tables can span their appropriate parent content width.
- Both highlighted pages use mobile-responsive card components rather than enlarging unstructured paragraphs.

**Homepage — `src/components/FoundationHomeCards.astro`**

1. Replace the isolated three-row "Learn by doing" table with **3 linked practice cards**: Computer Hardware, Networking Basics and Security Mindset. Each explains its safe exercise, evidence outcome and direct existing lesson URL.
2. Replace the text-only "Build a stronger foundation" paragraph with **4 study pathway cards**: Core IT & DevOps, 12-Week Study Plan, Student Path and Professional Path.
3. Replace the text-only portfolio pitch with a **featured free Career & Portfolio Hub card** and **two project cards** (System Architecture and Cloud IAM). This highlights six guided projects and seven downloadable Markdown worksheets without claiming verified experience.
4. Preserve the existing Academy-style hero, student/professional audience cards, 7-Day Challenge teaser, balanced 4+2 featured modules from PR #19, six resource cards, offering cards, catalog and final navigation.

**About — `src/components/FoundationAboutCards.astro`**

1. Keep PR #19's concise page title and valuable two-column About introduction with a free learning starter panel.
2. Replace the text-only five-point "Learn, practise and explain" list with **5 balanced cards**, each with a relevant route: Learn (free), Prepare, Assess, Apply (authorized/optional Academy Labs) and Communicate (free portfolio).
3. Replace the seven-item plain website list with **6 official platform cards** (main platform, free Foundation, current courses, offers, Academy/Labs information and professional services), plus a direct Academy learning link with a login caveat.
4. Keep the offering comparison table, entire ecosystem Mermaid diagram, six-audience table and all resource/eligibility disclaimers.

## What does not change

- All `src/content/docs/foundation/` Obsidian-owned lessons and their canonical links. **No Obsidian reverse sync needed.**
- Starlight sidebar, original teaching and career guides, 16 modules, current curriculum, 90 named Lab lessons directory, 13 Academy tracks, 7-Day Challenge with its optional browser-only progress, six portfolio projects and seven Markdown downloads.
- No authentication, pricing, subscriptions, service portal, runtime, API, analytics, student data collection or new dependencies.

## QA

`scripts/verify-public-landing-layout.mjs` has been updated to verify:

- All **12** Starlight splash routes, one H1 and SEO descriptions.
- Exact Academy-like **78rem scoped** styles and removal of the global 88rem rule.
- Homepage **3 practical cards + 4 study cards + 1 featured portfolio card + 2 quick project cards**, with real/free destinations.
- About **5 learning-stage cards + 6 official destination cards**, preserving its source terms and Mermaid diagram.
- Existing 4+2 featured module grid, six resource cards, and Challenge/Portfolio links.
- Desktop/tablet/mobile CSS rules and absence of new learner data submissions.

The full CI workflows still include full and production npm audits, patched KaTeX smoke tests, Astro build, Foundation lesson routes, all Mermaid and promotional-catalog checks, seven-day challenge UX and portfolio downloads.

## Manual acceptance before promoting

Review screenshot-style desktop widths **1440–1920px** for:
- A centered hero/intro and navigational card grid, without a long empty right-side column.
- Consistent card edges and logical reading order on home and About.
- No text truncation in cards or headings.
- Light/dark theme legibility and keyboard-focus visibility.

Review **375px, 768px, 1024px and 200% zoom**:
- Home study and evidence cards stack appropriately.
- About 5-step and site directory cards remain readable and accessible.
- No horizontal overflow, collapsed button labels or overlapping tables.
- Original lesson pages keep a narrow reading column.

Check the 7-day quiz, module filter and file-download functions after deployment. Do not treat CI as a substitute for manual visual confirmation.
