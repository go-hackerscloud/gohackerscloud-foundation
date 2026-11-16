# Foundation Expanded Learning Hub — Maintenance Guide

## Scope

The original `src/content/docs/roadmaps/`, `certifications/` and `resources/` directories contain short Obsidian-synced reference pages. The Foundation PowerShell publisher currently removes and replaces these directories on every run. **Do not treat the short files as durable locations for extensive GitHub-side edits.**

The new long-form editions live under:

- `src/content/docs/learning-hub/cloud-security-roadmap/`: Cloud Security Engineer career roadmap (index + 14 chapters)
- `src/content/docs/learning-hub/aws-clf-c02/`: AWS Certified Cloud Practitioner guide (index + 14 chapters and original practice)
- `src/content/docs/learning-hub/it-interview/`: Technical interview handbook (index + 14 chapters and sample answers)
- `src/content/docs/ghc-labs/`: Academy GHC Labs overview, demo setup and four supporting pages

These routes are **not removed by `publish-foundation.ps1`**. The site sidebar and homepage link to these new guides, preserving the original reference URLs for existing external links.

## Editorial ownership

The expanded guides are currently **GitHub-maintained Foundation content**, separate from the four Obsidian directories copied by the existing publisher. To work in Obsidian long-term, add a source folder and a narrowly scoped publishing step later, after deciding which version is authoritative. Never introduce a sync that overwrites the new guides with the old summaries.

Use reviewable pull requests for editorial changes; check official sources when vendor names, certification exams or service eligibility change.

## Quality standards

- Every chapter includes a realistic scenario, worked concepts, safe practice, questions with model reasoning and a tangible output.
- Keep links to previous/next chapters and the guide index.
- No unverified guarantee of job placement, passing an exam or a specific lab being available.
- Avoid current subscription prices in static content; users should see live checkout terms.
- AWS CLF-C02 domain weights are based on the official AWS guide reviewed in Nov 2026. Check https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/ before revising exam prep.
- The 13 track labels in `src/data/ghc-labs-tracks.mjs` should be reviewed whenever Academy changes `src/data/tracks.mjs`.

## Adding the official demo

Edit `src/data/ghc-labs-demo.mjs` and set `demoVideoId` to a public or unlisted YouTube video's **11-character ID**. Until then the page intentionally shows a demo-video placeholder, not a broken iframe. The demo should not display real student data or credentials.

## Release checks

CI runs `npm ci`, `npm audit`, `npm run build`, existing Foundation route/sitemap integrity tests and `node scripts/verify-expanded-guides.mjs`. Ensure the new guides and GHC Labs links resolve before merging; then review mobile and desktop rendering after deploy.

## Next editorial iteration

If desired, extend each guide with additional worked case studies, larger self-assessment banks, printable exercises, original architecture diagrams and instructor demonstration transcripts. This first edition is **15 web pages per resource** (one index and fourteen substantial chapters), not a claim of exactly fifty printed pages. Webpage length is fluid.
