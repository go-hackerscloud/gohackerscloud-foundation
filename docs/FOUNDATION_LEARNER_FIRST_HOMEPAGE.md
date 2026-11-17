# PR #13 — Learner-first GoHackersCloud Foundation Homepage

## Goal

Make **free Foundation learning** the primary message for first-time students, career changers and working professionals, while preserving the complete GoHackersCloud offering catalog and separate GHC Labs conversion path.

The original homepage placed six product/service offering cards immediately under the hero. This release moves these cards **after** the real free learning paths, featured module explorer, safe practice examples and relevant free resources.

## Public-facing changes

1. **Hero:** “Learn IT, Cloud, Cybersecurity & AI. Free, at your own pace.” Explicitly explains 16 free modules, independent exercises and the absence of a paid Foundation subscription. Primary action goes to `/start-here/`, secondary action jumps to `/#choose-your-path`, with a direct sample hardware lesson link.
2. **New audience selection component:** two accessible, responsive cards for students/beginners and working professionals, with an achievable learning sequence and a clear next action.
3. **Free content priority:** the six featured module cards appear **before** the broader GoHackersCloud product cards.
4. **Evidence-based examples:** show how a beginner can create a system diagram, network flow or asset–risk–control worksheet without signing up.
5. **Existing offerings preserved:** courses, exam engine, Academy Labs, cybersecurity services and complete catalog remain on the homepage, but below the main free-learning experience.
6. **New detailed entry routes:** `/paths/students/` and `/paths/professionals/` contain real Foundation links, safe workshop exercises, expected evidence and original Mermaid diagrams.
7. **Navigation:** both learner pathways are listed just after Start Here; Start Here also links to both.

## Content and privacy guardrails

- Foundation reading and suggested independent exercises remain free; no login, paid subscription or sandbox provisioning is added.
- GHC Labs, courses and certification tests remain separately scoped with their own terms.
- New exercises use hypothetical systems and synthetic data, without suggesting unauthorized tests.
- No unverified completion, certificate, employment or institutional partnership claims are added.
- No tracking cookies, user identifiers, email capture or analytics integrations are added in this release. Adding learner analytics should be a separate privacy-reviewed task.

## Single source of truth

This PR only updates GitHub-owned Foundation homepage components, routes and CI. The 205 original Obsidian-owned Foundation lessons are unchanged. **Do not run the reverse-sync tool for this release**; `publish-foundation.ps1` will not replace these new pages or components.

## QA before merge

GitHub CI runs all existing checks: npm audits, Astro build, SEO discovery, lesson directory, curriculum integrity, existing Mermaid diagrams, Academy catalog, page headings and `scripts/verify-learner-first-homepage.mjs`.

The new script verifies:
- 16 module metadata records remain;
- free learning hero links and no-subscription copy;
- correct source and built-homepage order (hero → audience paths → free modules → resources → offerings);
- two detailed audience pages with one H1, SEO metadata and rendered Mermaid diagrams;
- safe internal links and current existing module/Academy URLs;
- catalog and product discovery remain available;
- no duplicate page headings.

## After deployment: verify the experience

1. Visit https://foundation.gohackerscloud.com/ in a signed-out browser and verify **Start free learning** opens `/start-here/`.
2. Click **Choose your path**, and confirm the two cards are immediately below the hero.
3. Open the new [Student](/paths/students/) and [Professional](/paths/professionals/) routes and check that diagrams render on phone/desktop and in both themes.
4. Confirm featured Foundation modules and self-study examples appear above the promotional catalog cards.
5. Confirm the existing offers catalog, GHC Labs overview, courses and services destinations still work.
6. Confirm there is no unexpected sign-in redirect when opening a public Foundation lesson.
7. Refresh the page with cache bypass if Hostinger still shows older content.

## Optional measurement plan (not implemented yet)

Baseline the following events only after privacy and consent review:

| Funnel stage | Event idea |
|---|---|
| Visit | Anonymous landing-page visit |
| Discover | Click Start Free Learning or Choose Your Path |
| Engage | Visit first free lesson from an entry path |
| Learn | Open a subsequent Foundation module |
| Consider | Click to GHC Labs or separate course catalog |

Do not infer course completion, seven-day retention, conversion rates or student counts until the tracking and definitions are verified. Consider a later, opt-in progress feature before collecting personal learning histories.

## Next planned milestone

The **7-Day Foundation Starter Challenge**, optional browser-based progress and short knowledge checks belong to a separate follow-up PR, not this homepage/navigation change.
