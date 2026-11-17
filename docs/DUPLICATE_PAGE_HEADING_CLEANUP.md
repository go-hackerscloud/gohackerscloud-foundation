# Foundation duplicate heading cleanup — release checklist

## Problem observed

On `/about-gohackerscloud/catalog/`, the user screenshot showed two oversized page headings, one after the other. Starlight automatically displays the frontmatter `title` as the page-level heading, but the authored Markdown/MDX repeated a second H1 (`# ...`) inside the body. This also affected other GitHub-maintained public landing pages.

## What changed

The redundant Markdown body H1 was removed from **13** GitHub-owned entry pages, retaining their frontmatter title, introduction, sections, diagrams, links and URLs:

| Area | Pages |
|---|---|
| About GoHackersCloud | About, Complete Catalog, Courses & Bundles, Test Engine, Cybersecurity Services, Lab Directory (6) |
| Foundation overview | Core IT & DevOps, Curriculum, GHC Labs, 12-Week Study Plan (4) |
| Extended learning guides | AWS CLF-C02, Cloud Security Engineer roadmap, IT Interview Handbook (3) |

The catalog frontmatter title was shortened from the long multi-clause text to **GoHackersCloud Catalog — Courses, Labs & Services** to create a cleaner first screen without losing search descriptions or catalog details.

## Heading authoring convention

Starlight renders `title:` from frontmatter as **one accessible H1**. For GitHub-owned Foundation documents:

- Set a descriptive `title:` and `description:` in the frontmatter.
- Do **not** add a duplicate `# H1` inside the Markdown/MDX content.
- Start document sections with `## H2`, subsections with `### H3`.
- Make introductory taglines ordinary prose or emphasis rather than another H1.
- Do not “fix” the problem by hiding headings with CSS; that would leave duplicate heading semantics for screen readers and search engines.

## CI regression check

`node scripts/verify-single-page-heading.mjs` is run **after `npm run build`** in GitHub Actions. It:

1. Reads all GitHub-owned Foundation guides (About, Core IT, Curriculum, GHC Labs, Learning Hub, Study Plan and root introductions), enforcing no body H1 beyond frontmatter.
2. Confirms **13 public landing routes** each render exactly **one `<h1>`** in their built HTML.
3. Confirms each page retains its SEO description.
4. Checks the catalog title, course catalog link, first catalog section and Mermaid source remain present.

All prior build, SEO crawler, chapter, Academy link and diagram checks still run.

## Source ownership and deployment

No file in the Obsidian-owned original Foundation lesson tree (`src/content/docs/foundation/`) was modified. **Do not run Obsidian reverse sync** for this PR. The new regression check deliberately covers GitHub-authored content; a separate Obsidian-first editorial task can normalize historic heading levels inside original lesson notes, after agreeing on source changes.

All existing routes, curriculum content, lesson order, and booking/purchase destinations remain unchanged. No dependencies, authentication, labs runtime or business-service systems were modified.

## Verification after deployment

Open the following in both desktop and mobile views:

- https://foundation.gohackerscloud.com/about-gohackerscloud/catalog/
- https://foundation.gohackerscloud.com/about-gohackerscloud/
- https://foundation.gohackerscloud.com/about-gohackerscloud/courses/
- https://foundation.gohackerscloud.com/about-gohackerscloud/test-engine/
- https://foundation.gohackerscloud.com/about-gohackerscloud/lab-directory/
- https://foundation.gohackerscloud.com/ghc-labs/
- https://foundation.gohackerscloud.com/core-it-devops/
- https://foundation.gohackerscloud.com/learning-hub/aws-clf-c02/

Each should have a **single large page title**, then intro text and proper smaller section headings. Confirm that diagrams, tables, in-page anchors, course links and the sidebar still work.

Production updates only after review, merge and Hostinger deployment.
