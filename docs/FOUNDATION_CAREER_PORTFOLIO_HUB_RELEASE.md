# Foundation Career & Portfolio Hub — Release and Curriculum Notes

## Objective

Follow the successful learner-first Foundation homepage and seven-day challenge with **six free, practical project pathways** that help students and working professionals show their technical reasoning responsibly.

The Career & Portfolio Hub is a **static, non-commercial learning resource**. It does not issue or verify qualifications, accept uploads, collect personal information, authenticate learners or launch paid Academy labs.

## Pages and project outputs

| Public route | Guided evidence | Download |
|---|---|---|
| `/portfolio/` | Free overview, audience paths and sample reporting standards | Seven Markdown files |
| `/portfolio/projects/system-architecture/` | Component inventory and labeled architecture | `system-architecture-worksheet.md` |
| `/portfolio/projects/network-troubleshooting/` | DNS/TLS/HTTP diagnostic handover | `network-troubleshooting-report.md` |
| `/portfolio/projects/cloud-iam-review/` | Resource-scoped IAM policy reasoning | `cloud-iam-review.md` |
| `/portfolio/projects/api-authorization/` | Synthetic actor/object test matrix | `api-authorization-test-plan.md` |
| `/portfolio/projects/soc-alert-triage/` | Synthetic security-event analysis | `soc-alert-triage-report.md` |
| `/portfolio/projects/git-devsecops-review/` | Secure code-change and rollback review | `git-devsecops-change-review.md` |

The seventh downloadable worksheet is **`portfolio-readme.md`**, for documenting learner goals, project scope, provenance, limitations and publish-safe evidence.

All downloadable Markdown files live under `public/downloads/portfolio/`. Astro copies these unchanged to `dist/downloads/portfolio/`; learners can open them in Obsidian, VS Code or other local editors. No form submissions or storage endpoint is introduced.

## Learning and publishing integrity

1. **Source-of-truth:** All project pages live in `src/content/docs/portfolio/` and are **GitHub-maintained**. No `src/content/docs/foundation/` source lesson is changed. Obsidian reverse sync is **not required**.
2. **No unauthorized activity:** Scenarios are fictional or refer to systems learners own or may explicitly test. Application/API projects focus on authorization design and expected test cases rather than live scanning.
3. **No invented evidence:** Case studies distinguish observations, expectations and hypotheses. Worksheets include a field for unexecuted tests and information classification.
4. **Career integrity:** Self-completed worksheets do not count as client work, a certification, official assessed competence, employer history or permission to describe confidential systems publicly.
5. **Access:** Free lessons and Markdown worksheets remain separate from courses, test products and Academy GHC Labs subscriptions.
6. **Privacy:** No account, client-side storage or tracking was added to the portfolio hub. Users keep worksheets locally and are responsible for checking privacy before publishing completed work.
7. **Accessibility:** Page titles are supplied by Starlight frontmatter; there are no redundant body H1s. Each guided project has an original Mermaid architecture diagram, headings, plain Markdown review rubrics and descriptive links.

## Navigation and conversions

- First sidebar group **Explore GoHackersCloud** includes the Career & Portfolio Hub after the seven-day challenge.
- A new **Portfolio Projects** sidebar group lists six projects, collapsed by default.
- Homepage describes the hub after free learning examples and **before** commercial product cards.
- `FoundationResourceHub` includes a free portfolio card.
- Start-to-portfolio links appear in the Student and Professional paths and in the 7-day challenge conclusion.
- Optional GHC Labs links are explanatory, not required for the free projects.

## CI verification

The standard Foundation security workflow keeps both original high-severity dependency audits and the patched KaTeX verification. It then builds the entire Astro site and runs previous curriculum, Mermaid, catalog, heading and seven-day challenge validations.

New `scripts/verify-career-portfolio-hub.mjs` asserts:

- 7 public routes rendered with one H1 and 7 compiled Mermaid diagrams;
- six substantive project pages with a clear methodology, deliverable and self-review rubric;
- seven editable Markdown templates present both in source and generated `dist` assets;
- all links to existing Foundation lessons, career paths, Labs and projects resolve;
- homepage, sidebar, learner pathways and challenge link to the hub in the intended free-first order;
- no data capture logic was added to the static hub.

## Manual acceptance checklist after deployment

- [ ] Visit `https://foundation.gohackerscloud.com/portfolio/` signed out and confirm the page loads without login or payment.
- [ ] Open all six project pages on desktop and mobile, verifying text, diagrams and the self-review rubrics.
- [ ] Click each **Download .md** link and confirm the file downloads or opens as valid Markdown depending on browser behavior.
- [ ] Verify worksheet content is editable in Obsidian/VS Code and contains no actual credentials, personal details or unapproved client data.
- [ ] Check sidebar collapse, Student/Professional paths, homepage link and 7-day challenge link.
- [ ] Test light/dark themes, keyboard navigation, and external navigation back to Academy without confusing access rights.
- [ ] Verify security audit and all check jobs are green before merging.

## Future enhancements outside this PR

Potential subsequent releases: printable PDF worksheet bundle, optional learner-owned portfolio ZIP export, instructor-reviewed project feedback with explicit consent, and a college cohort guide. These require separate accessibility/privacy and product reviews. Do not create unverified student completion counts or pseudo-certification badges.
